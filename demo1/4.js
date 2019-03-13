// 希尔排序
function shellSort (arr) {
  var len = arr.length,
  temp,
  gap = 0;
  while(gap<len/3){
    gap = gap*3+1
  }
  for (gap; gap>0;gap=Math.floor(gap/3)){
    for(var i = gap; i<len;i++){
      temp = arr[i]
      for(var j = i-gap;j>=0&&arr[j]>temp;j-=gap){
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  return arr
}

var params = [4,1,623,7,8,0,94,23423,7567,8,14234,74141,74,790,123]
var new_params = shellSort(params)
console.log(new_params);