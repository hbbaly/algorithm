// 选择排序方法
function selectSort(arr){
  var temp, minIndex, len = arr.length;
  for (var i= 0;i<len-1; i++) {
    minIndex = i
    for(var j = i+1; j<len; j++){
      if(arr[j]<arr[minIndex]) {
        minIndex = j
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
      }
    }
  }
  return arr
}
var params = [1,4,623,7,8,0,94,23423,7567,8,14234,74141,74,790,123]
var new_params = selectSort(params)
console.log(new_params);