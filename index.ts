import fs from 'fs';

import day1, { day1part2 } from './day1';
import day2, { day2part2 } from './day2';
import day3, { day3part2 } from './day3';
import day4, { day4part2 } from './day4';
import day5, { day5part2 } from './day5';
import day6, { day6part2 } from './day6';
import day7, { day7part2 } from './day7';
import day8, { day8part2 } from './day8';
import day9, { day9part2 } from './day9';

console.log('app running');
const day = 9;
const input = fs.readFileSync(`./inputs/day${day}input`, 'utf-8');
// console.log('Day1 answer: ', day1());
// console.log('Day1 part2 answer: ', day1part2());
// const encryptedStrategyGuide = fs.readFileSync('./inputs/day2input', 'utf-8');
// console.log('Day2 answer: ', day2(encryptedStrategyGuide));
// console.log('Day2 part2 answer: ', day2part2(encryptedStrategyGuide));
// const day3input = fs.readFileSync('./inputs/day3input', 'utf-8');
// console.log('Day3 answer: ', day3(day3input, false));
// console.log('Day3 part2 answer: ', day3part2(day3input, false));

// const day4input = fs.readFileSync('./inputs/day4input', 'utf-8');
// console.log('Day4 answer: ', day4(day4input));
// console.log('Day4 part2 answer: ', day4part2(day4input));

// console.log('Day5 answer: ', day5(input));
// console.log('Day5 part2 answer: ', day5part2(input));

// console.log('Day6 answer: ', day6(input));
// console.log('Day6 part2 answer: ', day6part2(input));

// console.log('Day7 answer: ', day7(input));
// console.log('Day7 part2 answer: ', day7part2(input));

// console.log('Day8 answer: ', day8(input));
// console.log('Day8 part2 answer: ', day8part2(input));

console.log('Day9 answer: ', day9(input));
console.log('Day9 part2 answer: ', day9part2(input));
