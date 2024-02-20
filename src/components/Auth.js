import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Auth(props) {
  
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("authtoken", result.user.refreshToken);
      props.setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>sign in with google</p>
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );
}

export default Auth;
