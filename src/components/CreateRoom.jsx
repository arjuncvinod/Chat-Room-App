import React, { useRef } from "react";

function CreateRoom(props) {
  const inputValue = useRef(null);
  return (
    <div>
      <h1>Enter the Room Name</h1>
      <input type="text" ref={inputValue} />
      <button onClick={()=>props.setRoom(inputValue.current.value)}>
        create
      </button>
    </div>
  );
}

export default CreateRoom;
