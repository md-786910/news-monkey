import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Us from "./Us";
import Corona from "./Corona";
import Funny from "./Funny";
import News from "./News";
import Cricket from "./Cricket";
import Topa from "./Topa";
import Technology from "./Technology";
import EnterTain from "./EnterTain";
import Science from "./Science";
import Search from "./Search";

// api=4898630f183f4b9e90de2ebbdc18063d
// let url = ` https://newsapi.org/v2/everything?q=corona&apiKey=4898630f183f4b9e90de2ebbdc18063d&pageSize=100&page=1`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home value="home" />} />
        <Route path="/news" exact render={() => <News value="news" />} />
        <Route
          path="/technology"
          exact
          render={() => <Technology value="technology" />}
        />
        <Route
          path="/science"
          exact
          render={() => <Science value="science" />}
        />
        <Route
          path="/cricket"
          exact
          render={() => <Cricket value="cricket" />}
        />
        <Route
          path="/entertain"
          exact
          render={() => <EnterTain value="entertainment" />}
        />

        <Route
          path="/topa"
          exact
          render={() => <Topa value="future world" />}
        />
        <Route path="/corona" exact render={() => <Corona value="corona" />} />
        <Route
          path="/funny"
          exact
          render={() => <Funny value="funny news" />}
        />
        <Route path="/us" exact render={() => <Us />} />
        <Route path="/search" exact render={() => <Search />} />
      </Switch>
    </div>
  );
}

export default App;
