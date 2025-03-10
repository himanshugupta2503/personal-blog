import React from "react";
import { useParams } from "react-router-dom";

const PostDetailView = ({ posts }) => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetailView;
