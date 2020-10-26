import React, { useEffect, useState } from 'react';

export default function HelloEffectHook() {
  const [greeting, setGreeting] = useState(`Hello!`);
  const [updatedAt, setUpdatedAtGreeting] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (updatedAt === 0) {
        return;
      }
      const nextValue = `Hello Bob ${Math.random()}`;
      console.log('setGreeting', nextValue);
      setGreeting(nextValue);
    }, 2000);
  }, [updatedAt]);

  const btnClickHandler = () => setUpdatedAtGreeting(Date.now());

  return (
    <div>
      <h3>HelloEffectHook</h3>
      <h5>Greeting: {greeting} </h5>
      <button onClick={btnClickHandler}>Greet</button>
    </div>
  );
}
