import Wrapper from '../components/Wrapper';
import CartList from '../components/cart/CartList';
import CartUserForm from '../components/cart/CartUserForm';

function Cart() {
  return (
    <Wrapper>
      <div className="p-1 flex flex-row gap-8">
        <CartUserForm />
        <CartList />
      </div>
    </Wrapper>
  );
}

export default Cart;
