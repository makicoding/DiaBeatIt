import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CalorieEntry from "./pages/CalorieEntry";
import CalorieData from "./pages/CalorieData";
import HealthCard from "./pages/HealthCard";
import HealthTimeline from "./pages/HealthTimeline";
import HealthCardPreview from "./pages/HealthCardPreview";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/MainMenu" component={MainMenu} />
          <Route exact path="/CalorieEntry" component={CalorieEntry} />
          <Route exact path="/CalorieData" component={CalorieData} />
          {/* <Route exact path="/StoreFinder" component={StoreFinder} /> */}
          {/* <Route exact path="/RecipesFinder" component={RecipesFinder} /> */}
          <Route exact path="/HealthTimeline" component={HealthTimeline} />
          <Route path="/HealthCard" component={HealthCard} />                
          <Route exact path="/Preview" component={HealthCardPreview} />
          {/* <Route exact path="/Resources" component={Resources} /> */}
          {/* <Route exact path="/Contact" component={Contact} /> */}
          {/* <Route exact path="/anotherpage/:id" component={AnotherPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;