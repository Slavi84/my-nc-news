const BASE_URL = "https://back-end-nc-news-channel.onrender.com/api";

export function getCommentsByArticleId(article_id) {
  return fetch(`${BASE_URL}/articles/${article_id}/comments`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch comments: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => data.comments);
}
