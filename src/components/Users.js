import React from 'react';
import User from './User';

class Users extends React.Component {

 render() {
    if (this.props.users.length > 0) {
        return (
    <div className='gg'>
        {this.props.users.map((el) => (
            <User onEdit = {this.props.onEdit} onDelete = {this.props.onDelete} key={el.id} user={el}/>
        ))}
    </div>
)
    }
    else {
        return (
            <div>
                <h3>Users is not defined</h3>
            </div>
        )
    }
 }
}

export default Users;