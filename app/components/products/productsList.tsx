"use client";
import fetchReviewsAndProducts from "../https/dataFetchOld";
import ProductCard from "./productCard";
import { getProducts } from "../https/dataFetch";
const ProductsList = () => {
  const products = getProducts();
  console.log(products);
  if (products !== undefined && products.length > 0) {
    return (
      <section className=" products-block flex flex-wrap w-4/5  h-auto pt-20 mb-40 justify-center gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    );
  }
};
export default ProductsList;
