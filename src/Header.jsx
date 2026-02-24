import { Link } from "react-router-dom";

function Header({ username, avatar_url }) {
  return (
    <>
      <h1 id="welcome">Welcome to NC - News</h1>
      <Link to="/">
        <button className="home">Home</button>
      </Link>
      <div className="user-data">
        <img
          src={avatar_url}
          alt={`${username}'s avatar`}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ddd",
          }}
        />
        <span>{username}</span>
      </div>
    </>
  );
}

export default Header;
