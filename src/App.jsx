import React, { Component } from "react";
import "./App.scss";

import Breadcrumb from "./Components/Breadcrumb";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import SimilarProducts from "./Components/SimilarProducts";

import { ToastContainer, toast } from "react-toastify";

import data from "./Services/data.json";

class App extends Component {
  state = { data: data };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("data"))) {
      this.setState({
        data: JSON.parse(localStorage.getItem("data")),
      });
    }

    localStorage.setItem("data", JSON.stringify(this.state.data));
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  }

  handle_add_to_cart = (id) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    let product = data.find((product) => product.id === id);
    product.is_in_cart = true;
    this.setState({ data });
    toast.success("Product added successfully!");
  };

  handle_remove_from_cart = (id) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    let product = data.find((product) => product.id === id);
    product.is_in_cart = false;
    this.setState({ data });
    toast.success("Product deleted successfully!");
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Searchbar data={this.state.data}></Searchbar>
        <Categories></Categories>
        <Breadcrumb></Breadcrumb>

        <ProductDetails
          data={this.state.data}
          handle_add_to_cart={this.handle_add_to_cart}
        ></ProductDetails>

        <SimilarProducts data={this.state.data}></SimilarProducts>
        <Footer></Footer>

        <Cart
          data={this.state.data}
          handle_remove_from_cart={this.handle_remove_from_cart}
        ></Cart>

        <ToastContainer />
      </div>
    );
  }
}

export default App;
