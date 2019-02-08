import React, {Component} from 'react' ;
import '../Styles/Sidebar.css';
import { Link } from 'react-router-dom';
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
                <Link to = {`/groups`}>Groups</Link>
                <Link to = {`/home`}>Home</Link>
                <a href="#">Friends</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
           </div>
        );
    }

}
export default SideNavTrial;