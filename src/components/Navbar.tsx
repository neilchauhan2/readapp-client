import Link from "next/link";
import { useAuthState, useAuthDispatch } from "../context/auth";
import axios from "axios";

const Navbar: React.FC = () => {
  const { authenticated, loading, user } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    axios
      .get("/auth/logout")
      .then(() => {
        dispatch("LOGOUT");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <a>
            <i className="w-8 h-8 mr-2 text-blue-500 fas fa-book fa-2x"></i>
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">readapp</Link>
        </span>
      </div>
      {/* Search */}
      <div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
        {/* <i className="pl-4 pr-3 text-gray-400 fas fa-search"></i>
        <input
          type="text"
          className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
          placeholder="Search"
        /> */}
      </div>
      {/* Auth buttons */}
      <div className="flex">
        {!loading && authenticated && (
          <Link href="/subs/create">
            <a className="px-4 py-1 mr-2 text-sm font-semibold capitalize blue button">
              Create Community
            </a>
          </Link>
        )}
        {!loading &&
          (authenticated ? (
            <button
              onClick={logout}
              className="w-32 py-1 mr-4 leading-5 button blue hollow"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <a className="w-32 py-1 mr-4 leading-5 button blue hollow">
                  log in
                </a>
              </Link>
              <Link href="/register">
                <a className="w-32 py-1 leading-5 button blue">sign up</a>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
