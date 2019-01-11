import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    return <div className="logo">{props.logoName}</div>
}

const ProfileAvatar = (props) => {
    return (<div className="ProfileAvatar">
                <h4 className = 'userHeading'>{props.profileName}</h4>
                {props.children}
            </div>)
}

const ListItem = (props) => {
    return <li><Link to = {`/${props.listItem}`}>{props.listItem}</Link></li>
}
export {
    Logo,
    ProfileAvatar,
    ListItem
}