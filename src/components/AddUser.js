import React from 'react';

class AddUser extends React.Component {
    userAdd = {};
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            age: 1,
            isHappy: true,    
        }
    }
 render() {
   return (
   <form ref={(el) => this.myForm = el}>
        <input placeholder='FirstName' onChange={(e) => this.setState({firstName: e.target.value})}/>
        <input placeholder='LastName' onChange={(e) => this.setState({lastName: e.target.value})}/>
        <input placeholder='Age' onChange={(e) => this.setState({age: e.target.value})}/>
        <label htmlFor='isHappy'>Are you happy?</label>
        <input type='checkbox' id='isHappy' onChange={(e) => this.setState({isHappy: e.target.checked})}/>
        <button type='button' onClick={() => {
            this.myForm.reset();
            this.userAdd = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                isHappy: this.state.isHappy,
            }
            if (this.props.user) { //якщо передається така властивість як юзер тоді ми до обекту userAdd додаємо id
                this.userAdd.id = this.props.user.id;
            } 
            this.props.onAdd(this.userAdd);
        }
        }>Add</button>
   </form>
)
 }
}

export default AddUser;