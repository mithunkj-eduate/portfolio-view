import "./styles/notfound.css"; // adjust path

export default function NotFound() {
  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_FE_BASE_URL;

  return (
    <div className="container">
      <h1 className="title">404</h1>

      <h2 className="subtitle">Portfolio Not Available</h2>

      <p className="desc">
        This portfolio is either unpublished or does not exist.
      </p>

      <a href={apiBaseUrl} className="btn">
        Go Home
      </a>
    </div>
  );
}
