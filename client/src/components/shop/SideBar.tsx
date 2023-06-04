import { useEffect } from 'react';
import { getListOfShops } from '../../api/requests.api';
import ShopList from './ShopList';
import { useQuery } from 'react-query';
import { queryClient } from '../../main';

function Sidebar() {
  const { data: shops, isLoading } = useQuery('shops', getListOfShops);
  const getShops = async () => {
    queryClient.prefetchQuery('shops', getListOfShops);
  };

  useEffect(() => {
    getShops();
  }, []);

  if (isLoading) {
    return <div className="w-1/5 border rounded-lg p-2">Loading...</div>;
  }
  return (
    <div className="w-1/5 border rounded-lg p-2">
      {shops && <ShopList shops={shops} />}
    </div>
  );
}
export default Sidebar;
