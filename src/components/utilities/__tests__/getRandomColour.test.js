import { getRandomColour } from "../getRandomColour";

const availableColours = [
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

describe("getRandomIdx", () => {
  test("should run 100 times and return a random numerical value that does not match the index of colourToAvoid each time", () => {
    // Arrange
    const colourToAvoid = "mauve";
    const idxToAvoid = availableColours.indexOf(colourToAvoid);
    let i = 0,
      result;
    // Act
    while (i < 100) {
      result = getRandomColour(colourToAvoid, availableColours);
      if (result === idxToAvoid) break;
      i++;
    }
    //Assert
    expect(result).not.toEqual(idxToAvoid);
  });
});
