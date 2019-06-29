import React from "react";
import "./helloUserAndSignOut.css";

var userName = localStorage.getItem("username");

class HelloUserAndSignOut extends React.Component {

  signOut = () => {
    window.localStorage.clear();
    window.location.replace("/");  
  }

  checkForUser = () => {
    if (userName) {
      return userName;
    } else {
      userName = "Sign in to save your information!";
      return userName;
    }
  };

  render() {
    return(
      <div>             
        <div className="helloUserTxt">Hello <span className="userFirstName">{this.checkForUser}{userName}</span>!</div>
        <div className="signOutContainer"><span className="signOutAnchor" onClick={this.signOut}>Sign Out</span></div>
      </div>   
    )
  }
}

export default HelloUserAndSignOut;