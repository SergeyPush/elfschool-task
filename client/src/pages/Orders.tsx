import { useState } from 'react';
import Wrapper from '../components/Wrapper';
import { getOrders } from '../api/requests.api';

function Orders() {
  const [email, setEmail] = useState<string>('');

  const handleSearchClick = async () => {
    const resp = await getOrders(email);
    console.log(resp);
  };

  return (
    <Wrapper>
      <div>
        <p className="text-2xl text-center mb-2">Search order</p>
        <div className="flex flex-row justify-center items-center gap-2">
          <input
            type="text"
            className="border px-2 py-1 rounded-md"
            placeholder="Enter user email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="border py-1 px-4 rounded-md bg-blue-400 text-blue-900"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
export default Orders;
