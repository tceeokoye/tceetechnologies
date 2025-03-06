// const x: This represents the x-coordinate (horizontal position) of each hour marker.

// 100: The starting point for the x-coordinate. It's the horizontal center of the clock face.
// 70 * Math.cos(angle * (Math.PI / 180)): This part calculates the horizontal offset based on the angle (in degrees) at which the hour marker should be placed. The Math.cos function provides the cosine of the angle, and multiplying it by 70 adjusts the distance from the center.
// - 10: This adjustment subtracts 10 pixels from the calculated x-coordinate, effectively moving the hour markers to the left by 10 pixels. Adjust this value to control the leftward positioning.
// const y: This represents the y-coordinate (vertical position) of each hour marker.

// 100: The starting point for the y-coordinate. It's the vertical center of the clock face.
// 70 * Math.sin(angle * (Math.PI / 180)): This part calculates the vertical offset based on the angle (in degrees) at which the hour marker should be placed. The Math.sin function provides the sine of the angle, and multiplying it by 70 adjusts the distance from the center.



// In the expression 100 + 70 * Math.cos(angle * (Math.PI / 180)), the 100 represents the center of the clock face along the horizontal axis. Adding 70 to it allows us to specify the radius of the circle (clock face) within which we're positioning the hour markers.

// So, 100 represents the center, and 70 represents the radius. Adding them together (100 + 70) gives us the distance from the left edge of the clock face to the outer edge of the circle where the hour markers are placed.

// If we set it to 170, it would mean the center of the clock face is at (170, 170), which might not be what we want if we're trying to keep the clock centered within a larger container. By separating the center and the radius, we have more flexibility in positioning and scaling the clock within its container.

import React, { useEffect, useState } from 'react';
import styles from './AnalogClock.module.css';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  const [period, setPeriod] = useState('AM');

  useEffect(() => {
    const intervalID = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      // Update period based on hours
      setPeriod(currentTime.getHours() >= 12 ? 'PM' : 'AM');
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours * 30) + (minutes / 2);
  const minuteDeg = minutes * 6 + seconds / 10;
  const secondDeg = seconds * 6;

// Cosine (cos): It helps you calculate how far to move something horizontally, from left to right or vice versa. When you're standing at the center of a circle (or clock face), moving horizontally means moving along the circle's edge.
//Sine (sin): It helps you calculate how far to move something vertically, either up or down. In the context of a circle (or clock face),
 // using  trigonometric approach
 const renderHourMarkers = () => {
    const markers = [];
    for (let i = 1; i <= 12; i++) {
      const angle = (i - 3) * 30; // Calculate the angle for each number (subtract 3 to start from 12 o'clock position)
      const x = 100 + 82 * Math.cos(angle * (Math.PI / 180)) - 10; // Adjust x position to move the markers to the left
      const y = 100 + 82 * Math.sin(angle * (Math.PI / 180)) - 10; // Calculate y position
      markers.push(
        <div
          key={i}
          className={styles.hourMarker}
          style={{ 
            left: `${x}px`, // Set left position
            top: `${y}px` // Set top position
          }}
        >
          {i}
        </div>
      );
    }
    return markers;
  };
  

  return (
    <div className={`${styles.clock} border border-primary1 bg-black-50 relative mb-8`}>
        <div className="text-white absolute top-10 border text-sm px-1 left-1/2 -translate-x-1/2">{period}</div> 
      {renderHourMarkers()}
      <div className={`bg-primary1 ${styles.hourHand}`} style={{ transform: `rotate(${hourDeg}deg)` }}></div>
      <div className={`bg-primary1 ${styles.minuteHand}`} style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
      <div className={` bg-primary1 ${styles.secondHand}`} style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      <div className={styles.center}></div>
    </div>
  );
};

export default AnalogClock;