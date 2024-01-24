
// // Assignment 6


const country = "india"
const continent = "Asia"
let population = BigInt(1428627663)
console.log(country , continent , population)



let  isIsland = false
let language 
console.log( isIsland , country , population , language);


language = "Gujarati"


let halfPopulation = parseInt(population) / 2
console.log(halfPopulation)

populationIncrement = parseInt(population) + 1
console.log(populationIncrement)



let finlandPopulation = BigInt(6000000)
if ( population > finlandPopulation){
    console.log("true")
}else {
    console.log("False")
}


let averagePopulation = BigInt(33000000)
if (averagePopulation > population){
    console.log("True")
} else {
    console.log("False")
}

let description = "'Portugal is in Europe, and its 11 million people speak portuguese"
console.log(description)





population = 13
population = 130


if(population > averagePopulation){
    console.log("Portugal's population is above average")
} else{
    console.log("'Portugal's population is 22 million below average")
}



console.log('9' - '5')
console.log('19' - '13' + '17')
console.log( '19' - '13' + 17 )
console.log( '123' < 57 )
console.log(5 + 6 + '4' + 9 - 4 - 2)

let numNeighbours =1


// let numNeighbours = prompt('How many neighbour countries does your country have?'); 
if (numNeighbours == 1) {
  console.log('Only 1 border!');
} 
else if (numNeighbours > 1) {
  console.log('More than 1 border');
} 
  console.log('No borders');


numNeighbours = 1

if ( numNeighbours > 1){
    console.log("more than one boarder")
} else {
    console.log("No boarder")
}


numNeighbours = parseInt(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  }


const speaksEnglish = true;
population = 40000000;  
isIsland = false;  


if (speaksEnglish && population < 50000000 && !isIsland) {
    console.log('You should live in Portugal :)');
} else {
    console.log('Portugal does not meet your criteria :(');
}


let languaGe = 'chinese || mandarin'

switch(languaGe){
  case 'chinese || mandarin' :
    console.log('MOST number of native speakers!')
    break;
    
    case 'spanish':
    console.log('2nd place in number of native speakers')
    break;

        
    case 'English':
    console.log('3rd place')
    break;

    
    case 'hindi':
    console.log('Number 4')
    break;


    case 'arabic':
    console.log('5th most spoken language')
    break;

    default:
    console.log('Great language too :D')
      
}


population = 33_000_000; 


let result = (population > 33_000_000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);


population = 13;
result = (population > 33_000_000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);

population = 130;
result = (population > 33_000_000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);

population = 33_000_000;
result = (population > 33_000_000) ? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);


// const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// const bill1 = 275;
// const tip1 = calculateTip(bill1);
// console.log(The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1});


// // const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// const bill2 = 40;
// const tip2 = calculateTip(bill2);
// console.log(The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2});

// // const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// const bill3 = 430;
// const tip3 = calculateTip(bill3);
// console.log(The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3});

//  4th clahhenge


// // video 7

// true; 
// console.log(javascriptIsFun);
// let javascriptIsFun = true;



// // let mark_mass = 78;
// // let mark_hight = 1.69;
// // let john_mass = 92;
// // let john_hight = 1.95;

// // let bmi_mark = mark_mass/mark_hight**2
// // let bmi_john = john_mass/john_hight**2

// // console.log(bmi_mark);
// // console.log(bmi_john);

// // markHigherBMI = bmi_mark>bmi_john
// // console.log(markHigherBMI)





// let mark_mass = 78;
// let mark_hight = 1.69;
// let john_mass = 92;
// let john_hight = 1.95;

// let bmi_mark = mark_mass/mark_hight**2
// let bmi_john = john_mass/john_hight**2

// if (bmi_mark < bmi_john) {
//     console.log(john's bmi ${bmi_john} is higher than the mark's bmi ${bmi_mark})
//   } else {
//     console.log(marks's bmi ${bmi_mark} is higher than the john's bmi ${bmi_john})
//   }


