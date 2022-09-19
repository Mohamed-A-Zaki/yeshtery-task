import React, { Component } from "react";
import search from "../images/search.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

class MainProduct extends Component {
  render() {
    const {
      img,
      images,
      discription,
      gender,
      rate,
      rate_count,
      old_price,
      new_price,
      discount,
      size,
      color,
    } = this.props.data["main-product"];

    return (
      <div className="main-product pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="box">
                <div className="image">
                  <img src={img} alt="img" className="img-fluid w-100" />
                </div>
                <div className="gallary d-flex align-items-center justify-content-between gap-2 mt-3">
                  <IoIosArrowBack className="fs-2" />
                  <div className="images d-flex gap-2">
                    {images.map((img, index) => {
                      return (
                        <div key={index}>
                          <img src={img} alt="img" className="img-thumbnail" />
                        </div>
                      );
                    })}
                  </div>
                  <IoIosArrowForward className="fs-2" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box">
                <div className="image">
                  <img src={search} alt="img" />
                </div>

                <p className="fw-bold my-3">{discription}</p>

                <div className="gender fw-bold text-black-50">{gender}</div>

                <div className="rate d-flex align-items-center gap-5 my-3">
                  <div className="d-flex align-items-center gap-1">
                    <div className="star active"></div>
                    <div className="star active"></div>
                    <div className="star active"></div>
                    <div className="star active"></div>
                    <div className="star"></div>
                  </div>
                  <div>
                    <span className="fw-bold">{rate} of 5</span>
                  </div>
                  <div className="count fw-bold text-black-50">
                    {rate_count} Rates
                  </div>
                </div>

                <div className="price d-flex align-items-center gap-5 mb-3">
                  <div className="new_price fw-bold">
                    <span className="fs-4 me-1">{new_price}</span>
                    LE
                  </div>
                  <div className="old_price text-decoration-line-through text-black-50 fw-bold">
                    {old_price} LE
                  </div>
                  <div className="discount badge text-black px-3 ms-3">
                    {discount}% OFF
                  </div>
                </div>

                <hr />

                <div className="sizes">
                  <h5>Sizes</h5>

                  <div className="d-flex gap-3">
                    {size.map((s, i) => {
                      return (
                        <div
                          className={`size rounded-circle border ${
                            s === "Large" ? "bg-light" : null
                          } fw-semibold d-flex align-items-center justify-content-center`}
                          key={i}
                        >
                          {s}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <hr />

                <div className="colors">
                  <h5>Color</h5>

                  <div className="d-flex gap-3">
                    {color.map((c, i) => {
                      return <img src={c} key={i} alt="img" />;
                    })}
                  </div>
                </div>

                <hr />

                <div className="quantitiy">
                  <h5>Quantitiy</h5>

                  <button className="bg-light p-2 fw-bold rounded-pill w-50 border position-relative">
                    1
                    <span className="position-absolute top-50 start-0 translate-middle-y ms-2 d-flex align-items-center justify-content-center fs-3 fw-bold rounded-circle">
                      -
                    </span>
                    <span className="position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center justify-content-center fs-3 fw-bold rounded-circle">
                      +
                    </span>
                  </button>
                </div>

                <hr />

                <div className="buttons d-flex gap-5">
                  <button className="btn text-white fw-semibold rounded-pill flex-grow-1 py-2">
                    Add To Cart
                  </button>
                  <button className="btn text-black fw-semibold rounded-pill flex-grow-1 py-2">
                    Pickup From Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProduct;
