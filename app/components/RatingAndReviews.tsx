import Image from "next/image";
import React from "react";

const RatingAndReviews = () => {
  return (
    <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-2 justify-start">
      <div className="max-w-[559px] lg:mt-20 xl:mt-36 lg:order-2">
        <h1 className="font-recoleta-alt-bold text-4xl text-secondary">
          Collect reviews and ratings from customers
        </h1>
        <p className="font-circular-std-book text-xl mt-4 text-tertiary">
          Accelerate your business reputation by 90% and gain social
          proof through reviews and ratings requested from customers.
        </p>
      </div>
      <div className="mt-14 lg:mt-0 lg:order-1">
        <Image
          src="/reviews.svg"
          alt=""
          width={592}
          height={579}
          className="max-w-[70%] lg:max-w-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default RatingAndReviews;
