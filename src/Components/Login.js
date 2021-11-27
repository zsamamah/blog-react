import React, { Component } from 'react';
import '../style.css';

export class Login extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    handleClick = (e)=>{
        switch(e.target.id){
            case "email":
                this.setState({email:e.target.value});
                break;
            case "password":
                this.setState({password:e.target.value});
                break;
            default:
                alert("What the hell!!")
        }
    }

    handleSubmit = (e)=>{
        const posts=[
            {
                id:"0",
                msg:"just for test"
            },
            {
                id:"1",
                msg:"just for test"
            },
            {
                id:"2",
                msg:"just for test"
            }
        ];
        const users=JSON.parse(localStorage.getItem("users"));
        let length=users.length;
        let index;
        for(let i=0;i<length;i++){
            if(users[i].email===this.state.email && users[i].password===this.state.password)
                index=i;
        }
        if(!localStorage.getItem("logged_in"))
            localStorage.setItem("logged_in",false)
        if(!localStorage.getItem("posts")){
            localStorage.setItem("posts",JSON.stringify(posts))
        }
        if(index!==undefined){
            localStorage.setItem("logged_in",true)
            localStorage.setItem("user_in",JSON.stringify(users[index]))
            alert(`Welcome ${users[index].fname} ${users[index].lname}`)
        }
        else{
            alert("Failed login!")
            localStorage.setItem("logged_in",false)            
            localStorage.removeItem("user_in")
        }
        // console.log(index)
    }
    logout = ()=>{
        localStorage.setItem("logged_in",false)
        localStorage.removeItem("user_in")
        this.setState({})
        alert("Logged out!")
    }
    render() {
        return (
            <div id="regCCon">
            <div id="regCon">
            <fieldset>
                <legend>Login To Your Account!</legend>
                <form onSubmit={this.handleSubmit} id="loginForm">
                    <div>
                    <label htmlFor="email">name</label><br/>
                    <input required id="email" type="email" onChange={this.handleClick} value={this.state.email} />
                    {/* <br/> */}
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label><br/>
                    <input required type="password" id="password" onChange={this.handleClick} />
                    {/* <br/> */}
                    </div>
                    <div>
                    <button type="submit">Login !</button>
                    </div>
                    {/* <br/> */}
                    {/* <br/> */}
                    {JSON.parse(localStorage.getItem("logged_in"))===true?<button type="button" onClick={this.logout}>Logout</button>:null}
                    
                </form>
                </fieldset>
            </div>
            </div>
        )
    }
}

export default Login
