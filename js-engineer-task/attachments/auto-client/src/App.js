import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/notfound/NotFound";
import Purchase from "./components/Purchase";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";
import CarDetail from "./components/carDetail/CarDetail";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/purchase" component={Purchase} />
              <Route exact path="/" component={Home} />
              <Route exact path="/car-detail/:id" component={CarDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
