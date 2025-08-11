import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) navigate("/dashboard"); // Login bo‘lsa dashboardga o‘tadi
  };

  return (
    <div className="auth-container">
      <h2>Kirish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email kiriting"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Kirish..." : "Kirish"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}