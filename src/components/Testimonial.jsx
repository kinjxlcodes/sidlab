import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Partnering with SidLabs has been a game-changer for our business. Their innovative AI solutions and exceptional support have streamlined our operations, boosted efficiency, and driven remarkable growth. Highly recommend their expertise and cutting-edge technology!",
    author: "David L.",
    rating: 5.0,
  },
  {
    text: "The AI solutions provided by SidLabs have revolutionized our workflow. Their technology is both powerful and user-friendly, and their team is incredibly responsive and knowledgeable. We're thrilled with the results and couldn't ask for a better partner in innovation.",
    author: "Jessica M.",
    rating: 5.0,
  },
  {
    text: "SidLabs has exceeded our expectations. Their AI solutions have greatly enhanced our data analysis capabilities, and their team is always available to help with any issues. I highly recommend their services.",
    author: "Mark S.",
    rating: 5.0,
  },
  {
    text: "Working with SidLabs has been a pleasure. Their AI expertise and customer service are unparalleled. Our productivity has increased significantly since implementing their solutions.",
    author: "Susan B.",
    rating: 5.0,
  },
];

const TestimonialCard = ({ text, author, rating }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md w-80 mx-4 flex-shrink-0 border-2 border-gradient-to-r from-blue-400 to-white"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl text-blue-500 mb-4">“</div>
    <p className="text-gray-700 mb-4">{text}</p>
    <div className="text-gray-900 font-semibold">{author}</div>
    <div className="text-yellow-500 text-xl mt-2">⭐ {rating}</div>
  </motion.div>
);

const Testimonial = () => {
  return (
    <div className="bg-blue-50 py-12 px-8 flex justify-center rounded-lg lg:rounded-[30px]">
      <div className="w-full max-w-6xl flex space-x-8">
        {/* Left Side Content */}
        <div className="flex-1 text-left">
          <div className="bg-blue-500 text-transparent bg-clip-text pb-16 text-6xl font-thin tracking-light lg:mt-12 lg:text-6xl">Testimonial</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            See What Our Clients Say About Us
          </h2>
          <p className="text-gray-500">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Right Side Testimonials */}
        <div className="flex-1 relative overflow-hidden rounded-lg lg:rounded-[30px]">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["100%", "0%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  text={testimonial.text}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </motion.div>
          {/* Fading gradient at the left */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none" />
          {/* Fading gradient at the right */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
