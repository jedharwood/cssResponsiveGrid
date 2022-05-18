export const getRandomIdx = (colourToAvoid, availableColours) => {
  const options = availableColours.filter((c) => c !== colourToAvoid);
  return options[Math.floor(Math.random() * options.length)];
};
