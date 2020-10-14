let array = [1, 2, 3, 4, 15, 17, 19, 25, 30, 35, 46, 55];
let number = 30;

function getIndex(arr, number) {
  let l = 0;
  let r = arr.length - 1;
  if (l > r) {
    return -1;
  }
  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    if (arr[middle] < number) {
      l = middle + 1;
    } else if (arr[middle] > number) {
      r = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(getIndex(array, number));
