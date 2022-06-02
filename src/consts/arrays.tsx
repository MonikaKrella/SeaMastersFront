import Square from '../components/atoms/Square/Square';

export const numbers: JSX.Element[] = [];
for (let index = 0; index < 10; index++) {
  numbers.push(<Square key={`${index}a`} content={index + 1}></Square>);
}

export const letters = (
  firstchar: string,
  lastchar: string,
  withEmptyField: boolean = false
) => {
  const array = [];
  let i = firstchar.charCodeAt(0);
  let j = lastchar.charCodeAt(0);
  for (; i <= j; i++) {
    const letter = String.fromCharCode(i).toUpperCase();
    array.push(<Square key={`${i}-${j}`} content={letter}></Square>);
  }
  if (withEmptyField) {
    array.unshift(<Square key={`${i}-${j}`} content={''}></Square>);
  }
  return array;
};

export const pirates = [
  'Jack Sparrow',
  'Blackbread',
  'Barbarossa Brothers',
  'Sir Francis Drake',
  `Thomas Tew`,
  'Henry Morgan',
  'Capitan Kidd',
  'Calico Jack',
  'Madame Cheng',
  'Anny Bonney',
  'Mary Read',
];
