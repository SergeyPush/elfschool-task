import { getShopWithListOfProducts } from '../../api/requests.api';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useQuery } from 'react-query';

function ProductList() {
  const { id } = useParams();

  const enabled = !!parseInt(id!);
  const { data: shop, isLoading } = useQuery(
    ['getProducts', id],
    () => getShopWithListOfProducts(parseInt(id!)),
    { enabled },
  );

  if (isLoading) {
    <p className="text-xl w-4/5 border rounded-lg p-4">Loading...</p>;
  }

  return (
    <div className="w-4/5 border rounded-lg p-4">
      <div className="grid grid-cols-3 gap-8">
        {shop?.products ? (
          shop?.products.map((product, index) => (
            <ProductItem product={product} shopName={shop.name} key={index} />
          ))
        ) : (
          <p className="text-xl">Select shop to see products</p>
        )}
      </div>
    </div>
  );
}
export default ProductList;
