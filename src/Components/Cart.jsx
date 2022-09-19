import React, { Component } from "react";

class Cart extends Component {
  render() {
    const data = this.props.data["main-product"];

    return (
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="cart_offcanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fw-bold fs-3 m-auto"
            id="offcanvasExampleLabel"
          >
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h5 className="fw-bold mb-4">Cart Summary</h5>

          {/* products */}

          <div className="products">
            {/* start product */}
            {data["is_in_cart"] ? (
              <div className="card mb-3 p-2">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={data.img} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body py-0">
                      <p className="fw-bold m-0">{data.discription}</p>

                      <div className="quantity my-2">
                        Quantitiy : {data.count}
                      </div>

                      <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="new_price fw-bold">
                          <span className="fs-4 me-1">
                            {data.count * data.new_price}
                          </span>
                          LE
                        </div>

                        <button className="remove btn rounded-pill px-5 fw-semibold">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="alert alert-info fw-bold text-center">
                Empty Cart
              </div>
            )}
            {/* end product */}

            <div className="total text-center fw-bold fs-3">
              Total: {data["is_in_cart"] ? `${data.count * data.new_price}` : 0}{" "}
              LE
            </div>

            <div className="buttons d-flex gap-4 flex-wrap my-3">
              <button className="btn text-white fw-semibold rounded-pill flex-grow-1 py-2">
                Review Cart
              </button>
              <button className="btn text-black fw-semibold rounded-pill flex-grow-1 py-2">
                Complete Chechout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
