import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends React.Component { 
      constructor(props) {
        super(props) 
            this.state = {
                users : [
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
            }
            this.addUser = this.addUser.bind(this);
            this.deleteUser = this.deleteUser.bind(this);
            this.editUser = this.editUser.bind(this);
    }

  render() {
    return (<div>
    <Header title = "Header"/>
    <main className='main'>
      <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
      <AddUser user = {this.user} onAdd = {this.addUser}/>
    </main>
  </div>
)
  }

  addUser(user) {
    const id = this.state.users.length +1;
    this.setState({ users: [...this.state.users, {id, ...user}]})
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    //console.log(user);
    let allUsers = this.state.users; // отримати всіх користувачів
    allUsers[user.id - 1] = user; //знайшли нужного користувачса і замінили на того користувачсач якого ми отримуємо з параметру

    this.setState({users: []}, () => {//очистка всіх користувачів
      this.setState({users: [...allUsers]});//установили новий список
    })
  }

}

export default App;