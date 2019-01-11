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
      group: [
        {
          id: 1,
          name: 'Granville st',
          friends: ['firstOne', 'secondOne'],
          dateCreated: new Date().toDateString(),
          category: 'coles bill'
          
        },
        {
          id: 2,
          name: 'other street',
          friends: ['firstName', 'LastName'],
          dateCreated: new Date().toDateString(),
          category: 'pascovaleMarket'
        },
        {
          id: 3,
          name: 'third street',
          friends: ['name1', 'name2'],
          dateCreated: new Date().toDateString(),
          category: 'not necessary'
        },
        {
          id: 4,
          name: 'third street',
          friends: ['name1', 'name2'],
          dateCreated: new Date().toDateString(),
          category: 'not necessary'
        }
      ],
      bills: [
        {
          // to identify group
          groupInformationId: 1,
          // Name of the group
          name: 'Granville st',
          //information for individual bill
          bill: [
            {
              id: 1,
              date: '1 jan',
              description: 'test individual bill',
              amountPaid: 50,
              divideEqually: true,
              billDate: 'date of creation',
              members: ['firstOne', 'secondOne'],
            },
            {
              id: 2,
              date: '2 jan',
              description: 'test 2',
              amountPaid: 90,
              divideEqually: true,
              billDate: '',
              members: ['other', 'othername']
            },
            {
              id: 3,
              date: '3 jan',
              description: 'test 3',
              amountPaid: 100,
              divideEqually: true,
              billDate: '',
              members: ['someOther', 'otherOtherName']
            }
          ]
        }
      ]
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
