import React, { Component } from "react";
import "./App.scss";
import Breadcrumb from "./Components/Breadcrumb";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import MainProduct from "./Components/MainProduct";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import SimilarProducts from "./Components/SimilarProducts";

import data from "./Services/data.json";

class App extends Component {
  state = {
    data: data,
  };

  handle_add_to_cart = (id) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    let product = data.find((product) => product.id === id);
    product.is_in_cart = true;
    this.setState({ data });
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Searchbar data={this.state.data}></Searchbar>
        <Categories></Categories>
        <Breadcrumb></Breadcrumb>

        <MainProduct
          data={this.state.data}
          handle_add_to_cart={this.handle_add_to_cart}
        ></MainProduct>

        <SimilarProducts data={this.state.data}></SimilarProducts>
        <Footer></Footer>
        <Cart data={this.state.data}></Cart>
      </div>
    );
  }
}

export default App;
