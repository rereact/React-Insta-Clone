import React from 'react';

const EachPost = props => {
    return(
        <div>
            <div className="account">
                <img className="pfp" src={props.data.thumbnailUrl} alt="Profile Picture"/>
                <p><strong>{props.data.username}</strong></p>
            </div>
            <img className="postimg" src={props.data.imageUrl} alt="Post Image"/>
        </div>
    )
}

export default EachPost