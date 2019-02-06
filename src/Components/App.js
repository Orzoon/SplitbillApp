import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import GroupCom from './GroupCom';
import IndGroup from './IndGroup';
import { GROUP } from '../shared/group.js';
import { BILLS } from '../shared/bill.js';
import '../Styles/Global.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      sideLinks: {
        groups: [],
        friends: [],
        about: 'about splitZone',
        something: 'something'
      },
      // individual group scenario
      group: GROUP,
      bills: BILLS
    }

  }
  render() {
    const { sideLinks } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className = "contentFixer">
            <Sidebar sideLinks = {sideLinks}/>
            <Switch>
              <Route path = '/groups'  exact={true} render = {(props) => <GroupCom group = {this.state.group} {...props}/>}/>
              <Route path = '/group/:groupId' exact ={true} render = {(props) => <IndGroup bills = {this.state.bills} {...props}/>}/>
              <Route path = "*" component = {() => {
                return <h1>Page not found</h1>
              }} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
