import { OrderResponse } from '../../interfaces/order.interface';
import { User } from '../../interfaces/user.interface';

interface OrderItemInterface {
  user: User;
}

const getProducts = (order: OrderResponse) => {
  return order.products.map((product, index) => {
    return (
      <div key={index} className="grid grid-cols-6 gap-8 text-xs text-gray-600">
        <span className="col-span-3 text-left">{product.name}</span>
        <span className="text-center ml-auto">{product.quantity}</span>
        <span className="text-md text-center">x</span>
        <span className="">${product.price}</span>
      </div>
    );
  });
};
const getTotal = (order: OrderResponse[]) => {
  const products = order[0].products;

  return products.reduce(
    (acc, product) => acc + Number(product.price) * product.quantity,
    0,
  );
};

function OrderItem({ user }: OrderItemInterface) {
  const { name, email, orders } = user;
  return (
    <li className="grid grid-cols-3 mb-5 border rounded-md p-3 gap-10">
      <div className="with-min-1/5">
        <p className="text-xl">{name}</p>
        <p className="text-xs text-gray-700">{email}</p>
      </div>
      <div className="flex flex-col justify-center">
        {orders && orders.map((order) => getProducts(order))}
      </div>
      <div className="flex items-center justify-center justify-self-end px-5">
        <p className="text-right text-sm text-gray-600">
          Total: $
          <span className="text-gray-900">{getTotal(orders!).toFixed(2)}</span>
        </p>
      </div>
    </li>
  );
}
export default OrderItem;
