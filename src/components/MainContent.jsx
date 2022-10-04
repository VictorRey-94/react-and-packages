import React from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export default () => {
  let myAnimals = [];

  for (let i = 0; i < 50; i++) {
    myAnimals.push(
      uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        length: 3,
        separator: " ",
      })
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    );
  }

  // `My animal is ${animal}`
  return (
    <main>
      <ul>
        {myAnimals.map((animal) => {
          return <li>{animal}</li>;
        })}
      </ul>
    </main>
  );
};
