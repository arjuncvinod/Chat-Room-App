import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
function Chat(props) {
  const messageRef = collection(db, "messages");
  const [msgs, setMgs] = useState([]);

  useEffect(() => {
    const queryMessage = query(messageRef, where("room", "==", props.room));
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
    <div>
      {msgs.map((message) => (
        <h1 key={message.id}>{message.text}</h1>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setNewMsg(e.target.value)}
          value={newMsg}
        />
        <button>send</button>
      </form>
    </div>
  );
}

export default Chat;
