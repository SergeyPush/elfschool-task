import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import CartList from '../components/cart/CartList';
import CartUserForm from '../components/cart/CartUserForm';
import { addUser } from '../redux/cart.slice';
import { placeOrder } from '../api/requests.api';
import { productsSelector } from '../redux/cart-selector.select';
import { User } from '../interfaces/user.interface';
import { useState } from 'react';

function Cart() {
  const [order, setOrder] = useState();
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
    setOrder(response);
    data.reset();
  };

  if (order) {
    return (
      <div className="p-1 flex flex-row gap-8">
        Your order is successfully placed. Your order ${order?.id}
      </div>
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
