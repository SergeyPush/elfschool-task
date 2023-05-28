import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { productsLengthSelector } from '../redux/cart-selector.select';

function Header() {
  const length = useSelector(productsLengthSelector);
  const { pathname } = useLocation();
  const active = pathname.match(/\/(\d+)/);

  return (
    <div className="p-2 border-b">
      <div className="">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `text-2xl px-3 border-r ${
              isActive || active ? 'text-blue-700' : ''
            }`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={'/cart'}
          className={({ isActive }) =>
            `text-2xl px-3 ${isActive ? ' text-blue-700' : ''}`
          }
        >
          Cart{length ? `(${length})` : null}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
