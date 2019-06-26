import React from "react";
import "./helloUserAndSignOut.css";
import { Auth } from 'aws-amplify';


var userName = localStorage.getItem("username");

class HelloUserAndSignOut extends React.Component {

  signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>             
        <div className="helloUserTxt">Hello <span className="userFirstName">{userName}</span>!</div>
        {/* <p className="signOutAnchor" href="https://www.nutritionix.com/uk/database/common-foods" target="_blank">Click here to look up calories</p> */}
        <div className="signOutContainer"><span className="signOutAnchor" onClick={this.signOut}>Sign Out</span></div>
      </div>   
    )
  }
}

export default HelloUserAndSignOut;