import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
                <Link to="/register">Register</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
