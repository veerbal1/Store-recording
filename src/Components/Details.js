import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            title,
            img,
            info,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1 className="display-3">{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-captilize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* Product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-captilize">
                  <h1 className="display-4">Model: {title}</h1>
                  <h4 className="text-uppercase text-muted mt-3 mb-2">
                    Manufactured By: {company}
                  </h4>
                  <h4 className="lead mt-1">
                    Price:<strong>${price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-light h4 mt-3 mb-0">
                    info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <button className="btn mx-1 btn-outline-primary text-capitalize">
                        Back to products
                      </button>
                    </Link>
                    <button
                      className="btn mx-1 btn-warning text-capitalize"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "added in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
              {/* Product info end */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
