import React, { useState } from "react";
import { getRandomColour } from "./utilities/getRandomColour";

const colours = [
  "blue",
  "mauve",
  "taupe",
  "plum",
  "purple",
  "mint",
  "green",
  "lilac",
  "blue-steel",
  "gold",
];

// Reassign the colour of each grid item *almost* at random. This code endures that no grid item is randomly
// assigned the same colour on two consecutive shuffles and also ensures that no two grid items are the same
// colour simultaneously so I guess it's not really that random at all.
const shuffleColours = (currentColours, setCurrentColours) => {
  // Initialize an empty object to store the updated colours
  const updatedColours = {};
  // Make copy of colours
  let availableColours = [...colours];
  // Iterate through 1-9
  for (let i = 1; i < 10; i++) {
    const boxId = `box${i}`;
    // Add a key/value pair of boxId & colour to the updatedColours object
    updatedColours[boxId] = getRandomColour(
      currentColours[boxId],
      availableColours
    );
    // After the colour has been assigned it is removed from the available colours array to avoid duplication
    availableColours = availableColours.filter(
      (c) => c !== updatedColours[boxId]
    );
  }
  setCurrentColours({ ...updatedColours });
};

export const Grid = () => {
  // Defining starting colours for the grid items in useState
  let [currentColours, setCurrentColours] = useState({
    box1: colours[0],
    box2: colours[1],
    box3: colours[2],
    box4: colours[3],
    box5: colours[4],
    box6: colours[5],
    box7: colours[6],
    box8: colours[7],
    box9: colours[8],
  });

  // Generate a nine square, numbered grid with unique css classes
  const generateGridItems = () => {
    let gridItems = [];
    for (let i = 1; i < 10; i++) {
      const boxClass = `box-${i}`;
      const colourClass = currentColours[`box${i}`];
      gridItems.push(
        <div
          key={i}
          className={`item ${boxClass} ${colourClass}`}
          onClick={() => shuffleColours(currentColours, setCurrentColours)}
        >
          {i}
        </div>
      );
    }
    return gridItems;
  };

  return <div className="grid">{generateGridItems()}</div>;
};
