// Removes current colour from array of colours then returns a random selection from the remaining colours
export const getRandomColour = (colourToAvoid, availableColours) => {
  const options = availableColours.filter((c) => c !== colourToAvoid);
  return options[Math.floor(Math.random() * options.length)];
};
