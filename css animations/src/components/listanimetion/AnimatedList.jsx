import { useState, useEffect } from 'react';

function AnimatedList({ items }) {
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    let delay = 0;
    items.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedItems((prev) => [...prev, item]);
      }, delay);
      delay += 100;
    });
  }, [items]);

  return (
    <div className="list">
      {animatedItems.map((item, index) => (
        <p key={index} className="list-item animate">
          {item}
        </p>
      ))}
    </div>
  );
}

export default AnimatedList;