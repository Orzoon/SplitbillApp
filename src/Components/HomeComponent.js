import React, { Component } from 'react';
import {BrowserRouter as Router,Redirect,Route, Switch} from 'react-router-dom';
import { GROUP } from '../shared/group.js';
import { BILLS } from '../shared/bill.js';

import Navbar from './Navbar';
import GroupCom from './GroupCom';
import IndGroup from './IndGroup';
import SignIn from './SignIn';


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
                  <div className="container">
                     
                        <SideNavTrial/>
                     
                      
                        <div >
                          <Switch>
                            
                            <Route path = '/groups'  exact={true} render = {(props) => <GroupCom group = {this.state.group} {...props}/>}/>
                            <Route path = '/group/:groupId' exact ={true} render = {(props) => <IndGroup bills = {this.state.bills} {...props}/>}/>
                            <Route path = "/home" component = {()=><SignIn/>}/>
                            <Redirect to="/home"/>

                          </Switch>
                        </div>
                    </div>
                  </div>
                  </Router>
                
              
            );
          }
        

}

export default HomeComponent;