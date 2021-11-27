import React, { Component } from 'react'

export class AdminComments extends Component {
    deleteComment = (e,comment_index,post)=>{
        const postComments=JSON.parse(localStorage.getItem(`post${post} comments`))
        console.log(`post${post} and comment${comment_index}`)
        console.log(postComments)
        postComments.splice(comment_index,1)
        console.log(postComments)
        localStorage.setItem(`post${post} comments`,JSON.stringify(postComments))
    }
    render() {
        const availableComments=JSON.parse(localStorage.getItem(`post${this.props.id} comments`))
        return (
            availableComments.map((el,index)=>{
                return (
                <div className="adminComments" key={index}>
                    <div>
                    <p><b style={{color:"#F05454"}}>{el.username}</b> : {el.comment}</p>
                    </div>
                    <form onSubmit={(e)=>{this.deleteComment(e,index,this.props.id)}}>
                        <button type="submit" id="deleteComment"><i class="fas fa-times"></i></button>
                    </form>
                </div>
                )
            })
        )
    }
}

export default AdminComments
