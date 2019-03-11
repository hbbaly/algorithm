// 插入排序
// 
function insertSort(arr){
  var len = arr.length,
      preIndex,
      current;
  for( var i = 1; i<len; i++){
    preIndex = i - 1
    current = arr[i]
    while(preIndex>=0 && arr[preIndex] > current){      
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] = current
  }
  return arr
}
var params = [4,1,623,7,8,0,94,23423,7567,8,14234,74141,74,790,123]
var new_params = insertSort(params)
console.log(new_params);