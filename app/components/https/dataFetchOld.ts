"use client";

import { addReview, selectReviews } from "@/app/lib/features/reviewSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { addProduct, selectProducts } from "@/app/lib/features/productsSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const fetchReviewsAndProducts = () => {
  const dispatch = useAppDispatch();

  async function fetchReviews() {
    try {
      const response = await fetch("http://o-complex.com:1337/reviews");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(addReview(data)); // Dispatch success action with fetched data
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }

  async function fetchProducts() {
    try {
      const response = await fetch(
        "http://o-complex.com:1337/products?page=1&page_size=20"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(addProduct(data)); // Dispatch success action with fetched data
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }
  useEffect(() => {
    fetchReviews();
    fetchProducts();
    console.log("i fire once");
  }, []);

  const { reviews } = useSelector(selectReviews);
  const { products } = useSelector(selectProducts);
  const data = {
    reviews: reviews,
    products: products,
  };
  return data;
};

export default fetchReviewsAndProducts;
