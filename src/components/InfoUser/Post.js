import React from 'react';


    const Post = ({info}) => {

        const {title, body} = info;

        return ( 

            <div className="card post-card mb-3">
                <div className="card-header">{title}</div>
                <div className="card-body post-body-card">
                    <p className="card-text">{body}</p>
                </div>
            </div>
        );
    }
 
export default Post;