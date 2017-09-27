import React from 'react';

const Table = ({data}) => {
  if (!data) {
    return null;
  }
  return <table className="table table-striped table-bordered">
    <thead>
      <th>Upvotes</th>
      <th></th>
      <th>Title</th>
      <th>Sub</th>
      <th>OP</th>
    </thead>
    <tbody>
        {data.map(post => (
          <tr><td>{post.data.ups}</td><td><a href={post.data.url} target="blank"><img src={post.data.thumbnail}/></a></td><td className="title"><a href={post.data.permalink}>{post.data.title}</a></td><td className="sub">{post.data.subreddit}</td><td>{post.data.author}</td></tr>
        ))}
    </tbody>
  </table>
}

export default Table