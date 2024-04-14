"use client";
import { useState } from "react";
import { selectCartProducts } from "../../lib/features/productsInCartSlice";
import { ProductInCart } from "./itemInCart";
import { useAppSelector } from "@/app/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const products = useAppSelector(selectCartProducts);
  const cartProductsList = products.cart;
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  function isValidPhoneNumber(input: string) {
    const trimmedInput = input.trim(); // Remove leading/trailing whitespace
    const phoneNumberRegex = /^\d{11}$/; // Regular expression for +7 followed by 10 digits
    return phoneNumberRegex.test(trimmedInput);
  }

  // реквест можно вынести в папку https
  const makeOrder = async () => {
    if (isValidPhoneNumber(phoneNumber)) {
      const cartForRequest = Object.values(cartProductsList).map((item) => ({
        id: item.id,
        quantity: item.quantityInCart, // Set initial quantityInCart to 0
      }));
      const requestBody = { phone: phoneNumber, cart: cartForRequest };
      console.log(requestBody);

      try {
        const response = await fetch("http://o-complex.com:1337/order", {
          method: "POST", // Set the request method to POST
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(requestBody), // Convert the data object to a JSON string
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json(); // Parse the response as JSON
        if ((responseData.success = 1)) {
          toast.success("Заказ сделан");
          console.log("Заказ сделан", responseData);
        } else
          toast.error("Произошла ошибка во время заказа,", responseData.error);
      } catch (error) {
        toast.error("Произошла ошибка во время заказа, попробуйте позже");
      }
    } else {
      toast.warning("Неправильно введен номер, он должен иметь 11 цифр");
    }
  };

  return (
    <section className="cart flex flex-col mb-[200px] h-auto w-[50%] bg-card text-text rounded-2xl content-end max-md:w-full max-[1000px]:w-full">
      <h1 className="text-2xl p-3 border-b-2  border-text ">
        Добавленные товары
      </h1>
      <section className="items-list flex w-full h-auto flex-col">
        {cartProductsList.length > 0 ? (
          cartProductsList.map((item) => (
            <ProductInCart key={item.id} product={item} />
          ))
        ) : (
          <p className="pl-3">Корзина пуста</p>
        )}
      </section>
      <section className="buttons flex h-full bottom-0 w-full  items-end  justify-start max-md:flex-col max-md:items-center">
        <input
          type="tel"
          className="flex bg-main rounded-2xl h-[68px] w-3/5 p-2 m-5 text-text_alt mr-0 text-3xl  pl-4 justify-end max-md:w-[90%]  max-md:align-middle max-md:mr-5 "
          placeholder="+7 (___) ___ __-__"
          onChange={(e) => handleChange(e)}
          required
        />
        <button
          className="flex text-text_alt h-[68px] p-2 m-5 text-xl w-2/5 items-center justify-center bg-main rounded-2xl  max-md:w-[90%] "
          onClick={() => makeOrder()}
        >
          ЗАКАЗАТЬ
        </button>
      </section>
      <ToastContainer toastStyle={{ backgroundColor: "#D9D9D9" }} />
    </section>
  );
};

export default Cart;
