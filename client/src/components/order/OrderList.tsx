import { User } from '../../interfaces/user.interface';
import OrderItem from './OrderItem';

interface OrderListInterface {
  users: User[];
}
function OrderList({ users }: OrderListInterface) {
  return (
    <ul>
      {users.map((user, key) => (
        <OrderItem user={user} key={key} />
      ))}
    </ul>
  );
}
export default OrderList;
