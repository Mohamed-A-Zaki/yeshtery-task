import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb" className="py-3 border-bottom border-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#">Men</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Clothing</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Tops</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Adidas</a>
            </li>
            <li className="breadcrumb-item active text-black" aria-current="page">
              Adidas black t-shirt
            </li>
          </ol>
        </div>
      </nav>
    );
  }
}

export default Breadcrumb;
