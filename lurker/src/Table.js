import React from 'react';

const Table = ({data}) => {
  if (!data) {
    return null;
  }
  return <div className="myTable">
    {data.map(post => (
      <div className="media" >
          <div className="media-left" >
            <a href={post.data.url} target="blank">
              <img src={post.data.thumbnail} className="img-responsive;"/>
            </a> 
          </div> 
          <div className="media-body">
              <h4 className="media-heading">{post.data.title}</h4>
            <div className="sub">r/{post.data.subreddit}</div> 
            <div className="author">u/{post.data.author}</div> 
          </div> 
        </div>    
    ))}
    </div>
}

export default Table;
