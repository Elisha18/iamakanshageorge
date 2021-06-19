import React from "react";

const MessageHasBeenSent = ({ handleHideMessageThatWasSentToElisha }) => {
  return (
    <div className="black-back">
      <div className="message-container">
        <h2>Thank You!</h2>
        <p>
          Your message has been sent to Elisha George! She will give you a
          feedback as soon as possible.
        </p>
        <div
          className="top-menu-link"
          onClick={handleHideMessageThatWasSentToElisha}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default MessageHasBeenSent;
