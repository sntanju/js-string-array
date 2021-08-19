const anthem = 'Amar Sonar Bangla Ami Tomay Valobasi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
//console.log(withoutA);

const smallSlice = anthem.slice(5, 13);
//console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 7);
//console.log(anotherPart);

//substring
const anotehrAnotherPart = anthem.substring(11, 15);
// console.log(anotehrAnotherPart);

const first = 'Amader';
const second = 'City';
//const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibria');
//console.log(fullString);

//

const words2 = ['alim', 'badon', 'cameron', 'david'] 
//const allJoined = words2.join('');
//const allJoined = words2.join(' ');
//const allJoined = words2.join(',');
//const allJoined = words2.join(', ');
const allJoined = words2.join('www');
console.log(allJoined);