import React, { Component } from 'react';
import CartProdutDetail from './CartProdutDetail';
import CheckOut from './CheckOut';
class Cart extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            checkOut:false
        };
    }
    
   
    render() {
        const {cartItems,createOrder ,clearAll, removeFromCart} = this.props;
       
       
        return (
            <>
            {
                cartItems.length==0
                ? 
                <div> There is no item in cart </div>
       
                :
                  <div>
                          <div  className='count'>
                         <div> {cartItems.length} Items </div>
                         <a onClick={()=>clearAll()} href="#">Clear all</a>
  
                          </div>
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
                                      <button onClick={()=>this.setState({checkOut:!this.state.checkOut})} type="button">proceed</button>
                                  </div>
                              </div>
                          </div>

                          {
                              this.state.checkOut &&  <CheckOut  createOrder={createOrder}/>
                          }
                          
            
                  </div> 


            }





            </>
        );
    }
}

export default Cart;