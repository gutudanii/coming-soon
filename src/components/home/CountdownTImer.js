"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const countdownDate = new Date("2024-09-30T23:59:59").getTime(); // Global end date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      } else {
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }
    };

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className="text-center">
      {/* sub-title  */}
      <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-4xl md:text-6xl animate-fade-in mb-8">
        Coming Soon!
      </h2>

      {/* Countdown boxes*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Days */}
        <div className="border-yellow-600 border-2 text-white p-4 rounded-lg shadow-lg">
          <h4 className="font-bold">{timeLeft.days}</h4>
          <p className="font-medium">Days</p>
        </div>

        {/* Hours */}
        <div className="border-yellow-600 border-2 text-white p-4 rounded-lg shadow-lg">
          <h4 className="font-bold">{timeLeft.hours}</h4>
          <p className="font-medium">Hours</p>
        </div>

        {/* Minutes */}
        <div className="border-yellow-600 border-2 text-white p-4 rounded-lg shadow-lg">
          <h4 className="font-bold">{timeLeft.minutes}</h4>
          <p className="font-medium">Minutes</p>
        </div>

        {/* Seconds */}
        <div className="border-yellow-600 border-2 text-white p-4 rounded-lg shadow-lg">
          <h4 className="font-bold">{timeLeft.seconds}</h4>
          <p className="font-medium">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
