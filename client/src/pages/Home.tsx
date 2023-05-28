import Wrapper from '../components/Wrapper';
import ProductList from '../components/shop/ProductList';
import Sidebar from '../components/shop/SideBar';

function Home() {
  return (
    <Wrapper>
      <div className="flex flex-row h-screen gap-3">
        <Sidebar />
        <ProductList />
      </div>
    </Wrapper>
  );
}

export default Home;
