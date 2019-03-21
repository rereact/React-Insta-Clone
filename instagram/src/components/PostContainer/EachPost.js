import React from 'react';

const EachPost = props => {
    return(
        <div className="igpost">
            <div className="account">
                <img className="pfp" src={props.data.thumbnailUrl} alt="Profile Picture"/>
                <p><strong>{props.data.username}</strong></p>
            </div>
            <img className="postimg" src={props.data.imageUrl} alt="Post Image"/>
            <p><strong>{props.data.likes} likes</strong></p>
            <div className="com">{props.data.comments.map(com => <p><strong>{com.username}</strong> {com.text}</p>)}</div>
            <input className="input" placeholder="Add a comment..."/>
        </div>
    )
}

export default EachPost