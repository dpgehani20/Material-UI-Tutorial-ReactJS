import React from 'react';
import './App.css';

// import Buttonc from './components/Buttonc'
// import Buttoncs from './components/Buttoncs'
// import Layoutt from './components/Layoutt'
// import Tabss from './components/Tabss'

// import Productcard from './combination/Productcard'

import Nav from './router/Nav';
import About from './router/About';
import Shop from './router/Shop';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <h1>React Material UI</h1> */}
      {/* <Buttonc /> */}
      {/* <Buttoncs /> */}
      {/* <Layoutt /> */}
      {/* <Tabss /> */}

      {/* <Productcard /> */}

      
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
    </Router>
  );
}

//route

const Home = () =>(
  <div>
    <h2>Home Page</h2>
  </div>
);

export default App;
