import React, { Component } from 'react';
import '../style.css';
import AdminComments from './AdminComments';
import Like from './Like';
import userPic from '../assets/temp_man2.jpg'

export class PostCard extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            name:"Zaid Samamah",
            msg:this.props.msg,
            like:0
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
    deletePost = (x,e)=>{
        const posts=JSON.parse(localStorage.getItem("posts"));
        let user=posts.find(element=>element.id===x)
        let index=posts.indexOf(user)
        // console.log(user)
        // console.log(index)
        posts.splice(index,1)
        localStorage.setItem("posts",JSON.stringify(posts));
        localStorage.removeItem(`post${x} comments`);
        localStorage.removeItem(`post${x} likes`)
    }
    render() {
        return (
            <div className="post">
                    <div className="userData">
                    <div><img src={userPic} alt="user profile" /></div>
                    <div><h3>{this.state.name}</h3><p style={{color:"#F05454"}}>@admin</p></div>
                </div>
                    <p>ID: {this.state.id}</p>
                    <hr/>
                    <div>{this.state.msg}</div>
                    <hr/>
                    <div className="likesContainer">{!localStorage.getItem(`post${this.state.id} likes`) ? "No Likes" : <Like likes={JSON.parse(localStorage.getItem(`post${this.state.id} likes`)).length}/>}</div>
                    <div><button id="likeBtn" type="button" onClick={this.like}><i class="fas fa-thumbs-up"></i> Like</button></div>
                    <div>
                        {localStorage.getItem(`post${this.state.id} comments`)?<AdminComments id={this.state.id}/>:<p>No Comments!</p>}
                    </div>
                    <div>
                        <form onSubmit={(e)=>this.deletePost(this.state.id,e)}>
                        <button type="submit" id="deletePostBtn">Delete Post</button>
                        </form>
                    </div>
            </div>
        )
    }
}

export default PostCard

