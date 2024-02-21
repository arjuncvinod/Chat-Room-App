import React, { useRef } from "react";

function CreateRoom(props) {
  const inputValue = useRef(null);
  return (
    <div className="create-room">
      {/* <h1>Enter the Room Name</h1> */}
      <input type="text" ref={inputValue} placeholder="Enter the room name" />
      <button onClick={() => props.setRoom(inputValue.current.value)}>
        Join
      </button>
    </div>
  );
}

export default CreateRoom;
