import random from 'lodash/random';

const randomNumber = (start: number = 0, end: number = 255): number => {
  return random(start, end);
};

export const randomgRGB = (): string => {
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();
  return `rgb(${red}, ${green}, ${blue})`;
};
