import React from 'react';
import './App.css';
import Header from './components/Header';
import UserPage from './components/pages/UsersPage';
import About from './components/pages/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" component={UserPage}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
