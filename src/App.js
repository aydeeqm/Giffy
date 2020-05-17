import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link to='/gif/peru'>Peŕu</Link>
        <Link to='/gif/colombia'>Colombia</Link>
        <Link to='/gif/argentina'>Argentina</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
