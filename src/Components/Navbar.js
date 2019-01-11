import React, { Component } from 'react';
import {Logo, ProfileAvatar} from './Functional';
import { FaUser } from 'react-icons/fa';
import '../Styles/Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <nav className = 'navbar_container'>
                <Logo logoName = 'Split Zone' />
                <ProfileAvatar profileName = 'Arjun'>
                    <div className="userIcon">
                        <FaUser />
                    </div>
                </ProfileAvatar>
            </nav>
        )
    }
}

export default Navbar;