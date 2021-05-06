import { useState } from "react";
import Filter from "./components/filters/filter";
import Product from './components/products/product';
import Cart from './components/cart/cart';
import data from './server-data.json';
// add new feature
export default function App() {

    const [products, setProducts] = useState({
        products: data.products,
        size: "",
        sort: "",
        cartItems: []
    });

    const addToCartHandler = (e, product) => {
        const cartItems = [...products.cartItems];
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item._id == product._id) {
                item.count++;
                alreadyInCart = true;
                alert(`product already added in cart `);
                return false;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 });
        }

        setProducts({ ...products, cartItems })

    };


    const filterProductHandler = (e) => {

        if (e.target.value == '') {
            setProducts({
                cartItems: [...products.cartItems],

                size: e.target.value,
                products: data.products,
            });
        } else {
            setProducts({
                cartItems: [...products.cartItems],

                size: e.target.value,
                products: data.products.filter((product) => product.availableSizes.includes(e.target.value))
            })
        }
    }


    const removeFromCart=  (e,_id)  => {
        const cartItems=[...products.cartItems];
        setProducts({...products , cartItems: cartItems.filter( item => item._id != _id )    })
       
    }


    const sortProductHandler = (e) => {
        const sort = e.target.value;
        setProducts({
            cartItems: [...products.cartItems],
            sort: sort,
            products: products.products.slice()
                .sort((a, b) => sort === 'lowest' ? a.price > b.price ? 1 : -1
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
                            count={products.products.length || 1}
                            size={products.size}
                            sort={products.sort}
                            sortProductHandler={sortProductHandler}
                            filterProductHandler={filterProductHandler}
                        />
                        <Product products={products} addToCartHandler={addToCartHandler} />
                    </div>
                    <div className="aside">
                        <Cart removeFromCart={removeFromCart} cartItems={products.cartItems} />
                    </div>
                </div>
            </main>
            <footer>
                <p>all right reserved</p>
            </footer>
        </div>
    </>
};
