import React, { useState } from "react";
import axios from "axios";
import "./discussion.css";

const Discussion = () => {
  const [text, setText] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };

  const postMessage = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().slice(0, 14);
    text.push(`${username} ${currentDate} ${message}`);

    await axios({
      method: "post",
      url: "http://localhost:3004/posts",
      data: {
        userName: username,
        userMessage: message,
        createdAt: currentDate,
      },
    });
    setText(JSON.parse(JSON.stringify(text)));
  };
  return (
    <div>
      <h3>Discussion</h3>
      <form>
        <div id="chat-window">
          <div id="chat-postarea">
            {text.map((newLine) => (
              <div className="newLine">{newLine}</div>
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
