function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let targetEl = list[i];
    if (targetEl < list[i-1]) {
      for (let j = i - 1; j >= 0; j--) {
        if (list[j] < targetEl) {
          targetEl = list[j+1]
        }
      }
    }
  }
}

module.exports = {
  insertionSort
};
