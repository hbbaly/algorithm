// 冒泡排序

// 依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。

function bubbleSort(params) {
  var len = params.length
  for (var i= 0; i<len; i++){
    for(var j=0; j<len-1-i; j++){
      if(params[j]>params[j+1]){
        var temp = params[j+1]
        params[j+1] = params[j]
        params[j] = temp
      }
    }
  }
  return params
}
var params = [1,4,623,7,8,0,94,23423,7567,8,14234,74141,74,790,123]
var new_params = bubbleSort(params)
console.log(new_params);
