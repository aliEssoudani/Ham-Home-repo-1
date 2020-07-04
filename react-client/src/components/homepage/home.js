import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./login.jsx";
import SignUp from "./signup.jsx";
import Nav from "./nav.jsx";
import SelectAction from "../selectAction.jsx";
import ProfileView from "../profileView.jsx";
import PostView from "../postView.jsx";
import RentView from "../rentView.jsx";

class Home extends React.Component {

  // seeLogin() {
  //   ReactDOM.render(<Login />, document.getElementById("app"));
  // }
  // seeSignUp() {
  //   ReactDOM.render(<SignUp />, document.getElementById("app"));
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Nav} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/selectaction" exact component={SelectAction} />
            <Route path="/profile" exact component={ProfileView} />
            <Route path="/rentposts" exact component={RentView} />
            <Route path="/newpost" exact component={PostView} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default Home;
