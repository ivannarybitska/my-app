// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
    }

  render() {
    return (<div>
    <Header title = "Header"/>
    <main>
      <Users users={this.state.users}/>
    </main>
    <aside>
      <AddUser onAdd={this.addUser}/>
    </aside>
  </div>
)
  }

  addUser(user) {
    const idNewUser = this.state.users.length +1;
    this.setState({ users: [...this.state.users, {idNewUser, ...user}]})
  }

}

export default App;