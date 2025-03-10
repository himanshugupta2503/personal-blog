import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCreationForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      setError("Title and content cannot be empty.");
      return;
    }
    addPost({ title, content });
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Create a New Post</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default PostCreationForm;
