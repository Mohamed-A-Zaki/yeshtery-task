import "./App.scss";
import Breadcrumb from "./Components/Breadcrumb";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Categories></Categories>
      <Breadcrumb></Breadcrumb>
      <Footer></Footer>
    </div>
  );
}

export default App;
