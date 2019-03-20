import React from 'react';
import EachPost from './EachPost'
import './postcontainer.css'

const PostContainer = props => {
    return(
        <div>
            {props.data.map(post => <p><EachPost data={post}/></p>)}    
        </div>
    )
}

export default PostContainer