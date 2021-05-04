import { useState } from "react";
import Product from './components/products/product';
import data from './server-data.json';
// add new feature
export default function App() {

    const [ products, setProducts] = useState({
        products:data.products,
        size:"",
        sort:""
    });
    return <>
    <div className="container">
        <header>
            <a href="/">react shopoing store</a>
        </header>
        <main>
            <div className="content">
                <div className="main">
                   <Product products={products}  />
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
