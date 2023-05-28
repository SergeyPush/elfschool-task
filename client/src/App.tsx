// import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import ProductList from './components/shop/ProductList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="/:id" element={<ProductList />} />
          </Route>
          <Route path="/cart" Component={Cart} />
          <Route path="/orders" Component={Orders} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
