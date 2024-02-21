import { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import CreateRoom from "./components/CreateRoom";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("authtoken"));
  const [room, setRoom] = useState("");

  const handleSignOut = async () => {
    signOut(auth);
    cookies.remove("authtoken");
    setIsAuth(false);
    setRoom(null);
  };
  if (!isAuth)
    return (
      <div className="login-container">
        <h1>Welcome to Chatroom</h1>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  else {
    return (
      <div className="container">
        <button onClick={handleSignOut} className="signout">
          SignOut
        </button>
        {room ? <Chat room={room} /> : <CreateRoom setRoom={setRoom} />}
      </div>
    );
  }
}
export default App;
