import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import axios from 'axios';

const baseUrl = 'https://dummyjson.com/users';

class App extends React.Component { 
      constructor(props) {
        super(props) 

        axios.get(baseUrl).then((res) => {
          this.setState({users: res.data.users});//users установили йому значення тоі url
        })

        this.state = {
          users : []
            }
            this.addUser = this.addUser.bind(this);
            this.deleteUser = this.deleteUser.bind(this);
            this.editUser = this.editUser.bind(this);
    }

  render() {
    return (<div>
    <Header title = "Header"/>
    <main className='main'>
      <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} />
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