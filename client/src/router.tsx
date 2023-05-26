import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MyOrders from './pages/Orders';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/cart',
    Component: Cart,
  },
  {
    path: '/orders',
    Component: MyOrders,
  },
]);
