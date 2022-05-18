import React, { useState } from "react";
import { getRandomIdx } from "./utilities/getRandomIndex";

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

const shuffleColours = (currentColours, setCurrentColours) => {
  const nextColours = {};
  let availableColours = [...colours];
  for (let i = 1; i < 10; i++) {
    const boxId = `box${i}`;
    nextColours[boxId] = getRandomIdx(currentColours[boxId], availableColours);
    availableColours = availableColours.filter((c) => c !== nextColours[boxId]);
  }
  setCurrentColours({ ...nextColours });
};

export const Grid = () => {
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
