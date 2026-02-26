import { useLayoutEffect } from "react";
import CommentCard from "./CommentCard";
function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p>No comments yet</p>;
  }
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
