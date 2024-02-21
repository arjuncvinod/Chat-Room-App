import React from "react";

function SingleChat(props) {
  return (
    <div key={props.message.id} className="singlemsg">
      <p className="username" style={{ display: "inline-block" }}>
        {props.message.user}
      </p>
      <br />
      <p className="content" style={{ display: "inline-block" }}>
        {props.message.text}
      </p>
    </div>
  );
}

export default SingleChat;
