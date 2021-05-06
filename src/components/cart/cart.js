import React, { Component } from 'react';
import CartProdutDetail from './CartProdutDetail';

class Cart extends Component {
   
   
    render() {
        const {cartItems, removeFromCart} = this.props;
        return (
            <>
            {
                cartItems.length==0
                ?
                <div> There is no item in cart </div>
                :
                  <div>
                          <div> {cartItems.length} Items </div>
                          {
                              cartItems.map((item, index)=>(
                             <CartProdutDetail index={index+1} removeFromCart={removeFromCart}  cartItems={item}/>

                              ))
                          }

                          <div className="cart-payment">
                              <div className="total">
                                  <div className="amt">
                                      Total:{
                                          cartItems.reduce((a,c)=> (  a + (c.price*c.count)  ) ,0)
                                      }
                                  </div>
                                  <div className="proceed">
                                      <button>proceed</button>
                                  </div>
                              </div>
                          </div>
            
                  </div> 


            }





            </>
        );
    }
}

export default Cart;