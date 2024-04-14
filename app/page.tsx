import ReviewList from "./components/reviews/reviewList";
import Cart from "./components/cart/cart";
import ProductsList from "./components/products/productsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 w-full bg-main  overflow-visible max-[1000px]:p-2">
      <section className="flex w-4/5 h-full   min-h-screen flex-col items-center justify-between max-md:w-full max-[1000px]:w-full">
        <h1 className="flex text-text_alt w-full text-[96px] rounded-2xl text-center justify-center bg-header max-md:text-4xl ">
          Тестовое задание
        </h1>
        <ReviewList />
        <Cart />
        <ProductsList />
      </section>
    </main>
  );
}
