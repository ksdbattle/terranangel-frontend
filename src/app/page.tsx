'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const calculateTimeLeft = () => {
    const difference = +new Date('2025-07-06T00:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Set window size on mount
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <main>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={400}
      />
      <Image
        src="/shasha.png"
        alt="Shasha"
        width={350} // Base width for quality
        height={350} // Base height for quality
        className="shasha-image" // Apply responsive styles
        priority
      />
      <h1>Happy Birthday, Shasha!</h1>
      <p>Let the countdown to your special day begin!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>COUNTDOWN TO CELEBRATION:</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', color: 'white' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '2rem' }}>{timeLeft.days || '0'}</h3>
            <span>Days</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '2rem' }}>{timeLeft.hours || '0'}</h3>
            <span>Hours</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '2rem' }}>{timeLeft.minutes || '0'}</h3>
            <span>Minutes</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '2rem' }}>{timeLeft.seconds || '0'}</h3>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </main>
  );
}