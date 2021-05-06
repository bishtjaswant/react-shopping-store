
import { useState } from 'react';


export default function CheckOut(props) {
    const {createOrder} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


    const orderSubmit = (e) => {
        e.preventDefault();
        let order={name,email,address};
          createOrder(order);




        //   empty the form data affter subbmiting the form
          setName("");
          setEmail("");
          setAddress("");

    }


    return <>
        <div className='checkout-wrapper'>
            <form method="post" onSubmit={orderSubmit}>
                <div className="group">
                    <label htmlFor="">Name</label>
                    <input required type="text" value={name} onChange={ (e)=>  setName(e.target.value) } name="name" placeholder="name" id="" />
                </div>

                <div className="group">
                    <label htmlFor="">Email</label>
                    <input required type="email" value={email} onChange={ (e)=>  setEmail(e.target.value) } name="email" placeholder="Email address" id="" />
                </div>
                <div className="group">
                    <label htmlFor="">Address</label>
                    <input required type='text' value={address} onChange={ (e)=> setAddress(e.target.value) } name="address" placeholder="Address" id="" />
                </div>

                <button type='submit'  >checkout</button>
            </form>
        </div>
    </>
};
