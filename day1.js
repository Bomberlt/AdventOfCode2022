import fs from 'fs';

const elfsCaloriesTotals = () => {
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
  return totals.sort((a, b) => (a < b ? 1 : -1));
};

export const day1 = () => {
  const totals = elfsCaloriesTotals();
  return totals[0];
};

export const day1part2 = () => {
  return elfsCaloriesTotals()
    .slice(0, 3)
    .reduce((acc, total) => acc + total, 0);
};

export default day1;
