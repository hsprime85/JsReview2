// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log("im hanson");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleOrangeJuice = fruitProcessor(3, 2)
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2020 - birthYear;
// }
// const age1 = calcAge1(1985);

// const calcAge2 = function (birthYear) {
//     return 2020 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = birthYear => 2020 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1985, "Hanson"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const currentAge = calcAge(birthYear);
//     const retirement = 65 - currentAge;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'hyunsoo'));
// console.log(yearsUntilRetirement(1944, 'mike'));

// const calcAverage = sumScore => (sumScore) / 3;

// function checkWinner(dolphin1, dolphin2, dolphin3, koala1, koala2, koala3) {
//     let dolphinSum = dolphin1 + dolphin2 + dolphin3;
//     let koalaSum = koala1 + koala2 + koala3;

//     const dolphinAvg = calcAverage(dolphinSum);
//     const koalaAvg = calcAverage(koalaSum);

//     if (dolphinAvg >= (koalaAvg) * 2) {
//         console.log(`dolphin wins ${dolphinAvg} VS ${koalaAvg}`);
//     } else if (koalaAvg >= (dolphinAvg) * 2) {
//         console.log(`koala wins ${koalaAvg} VS ${dolphinAvg}`);
//     } else {
//         console.log("no body wins")
//     }
// }

// const data1 = checkWinner(44, 23, 71, 65, 54, 49);

// const data2 = checkWinner(85, 54, 41, 23, 34, 27);



// const calcAvg = (a, b, c) => (a + b + c) / 3;
// // test 1
// let scoreDolphins = calcAvg(44, 23, 71);
// let scoreKoalas = calcAvg(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} VS ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} VS ${avgDolphins})`);
//     } else {
//         console.log("no team wins");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// // test 2
// scoreDolphins = calcAvg(85, 54, 41);
// scoreKoalas = calcAvg(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// const years = [1985, 1990, 1994, 2000, 1995];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3, age4, age5);


// const friends = ['michale', 'steven', 'peter'];


// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('john')
// console.log(friends);

// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// const poppedFront = friends.shift();
// console.log(friends);
// console.log(poppedFront);

// friends.push(23);
// console.log(friends.indexOf('steven'));
// console.log(friends.includes('steven'));

// if (friends.includes('steven')) {
//     console.log('you have a friend called steven');
// }


// function calcTip(bill) {
//     let tip = 0;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//         return tip;
//     } else {
//         tip = bill * 0.2;
//         return tip;
//     }
// }

// // const calcTip = function (bill) {
// //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(400));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips)

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];
// console.log(totals);


// const hanson = {
//     firstName: 'Hanson',
//     lastName: 'Jeon',
//     age: 2020 - 1985,
//     job: 'fullstack developer',
//     friends: ['Tony', 'Thor', 'Bruce']
// }
// console.log(hanson)
// console.log(hanson.lastName)
// console.log(hanson['lastName'])

// console.log(hanson.friends[0])


// const interestedIn = prompt('What do you want to know about Hanson? Choose between firstName, lastName, age, job, and friends')

// if (hanson[interestedIn]) {
//     alert(hanson[interestedIn]);
// } else {
//     prompt('Wrong request! Choose between firstName, lastName, age, job, and friends');

// }

// hanson.location = 'Korea';
// hanson['twitter'] = '@hansonjeon';
// console.log(hanson);

// challenge 
// hanson has 3 friends, and his best friend is called tony

// console.log(`${hanson.firstName} has ${hanson.friends.length} friends, and his best friend is called ${hanson.friends[0]}`);


// const hanson = {
//     firstName: 'Hanson',
//     lastName: 'Jeon',
//     birthYear: 1985,
//     job: 'fullstack developer',
//     hasDriversLicense: true,
//     friends: ['Tony', 'Thor', 'Bruce'],
//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//         return this.age;
//     },
// calcAge: function (birthYear) {
//     return 2020 - birthYear;
// }
// calcAge: function () {
//     console.log(this)
//     return 2020 - this.birthYear;
// }
// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old, ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
// }
// };

// console.log(hanson.calcAge());
// console.log(hanson.getSummary());


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     tall: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.tall * this.tall);
//         return this.bmi;
//     }

// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     tall: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.tall * this.tall);
//         return this.bmi;
//     }

// }
// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMi(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`);
// } else {
//     console.log(`${john.fullName}'s BMi(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`);

// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`lifting weights repetition ${i}`);
// }

// const hanson = [
//     'hanson',
//     'jeon',
//     2020 - 1985,
//     'fullstack developer',
//     ['tony', 'thor', 'bruce']
// ];

// for (let i = 0; i < hanson.length; i++) {
//     console.log(hanson[i], typeof hanson[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2020 - years[i]);
// }
// console.log(ages);

// // continue and break
// const hanson = [
//     'hanson',
//     'jeon',
//     2020 - 1985,
//     'fullstack developer',
//     ['tony', 'thor', 'bruce'],
//     true
// ];
// console.log('--- only strings---')
// for (let i = 0; i < hanson.length; i++) {
//     if (typeof hanson[i] !== 'string') continue;
//     console.log(hanson[i], typeof hanson[i]);
// }

// console.log('---  break with numbers ---')

// for (let i = 0; i < hanson.length; i++) {
//     if (typeof hanson[i] === 'number') break;
//     console.log(hanson[i], typeof hanson[i]);
// }


// const hanson = [
//     'hanson',
//     'jeon',
//     2020 - 1985,
//     'fullstack developer',
//     ['tony', 'thor', 'bruce'],
//     true
// ];

// for (let i = hanson.length - 1; i >= 0; i--) {
//     console.log(i, hanson[i]);
// }


// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--------starting exercise set ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise set ${exercise} : Lifting weight repetition ${rep}`);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`lifting weights repetition ${i}`);
// }
// let rep = 1
// while (rep <= 10) {
//     console.log(`lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end')
// }




const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;

}

console.log(bills, tips, totals);
console.log(calcAvg(totals));
console.log(calcAvg(tips));



