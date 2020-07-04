import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./style.css";
import Home from "./components/homePage/home.js"
const mdbreact = require('mdbreact'); const { Button, Collapse } = mdbreact;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//     };
//   }


//   render() {
//     return (
//       <Home />
//       );
//   }
// }

const app = (<BrowserRouter><Home /></BrowserRouter>)

ReactDOM.render(app, document.getElementById("app"));
