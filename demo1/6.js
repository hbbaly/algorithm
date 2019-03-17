// 快速排序的内循环比大多数排序算法都要短小，这意味着它无论是在理论上还是在实际中都要更快。它的主要缺点是非常脆弱，在实现时要非常小心才能避免低劣的性能。
function quickSort(arr, left, right) {
  var len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, left ,right) {     
  var pivot = left,                     
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }        
  }
  swap(arr, pivot, index - 1);
  return index-1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var params = [4,1,623,7,8,0,94,23423,7567,8,14234,74141,74,790,123]
var new_params = quickSort(params)
console.log(new_params)