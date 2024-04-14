"use client";

import {
  CartItem,
  addToCart,
  removeFromCart,
  selectCartProducts,
  updateQuantity,
} from "@/app/lib/features/productsInCartSlice";
import { SingleProduct } from "@/app/lib/features/productsSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, useState } from "react";

const ProductCard: React.FC<{
  product: SingleProduct;
}> = ({ product }) => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector(selectCartProducts);

  // check if item is already in the cart
  const cartArray = productsInCart.cart;
  const currentProductInCart = cartArray.some((item) => item.id === product.id);
  const currentProductQuantity = cartArray.find(
    (item) => item.id === product.id
  );
  // если бы корзина была на другой странице, было бы на много легче
  function findProductAndCheckQuantity(
    products: CartItem[],
    productId: number
  ) {
    const matchingProduct = products.find(
      (product) => product.id === productId
    );
    if (!matchingProduct) {
      return { found: false, quantity: 0 }; // Indicate product not found
    }
    const quantityInCart = matchingProduct.quantityInCart || 0; // Handle missing quantityInCart property
    return { found: true, quantity: quantityInCart };
  }
  const productInfo = findProductAndCheckQuantity(cartArray, product.id);
  const [productQuantity, setProductQuantity] = useState<number>(
    productInfo.quantity
  );

  //cart actions
  const handleAddToCart = (product: SingleProduct) => {
    dispatch(
      addToCart([
        {
          ...product,
          quantityInCart: 1, // Set the initial quantity to 1 (or any default value)
          isSelected: false,
        },
      ])
    );
  };
  const handleUpdateInCart = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);

    setProductQuantity(newQuantity);
    dispatch(updateQuantity({ id: product.id, quantityInCart: newQuantity })); // Dispatch update action to Redux store
  };
  // может и сделаю удаление из корзины, но оно точно не помешало бы
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrease = () => {
    const newQuantity = productQuantity + 1;

    setProductQuantity(newQuantity);
    dispatch(updateQuantity({ id: product.id, quantityInCart: newQuantity }));
  };
  const handleDecrease = () => {
    const newQuantity = productQuantity - 1;
    if (newQuantity >= 1) {
      setProductQuantity(newQuantity);
      dispatch(updateQuantity({ id: product.id, quantityInCart: newQuantity }));
    }
  };

  return (
    <section
      key={product.id}
      className="review flex flex-col h-[800px] w-[30%] bg-card text-text rounded-2xl items-center content-center max-[1320px]:w-[45%] max-md:w-[90%]"
    >
      <div className="imageWrapper flex w-4/5 h-[360px] mt-5 justify-center">
        <img src={product.image_url} alt={product.title}></img>
      </div>
      <h1
        className="flex text-xl line-clamp-1 w-[180px] break-normal h-[44px] truncate"
        title={product.title}
      >
        {product.title}
      </h1>
      {/* В таилвинде как-то сомнительно режется текст, тут он должен заканчиваться ...
      но что-то с этим не так  */}
      <p className="description flex min-h-[240px] max-h-[240px] w-[90%] text-lg line-clamp-2 break-normal text-ellipsis overflow-hidden whitespace-normal ">
        {product.description}
      </p>
      <p className="flex text-2xl p-3 mb-2 rounde-2xl">Цена:{product.price}</p>
      {/* В зависимост от того, добавлен ли уже товар в корзину, мы отображаем кнопку купить или кнопки для изменения количества в корзине  */}
      {currentProductInCart ? (
        <div className="flex w-4/5 h-16  items-center justify-center content-center  ">
          <div className="quantity  flex h-auto w-[80%] items-center justify-center content-center">
            <div className="flex text-text_alt ">
              <Minus
                className=" bg-main w-16 h-16 rounded-xl cursor-pointer  max-md:w-14 max-md:h-14"
                onClick={() => handleDecrease()}
              />
            </div>

            <input
              className=" px-2 mx-4 flex w-20 h-16 rounded-xl bg-main bg-background text-text_alt items-center text-center"
              type="number"
              inputMode="numeric"
              min="1"
              value={productQuantity}
              onChange={(e) => handleUpdateInCart(e)}
            />
            <div className="flex  text-text_alt ">
              <Plus
                className=" w-16 h-16 rounded-xl bg-main cursor-pointer max-md:w-14 max-md:h-14 "
                onClick={() => handleIncrease()}
              />
            </div>
          </div>
        </div>
      ) : (
        <button
          className=" flex bg-main w-3/5  text-text_alt text-2xl p-4 content-end items-center justify-center rounded-2xl"
          onClick={() => handleAddToCart(product)}
        >
          КУПИТЬ
        </button>
      )}
    </section>
  );
};
export default ProductCard;
