"use client";
// по заданию я не был уверен, хотели ли вы чтобы я просто получил текст минуя <script></script>
// или же  должен был монтировать html сохранив разметку, но если нужен был второй вариант, то мне нужно было дополнительно парсить текст
// и скорей всего использовать тэмплейты, если бы полученный текст был бы более осмысленным или хотя бы lorum ipsum, было бы понятней
import Review from "./review";
import { useReviews } from "../https/dataFetch";
const ReviewList = () => {
  const reviews = useReviews();
  console.log(reviews);
  if (reviews !== undefined && reviews.length > 0) {
    return (
      <section className=" reviews-block flex w-full  h-[600px] pt-20 mb-40 justify-center gap-10 max-md:flex-col max-md:items-center">
        {reviews.map(({ text, id }) => (
          <Review key={id} id={id} text={text} />
        ))}
      </section>
    );
  }
};
export default ReviewList;
