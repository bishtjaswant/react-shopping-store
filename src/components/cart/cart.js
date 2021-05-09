import React, { Component } from 'react';
import CheckOut from './CheckOut';
import { Bounce, Fade } from 'react-awesome-reveal';


class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkOut: false
        };
    }


    render() {
        const { cartItems, createOrder, clearAll, removeFromCart } = this.props;


        return (
            <>
                {
                    cartItems.length == 0
                        ?
                        <div className='cart cart-header'> There is no item in cart </div>

                        :
                        <div>
                            <div className='count'>
                                <div className="cart cart-header">  {cartItems.length} Items In Your Cart </div>
                                <a onClick={() => clearAll()} href="#">Clear all</a>

                            </div>
                            {
                                 <div className="cart">
                                 <Fade left cascade>
                                   <ul className="cart-items">
                                     {cartItems.map((item) => (
                                       <li key={item._id}>
                                         <div>
                                           <img src={item.image} alt={item.title}></img>
                                         </div>
                                         <div>
                                           <div>{item.title}</div>
                                           <div className="right">
                                             {item.price} x {item.count}{" "}
                                             <button
                                               className="button"
                                               onClick={(e) => removeFromCart(e, item._id)}
                                             >
                                               Remove
                                             </button>
                                           </div>
                                         </div>
                                       </li>
                                     ))}
                                   </ul>
                                 </Fade>
                               </div>
                            }

                            <div className="cart-payment">
                                <div className="total">
                                    <div className="amt">
                                        Total:{
                                            cartItems.reduce((a, c) => (a + (c.price * c.count)), 0)
                                        }
                                    </div>
                                    <div className="proceed">
                                        <button className=' button primary' onClick={() => this.setState({ checkOut: !this.state.checkOut })} type="button">proceed</button>
                                    </div>
                                </div>
                            </div>


                            <div>
                                {
                                  this.state.checkOut && <CheckOut createOrder={createOrder} /> 
                                }
                            </div>
                
                        </div>


                }





            </>
        );
    }
}

export default Cart;