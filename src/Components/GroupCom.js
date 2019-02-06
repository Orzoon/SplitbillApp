import React , { Component } from 'react';
import '../Styles/GroupCom.css';
import { Link } from 'react-router-dom';

const List = (props) => {
    return <li>{props.list}</li>
}
const SingleGroup = (props) => {
    const friendList = props.friends.map((friend,index) => {
        return <List key = {index} list = {friend} />
    })
    return (<div className = 'singleGroup'>
                <h1>{props.name}</h1>
                <h3>{props.dateCreated}</h3>
                <h3>{props.category}</h3>
                 <ul>
                    {friendList}
                 </ul>
                 <Link to = {`group/${props.id}`}><button>view</button></Link>
                 {/*<button onClick = {() =>  {props.viewGroupHandler(props.id)}}>view</button>*/}
                 <button >remove</button>
            </div>);
}

export default class GroupCom extends Component {

    render () {
        const {pathname} = this.props.location;
       // const { friends,name, dateCreated, category, id } = this.props.group[0];
       const { group } = this.props;
        return (
            <div className="groupComContainer">
            {group.map((individualObj) => {
                return <SingleGroup name = {individualObj.name} friends = {individualObj.friends} dateCreated = {individualObj.dateCreated} category = {individualObj.category} key = {individualObj.id} id = {individualObj.id} pathname = {pathname}/>
            })}
            </div>
        )
    }
}