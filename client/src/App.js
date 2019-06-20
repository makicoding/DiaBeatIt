import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalorieEntry from "./pages/CalorieEntry";
import CalorieData from "./pages/CalorieData";
import HealthCard from "./pages/HealthCard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CalorieEntry} />
          <Route exact path="/CalorieEntry" component={CalorieEntry} />
          <Route exact path="/CalorieData" component={CalorieData} />
          {/* <Route exact path="/StoreFinder" component={StoreFinder} /> */}
          {/* <Route exact path="/RecipesFinder" component={RecipesFinder} /> */}
          {/* <Route exact path="/HealthTimeline" component={HealthTimeline} /> */}
          <Route exact path="/HealthCard" component={HealthCard} />
          {/* <Route exact path="/Resources" component={Resources} /> */}
          {/* <Route exact path="/Contact" component={Contact} /> */}
          {/* <Route exact path="/anotherpage/:id" component={AnotherPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;