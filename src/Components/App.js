import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import HomeComponent from './HomeComponent'; 


class App extends Component {
  
  render() {
   return(
     <div>
     
          <HomeComponent/>
             
     </div>
   ); 
  
  }
}

export default App;
