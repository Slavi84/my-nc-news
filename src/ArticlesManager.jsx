import { useState, useEffect } from "react";
import ArticleList from "./ArticleList.jsx";
function ArticlesManager() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://back-end-nc-news-channel.onrender.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load articles");
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;
  return <ArticleList articles={articles} />;
}
export default ArticlesManager;
