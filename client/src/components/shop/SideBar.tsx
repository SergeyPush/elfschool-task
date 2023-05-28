import { useEffect, useState } from 'react';
import { getListOfShops } from '../../api/requests.api';
import ShopList from './ShopList';

function Sidebar() {
  const [shops, setShops] = useState([]);
  const getShops = async () => {
    const resp = await getListOfShops();
    setShops(resp);
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <div className="w-1/5 border rounded-lg p-2">
      {shops && <ShopList shops={shops} />}
    </div>
  );
}
export default Sidebar;
