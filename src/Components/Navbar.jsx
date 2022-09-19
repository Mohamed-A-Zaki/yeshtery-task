import React, { Component } from "react";
import logo from "../images/Logo.svg";

import { TbAlignLeft } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row align-items-center w-100 text-center justify-content-between">
            <div className="col-md-2">
              <Link className="navbar-brand" to="/">
                <TbAlignLeft className="fs-2 text-black me-2" />
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="col-md-8 col-xl-6">
              <div className="shop-now">
                <IoIosArrowBack />
                <span className="mx-3">
                  <span>
                    Valentine’s Day Offers! Buy Two Get One Free Shop Now
                  </span>
                  <Link to="/shop-now" className="ms-2 link-dark fw-bold">
                    Shop now
                  </Link>
                </span>
                <IoIosArrowForward />
              </div>
            </div>

            <div className="col-xl-4">
              <ul className="navbar-nav mb-2 mb-lg-0 flex-row gap-4 justify-content-md-center">
                <li className="nav-item">
                  <Link
                    className="nav-link text-black"
                    aria-current="page"
                    to="/contact"
                  >
                    <FiPhoneCall className="me-2" />
                    <span className="fw-semibold">Contact Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/track-order">
                    <AiOutlineShoppingCart className="me-2" />
                    <span className="fw-semibold">Track Order</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/find-store">
                    <IoLocationOutline className="me-2" />
                    <span className="fw-semibold">Find A Store</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
