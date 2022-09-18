import "./App.scss";
import Breadcrumb from "./Components/Breadcrumb";
import Categories from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Categories></Categories>
      <Breadcrumb></Breadcrumb>
    </div>
  );
}

export default App;
