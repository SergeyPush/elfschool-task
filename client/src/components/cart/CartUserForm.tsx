import InputForm from './InputForm';

function CartUserForm() {
  return (
    <div className="w-1/3 p-8 border rounded-lg">
      <InputForm name="name" placeholder="Enter name" label="Name" />
      <InputForm name="email" placeholder="Enter email" label="Email" />
      <InputForm name="phone" placeholder="Enter phone" label="Phone" />
      <InputForm name="address" placeholder="Enter address" label="Address" />
    </div>
  );
}
export default CartUserForm;
