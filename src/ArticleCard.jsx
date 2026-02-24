function ArticleCard({ article }) {
  const {
    title,
    author,
    topic,
    votes,
    comment_count,
    created_at,
    article_img_url,
  } = article;

  const formattedDate = new Date(created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        background: "white",
      }}
    >
      <img
        src={article_img_url}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "0.5rem",
        }}
      />

      <h3>{title}</h3>

      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Topic:</strong> {topic}
      </p>

      <p>
        <strong>Votes:</strong> {votes} | <strong>Comments:</strong>{" "}
        {comment_count}
      </p>

      <p>
        <strong>Published:</strong> {formattedDate}
      </p>
    </div>
  );
}

export default ArticleCard;
