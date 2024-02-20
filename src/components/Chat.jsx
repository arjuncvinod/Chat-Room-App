import React, { useState } from 'react'
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { auth, db } from '../firebase-config'
function Chat(props) {

const messageRef=collection(db,"messages")

const [newMsg,setNewMsg]=useState("")
const handleSubmit= async(e)=>{
    e.preventDefault()
    if(newMsg==="")
    return

    await addDoc(messageRef,{
        text:newMsg,
        user:auth.currentUser.displayName,
        createdAt:serverTimestamp(),
        room:props.room

    })
    setNewMsg("")
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Type your message here...' onChange={(e)=>setNewMsg(e.target.value)} value={newMsg}/>
        <button >send</button>
      </form>
    </div>
  )
}

export default Chat
