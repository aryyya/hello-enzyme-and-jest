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
    <p>Hello, Enzyme and Jest!</p>
    <Test />
  </div>
)

export default App;
