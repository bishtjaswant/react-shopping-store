import { useState } from "react";
import Filter from "./components/filters/filter";
import Product from './components/products/product';
import data from './server-data.json';
// add new feature
export default function App() {

    const [products, setProducts] = useState({
        products: data.products,
        size: "",
        sort: ""
    });

    const filterProductHandler = (e) => {
        // console.log(e.target.value);
        if (e.target.value == '') {
            setProducts({
                size: e.target.value,
                products: data.products,
            });
        } else {
            setProducts({
                size: e.target.value,
                products: data.products.filter((product) => product.availableSizes.includes(e.target.value))
            })
        }
    };
    const sortProductHandler = (e) => {
        const sort = e.target.value;
        setProducts({
            sort: sort,

            products: products.products.slice()
                .sort((a, b)=> sort === 'lowest' ? a.price > b.price ? 1 : -1
                        :
                        sort === 'highest' ? a.price < b.price ? 1 : -1
                            : a._id < a._id ? 1 : -1
               )
        })
    };

    return <>
        <div className="container">
            <header>
                <a href="/">react shopoing store</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter
                            count={products.products.length}
                            size={products.size}
                            sort={products.sort}
                            sortProductHandler={sortProductHandler}
                            filterProductHandler={filterProductHandler}
                        />
                        <Product products={products} />
                    </div>
                    <div className="aside">
                        cart
                    </div>
                </div>
            </main>
            <footer>
                <p>all right reserved</p>
            </footer>
        </div>
    </>
};
