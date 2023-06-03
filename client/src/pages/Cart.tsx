import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import CartList from '../components/cart/CartList';
import CartUserForm from '../components/cart/CartUserForm';
import { addUser, clearCart } from "../redux/cart.slice";
import { placeOrder } from '../api/requests.api';
import { productsSelector } from '../redux/cart-selector.select';
import { User } from '../interfaces/user.interface';
import { SetStateAction, useState } from 'react';
import { OrderResponse } from '../interfaces/order.interface';

function Cart() {
  const [order, setOrder] = useState<OrderResponse>();
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const user: User = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };
  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as never);
    user.name = form.get('name') as string;
    user.email = form.get('email') as string;
    user.phone = form.get('phone') as string;
    user.address = form.get('address') as string;

    dispatch(addUser(user));
    const data = e.currentTarget as HTMLFormElement;

    const response = await placeOrder({ user, products });
    setOrder(response as SetStateAction<OrderResponse | undefined>);
    data.reset();
    dispatch(clearCart())
  };

  if (order) {
    return (
      <Wrapper>
        <div className="p-10 border rounded-xl">
          <p className="text-center text-2xl">
            Your order is successfully placed. Your order{' '}
            <span className="text-blue-600">#{order?.id}</span>
          </p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <div className="p-1 flex flex-row gap-8">
          <CartUserForm />
          <CartList />
        </div>
      </form>
    </Wrapper>
  );
}

export default Cart;
