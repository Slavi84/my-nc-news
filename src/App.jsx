import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.jsx";

function App() {
  const [signedInUser, setSignedInUser] = useState(null);
  useEffect(() => {
    fetch("https://back-end-nc-news-channel.onrender.com/api/users/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.users.find((u) => u.username === "grumpy19");
        console.log("Loaded user:", user);
        setSignedInUser(user);
      })
      .catch((err) => {
        console.error("Failed to load user:", err);
      });
  }, []);
  return (
    <>
      {signedInUser && (
        <Header
          username={signedInUser.username}
          avatar_url={signedInUser.avatar_url}
        />
      )}
    </>
  );
}

export default App;
