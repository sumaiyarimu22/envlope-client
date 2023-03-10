import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "../components/Button";
const Navbar = () => {
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <header className="py-8 flex justify-between">
      <div className="logo">
        <Link
          to="/"
          className="text-xl font-semibold hover:text-violet-500 duration-300"
        >
          Envelope
        </Link>
      </div>
      <nav>
        {!user && (
          <div className="flex gap-5">
            <Link
              to="/login"
              className="hover:text-violet-500 hover:underline duration-300 underline-offset-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-violet-500 hover:underline duration-300 underline-offset-2"
            >
              Register
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-4 items-center">
            <p>
              Logged in as:
              <span className="text-violet-500 italic capitalize">
                {user.name}
              </span>
            </p>
            <Button handleLogout={handleLogout} text="Logout" logout />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
