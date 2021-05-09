import React,{ useState } from "react";
import { Fade } from 'react-awesome-reveal';
import Modal from 'react-modal';


export default class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        product: null,
      };
    }
    openModal = (product) => {
      this.setState({ product });
    };
    closeModal = () => {
      this.setState({ product: null });
    };
    render() {
      const { product } = this.state;

      console.log('props in product :>> ',this.props );
      return (
        <div>
          <Fade bottom cascade>
            <ul className="products">
              {this.props.products.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.title}</p>
                    </a>
                    <div className="product-price">
                      <div>{product.price}</div>
                      <button
                        onClick={(e) => this.props.addToCartHandler(e, product)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
          {product && (
            <Modal isOpen={true} onRequestClose={this.closeModal}>
              <Fade>
                <button className="close-modal" onClick={this.closeModal}>
                  x
                </button>
                <div className="product-details">
                  <img src={product.image} alt={product.title}></img>
                  <div className="product-details-description">
                    <p>
                      <strong>{product.title}</strong>
                    </p>
                    <p>{product.description}</p>
                    <p>
                      Avaiable Sizes:{" "}
                      {product.availableSizes.map((x) => (
                        <span>
                          {" "}
                          <button className="button">{x}</button>
                        </span>
                      ))}
                    </p>
                    <div className="product-price">
                      <div>{product.price}</div>
                      <button
                        className="button primary"
                        onClick={(e) => {
                          this.props.addToCartHandler(e,product);
                          this.closeModal();
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          )}
        </div>
      );
    }
  }


/*
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
*/
/* 
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
}; */
