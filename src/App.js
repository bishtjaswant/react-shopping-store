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
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems")) : [],
    });

    const addToCartHandler = (e, product) => {
        const cartItems = [...products.cartItems];
        console.log('carthandler :>> ', product);
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

        setProducts({ ...products, cartItems });


        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    };

/*
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
    */


    const removeFromCart = (e, _id) => {
        const cartItems = [...products.cartItems];
        setProducts({ ...products, cartItems: cartItems.filter(item => item._id != _id) })
        localStorage.removeItem("cartItems");

    }

    const createOrder = (order) => {
        console.log('we receviced order by ', order);
    }

    const clearAll = (e) => {
        //   it will clear out all the cart item; 

        if (window. confirm('Do you want to remove  all items from cart')) {

            localStorage.removeItem("cartItems");

            setProducts(
                {
                    ...products,
                    size: "",
                    sort: "",
                    cartItems: [],
                }
            );
            return true;
        } 
    }

/* 
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
    }; */

    return <>
        <div className="grid-container">
            <header>
                <a href="/">react shopoing store</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter
                            // count={products.products.length || 1}
                            // size={products.size}
                            // sort={products.sort}
                            // sortProductHandler={sortProductHandler}
                            // filterProductHandler={filterProductHandler}
                        />
                        <Product addToCartHandler={addToCartHandler} />
                    </div>
                    <div className="sidebar">
                        <Cart clearAll={clearAll} createOrder={createOrder} removeFromCart={removeFromCart} cartItems={products.cartItems} />
                    </div>
                </div>
            </main>
            <footer>
                <p>all right reserved</p>
            </footer>
        </div>
    </>
};
