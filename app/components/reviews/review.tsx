"use client";
import sanitize from "sanitize-html";

const Review: React.FC<{
  text: string;
  id: number;
}> = ({ text, id }) => {
  const dirty = text;

  const cleanText = sanitize(dirty);

  return (
    <section
      key={id}
      className="review flex h-[600px] w-[40%] bg-card text-text rounded-2xl max-md:w-[90%]"
    >
      {cleanText}
    </section>
  );
};
export default Review;
