import fs from 'fs';

import day1, { day1part2 } from './day1';
import day2, { day2part2 } from './day2';
import day3, { day3part2 } from './day3';
import day4 from './day4';

console.log('app running');
// console.log('Day1 answer: ', day1());
// console.log('Day1 part2 answer: ', day1part2());
// const encryptedStrategyGuide = fs.readFileSync('./inputs/day2input', 'utf-8');
// console.log('Day2 answer: ', day2(encryptedStrategyGuide));
// console.log('Day2 part2 answer: ', day2part2(encryptedStrategyGuide));
// const day3input = fs.readFileSync('./inputs/day3input', 'utf-8');
// console.log('Day3 answer: ', day3(day3input, false));
// console.log('Day3 part2 answer: ', day3part2(day3input, false));

const day4input = fs.readFileSync('./inputs/day4input', 'utf-8');
console.log('Day4 answer: ', day4(day4input));
// console.log('Day4 part2 answer: ', day4part2(day4input, false));
