//求一个数组里面两数只和等于某一个数,并返回他们的数组下标
const twoSum = function(nums, target) {
  const arr = [],
      arrObject = []
      //去重
  // nums = Array.from(new Set(nums))
  // 遍历转换
  nums.forEach((val,index) => {
      arrObject.push({'val':val})
  })
  // 
  for(let i = 0; i< arrObject.length;i++){
      let value = arrObject[i],
            ind = i;
      if(value.isAdd!==true){
      for(let j = i+1; j< arrObject.length;j++){
          let val = arrObject[j],
            index = j;
             if(val.isAdd!==true){
                 if(val.val+value.val===target){
                     val.isAdd = true
                     value.isAdd = true
                     arr.push(ind)
                     arr.push(index)
                     break
                 }
             }
          }
      }
  }
  return arr
};


twoSum([1,2,3,4,5,6,7],6)