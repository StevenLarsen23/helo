import React, { useState } from "react";
import Post from "../Post/Post";

const Dashboard = (props) => {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState(true);
  const [input, setInput] = useState("");

  const mappedPosts = posts.map((post, i) => {
    return <Post key={`${post.id}-${i}`} post={post} />;
  });

  return (
    <div>
      <input placeholder="Search" />
      <button>Search</button>
      <button>Reset</button>
      <label>
        My Posts
        <input type="checkbox" />
      </label>
      <ul>
        <li style={{ listStyle: "none" }}>{mappedPosts}</li>
      </ul>
    </div>
  );
};

export default Dashboard;