// let Dolphine = 96 +108+ 89
// let avrgDol = (Dolphine / 3);
// let Koalas = 88+91+ 110
// let avrgkoa = (Koalas / 3);
// let minimumScore = 100

// if (avrgDol >= minimumScore && avrgkoa>= minimumScore) {
//     if (avrgDol > avrgkoa) {
//         console.log("Dolphins win the trophy!");
//     } else if (avrgkoa> avrgDol) {
//         console.log("Koalas win the trophy!");
//     } else {
//         console.log("It's a draw! Both teams win the trophy!");
//     }
// } else {
//     console.log("No team wins the trophy. Both teams must have a score of at least 100.");
// }


// let Dolphine = 97+112+101
// let avrgDol = (Dolphine / 3);
// let Koalas = 109+95+123
// let avrgkoa = (Koalas / 3);
// let minimumScore = 100

// if (avrgDol >= minimumScore && avrgkoa>= minimumScore) {
//     if (avrgDol > avrgkoa) {
//         console.log("Dolphins win the trophy!");
//     } else if (avrgkoa> avrgDol) {
//         console.log("Koalas win the trophy!");
//     } else {
//         console.log("It's a draw! Both teams win the trophy!");
//     }
// } else {
//     console.log("No team wins the trophy. Both teams must have a score of at least 100.");
// }

// // challange 1 


// const calcAverage = (a, b, c) = (a + b + c) / 3; console.log(calcAverage(3, 4, 5));

// // Test 1

// let scoreDolphins = calcAverage (44, 23, 71); let scorekoalas = calcAverage (65, 54, 49); console.log(scoreDolphins, scorekoalas);

// const checkWinner = function (avgDolphins, avgKoalas)

// {

// if (avgDolphins >= 2 * avgKoalas) { console.log('Dolphins win (${avgDolphins) vs. $ (avgKoalas})`);

// } else if (avgKoalas >= 2 * avgDolphinst { console.log('Koalas win (${avgKoales} vs. $ (avgDolphins})`);

// } else {

// }

// }

// console.log('No team wins...');

// checkWinner(scoreDolphins, scorekoalas);

// checkWinner(576, 111);

// // Test 2

// scoreDolphins = calcAverage (85, 54, 41); scorekoalas = calcAverage (65, 54, 49);
// console.log(scoreDolphins, scorekoalas); checkWinner(scoreDolphins, scoreKoalas);


// // challange 2

// const calcTip = function (bill) {

//     return bill >= 50 && bill = 300 7 bill * 0.15: bill * 0.2;
    
//     }
    
//     // const calcTip = bill => bill >= 50 && bill <= 300 ? bill* 0.15: bill * 0.2;
    
//     5
    
//     const bills = [125, 555, 44];
    
//     Const tips = [calcTip (bills[0]), calcTip (bills[1]), calcTip(bills [2])];
    
//     const totals = [bills [0] + tips[0], bills [1] , bills [0] + tips[0]]; 
    
//     console.log(bills, tips, totals);

// // challange 3

// const mark = {

//     fullName: 'Mark Miller',
    
//     mass: 78,
    
//     height: 1.69,
    
//     calcBMI: function () {
    
//     this.bmi = this.mass / this.height ** 2;
    
//     return this.bmi;
    
//     }
    
//     };
    
//     const john = {
    
//     fullName: 'John Smith',
    
//     mass: 92,
    
//     height: 1.95,
    
//     calcBMI: function () {
    
//     this.bmi = this.mass / this.height * 2;
    
//     return this.bmi;
//     }
    
//     };    
//     mark.calcBMI();
//     john.calcBMI();
//     console.log(mark.bmi, john.bmi);

// // challange 4

// const calcTip = function (bill) {

//     return bill >= 50 && bill <= 300 7 bill * 0.15 :
    
//     bill * 0.2;
    
//     }
    
//     const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 521;
    
//     const tips = [];
    
//     const totals = [];
    
//      for (let 1 = 0; i < bills.length; i++) {
    
