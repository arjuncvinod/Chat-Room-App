import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import SendIcon from "@mui/icons-material/Send";
import SingleChat from "./SingleChat";

function Chat(props) {
  const messageRef = collection(db, "messages");
  const [msgs, setMgs] = useState([]);

  function updateScroll() {
    var element = document.getElementById("chat-window");
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }
  useEffect(() => {
    updateScroll();
  }, [msgs]);

  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", props.room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMgs(messages);
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const [newMsg, setNewMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMsg === "") return;

    await addDoc(messageRef, {
      text: newMsg,
      user: auth.currentUser.displayName,
      createdAt: serverTimestamp(),
      room: props.room,
    });
    setNewMsg("");
  };
  return (
    <div className="chat">
      <h1>{props.room} Chatroom</h1>
      <div id="chat-window">
        {msgs.map((message) => (
          <div>
         <SingleChat message={message} />
         </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setNewMsg(e.target.value)}
          value={newMsg}
        />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default Chat;
