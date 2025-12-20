import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Logo from '../Logo';

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut().catch(console.error);
  };

  const handleThemeToggle = (e) => {
    document.documentElement.setAttribute(
      'data-theme',
      e.target.checked ? 'dark' : 'light'
    );
  };

  return (
    <div className="bg-base-200 shadow-sm">
      <div className="navbar container mx-auto px-3">

        {/* LEFT */}
        <div className="navbar-start">
          <Logo />
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">

          {/* Desktop Menu */}
          <ul className="menu menu-horizontal gap-2 hidden lg:flex">

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-loans">All-Loans</NavLink></li>

            {!user && (
              <>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">Register</NavLink></li>
              </>
            )}

            {user && (
              <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                {/* Theme Toggle */}
                <input
                  onChange={handleThemeToggle}
                  type="checkbox"
                  className="toggle mt-1.5"
                />
                {/* Avatar */}
                <li>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        src={user.photoURL || 'https://ibb.co.com/WpYd4bR6'}
                        alt="user"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm bg-secondary rounded-2xl mt-1 text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-xl">☰</label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 p-3 shadow w-56 z-50">

              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/all-loans">All-Loans</NavLink></li>

              {!user ? (
                <>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                  <li><NavLink to="/signup">Register</NavLink></li>
                </>
              ) : (
                <>
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm bg-primary text-white w-full"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
