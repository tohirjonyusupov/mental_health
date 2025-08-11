import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Motivatsiya va Kundalik App</h1>
      <p>Hayotingizni boshqarish va maqsadlaringizga erishishda yordam beramiz.</p>

      <div className="home-buttons">
        <Link to="/login">
          <button>Kirish</button>
        </Link>
        <Link to="/register">
          <button>Ro'yxatdan o'tish</button>
        </Link>
      </div>
    </div>
  );
}
