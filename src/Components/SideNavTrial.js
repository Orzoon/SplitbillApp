import React, {Component} from 'react' ;

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

    render()
    {
     
        return(
            <div id="TrialSideBar">
                    <Sidebar sideLinks={this.state.sideLinks}/>
            </div>  
        );
    }

}
export default SideNavTrial;