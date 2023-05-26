import ProductList from '../components/ProductList';
import Sidebar from '../components/SideBar';
import Wrapper from '../components/Wrapper';

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
