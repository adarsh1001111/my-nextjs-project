import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebaseConfig";

const Signup = () => {
  const [showEmailInputs, setShowEmailInputs] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in successfully, get user data
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  const signInWithEmailPassword = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-half">
        {/* Picture or image */}
        <img
          src="../image2.png"
          alt="Signup Image"
          className="signup-image"
          height="100%"
          width="100%"
        />
      </div>

      <div className="right-half">
        <div className="text-above-form">
          {/* Text above the form */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                color: "white",
                display: "inline-block",
                marginRight: "10px",
              }}
            >
              LO
              <span style={{ backgroundColor: "rgb(135, 206, 250)" }}>GO</span>
            </div>
            <p>Journey to a trillion miles starts from here.</p>
          </div>
        </div>
        {/* Signup form */}
        <div className="form-container">
          <form>
            <h2>Sign up</h2>
            <h2>Choose a sign up method</h2>
            {/* Button for Google sign-in */}
            <button
              type="button"
              className="google-btn"
              onClick={signInWithGoogle}
            >
              <img src="pngwing.com.png" alt="Google Logo" />
              <span>Sign Up with Google</span>
            </button>

            {/* Button for email sign-in */}
            <button
              type="button"
              className="email-btn"
              onClick={() => setShowEmailInputs(true)}
            >
              <img src="email.png" alt="Email Logo" />
              <span>Sign Up with Email</span>
            </button>

            {/* Email and password input fields */}
            {showEmailInputs && (
              <div className="email-password-fields">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="email-signin-btn"
                  onClick={signInWithEmailPassword}
                >
                  Sign In
                </button>
              </div>
            )}
          </form>

          {/* Additional buttons or links */}
          <div className="additional-links white-text">
            <p>
              Already a user? <a href="/signin">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;