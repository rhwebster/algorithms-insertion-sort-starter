function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let currentEl = list[i];
    let insertionIdx = i;
    if (currentEl < list[i - 1]) {
      for (let j = i - 1; j >= 0 && list[j] > currentEl; j--) {
        insertionIdx--
        list[j + 1] = list[j];
      }
      list[insertionIdx] = currentEl
    }
  }
  return list
}


// let array = [2, -1, 4, 3, 7, 3];
// console.log(insertionSort(array));


module.exports = {
  insertionSort
};
