import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="p-2 border-b">
      <div className="">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `text-xl mx-1 ${isActive ? ' text-blue-700' : ''}`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={'/cart'}
          className={({ isActive }) =>
            `text-xl mx-1${isActive ? ' text-blue-700' : ''}`
          }
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
