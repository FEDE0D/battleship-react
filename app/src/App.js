import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeRoute from "./routes/Welcome";
import GameRoute from "./routes/Game";
import ResultRoute from "./routes/Result";

function App() {
  return (
    <Router>
      <Route path="/" exact component={WelcomeRoute} />
      <Route path="/game" component={GameRoute} />
      <Route path="/result" component={ResultRoute} />
    </Router>
  );
}

export default App;
