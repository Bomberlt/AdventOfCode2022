import day1input from './inputs/day1input';

const day1 = () => {
  console.log('day1...');
  const input = day1input;
  //   console.log(
  //     input.split(`

  // `)[0]
  //   );
  const allCalories = input
    .split(
      `

`
    )
    .reduce(
      (acc, elfCalories) => [
        ...acc,
        elfCalories.split(`
`),
      ],
      []
    );
  const firstElfCalories = allCalories[0];
  console.log(firstElfCalories);
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
