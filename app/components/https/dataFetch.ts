"use client";

import { addReview, selectReviews } from "@/app/lib/features/reviewSlice";
import { addProduct, selectProducts } from "@/app/lib/features/productsSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useReviews = () => {
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
  useEffect(() => {
    fetchReviews();
  }, []);
  const { reviews } = useSelector(selectReviews);
  if (reviews.length > 0) {
    return reviews;
  }
};

export const useProducts = () => {
  //я не успел реализовать инфинит скрол, но в принципе реализовывал его до этого в других проектах через танстак квери и сторонние библиотеки
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  async function fetchProducts() {
    try {
      const response = await fetch(
        `http://o-complex.com:1337/products?page=${currentPage}&page_size=18`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(addProduct(data.products)); // Dispatch success action with fetched data
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, []);

  const { products } = useSelector(selectProducts);
  if (products.length > 0) {
    return products;
  }
};
