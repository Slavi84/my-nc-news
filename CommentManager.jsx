import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./api";
import CommentList from "./CommentList";
function CommentManager({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to load comments");
        setIsLoading(false);
      });
  }, [article_id]);
  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;
  return (
    <section className="comments-section">
      <h3>Comments</h3>
      <CommentList comments={comments} />
    </section>
  );
}

export default CommentManager;
