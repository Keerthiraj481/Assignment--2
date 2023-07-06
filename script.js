// Question 1 --> joining the elements of an array
const myColor = ["red", "green", "white", "black"];
let finalStr = "";
for (let i = 0; i < myColor.length; i += 1) {
  if (i === myColor.length - 1) {
    finalStr += myColor[i];
  } else {
    finalStr = finalStr + myColor[i] + ",";
  }
}
console.log(`Answer 1 ---->> ${finalStr}`);

// Question 2 --> Write a JavaScript function to find the difference between two arrays.

const difference = function (arr1, arr2) {
  let uniArray = [];
  uniArray = uniArray.concat(comparingArray(arr1, arr2));
  uniArray = uniArray.concat(comparingArray(arr2, arr1));
  return uniArray;
};
const comparingArray = function (arr1, arr2) {
  let originalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr2[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      originalArray.push(arr1[i]);
    }
  }
  return originalArray;
};
console.log(` \nAnswer 2 --->>> ${difference([1, 2, 3], [100, 2, 1, 10])}`);

// Question 3 --> Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

const unzip = function (arr1) {
  let finalArray = [];
  let strArr = [],
    numArr = [],
    booleanArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j += 1) {
      if (typeof arr1[i][j] === "string") {
        strArr.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "number") {
        numArr.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "boolean") {
        booleanArr.push(arr1[i][j]);
      }
    }
  }
  finalArray.push(strArr, numArr, booleanArr);
  console.log(`\nAnswer 3 ---->> ${finalArray}`);
};
unzip([
  ["a", 1, true],
  ["b", 2, false],
]);
unzip([
  ["a", 1, true],
  ["b", 2],
]);

// Question 4 -->> Write a JavaScript program to find the most frequent item in an array.

const freqItem = function (arr) {
  let repNumber = 0;
  let repCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (repCount === 0) {
      repCount = count;
      repNumber = arr[i];
    } else if (count > repCount) {
      repCount = count;
      repNumber = arr[i];
    }
  }
  return `${repNumber} (${repCount}times)`;
};

console.log(
  `Answer 4 ---> ${freqItem([
    3,
    "a",
    "a",
    "a",
    2,
    3,
    "a",
    3,
    "a",
    2,
    4,
    9,
    3,
  ])}`
);

// Question 5 --->> Write a JavaScript program to find all the unique values in a set of numbers.
const uniValue = function (arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let flag = false;
    for (let j = 0; j < finalArr.length; j++) {
      if (arr[i] === finalArr[j]) {
        flag = true;
        count += 1;
      }
    }
    if (count === 0 && flag === false) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
};

console.log(
  `\nAnswer 5 --->>> ${uniValue([1, 2, 2, 3, 4, 4, 5])}`
);
console.log(`\nAnswer 5 --->>> ${uniValue([1, 2, 3, 4, 5])}`);
console.log(
  `\nAnswer 5 --->>> ${uniValue([
    1, -2, -2, 3, 4, -5, -6, -5,
  ])}`
);

// Question 6. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes

class cyclinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  volume() {
    return Math.PI * this.radius ** 2 * this.height;
  }
}
let cyclinder1 = new cyclinder(5, 15);
console.log(`\nAnswer 6 -->> ${cyclinder1.volume().toFixed(4)}`);

// Question 7.Write a JavaScript program to get the length of a JavaScript object.

let objLength = 0;
let obj = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(obj);
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    objLength += 1;
  }
}
console.log(`Answer 7 ---> ${objLength}`);

// Question 8. Write a bubble sort algorithm in JavaScript.
const bubbleAlgorithm = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(
  `Answer 8 -->> ${bubbleAlgorithm([6, 4, 0, 3, -2, 1])}`
);

// Question 10. Write a JavaScript function to print all the methods in a JavaScript object.

function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}

console.log(`Answer 10 -->> ${FindAllMethods(Math)}`);
console.log(`Answer 10 -->> ${FindAllMethods(Array)}`);
