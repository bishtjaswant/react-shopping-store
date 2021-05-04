export default function Product(props) {
const { products:{products},size, sort } = props ;
console.log(props);
return (<>
    <div >
        <ul className="products">
            {
                products.map((product)=>(
                    <li key={product.id}>
                        <div className="product">
                            <a href="">
                                <img src={product.image} alt={product.title }/>
                            </a>            
                            
                            <p className='title'> {product.title} </p>

                            <div className="product-price">
                                <div>
                                    {product.price}
                                </div>
                                <button className="btn">add to cart</button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
    
    </>)
};
