import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Type definition
interface Feedback {
  name: string;
  title: string;
  text: string;
  stars: number;
  image: string;
}

// Feedback data
const feedbacks: Feedback[] = [
  {
    name: "Mashum",
    title: "CEO, Red Hat Media",
    text: "I have added 17 sites on Blog Management simply because they deliver when it comes to orders! You request payment and you get it. As simple as that!",
    stars: 5,
    image: "https://placehold.co/100x100/EEE/31343C?text=Mashum&font=Roboto",
  },
  {
    name: "Sandy",
    title: "Real Wealth Business",
    text: "Start a blog, get it to achieve some metrics, list it on Blog Management, and you're done. I spend 30 mins a day and get paid $100!",
    stars: 5,
    image: "https://placehold.co/100x100/EEE/31343C?text=Sandy&font=Roboto",
  },
  {
    name: "John Doe",
    title: "Blogger",
    text: "Blog Management has been a game-changer for me. The platform is easy to use, and the support is excellent.",
    stars: 4,
    image: "https://placehold.co/100x100/EEE/31343C?text=Mashum&font=Roboto",
  },
  {
    name: "Jane Smith",
    title: "Content Creator",
    text: "I've tried other platforms, but Blog Management is the best. Highly recommended!",
    stars: 5,
    image: "https://placehold.co/100x100/EEE/31343C?text=Sandy&font=Roboto",
  },
];

const PublisherFeedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  }, []);

  const startAutoplay = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      goToNext();
      startAutoplay();
    }, 5000);
  }, [goToNext]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startAutoplay]);

  const feedback = feedbacks[currentIndex];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
   
           <h2 className="text-2xl md:text-3xl font-semibold text-center">
          <span className="text-blue-600 font-bold">  Feedback from </span>{" "}
our Publishers on        <span className="text-blue-600 font-bold">  Blog Management  </span>
        </h2>

        <div className="relative max-w-xl mt-6 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-4 mb-4 justify-center">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feedback.name}</h3>
                  <p className="text-sm text-gray-500">{feedback.title}</p>
                </div>
              </div>

              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < feedback.stars ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-left">{feedback.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PublisherFeedback;
