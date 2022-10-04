import React from "react";
import Animal from "./Animal";

export default () => {
  let animals = [];
  for (let i = 0; i < 100; i++) {
    animals.push(i);
  }

  return (
    <main>
      <ul>
        {animals.map((i) => {
          return <Animal />;
        })}
      </ul>
    </main>
  );
};
