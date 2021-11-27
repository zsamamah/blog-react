import React, { Component } from 'react';
import PostCard from './PostCard';
import '../style.css';

export class Admin extends Component {
    constructor(){
        super()
        this.state={
            id:"",
            msg:""
        }
    }
    
    handleChange = (e)=>{
        switch(e.target.id){
            case "id":
                this.setState({id:e.target.value});
                break;
            case "msg":
                this.setState({msg:e.target.value});
                break;
            default:
                alert("what the hell!!");
        }
    }
    handleSubmit = (e)=>{
        posts.push({
            id:this.state.id,
            msg:this.state.msg
        })
        localStorage.setItem("posts",JSON.stringify(posts))
    }
    render() {
        
        return (
        <div>
            <div className="addPostContainer">
            <fieldset>
                <legend>Add New Post</legend>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">Post ID :</label><br/>
                <input type="number" id="id" onChange={this.handleChange}/><br/>
                <label htmlFor="msg">Message</label><br/>
                <textarea rows="8" cols="30" id="msg" onChange={this.handleChange}></textarea><br/>
                <button id="addPostBtn" type="submit"><i class="fas fa-plus-circle"></i> Add Post</button>
            </form>
            </fieldset>
            </div>

            <div id="postContainer">
                {
                    posts.map((el,index)=>{
                        return <PostCard id={el.id} msg={el.msg} key={index} />
                    })
                }
            </div>
        </div>
        )
    }
}
const posts = JSON.parse(localStorage.getItem("posts"));
export default Admin
