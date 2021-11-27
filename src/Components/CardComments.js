import React, { Component } from 'react'

export class CardComments extends Component {
    render() {
        const availableComments=JSON.parse(localStorage.getItem(`post${this.props.id} comments`))
        return (
            availableComments.map((el,index)=>{
                return <p key={index}><b style={{color:"#F05454"}}>{el.username}</b>: {el.comment}</p>
            })
        )
    }
}

export default CardComments
