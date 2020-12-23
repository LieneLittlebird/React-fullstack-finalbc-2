import React, { useState } from "react";
import "./discussion.css";

const Discussion = () => {
  const postData = {
    // 1. Connect username and message field with button
    // Connect button to saving the data
  };
  return (
    <div>
      <h3>Discussion</h3>
      <form>
        <div id="chat-window">
          <div id="chat-postarea" />
          <div>
            <label htmlFor="chat-username">
              <input
                type="text"
                className="chat-data"
                id="chat-username"
                name="username"
              />
              <strong>Username</strong>:
            </label>
          </div>
          <div>
            <label htmlFor="chat-message">
              <textarea
                type="text"
                id="chat-message"
                className="chat-data"
                name="message"
              />
              <strong>Message</strong>:
            </label>
          </div>
          <button id="submit-button" type="submit" onClick={postData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Discussion;
