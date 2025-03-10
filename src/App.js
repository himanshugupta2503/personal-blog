import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostCreationForm from "./components/PostCreationForm";
import PostDetailView from "./components/PostDetailView";
import Navbar from "./components/Navbar";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on initial render
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts(storedPosts);
  }, []);

  // Save posts to local storage when they change
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  // Function to add a new post
  const addPost = (post) => setPosts([...posts, post]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/create" element={<PostCreationForm addPost={addPost} />} />
        <Route path="/post/:id" element={<PostDetailView posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
