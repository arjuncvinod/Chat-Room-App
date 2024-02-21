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
    <div className="login">
      <button onClick={handleSignIn}>
        <img
          src="g-logo.png" alt=""
        />
        Sign in with google
      </button>
    </div>
  );
}

export default Auth;
