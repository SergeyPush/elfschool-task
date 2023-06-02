import { Product } from '../../interfaces/shop.interface';
import { addToCart, selectShop } from '../../redux/cart.slice';

import { useAppDispatch } from '../../redux/store';

interface ProductItemInterface {
  product: Product;
  shopName: string;
}

function ProductItem({ product, shopName }: ProductItemInterface) {
  const dispatch = useAppDispatch();
  const hanleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(selectShop(shopName));
  };

  return (
    <div className="border p-4 rounded-xl shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover mb-4"
      />
      <div className="flex flex-row justify-between">
        <p className="text-2xl text text-gray-800">{product.name}</p>
        <p className="font-bold text-xl">${product.price}</p>
      </div>
      <button
        className="px-8 py-2 mt-3 text-lg text-blue-800 bg-blue-300 block ml-auto rounded-lg"
        onClick={() => hanleAddToCart()}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem;
