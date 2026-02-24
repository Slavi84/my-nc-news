import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.jsx";
import ArticlesManager from "./ArticlesManager";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./SingleArticle";
function App() {
  const [signedInUser, setSignedInUser] = useState(null);
  useEffect(() => {
    fetch("https://back-end-nc-news-channel.onrender.com/api/users/")
      .then((res) => res.json())
      .then((data) => {
        const user = data.users.find((u) => u.username === "tickle122");
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
        <>
          <Header
            username={signedInUser.username}
            avatar_url={signedInUser.avatar_url}
          />
          <Routes>
            {/* <Route path="/articles" element={<ArticlesManager />} /> */}
            <Route path="/" element={<ArticlesManager />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
