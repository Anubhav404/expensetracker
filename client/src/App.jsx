import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products/:category">
          <ProductList />
        </Route>

        <Route path="/products/:id">
          <Product />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/success">
          <Success />
        </Route>

        <Route path="/login">{user ? <Navigate to="/" /> : <Login />} </Route>

        <Route path="/register">
          {user ? <Navigate to="/" /> : <Register />}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
