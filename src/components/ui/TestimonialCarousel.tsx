"use client";

import { useState, useEffect } from "react";
import styles from "./TestimonialCarousel.module.css";

const testimonials = [
  { text: "DR. PATEL IS EXCELLENT!!", author: "Patient", date: "October 2025" },
  { text: "Dr Patel is very professional and one of the most respected and knowledgeable doctors I know.", author: "Patient", date: "October 2025" },
  { text: "Everyone is very helpful and pleasant to work with!", author: "Patient", date: "September 2025" },
  { text: "I have been with Dr. Patel for many years and always find him empathetic and therapeutic during my visit.", author: "Patient", date: "August 2025" },
  { text: "Everything was perfect, even my ending results.", author: "Patient", date: "July 2025" },
  { text: "Happy to have the good medical care!", author: "Patient", date: "July 2025" },
  { text: "Dr Patel and his staff are amazing.", author: "Patient", date: "July 2025" },
  { text: "Dr Patel was thorough and took time to every detail and answered all my questions", author: "Patient", date: "July 2025" }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <h3 className={styles.title}>Patient Reviews</h3>
      <div className={styles.carouselViewport}>
        {testimonials.map((testimonial, index) => {
          let position = "next";
          if (index === activeIndex) position = "active";
          else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) position = "prev";

          // Calculate offset for inline style if needed, or use classes
          // Simple class-based transition for now:
          const isVisible = index === activeIndex;

          return (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.active : styles.hidden}`}
              aria-hidden={!isVisible}
            >
              <div className={styles.quoteMark}>“</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.meta}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.author}>{testimonial.author}</span>
                <span className={styles.date}>{testimonial.date}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.indicators}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
