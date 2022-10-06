import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Router from "./Router";
import Route from "./Route";

import Index from "./Index";
import About from "./About";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Route path="/" component={<Index/>} />
    <Route path="/about" component={<About/>} />
  </Router>
)
