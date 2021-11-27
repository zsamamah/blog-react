import React, { Component } from 'react';

export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            fname:"",
            lname:"",
            password:"",
            email:"",
            role:"user"
        }
    }
    
    handleSubmit = (e)=>{
        let Array=[]
        let newUser={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            username:this.state.username,
            password:this.state.password,
            role:this.state.role
        }
        if(!localStorage.getItem("users")){
            const adminUSer={
                fname:"admin",
                lname:"admin",
                email:"admin@admin.com",
                username:"admin",
                password:"admin",
                role:"admin"
            }
            Array.push(adminUSer);
            Array.push(newUser);
            localStorage.setItem("users",JSON.stringify(Array))
        }
        else{
            Array=JSON.parse(localStorage.getItem("users"));
            Array.push(newUser);
            localStorage.setItem("users",JSON.stringify(Array))
        }
    }
    handleChange = (e)=>{
        switch(e.target.id){
            case "fname": 
                this.setState({fname:e.target.value});
                break;
                case "lname": 
                    this.setState({lname:e.target.value});
                    break;
                case "username": 
                    this.setState({username:e.target.value});
                    break;
                case "email": 
                    this.setState({email:e.target.value});
                    break;
                case "password": 
                    this.setState({password:e.target.value});
                    break;
                
                default: alert("What the hell!!!!")
            }
    }
    render() {
        return (
            <div id="regCCon">
            <div id="regCon">
            <fieldset>
                <legend>Register Now</legend>
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="fname">
                    First Name: 
                </label><br/>
                <input type="text" id="fname" onChange={this.handleChange} required/>
                </div>
                <div>
                <label htmlFor="lname">
                    Last Name: 
                </label><br/>
                <input type="text" id="lname" onChange={this.handleChange} required/>
                </div>
                <div>
                <label htmlFor="username">
                    Username: 
                </label><br/>
                <input type="text" id="username" onChange={this.handleChange} required/>
                </div>
                <div>
                <label htmlFor="email">
                    Email Address: 
                </label><br/>
                <input type="email" id="email" onChange={this.handleChange} required/>
                </div>
                <div>
                <label htmlFor="password">
                    Password: 
                </label><br/>
                <input type="password" id="password" onChange={this.handleChange} required/>
                </div>
                <div>
                <button type="submit">Register</button>
                </div>
            </form>
            </fieldset>
            </div>
            </div>
        )
    }
}

export default Register
