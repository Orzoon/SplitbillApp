import React, { Component } from 'react';
import { ProfileAvatar} from './Functional';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
        isNavOpen:false,    
            };
        this.toggleSideBar = this.toggleSideBar.bind(this);
    
    
    }


    toggleSideBar()
    {
        if (this.state.isNavOpen===false)
           { 
            document.getElementById("mySidenav").style.width = "250px";
            
               this.setState({isNavOpen:true});
        
        }
        else    
          {  
            document.getElementById("mySidenav").style.width = "0";
            
            this.setState({ isNavOpen:false})        ;
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