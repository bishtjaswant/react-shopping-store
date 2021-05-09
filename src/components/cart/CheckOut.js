
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

export default function CheckOut(props) {


    const { createOrder } = props;


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


    const orderSubmit = (e) => {
        e.preventDefault();
        let order = { name, email, address };
        createOrder(order);
                //   empty the form data affter subbmiting the form
        setName("");
        setEmail("");
        setAddress("");

    }


    return <>
        <Fade direction='top-left'>
        <div className="cart">
                    <form onSubmit={orderSubmit}>
                      <ul className="form-container">
                        <li>

                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                          ></input>
                        </li>  

                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                          ></input>
                        </li>

                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
        </Fade>
    </>
};
