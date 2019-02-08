import React, {Component} from 'react' ;
import '../Styles/Sidebar.css';
import Sidebar from './Sidebar';


class SideNavTrial extends Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
                sideLinks: {
              groups: [],
              friends: [],
              about: 'about splitZone',
              something: 'something'
            }
         }
    }

    
    closeNav()
    {
        document.getElementById("mySidenav").style.width = "0";
    }

  

    render()
    {
        return(
            <div id ="mySidenav" class="sidenav">
             {/*{<Sidebar sideLinks={this.state.sideLinks}/>*/}
                <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
           </div>
        );
    }

}
export default SideNavTrial;