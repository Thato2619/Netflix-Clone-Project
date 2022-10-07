import React {useState}from "react";
import "./SignIn.css";
function SignIn() {
    //add variable of [App,setApp] to link App.js
    const [App, setApp] = useState(false);
  return (
    <div className="signIn_screen_background">
      <img className="screen_background" src="" alt="" />
      <div className="signIn_screen_gradient"></div>
      <div className="signIn_screen_form">
        <form>
          <h1>Sign In</h1>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
            <button 
                onClick={() => setApp(true)}
                type="submit">Sign In
            </button>

          <h4>
            <span className="signIn_screen_grey">New to Netflix?</span>
            <span className="signIn_screen_link">Sign Up now</span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
