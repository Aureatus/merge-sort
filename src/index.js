function mergeSort(a) {
  if (a.length < 2) return a;
  else {
    // sort left
    mergeSort(a.slice(0, Math.round(a.length / 2)));
    // sort right
    mergeSort(a.slice(Math.round(a.length / 2), a.length));
    // merge left and right
    return a.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    });
  }
}

const array = [6, 2, 9, 7, 4, 1];
// Sorted should return [1,2,4,6,7,9]

console.log(mergeSort(array));
