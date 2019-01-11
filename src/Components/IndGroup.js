import React from 'react';
import '../Styles/IndGroup.css';

const BillHeader = (props) => {
    return (
        <div className = 'billHeader'>
            <div className = "groupName">{props.name}</div>
            <button>Create new Bill</button>
        </div>
    )
}

const BillList = (props) => {
    const { bill } = props;
    const list = bill.map((value,i) => {
        return <List key = {i} items = {value}/>
    })
    return list;
}
const List = (props) => {
    const { items } = props;
    console.log(items.description)
    return <li><span>{items.date}</span><span>{items.description}</span><span>you Paid:{items.amountPaid}</span></li>
}

export default class IndGroup extends React.Component {
    render(){
        const { bills } = this.props;
        const groupId = this.props.match.params.groupId;
        return (
            <div className = "indGroupContainer">
            
                <BillHeader name = {bills[0].name} />
                <ul>
                    {<BillList bill = {bills[0].bill}/>}
                </ul>
            </div>
        )
    }
}