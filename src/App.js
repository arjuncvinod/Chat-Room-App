import {  useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import CreateRoom from "./components/CreateRoom";
import Chat from "./components/Chat";

function App() {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("authtoken"));
  const [room, setRoom] = useState("");

if (!isAuth)
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  else {
    return room ? <Chat room={room}/> : <CreateRoom setRoom={setRoom} />;
  }
}
export default App;
