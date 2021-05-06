export default function CartProdutDetail(props) {
    
    const {removeFromCart,index, cartItems} = props;
    
    return <>
    <div className="product">
          <div className="product-img">
              <img src={cartItems.image} alt={cartItems.title} srcset=""/>
          </div>
          <div className="product-desc">
              <p> {cartItems.title} </p>
              <span>{index}x${cartItems.price} <button onClick={(e)=> removeFromCart(e, cartItems._id) } className="btn">Remove</button> </span>
          </div>
    </div>
    </>
};
