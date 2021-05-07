import { useState } from "react";
import { Fade } from 'react-awesome-reveal';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // width: '80%',
        // height: '80%',
        display: "flex",
        'justifyContent': 'space-around',
        'alignItems': 'center',
    }
};

//   Modal.setAppElement('#yourAppElement')


export default function Product(props) {

    const { products: { products }, size, sort, addToCartHandler } = props;


    const [modalIsOpen, setIsOpen] = useState(false);

    let [modalData, setModalData] = useState({ product: null });


    function openModal(product) {
        setIsOpen(true);
        setModalData({ product });;


    }

    function afterOpenModal(fgh) { }

    function closeModal() {

        setIsOpen(false);
        setModalData({ product: null });
    }


    return (<>

        <div >
       

        {
            modalData.product 
            && 
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Fade>
                    <div className="modal-wrapper">
                        <div className="modal-img">
                            <img src={modalData.product.image} alt={modalData.product.title} />
                        </div>
                        <div className="modal-desc">

                            <h1>  {modalData.product.title}  </h1>
                            <p>   {modalData.product.description}   </p>
                            <h5>      {modalData.product.price}        </h5>
                            <button>buy</button>

                        </div>
                    </div>

                </Fade>
            </Modal>

        }





            <Fade direction='bottom-right' triggerOnce cascade >
                <ul className="products">
                    {
                        products.map((product, index) => (

                            <li key={index}>

                                <div className="product">
                                    <div onClick={() => openModal(product)} >
                                        <img src={product.image} alt={product.title} />
                                    </div>

                                    <p className='title'> {product.title} </p>

                                    <div className="product-price">
                                        <div>
                                            RS. {product.price}
                                        </div>
                                        <button onClick={(e) => addToCartHandler(e, product)} className="btn">add to cart</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Fade>

        </div>

    </>)
};
