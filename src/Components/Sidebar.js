import React, { Component } from 'react';
import { ListItem } from './Functional';
import '../Styles/Sidebar.css';

class Sidebar extends Component {
   
    render () {
       const { sideLinks } = this.props;
       const items = Object.keys(sideLinks);
     
        return (
            <div className="sidebar">
                <ul>
                    {items.map((value,index) => {
                        return <ListItem listItem = {value} key = {index} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;

