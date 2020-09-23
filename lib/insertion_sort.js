function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let targetEl = list[i];
    if (targetEl < list[i-1]) {
      for (let j = i - 1; j >= 0; j--) {
        
        if (list[j] < targetEl) {
          list.splice(j + 1, 0, ...splicedEl)
        } 
        if (list[j] > targetEl && j === 0) {
          list.splice(0, 0, ...splicedEl)
        }

      }
    }
  }
  return list
}

let array = [2, -1, 4, 3, 7, 3];
console.log(insertionSort(array));


module.exports = {
  insertionSort
};
