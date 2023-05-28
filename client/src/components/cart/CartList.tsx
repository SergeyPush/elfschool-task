import { useSelector } from 'react-redux';
import {
  productsSelector,
  totalPriceSelector,
} from '../../redux/cart-selector.select';
import CartItem from './CartItem';

function CartList() {
  const total = useSelector(totalPriceSelector);
  const products = useSelector(productsSelector);

  return (
    <div className="p-8 border rounded-lg w-2/3">
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <p className="text-right text-2xl text-blue-900 font-bold">
        Total price: {total}
      </p>

      <button className="px-8 py-2 mt-3 text-lg text-blue-800 bg-blue-300 block ml-auto rounded-lg">
        Buy
      </button>
    </div>
  );
}
export default CartList;
