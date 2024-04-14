import { CartItem } from "@/app/lib/features/productsInCartSlice";

export const ProductInCart: React.FC<{
  product: CartItem;
}> = ({ product }) => {
  function calculateTotalPrice(pricePerItem: number, quantity: number) {
    return pricePerItem * quantity;
  }
  const totalPrice = calculateTotalPrice(product.price, product.quantityInCart);
  return (
    <div
      key={product.id}
      className=" flex h-10  w-full border-b-2 border-t-0 border-text p-2 pt-3 text-text "
    >
      <div className="flex w-full ">
        <div className="  flex max-w-[200px] min-w-[200px] flex-col max-[1300px]:w-full max-md:min-w-[150px]  ">
          <h1 className=" flex w-1/3 overflow-hidden whitespace-nowrap shrink-0 ">
            {product.title}
          </h1>
        </div>
        <div className="quantity  flex max-h-6 w-[80%] items-center justify-center">
          <p className="flex px-10  min-w-[80px] max-[1300px]:py-1 max-[1300px]:pl-0">
            x {product.quantityInCart}
          </p>
        </div>
        <div className="flex w-1/5 min-w-[230px] ">
          <p className="flex px-10 max-[1300px]:py-1 max-[1300px]:pl-0">
            {totalPrice}₽
          </p>
        </div>
      </div>
    </div>
  );
};
