import React, { useState } from "react";
import { Fade } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { connect } from "react-redux";
import { fetchProductAction } from './../../redux/actions/producAction';

class Product extends React.Component {
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

  componentDidMount() {

    console.log('props in product CDM :>> ', this.props);

    this.props.fetchProductAction();
  }


  render() {
    const { product } = this.state;
    console.log('rendr', this.props);
    return (
      <div>
        <Fade bottom cascade>

          {
            !this.props.products ?
              (<div>Loading</div>)
              :
              (<ul className="products">
                {this.props.products.products.map((product) => (
                  <li key={product._id}>
                    <div className="product">
                      <a
                        href="#"
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
              ) 
          }

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
                        this.props.addToCartHandler(e, product);
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


export default connect((state) => ({ products: state.products.items }), { fetchProductAction })(Product);