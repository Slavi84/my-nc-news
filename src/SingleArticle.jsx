import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://back-end-nc-news-channel.onrender.com/api/articles/${article_id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load article");
        setLoading(false);
      });
  }, [article_id]);
  if (loading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  return (
    <article>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Published: {new Date(article.created_at).toLocaleDateString()}</p>
      <p>Votes: {article.votes}</p> <p>Comments: {article.comment_count}</p>
      <p>{article.body}</p>
    </article>
  );
}
export default SingleArticle;
