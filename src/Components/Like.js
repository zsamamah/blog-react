import React, { Component } from 'react'

export class Like extends Component {
    render() {
        return (
        <React.Fragment>
            <div>{this.props.likes}</div>
            <div className="likeDiv"><i class="fas fa-thumbs-up"></i></div>
        </React.Fragment>
        )
    }
}

export default Like
