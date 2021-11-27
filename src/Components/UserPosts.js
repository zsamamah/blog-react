import React, { Component } from 'react';
import '../style.css';
import CardComments from './CardComments';
import Like from './Like';
import userPic from '../assets/temp_man2.jpg'

export class UserPosts extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            name:"Zaid Samamah",
            msg:this.props.msg,
            like:0,
            comment:""
        }
    }
    like = ()=>{
        const userData=JSON.parse(localStorage.getItem("user_in"))
        let allLikes=[]
        if(!localStorage.getItem(`post${this.state.id} likes`)){
            allLikes.push(userData.username)
            localStorage.setItem(`post${this.state.id} likes`,JSON.stringify(allLikes))
            this.setState({})
        }
        else{
            let found=false;
            allLikes=JSON.parse(localStorage.getItem(`post${this.state.id} likes`))
            for(let i=0;i<allLikes.length;i++){
                if(userData.username===allLikes[i])
                    found=true;
            }
            if(found){
                alert("You liked this Post!!")
            }
            else{
                allLikes.push(userData.username)
                localStorage.setItem(`post${this.state.id} likes`,JSON.stringify(allLikes))
                this.setState({})
            }
        }
    }
    handleChange = (e)=>{
        this.setState({comment:e.target.value})
    }
    handleSubmit = (id,e)=>{
        let comments=[];
        const userData=JSON.parse(localStorage.getItem("user_in"))
        let myComment={
            fname:userData.fname,
            lname:userData.lname,
            email:userData.email,
            username: userData.username,
            comment:this.state.comment
        }
        if(!localStorage.getItem(`post${id} comments`)){
            comments.push(myComment);
        }
        else{
            comments=JSON.parse(localStorage.getItem(`post${id} comments`))
            comments.push(myComment)
        }
        localStorage.setItem(`post${id} comments`,JSON.stringify(comments))
    }
    render() {

        return (
            <div className="post">
                <div className="userData">
                    <div><img src={userPic} alt="user profile" /></div>
                    <div><h3>{this.state.name}</h3><p style={{color:"#F05454"}}>@admin</p></div>
                </div>
                    <hr/>
                    <div className="postMsg">{this.state.msg}</div>
                    <hr/>
                    <div className="likesContainer">{!localStorage.getItem(`post${this.state.id} likes`) ? "No Likes" : <Like likes={JSON.parse(localStorage.getItem(`post${this.state.id} likes`)).length}/>}</div>
                    <div>
                        <button id="likeBtn" type="button" onClick={this.like}><i class="fas fa-thumbs-up"></i> Like</button>
                    </div>
                    <div className="commentContainer">
                        <form onSubmit={(e)=>this.handleSubmit(this.state.id,e)}>
                            <label htmlFor="comments">Add Your Comment </label><br/>
                            <textarea id="comments" cols="30" rows="5" onChange={this.handleChange} required/><br/>
                            <button type="submit" id="commentBtn"><i class="far fa-comment"></i> Add Comment !</button>
                        </form>
                    </div>
                    <div>
                        {localStorage.getItem(`post${this.state.id} comments`)?<CardComments id={this.state.id}/>:<p>No Comments!</p>}
                    </div>
            </div>
        )
    }
}

export default UserPosts
