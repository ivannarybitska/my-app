import React from 'react';

class Users extends React.Component {
    users = [
        {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "age": 28,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "birthDate": "1996-5-30",
      "isHappy": true,
        },

      {
      "id": 2,
      "firstName": "Michael",
      "lastName": "Williams",
      "age": 35,
      "gender": "male",
      "email": "michael.williams@x.dummyjson.com",
      "phone": "+49 258-627-6644",
      "birthDate": "1989-8-10",
      "isHappy": false,
}
    ]
 render() {
    if (this.users.length > 0) {
        return (
    <div>
        {this.users.map((el) => (
            <div key={el.id}>
                <h3>{el.firstName} {el.lastName}</h3>
                <p>{el.gender}</p>
                <b>{el.isHappy ? "Happy" : "Unhappy"}</b>
            </div>
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