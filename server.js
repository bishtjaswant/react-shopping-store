const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
// all routes


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/react-products',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(function (db) {
        console.log('mongo connected');
    })
    .catch(function (err) {
        if (err) {
            console.log('connectiion failed due to ' + err);
        }
    });
//product model
const productModel = mongoose.model(
    "Products",
    new mongoose.Schema({
        id: { type: String },
        title: { type: String },
        description: { type: String },
        price: { type: Number },
        image: { type: String },
        availableSizes: { type: [String] },
    }, { timestamps: true })
);

// instanciates of express
const app = express();

// middleware
app.use(helmet())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// routes
app.get('/api/products/', async (req, res, next) => {
    const products = await productModel.find({});
    return res.status(200).json({ products });
});


app.post('/api/products/', async (req, res, next) => {
    const products =  new productModel(req.body);
    const saved = await products.save()
    return res.status(200).json({ status:true,msg:"Product saved" });
});

app.delete('/api/products/:id', async (req, res, next) => {
    const product =await productModel.findOneAndRemove({_id:req.params.id});
    if ( product) {
        return res.status(200).json({ status:true,msg:"Product removed" });

    }
});

// catch error and forward to error handler
app.use((req, res, next) => {
    const error = new Error('Page not found Or currently available');
    error.status = 404;
    next(error);
});

// handle the error
app.use((err, req, res, next) => {
    // error response to client
    // check dev or prod
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500;

    res.status(status).json({
        error: {
            message: error.message
        }
    });
    // error to developer
    console.error(err);
});


// server liistening........
const port = app.get('port') || 5000;
app.listen(port, () => { console.log(`server listening on ${port}`); });