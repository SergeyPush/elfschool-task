import { Link, useParams } from 'react-router-dom';
import { Shop } from '../../interfaces/shop.interface';
import { useSelector } from 'react-redux';
import { activeShopSelector } from '../../redux/cart-selector.select';

interface ShopItemInterface {
  shop: Shop;
}
function ShopItem({ shop }: ShopItemInterface) {
  const { id } = useParams();
  const shopName = useSelector(activeShopSelector);
  const selected = shopName.length ? shop.name === shopName : true;
  return (
    <p className="mb-4">
      {selected ? (
        <Link
          to={`/${shop.id}`}
          className={`text-2xl ${
            shop?.id === parseInt(id!) ? 'text-blue-700' : ''
          }`}
        >
          {shop.displayName}
        </Link>
      ) : (
        <span className="text-2xl text-gray-500">{shop.displayName}</span>
      )}
    </p>
  );
}
export default ShopItem;
