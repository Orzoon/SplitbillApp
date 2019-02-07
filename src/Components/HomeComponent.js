import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { GROUP } from '../shared/group.js';
import { BILLS } from '../shared/bill.js';
import Navbar from './Navbar';
import GroupCom from './GroupCom';
import IndGroup from './IndGroup';


import '../Styles/Global.css';
import SideNavTrial from './SideNavTrial.js';




class HomeComponent extends Component
{
    constructor(props){
        super(props);
        this.state = {
          loading: true,
          // individual group scenario
          group: GROUP,
          bills: BILLS
        }
    }
    

        render() 
        {
            return (
              <Router>
                <div>
                  <Navbar />
                  <div className="row">
                      <div className = "col-sm-2">
      
                        <SideNavTrial id="TrialSideBar"/>
                      </div>
                      
                        <div className=" col-lg-10 col-sm-4  ">
                        <Switch>
                          
                          <Route path = '/groups'  exact={true} render = {(props) => <GroupCom group = {this.state.group} {...props}/>}/>
                          <Route path = '/group/:groupId' exact ={true} render = {(props) => <IndGroup bills = {this.state.bills} {...props}/>}/>
                          <Route path = "*" component = {() => {
                            return <h1>Page not found</h1>
                          }} />
                        </Switch>
                        </div>
                    </div>
                  </div>
                
              </Router>
            );
          }
        

}

export default HomeComponent;