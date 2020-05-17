import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home'
import Detail from './pages/Home'

import { Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>APP OF GIFS</h1>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={ListOfGifs} />
        <Route path='/gif/:id' component={Detail} />
      </section>
    </div>
  );
}

export default App;
