import { useState } from 'react';
import Wrapper from '../components/Wrapper';
import { getOrders } from '../api/requests.api';
import OrderList from '../components/order/OrderList';
import { User } from '../interfaces/user.interface';

function Orders() {
  const [email, setEmail] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await getOrders(email);
    if (resp) {
      setUsers(resp as never);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSearch} className="mb-8">
        <p className="text-2xl text-center mb-2">Search order by email</p>
        <div className="flex flex-row justify-center items-center gap-2">
          <input
            type="text"
            className="border px-2 py-1 rounded-md w-80"
            placeholder="Enter user email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="border py-1 px-4 rounded-md bg-blue-400 text-blue-900"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="w-3/5 mx-auto">
        <OrderList users={users} />
      </div>
    </Wrapper>
  );
}
export default Orders;
