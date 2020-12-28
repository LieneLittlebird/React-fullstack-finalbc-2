import React, { useEffect, useState } from "react";
import axios from "axios";
import { EXPRESS_API } from "../../constants";
import "./discussion.css";

const Discussion = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${EXPRESS_API}/getPosts`,
    }).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };

  const postMessage = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().slice(0, 17);

    posts.push({
      userName: username,
      userMessage: message,
      createdAt: currentDate,
    });

    await axios({
      method: "post",
      url: `${EXPRESS_API}/addPost`,
      data: {
        userName: username,
        userMessage: message,
        createdAt: currentDate,
      },
    });

    setPosts(JSON.parse(JSON.stringify(posts)));
  };

  return (
    <div id="discussion-main">
      <h3>Chat with other Dune fans</h3>
      <form id="form-main">
        <div id="chat-window">
          <div id="chat-postarea">
            {posts.map((post) => (
              <div
                key={post.userMessage}
                className="newLine"
              >{`${post.userName}: ${post.createdAt} ${post.userMessage}`}</div>
            ))}
          </div>
          <div id="chat-input">
            <label htmlFor="chat-username">
              <strong className="chat-strong">Username:</strong>
              <input
                type="text"
                className="chat-data"
                id="chat-username"
                name="username"
                value={username}
                onChange={changeUsername}
              />
            </label>
            <label htmlFor="chat-message">
              <strong className="chat-strong">Message:</strong>
              <textarea
                type="submit"
                id="chat-message"
                className="chat-data"
                name="message"
                value={message}
                onChange={changeMessage}
              />
            </label>
            <button id="submit-button" type="submit" onClick={postMessage}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discussion;
