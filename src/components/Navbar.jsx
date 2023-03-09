import { Link } from "react-router-dom";

const Navbar = () => {
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

        {/* <div>
          <p>
            Logged in as:{" "}
            <span className="text-violet-500 italic">Sumaiya</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
