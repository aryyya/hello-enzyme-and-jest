import React from 'react'
import logo from './logo.svg'
import './App.css'

const Test = () => (
  <div className="test">
    Hello, Test!
  </div>
)

const App = () => (
  <div className="app">
    <p className="app__greeting">Hello, Enzyme and Jest!</p>
    <ul className="app__items">
      <li>Apples</li>
      <li>Oranges</li>
      <li>Bananas</li>
    </ul>
    <Test />
  </div>
)

export default App;
