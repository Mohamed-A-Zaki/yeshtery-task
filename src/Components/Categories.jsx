import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <div className="categories bg-dark">
        <div className="container py-3">
          <div className="row row-cols-2 row-cols-md-4">
            <div className="col-lg">
              <a href="#" className="active text-decoration-none link-light">
                Men
              </a>
            </div>
            <div className="col-lg">
              <a href="#" className="text-decoration-none link-light">
                Women
              </a>
            </div>
            <div className="col-lg">
              <a href="#" className="text-decoration-none link-light">
                Unisex
              </a>
            </div>
            <div className="col-lg">
              <a href="#" className="text-decoration-none link-light">
                Kids
              </a>
            </div>
            <div className="col-lg">
              <a href="#" className="text-decoration-none link-light">
                Best Sellers
              </a>
            </div>
            <div className="col-lg">
              <a href="#" className="text-decoration-none link-light">
                New Arival
              </a>
            </div>
            <div className="col-lg">
              <a href="#" className="text-decoration-none link-light">
                Offers
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