//     const tip = calcTip(bills[i]);
    
//     tips.push(tip);
    
//     totals.push(tip + bills[i]);
//     }
//     console.log(bills, tips, totals);
    
//     const calcAverage = function (arr) {
    
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
    
//     // sum = sum + arr[i];
    
//     sum += arr[i];
    
//     }
    
//     return sum / arr.length;
    
//     } console.log(calcAverage ([2, 3, 7])); console.log(calcAverage(totals)); console.log(calcAverage(tips));


// Assignment part 1 


// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and 
//   its capital city is ${capitalCity}`;
//   }
//   const descPortugal = describeCountry('Portugal', 10,
//   'Lisbon');
//   const descGermany = describeCountry('Germany', 83,
//   'Berlin');
//   const descFinland = describeCountry('Finland', 6,
//   'Helsinki');
//   console.log(descPortugal, descGermany, descFinland)




// function percentageOfWorld1(population) {
//    return (population / 7900) * 100;
//    }
//   const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
//   };
//   const percPortugal1 = percentageOfWorld1(10);
//   const percChina1 = percentageOfWorld1(1441);
//   const percUSA1 = percentageOfWorld1(332);
//   console.log(percPortugal1, percChina1, percUSA1)




// const percentageOfWorld3 = population => (population / 7900)* 100;
// const percPortugal3 = percentageOfWorld3(10);
// const percChina3 = percentageOfWorld3(1441);
// const percUSA3 = percentageOfWorld3(332);
// console.log(percPortugal3, percChina3, percUSA3)


// const describePopulation = function (country, population) {
// const percentage = percentageOfWorld1(population);
// const description = `${country} has ${population} million 
// people, which is about ${percentage}% of the world.`;
// console.log(description);
// };
// describePopulation('Portugal', 10);
// describePopulation('China', 1441);
// describePopulation('USA',322);


// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
// percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]),
// percentageOfWorld1(populations[2]),
// percentageOfWorld1(populations[3])
// ];
// console.log(percentages);


// const neighbours = ['Norway', 'Sweden', 'Russia'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D');
//   }
//   neighbours[neighbours.indexOf('Sweden')] = 'Republic of  Sweden';
//   console.log(neighbours)


// const myCountry = {
// country: 'Finland',
// capital: 'Helsinki',
// language: 'finnish',
// population: 6,
// neighbours: ['Norway', 'Sweden', 'Russia']
// }       


// console.log(
// `${myCountry.country} has ${myCountry.population} million 
// ${myCountry.language}-speaking people, 
// ${myCountry.neighbours.length} neighbouring countries and 
// a capital called ${myCountry.capital}.`
// );
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);



// myCountry = {
// country: 'Finland',
// capital: 'Helsinki',
// language: 'finnish',
// population: 6,
// neighbours: ['Norway', 'Sweden', 'Russia'],
// describe: function () {
// console.log(
// `${this.country} has ${this.population} million 
// ${this.language}-speaking people, 
// ${this.neighbours.length} neighbouring countries and a 
// capital called ${this.capital}.`
// );
// },
// checkIsland: function () {
// this.isIsland = this.neighbours.length === 0 ? true :
// false;
                         
// }
// };
// myCountry2.describe();
// myCountry2.checkIsland();
// console.log(myCountry2);


// for (let voter = 1; voter <= 50; voter++)
// console.log(Voter number ${voter} is currently voting);

// populations = [10, 1441, 332, 83];
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
// const perc = percentageOfWorld1(populations[i]);
// percentages2.push(perc);
// }
// console.log(percentages2)

// const listOfNeighbours = [
// ['Canada', 'Mexico'],
// ['Spain'],
// ['Norway', 'Sweden', 'Russia'],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
// for (let y = 0; y < listOfNeighbours[i].length; y++)
// console.log(Neighbour: ${listOfNeighbours[i][y]});


// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
// const perc = percentageOfWorld1(populations[i]);
// percentages3.push(perc);
// i++;
// }
// console.log(percentages3)
