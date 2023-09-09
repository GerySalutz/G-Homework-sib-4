const randomNumberArray = [];

for (let i = 0; i < 100; i++) {
  const randomValue = Math.floor(Math.random() * 50) + 1;
  randomNumberArray.push(randomValue);
}

console.log("Array Angka Acak:");
console.log(randomNumberArray);


const evenArray = [];
const oddArray = [];

for (let i = 0; i < randomNumberArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(randomNumberArray[i]);
  } else {
    oddArray.push(randomNumberArray[i]);
  }
}


console.log("\nArray Genap:");
console.log(evenArray);
console.log("\nArray Ganjil:");
console.log(oddArray);


const oddNumbers = [];
for (let i = 0; i < oddArray.length; i++) {
  oddNumbers.push(oddArray[i]);
}


const evenNumbers = [];
for (let i = 0; i < evenArray.length; i++) {
  evenNumbers.push(evenArray[i]);
}


function calculateStatistics(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    total += number;

    if (number < min) {
      min = number;
    }

    if (number > max) {
      max = number;
    }
  }

  const average = total / numbers.length;

  return {
    min,
    max,
    total,
    average,
  };
}


const oddStatistics = calculateStatistics(oddNumbers);
const evenStatistics = calculateStatistics(evenNumbers);

console.log("\nStatistik Array Ganjil:");
console.log(oddStatistics);

console.log("\nStatistik Array Genap:");
console.log(evenStatistics);

if (evenStatistics.min > oddStatistics.min) {
  console.log("Min array genap lebih besar daripada Min array ganjil");
} else if (evenStatistics.min < oddStatistics.min) {
  console.log("Min array ganjil lebih besar daripada Min array genap");
} else {
  console.log("Min array genap dan Min array ganjil sama besar");
}

if (evenStatistics.max > oddStatistics.max) {
  console.log("Max array genap lebih besar daripada Max array ganjil");
} else if (evenStatistics.max < oddStatistics.max) {
  console.log("Max array ganjil lebih besar daripada Max array genap");
} else {
  console.log("Max array genap dan Max array ganjil sama besar");
}

if (evenStatistics.total > oddStatistics.total) {
  console.log("Total array genap lebih besar daripada Total array ganjil");
} else if (evenStatistics.total < oddStatistics.total) {
  console.log("Total array ganjil lebih besar daripada Total array genap");
} else {
  console.log("Total array genap dan Total array ganjil sama besar");
}

if (evenStatistics.average > oddStatistics.average) {
  console.log("Rata-Rata array genap lebih besar daripada Rata-Rata array ganjil");
} else if (evenStatistics.average < oddStatistics.average) {
  console.log("Rata-Rata array ganjil lebih besar daripada Rata-Rata array genap");
} else {
  console.log("Rata-Rata array genap dan Rata-Rata array ganjil sama besar");
}
