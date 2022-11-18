
// this is the array
let dinosaurs = [ 
    "Тираннозавр", 
    "Велоцираптор", 
    "Стегозавр", 
    ["Трицератопс", 
    "Брахиозавр", 
    "Птеранодон", 
    "Апатозавр", 
    "Диплодок", 
    "Компсогнат"]
];

console.log(dinosaurs[3][0]);

// lenght of the array
let maniacs = ['Yakko', 'Wakko', 'Dot'];

console.log(maniacs.length - 1);

// getting the last element
let dinosaurs1 = [ 
    "Тираннозавр", 
    "Велоцираптор", 
    "Стегозавр", 
    ["Трицератопс", 
    "Брахиозавр", 
    "Птеранодон", 
    "Апатозавр", 
    "Диплодок", 
    "Компсогнат"]
];

let lastElement = dinosaurs1[dinosaurs1.length - 1];

console.log(lastElement);


// add an element to the array 

let animals = [];
      animals.push("Кот");
      animals.push("Пес");
      animals.push("Лама");

      console.log(animals);


// add an element in the begining

let animals1 = ['Кот', 'Пес', 'Лама'];
    animals1.unshift("Мартышка");
    animals1.unshift("Белый медведь");

 console.log(animals1);


 // delete an alement from the array

 let animals2 = ['Белый медведь', 'Мартышка', 'Кот', 'Пес', 'Лама'];
 let lastAnimal = animals2.pop();
 animals2.pop();

 console.log(animals2);

 // and add the last animal in the begining

 animals2.unshift(lastAnimal);

 console.log(animals2);

 //Finding the last element in nested array

 let din = ["jhkj", "khkjh", ["kjhkj", "lkjlk"]];

 console.log(din[din.length-1][din[din.length-1].length-1]);


 //concat two arrays into one

 let furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
 let scalyAnimals = ["Удав", "Годзилла"];
 let furryAnimalsAndScalyAnimals = furryAnimals.concat(scalyAnimals);

  console.log(furryAnimalsAndScalyAnimals);


  // concat more than two arrays

  let furryAnimals1 = ["Альпака", "Кольцехвостый лемур", "Йети"];
  let scalyAnimals1 = ["Удав", "Годзилла"];
  let featheredAnimals = ["Ара", "Додо"];
  var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);

  console.log(allAnimals);


  //finding an element`s index in array

  let colors = ['red', 'green', 'blue', 'white', 'brown', 'yellow'];
//   colors.indexOf('blue');
  console.log(colors.indexOf('blue'));
  console.log(colors.indexOf('yellow'));


    //finding an element`s number in array

  let colors1 = ['red', 'green', 'blue', 'white', 'brown', 'yellow'];
  console.log(colors1[2]);
  console.log(colors1[4]);

  //if a color is`nt in arra

  console.log(colors.indexOf('black'));
  // -1


  // if in array two or more similar elements you will get the one from begining

  let insects = ['bee', 'ant', 'bee', 'ant', 'bee'];
  console.log(insects.indexOf('bee'));


  // turning array into string can be used any types  (' ', ' + '  w ')

  let boringAnimals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
    console.log(boringAnimals.join(' + '));

// example with numbers

let ages = [11, 14, 79, 44];
console.log(ages.join(" "));



/*
FINDING THE WAY HOME
*/

//Walking to my friend`s home

let landmarks = [];
landmarks.push('My home');
landmarks.push('Path home');
landmarks.push('Blinking lantern');
landmarks.push('Leaking hydrant');
landmarks.push('Fire station');
landmarks.push('Cat shelter');
landmarks.push('My former school');
landmarks.push('Friend`s house');

console.log(landmarks);

//Walking from my friend`s home removing one landmark every time
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();

console.log(landmarks);



