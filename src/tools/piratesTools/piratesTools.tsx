import { pirates } from '../../consts/arrays';

export const choosePirates = () => {
  let selectedPirates = new Set<string>();

  do {
    const index = Math.floor(Math.random() * pirates.length);
    selectedPirates.add(pirates[index]);
  } while (selectedPirates.size < 2);
  const piratesArray = Array.from(selectedPirates);
  return piratesArray;
};
