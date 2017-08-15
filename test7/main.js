//题目：统计数组 arr 中值等于 item 的元素出现的次数
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
//要求：不要使用for循环
//方法1：用过滤器实现
function  countQuantity(arr, item) {
  let arr1 =  arr.filter(a => {
        return a == item;
    });
   return arr1.length;
}
//方法2 ：用for循环实现
function  countQuantity(arr, item) {
    let count = 0;
    arr.forEach(elem => {
        item == elem ? count++: 0;
    });
    return count;
}
let arr = [1, 2, 3, 5, 1];
let a = countQuantity(arr, 1);
//console.log(arr + "\n" + 1 + "出现的次数 :"+ a);