// // https://sites.google.com/view/fsd-mern/node/json/task_json

// Task-1
// const a = {
//   Datastructures: [
//     {
//       Name: "tree",

//       course: "Intro",

//       content: ["1", "B", "C"],
//     },

//     {
//       Name: "tree1",

//       course: "Intro1",

//       content: ["1", "B", "C", "d"],
//     },
//   ],

//   xyz: {
//     Name: "Graphics",

//     Topic: ["BFS", "CDF", "Sorting"],
//   },
// };
// console.log(a.Datastructures[1].Name);
// console.log(a.Datastructures[0].Name);
// console.log(a.xyz.Name);
// console.log(a.xyz.Topic);
// console.log(a.xyz.Topic[0]);
// console.log(JSON.stringify(a.Datastructures[1]));
// console.log(a.ABC);
// console.log(a.xyz);

// Task-3
// myObj = {
//   name: "John",

//   age: 30,

//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },

//     { name: "BMW", models: ["320", "X3", "X5"] },

//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };
// console.log(
//   `${myObj.name} has ${myObj.cars[1].name}-${myObj.cars[1].models[1]} at the age of ${myObj.age}`,
// );

// Task-5
// function fromListToObject(arr) {
//   var dict = {};
//   for (var i = 0; i < arr.length; i++) {
//     dict[arr[i][0]] = arr[i][1];
//   }
//   console.log(dict);
// }
// fromListToObject([
//   ["make", "Ford"],
//   ["model", "Mustang"],
//   ["year", 1964],
// ]);

// Task-6
// function transformFirstAndLast(arr) {
//   key1 = arr[0];
//   value = arr[arr.length - 1];
//   dict = {};
//   dict[key1] = value;
//   return dict;
// }
// console.log(
//   transformFirstAndLast([
//     "Kevin",
//     "Bacon",
//     "Love",
//     "Hart",
//     "Costner",
//     "Spacey",
//   ]),
// );

// Task-7
// const person = [
//   {
//     name: "PQR",
//     age: 38,
//   },

//   {
//     name: "ABC",
//     age: 35,
//   },

//   {
//     name: "XYZ",
//     age: 47,
//   },
// ];
// person.sort((a, b) => b.age - a.age);
// console.log(person[0].age);

// Task-8
var test = {
  division1: {
    name: ["Z", "B", "H"],
  },

  division2: {
    name: ["Y", "A", "G"],
  },
};
for (i in test) {
  test[i].name.sort();
}
console.log(test);
console.log()