import React, { Component } from 'react';
import Admin from './Admin';
import UserPosts from './UserPosts';
import NoLogin from './NoLogin';
import '../style.css';

export class ReactComponent extends Component {
    render() {
      const login=JSON.parse(localStorage.getItem("logged_in"))
      const user=JSON.parse(localStorage.getItem("user_in"))
      const posts=JSON.parse(localStorage.getItem("posts"))
      if(login===true && user.role==="user")
        return (
          <div className="userInterface">
          <div className="welcomeUser"><h2>Welcome {user.fname} {user.lname}</h2></div>

          <div id="postContainer">
          {
            posts.map((el,index)=>{
              return (
                <UserPosts id={el.id} msg={el.msg} key={index} />
              )
            })
          }
          </div>
          </div>
        )
        else if(login===true && user.role==="admin")
        return(<Admin/>)
    else
    return(<NoLogin/>)
    }
}

export default ReactComponent
