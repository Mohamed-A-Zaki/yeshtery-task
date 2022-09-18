import React, { Component } from "react";
import search from "../images/search.svg";

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

class Searchbar extends Component {
  render() {
    return (
      <div className="py-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center text-center">
            <div className="col">
              <div className="position-relative">
                <AiOutlineSearch className="position-absolute ms-3 fs-5 top-50 start-0 translate-middle-y" />
                <input
                  type="search"
                  className="form-control shadow-none rounded-pill ps-5"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="col">
              <img src={search} alt="search" />
            </div>

            <div className="col">
              <ul className="list-inline m-0">
                <li className="list-inline-item fw-bold me-4">
                  <a href="#" className="text-decoration-none link-dark">
                    <div className="position-relative d-inline-block">
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        10
                      </span>
                      <AiOutlineShoppingCart className="fs-4" />
                    </div>
                    <span className="ms-3">Cart</span>
                  </a>
                </li>

                <li className="list-inline-item fw-bold me-4">
                  <a href="#" className="text-decoration-none link-dark">
                    <AiOutlineHeart className="fs-4" />
                    <span className="ms-2">Wishlist</span>
                  </a>
                </li>

                <li className="list-inline-item fw-bold">
                  <a href="#" className="text-decoration-none link-dark">
                    <AiOutlineUser className="fs-4" />
                    <span className="ms-2">Login</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
