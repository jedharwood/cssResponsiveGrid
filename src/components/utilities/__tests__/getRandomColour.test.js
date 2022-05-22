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

describe("getRandomColour", () => {
  test("should run 100 times and return a random colour that does not match colourToAvoid each time", () => {
    // Arrange
    const colourToAvoid = "mauve";
    let i = 0,
      result;
    // Act
    while (i < 100) {
      result = getRandomColour(colourToAvoid, availableColours);
      if (result === colourToAvoid) break;
      i++;
    }
    console.log(result);
    //Assert
    expect(result).not.toEqual(colourToAvoid);
  });
});
