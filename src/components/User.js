import React from 'react';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import AddUser from './AddUser';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false,    
        }
    }
    user = this.props.user;
 render() {
   return (
   <div className='userDiv'>
        <MdDelete onClick={() => this.props.onDelete(this.user.id)}/>
        <FiEdit onClick={() => {
            this.setState({
                editForm: !this.state.editForm
            })
        }}/>
        <h3>{this.user.firstName} {this.user.lastName}</h3>
        <p>{this.user.age}</p>
        <b>{this.user.isHappy ? "Happy" : "Unhappy"}</b>
        
        {this.state.editForm && <AddUser user = {this.user} onAdd={this.props.onEdit}/>}
    </div>
)
 }
}

export default User;