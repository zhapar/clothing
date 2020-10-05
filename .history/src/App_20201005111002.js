import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
