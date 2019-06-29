import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./hamburgerMenu.css";

class HamburgerMenu extends React.Component {

  // --------------------

  // The code below slides in the overlay navigation menu downwards from the top (0 to 100% height), when it is triggered:

  // Open when someone clicks on the span element
  openNav = () => {
    document.getElementById("myNav").style.height = "100%";
  }

  // Close when someone clicks on the "x" symbol inside the overlay
  closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
  }


  
  // --------------------

  // This function makes the Link ACTIVE if we are NOT ON the same page as the Link
  // and it makes the Link INACTIVE if are ON the same page as the Link.
  // The string inside the parenthesis of for example className={this.getMenuItemClasses("/CalorieEntry")} is passed through the function,
  // so in this example /CalorieEntry is passed through (it is renamed to menuItemPage and passed through the getMenuItemClasses function):
    getMenuItemClasses(menuItemPage) {
      // baseClass is refering to the className. So we are saying the base className="menu-item"
      const baseClass = "menu-item";

    // Ternary operator version:
    // return this.props.match.path === menuItemPage ? `${baseClass} ${baseClass}--inactive` : baseClass;

    // If statement version (this does the same thing as the above ternary operator line of code):
    if (this.props.match.path === menuItemPage) {
      // The above line is saying if the window URL is equal to menuItemPage that is passed through the function (in the above 
      // commented example it is the renamed "/CalorieEntry" string), then...
      
                                  return `${baseClass} ${baseClass}--inactive`;
      // i.e.                     return `  menu-item    menu-item--inactive`.

      // So we are basically saying if the window URL === menuItemPage,
      // then className = "menu-item menu-item--inactive"

      // In the above commented example we would be saying if window URL === "/CalorieEntry"
      // then className = "menu-item menu-item--inactive"

    }

    // If the above condition in the if statement isn't met, then immediately return the baseClass, i.e. return className="menu-item"
    return baseClass;
  }



  // --------------------

  render() {
    console.log(this.props);
    return(
      <div>
        {/* HAMBURGER MENU */}

        {/* The Overlay */}
        <div id="myNav" className="overlay">

          {/* Button to close the overlay navigation */}
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          {/* &times; is the icon for X */}

          {/* Overlay content */}
          <div className="overlay-content">
            {/* Link is prebuilt into react-router-dom and is the same as an anchor a tag */}
            <Link to="/CalorieEntry" className={this.getMenuItemClasses("/CalorieEntry")}>Calorie Entry</Link>
            <Link to="/CalorieData" className={this.getMenuItemClasses("/CalorieData")}>Calorie Data</Link>
            <Link to="/StoreFinder" className={this.getMenuItemClasses("/StoreFinder")}>Store Finder</Link>
            <Link to="/RecipeFinder" className={this.getMenuItemClasses("/RecipeFinder")}>Recipe Finder</Link>
            <Link to="/HealthTimeline" className={this.getMenuItemClasses("/HealthTimeline")}>Health Timeline</Link>
            <Link to="/HealthCard" className={this.getMenuItemClasses("/HealthCard")}>Digital Health Card</Link>
            <Link to="/Resources" className={this.getMenuItemClasses("/Resources")}>Resources</Link>
            <Link to="/Contact" className={this.getMenuItemClasses("/Contact")}>Contact</Link>
            <Link to="/" className={this.getMenuItemClasses("/")}>Back To Home</Link>
          </div>

        </div>

        {/* Top Bar and Branding Text */}
        <div className="topBar">
          {/* <span class="branding">Branding</span> */}
          <a className="branding" href="/MainMenu">DiaBeatIt</a>
        </div>

        {/* Hamburger Menu */}
        <div className="topnav">

        {/* Hamburger icon */}
        <a href="javascript:void(0);" className="icon" onClick={this.openNav}>&#9776;</a>
        {/* &#9776; is the hamburger icon */}

        </div>
      </div>
    );
  }
}

// withRouter is built into react-router-dom and is used to set routing
export default withRouter(HamburgerMenu);