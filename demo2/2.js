// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

var lengthOfLongestSubstring = function(s) {
  var arrStr = s;
    var  max = 0;
     var arr = [];
 
      for(var i = 0;i<arrStr.length;i++){
          var current = arrStr[i];
          var index = arr.indexOf(current);
          if(index!=-1){
              //如果有相同的就删除原来的数组中相同的字符
              arr.splice(0,index+1);
          }
          // console.log(arr)
          // 把新的相同的字符放到数组
          arr.push(current);
             // console.log(arr) 
          if(arr.length > max) {
              max = arr.length;
          }
          
      }
      return max
};