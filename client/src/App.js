import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CalorieEntry from "./pages/CalorieEntry";
import CalorieEntryEdit from "./pages/CalorieEntryEdit";
import CalorieData from "./pages/CalorieData";
// import StoreFinder from "./pages/StoreFinder";
import RecipeFinder from "./pages/RecipeFinder";
import HealthCard from "./pages/HealthCard";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/MainMenu" component={MainMenu} />
          <Route exact path="/CalorieEntry" component={CalorieEntry} />
          <Route exact path="/CalorieEntryEdit" component={CalorieEntryEdit} />
          <Route exact path="/CalorieData" component={CalorieData} />
          {/* <Route exact path="/StoreFinder" component={StoreFinder} /> */}
          <Route exact path="/RecipeFinder" component={RecipeFinder} />
          {/* <Route exact path="/HealthTimeline" component={HealthTimeline} /> */}
          <Route exact path="/HealthCard" component={HealthCard} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Contact" component={Contact} />
          {/* <Route exact path="/anotherpage/:id" component={AnotherPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

//  render={() => (<CalorieEntryEdit calorieData={"Hello There"}/>)}

export default App;