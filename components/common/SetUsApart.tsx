import React from 'react';
import { useState } from 'react';
import styles from '../../styles/ConcaveDiv.module.css';

interface Slide {
  id: number;
  imageUrl: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: '/home/better-community.png', // Use the actual image paths
    description: 'Driver-Centric Approach',
  },
  {
    id: 2,
    imageUrl: '/home/better-community.png', // Use the actual image paths
    description: 'Affordable & Convenient Rides',
  },
];

const SetUsApart: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.concaveDiv}>
      <div className={styles.concaveDivInner}>
        <p className="text-center text-2xl font-bold my-5">What Sets Us Apart</p>
      </div>
    </div>
  );
};

export default SetUsApart;
