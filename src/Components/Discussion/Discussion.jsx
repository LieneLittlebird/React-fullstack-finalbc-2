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
    <div>
      <h3>Discussion</h3>
      <form>
        <div id="chat-window">
          <div id="chat-postarea">
            {posts.map((post) => (
              <div
                key={post.userMessage}
                className="newLine"
              >{`${post.userName}: ${post.createdAt} ${post.userMessage}`}</div>
            ))}
          </div>
          <div>
            <label htmlFor="chat-username">
              <input
                type="text"
                className="chat-data"
                id="chat-username"
                name="username"
                value={username}
                onChange={changeUsername}
              />
              <strong>Username</strong>:
            </label>
          </div>
          <div>
            <label htmlFor="chat-message">
              <textarea
                type="submit"
                id="chat-message"
                className="chat-data"
                name="message"
                value={message}
                onChange={changeMessage}
              />
              <strong>Message</strong>:
            </label>
          </div>
          <button id="submit-button" type="submit" onClick={postMessage}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Discussion;
