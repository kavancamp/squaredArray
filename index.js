function sortedSquaredArray(array) {
  const squaredArray = [];

  for (let i = 0; i < array.length; i++) {
    const squared = array[i] * array[i];
    squaredArray.push(squared);
  }

  squaredArray.sort((a, b) => a - b);

  return squaredArray;
}

/*
write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order

It initializes an empty array called squaredArray to store the squared integers.
It iterates through the original array using a for loop.
For each element in the array, it squares the element by multiplying it by itself and stores the squared value in the squaredArray.
After populating squaredArray, it calls the sort() method to sort the array in ascending order. The sorting is based on the numeric value of the elements, achieved by using a comparison function (a, b) => a - b.
Finally, it returns the sorted squared array.*/
