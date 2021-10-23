import React from 'react'

const Post = ({title,desc}) =>{
    return (
        <div className="post">
        <div className="img-thumb">
          <img src="https://placeimg.com/200/150/animals" alt="" />
        </div>
        <div className="content">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    )
}

export default Post;