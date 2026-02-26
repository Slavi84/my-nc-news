import { Link } from "react-router-dom";

function CommentCard({ comment }) {
  const { author, body, votes, created_at } = comment;
  const formattedDate = new Date(created_at).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <li className="comment-card">
      <div className="comment-header">
        <span className="comment-author">{author}</span>
        <span className="cpmment-date">{formattedDate}</span>
      </div>
      <p className="comment-body">{body}</p>
      <div className="comment-footer">
        <span className="comment-votes">Votes: {votes}</span>
      </div>
    </li>
  );
}
export default CommentCard;
