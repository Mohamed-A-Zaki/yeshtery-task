import "./App.scss";
import Breadcrumb from "./Components/Breadcrumb";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import MainProduct from "./Components/MainProduct";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import SimilarProducts from "./Components/SimilarProducts";

import data from "./Services/data.json";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Categories></Categories>
      <Breadcrumb></Breadcrumb>
      <MainProduct data={data}></MainProduct>
      <SimilarProducts data={data}></SimilarProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
