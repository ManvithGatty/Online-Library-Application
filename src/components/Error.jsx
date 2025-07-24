import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="message">
      <div>
        <h2>404 - Page Not Found</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
}

export default Error;
