import React, { Component } from "react";
import logo from "../images/Logo.svg";

import { TbAlignLeft } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row align-items-center w-100 text-center justify-content-between">
            <div className="col-md-2">
              <a className="navbar-brand" href="#">
                <TbAlignLeft className="fs-2 text-black me-2" />
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="col-md-8 col-xl-6">
              <div className="shop-now">
                <IoIosArrowBack />
                <span className="mx-3">
                  <span>
                    Valentine’s Day Offers! Buy Two Get One Free Shop Now
                  </span>
                  <a href="#" className="ms-2 link-dark fw-bold">
                    Shop now
                  </a>
                </span>
                <IoIosArrowForward />
              </div>
            </div>

            <div className="col-xl-4">
              <ul className="navbar-nav mb-2 mb-lg-0 flex-row gap-4 justify-content-md-center">
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="#"
                  >
                    <FiPhoneCall className="me-2" />
                    <span className="fw-semibold">Contact Us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#">
                    <AiOutlineShoppingCart className="me-2" />
                    <span className="fw-semibold">Track Order</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-black" href="#">
                    <IoLocationOutline className="me-2" />
                    <span className="fw-semibold">Find A Store</span>
                  </a>
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
