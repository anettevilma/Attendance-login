import React from 'react';
import logo from './logo.svg';
import './App.css';
import Attendance from './Attendance';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd:'',
      showLogin: false
    };
  
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let validuser="";
    let username = this.state.username;
    if (Number(username)) {
      alert("Username is not valid");
    }
    fetch("http://localhost:8081/employee/validate", {
     "method": "POST",
     "headers": {        
       "content-type": "application/json",
       "accept": "application/json"
     },
     "body": JSON.stringify({
       emp_id: this.state.username,
       password: this.state.pwd
     })
   })
   .then(response => response.json())
   .then(response => {
     console.log(response.validuser)
     validuser=response.validuser;
     if(validuser)
     {
      this.setState({showLogin:true});
      console.log("Inside successful logon")
     }
     else
     {
      alert("Invalid username or password");
     }
         
   })
   .catch(err => {
     console.log(err);
   });
   
     
  }
  changeLogout=()=>{
    this.setState({
      showLogin:false
    });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <>
     {this.state.showLogin?
      <Attendance logout={this.changeLogout} /> :
      <form className="App-header App-background" onSubmit={this.mySubmitHandler}>
      <h1>LOGIN </h1>
      <p>Enter username : <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      /></p>
      <p>Enter password : <input
        type="password"
        name='pwd'
        onChange={this.myChangeHandler}
      /></p>
      <br/>
      <input type='submit'/>
      </form>
           }
     </> 
    );
  }
}
export default App;
