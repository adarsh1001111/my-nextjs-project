import React, { useRef } from "react";
import { signOut } from "../firebaseConfig"; // Import your signOut function from firebaseConfig

const Home = () => {
  const postsRef = useRef(null);

  // Function to handle scrolling
  const scroll = (direction) => {
    const scrollAmount = 200; // Adjust the scroll amount as needed
    const container = postsRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

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
      <nav className="navbar">
        <div className="logo">
          LO
          <span>GO</span>
        </div>
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </nav>
      <div className="arrow-buttons">
        <div className="text">Popular Topics 🔥</div>
        <button className="left-button" onClick={() => scroll("left")}>
          <img src="../icons8-back-arrow-32 (1).png" />
        </button>
        <button className="right-button" onClick={() => scroll("right")}>
          <img src="../icons8-back-arrow-32.png" />
        </button>
      </div>

      {/* Content */}
      <div className="posts-container" ref={postsRef}>
        <div className="posts">
          {/* First Row */}
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>{" "}
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>{" "}
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>{" "}
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>{" "}
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>{" "}
          <div className="post">
            <p>Lorem ipsum.</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
