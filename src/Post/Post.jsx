import React from 'react'

const Post = ({data,remove}) =>{
    return (
        <div className="post">
        <div className="img-thumb">
          <img src="https://placeimg.com/200/150/animals" alt="" />
        </div>
        <div className="content">
          <p className="title">{data.title}</p>
          <p className="desc">{data.body}</p>
          <button className='remove' onClick={() => remove(data.id)}>remove</button>
        </div>
      </div>
    )
}

export default Post;