import { CreateProduct } from '../../interfaces/shop.interface';

interface CartItemInterface {
  product: CreateProduct;
}

function CartItem({ product }: CartItemInterface) {
  const { image, name, quantity, description } = product;
  return (
    <div className="flex flex-row h-28 border rounded-lg py-1 px-1 mb-4 items-center">
      <div className="p-2">
        <img src={image} alt={name} className="object-contain w-24" />
      </div>
      <div className="flex flex-col justify-center ml-6">
        <div className="text-2xl text-gray-800">{name}</div>
        <div className="text-md text-gray-600">{description}</div>
      </div>

      <div className="flex flex-row ml-auto ">
        <button className="px-3 py-0 text-lg text-blue-800 bg-blue-300 rounded-lg">
          Minus
        </button>
        <div className="flex justify-center items-center mx-3">
          <span className="block font-bold text-blue-900">{quantity}</span>
        </div>
        <button className="px-3 py-0 text-lg text-blue-800 bg-blue-300 rounded-lg">
          Plus
        </button>
      </div>
    </div>
  );
}
export default CartItem;
