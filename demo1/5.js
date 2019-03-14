// 并归排序
function mergeSort (arr) {
  var len = arr.length
  if(len<2) return arr
  var middle = Math.floor(len/2)
  var left = arr.slice(0,middle)
  var right = arr.slice(middle)
  return merge(mergeSort(left),  mergeSort(right))
}
function merge (left, right) {
  var result = []
  while(left.length>0&&right.length>0){
    left[0]<=right[0]?result.push(left.shift()):result.push(right.shift())
  }
  while(left.length){
    result.push(left.shift())
  }
  while(right.length){
    result.push(right.shift())
  }
  return result
}
var params = [4,1,623,7,8,0,94,23423,7567,8,14234,74141,74,790,123]
var new_params = mergeSort(params)
console.log(new_params)