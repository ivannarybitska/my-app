import React from 'react';
import { MdDelete } from "react-icons/md";

class User extends React.Component {
    user = this.props.user;
 render() {
   return (
   <div>
        <h3>{this.user.firstName} {this.user.lastName}</h3>
        <p>{this.user.age}</p>
        <b>{this.user.isHappy ? "Happy" : "Unhappy"}</b>
        <MdDelete />
    </div>
)
 }
}

export default User;