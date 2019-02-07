import React, { Component } from 'react';
import { ProfileAvatar} from './Functional';
import { FaUser } from 'react-icons/fa';
import '../Styles/Navbar.css';
import '../Styles/Sidebar.css';
import SideNavTrial from './SideNavTrial';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
        isNavOpen:false,    
            };
        this.toggleSideBar = this.toggleSideBar.bind(this);
    
    
    }

    SideBarNavDisplay()
    {
        document.getElementById("TrialSideBar").style.display = "block";
    }

    SideBarNavHide()
    {
        document.getElementById("TrialSideBar").style.display = "none";
    }


    toggleSideBar()
    {
        if (this.state.isNavOpen===false)
           { 
               this.SideBarNavDisplay();
               this.setState({isNavOpen:true});
        
        }
        else    
          {  this.SideBarNavHide();
            this.setState({isNavOpen:false})        
        }
    }

    
    
    render(){
        
        return (
            <nav className = 'navbar navbar-light bg-dark'>
              <button type="submit" class="btn btn-primary" onClick={this.toggleSideBar}>
                <svg id="i-menu" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
                </svg>
              </button>

             
              
            
                <ProfileAvatar profileName = 'Arjun'>
                    <div className="userIcon">
                     
                    </div>
                </ProfileAvatar>
    
            </nav>

        )
    }
}

export default Navbar;