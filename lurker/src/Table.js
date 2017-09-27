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




// return <table className = "table table-striped table-bordered" >
//   <
//   thead >
//   <
//   th > Upvotes < /th> <
//   th > < /th> <
//   th > Title < /th> <
//   th > Sub < /th> <
//   th > OP < /th> <
//   /thead> <
//   tbody > {
//     data.map(post => ( <
//       tr >
//       <
//       td > {
//         post.data.ups
//       } < /td> <
//       td > < a href = {
//         post.data.url
//       }
//       target = "blank" > < img src = {
//         post.data.thumbnail
//       }
//       /></a > < /td> <
//       td className = "title" > < a href = {
//         post.data.permalink
//       } > {
//         post.data.title
//       } < /a></td >
//       <
//       td className = "sub" > {
//         post.data.subreddit
//       } < /td> <
//       td > {
//         post.data.author
//       } < /td> <
//       /tr>
//     ))
//   } <
//   /tbody> <
//   /table>