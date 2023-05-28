import { Link, useParams } from 'react-router-dom';
import { Shop } from '../../interfaces/shop.interface';

interface ShopItemInterface {
  shop: Shop;
}
function ShopItem({ shop }: ShopItemInterface) {
  const { id } = useParams();

  return (
    <p className="mb-4">
      <Link
        to={`/${shop.id}`}
        className={`${
          shop?.id === parseInt(id!) ? 'text-blue-700' : ''
        } text-2xl`}
      >
        {shop.displayName}
      </Link>
    </p>
  );
}
export default ShopItem;
