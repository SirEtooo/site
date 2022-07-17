import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Work from './containers/Work';
import ContactUs from './containers/ContactUs';
import Experience from './containers/Experience';
import Navbar from './components/navbar';
import About from './containers/About';
import Alert from './components/alert';
import Footer from './components/footer';

export default function App() {
  return (


    <Router>
      <Navbar/>
      <Alert/>
      <div className="App">
        <Route path="/" exact component={About} />
        <Route path="/contactUs"  component={ContactUs}/>
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />

        
      </div>
      <Footer/>
    </Router>
    
  );
}

