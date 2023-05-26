import { useEffect, useState } from 'react';
import { getShopWithListOfProducts } from '../api/requests.api';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { Shop } from '../interfaces/shop.interface';

function ProductList() {
  const { id } = useParams();
  const [shop, setShop] = useState<Shop>();
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    if (id) {
      const resp = await getShopWithListOfProducts(parseInt(id));
      setShop(resp);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
    setLoading(false);
  }, [id]);

  return (
    <div className="w-4/5 border rounded-lg p-4">
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-3 gap-8">
        {!loading && shop?.products ? (
          shop?.products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))
        ) : (
          <p className="text-xl">Select shop to see products</p>
        )}
      </div>
    </div>
  );
}
export default ProductList;
