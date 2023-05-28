import { Shop } from '../../interfaces/shop.interface';
import ShopItem from './ShopItem';

interface ShopListInterface {
  shops: Shop[];
}

function ShopList({ shops }: ShopListInterface) {
  return (
    <div className="p-5">
      {shops.map((shop, idx) => (
        <ShopItem shop={shop} key={idx} />
      ))}
    </div>
  );
}
export default ShopList;
