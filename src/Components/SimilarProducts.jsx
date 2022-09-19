import React, { Component } from "react";
import Product from "./Product";

class SimilarProducts extends Component {
  render() {
    return (
      <div className="similar-products py-5">
        <div className="container">
          <h3>Similar Products</h3>
          <p className="text-muted">You may like these products also</p>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {this.props.data["similar-products"].map((product) => {
              return (
                <div className="col" key={product.id}>
                  <Product {...product}></Product>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SimilarProducts;
