import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyBookshop from "./components/MyBookshop";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
function App() {
  return (
    <>
      <MyNav />
      <div className="container">
        <MyBookshop />
        <AllTheBooks />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
