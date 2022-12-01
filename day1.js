import fs from 'fs';

const day1 = () => {
  console.log('day1...');
  const input = fs.readFileSync('./inputs/day1input', 'utf-8');
  const allCalories = input
    .split(`\r\n\r\n`)
    .reduce((acc, elfCalories) => [...acc, elfCalories.split(`\r\n`)], []);
  const firstElfCalories = allCalories[0];
  console.log('firstElfCalories', firstElfCalories);
  const totals = allCalories.reduce(
    (acc, elfCalories) => [
      ...acc,
      elfCalories.reduce((acc, calories) => acc + parseInt(calories), 0),
    ],
    []
  );
  console.log(totals[0]);
  return totals.sort((a, b) => (a < b ? 1 : -1))[0];
};

export default day1;
