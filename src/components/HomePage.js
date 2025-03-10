import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ posts }) => {
  return (
    <div className="container">
      <h2>Personal Blog</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Create one!</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${index}`}>Read More</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
