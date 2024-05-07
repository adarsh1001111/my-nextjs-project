import React from "react";
import { signOut } from "../firebaseConfig"; // Import your signOut function from firebaseConfig

const Home = () => {
  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="outerdiv">
      {/* Navbar */}
      <nav>
        <div className="navbar">
          <div className="logo">
            LO
            <span>GO</span>
          </div>
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="posts">
        {/* First Row */}
        <div className="post">Post 1</div>
        <div className="post">Post 2</div>
        <div className="post">Post 3</div>
        {/* Second Row */}
        <div className="post">Post 4</div>
        <div className="post">Post 5</div>
        <div className="post">Post 6</div>
        {/* Third Row */}
        <div className="post">Post 7</div>
        <div className="post">Post 8</div>
        <div className="post">Post 9</div>
      </div>
    </div>
  );
};

export default Home;
