import React from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export default () => {
  const myAnimal = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    length: 3,
    separator: " ",
  })
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return <li>{myAnimal}</li>;
};
