import "./App.css";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { FeedBack } from "./components/FeedBack/FeedBack";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <FeedBack />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
