import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const Item1Page = () => (
  <div>
    <h1>Item1 page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/item1' component={Item1Page}/>
    </div>
  );
}

export default App;
