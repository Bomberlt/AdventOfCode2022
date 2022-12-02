import fs from 'fs';

import day1, { day1part2 } from './day1';
import day2, { day2part2 } from './day2';

console.log('app running');
// console.log('Day1 answer: ', day1());
// console.log('Day1 part2 answer: ', day1part2());
const encryptedStrategyGuide = fs.readFileSync('./inputs/day2input', 'utf-8');
console.log('Day2 answer: ', day2(encryptedStrategyGuide));
console.log('Day2 part2 answer: ', day2part2(encryptedStrategyGuide));
