import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb" className="py-3 border-bottom border-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/men">Men</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/clothing">Clothing</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/tops">Tops</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/adidas">Adidas</Link>
            </li>
            <li
              className="breadcrumb-item active text-black"
              aria-current="page"
            >
              Adidas black t-shirt
            </li>
          </ol>
        </div>
      </nav>
    );
  }
}

export default Breadcrumb;
