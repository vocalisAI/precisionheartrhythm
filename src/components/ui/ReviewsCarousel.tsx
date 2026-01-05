"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ReviewsCarousel.module.css";

const reviews = [
  { text: "Dr Patel is one of the best doctors we have ever had!" },
  { text: "Dr Patel is very professional and one of the most respected doctors I know." },
  { text: "Everyone is very helpful and pleasant to work with!" },
  { text: "I have been with Dr. Patel for many years. Always empathetic and therapeutic." },
  { text: "Everything was perfect, even my ending results." },
  { text: "Dr Patel and his staff are amazing." },
  { text: "Dr Patel was thorough and answered all my questions." },
  { text: "Dr Patel is straight forward and clear. I appreciate that." },
  { text: "Very down to earth, does not rush, and eases my mind when needed." },
  { text: "Dr. Patel is very good at explaining things." },
  { text: "Dr. Patel is always very thorough with my care!" },
  { text: "Top notch, in every way!" }
];

export default function ReviewsCarousel() {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Smooth continuous scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const cardWidth = 320;
        const gap = 24;
        const totalWidth = reviews.length * (cardWidth + gap);
        const next = prev + 1;
        // Reset when we've scrolled through all cards
        if (next >= totalWidth) {
          return 0;
        }
        return next;
      });
    }, 30); // Smooth 30ms updates for fluid motion

    return () => clearInterval(interval);
  }, []);

  // Duplicate reviews for seamless loop
  const displayReviews = [...reviews, ...reviews];

  return (
    <div className={styles.carouselWrapper}>
      <div 
        ref={containerRef}
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${position}px)` }}
      >
        {displayReviews.map((review, idx) => (
          <div key={idx} className={styles.reviewCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
