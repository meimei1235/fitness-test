//题目：统计数组 arr 中值等于 item 的元素出现的次数
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
//要求：不要使用for循环
function  countQuantity(arr, item) {
    let count = 0;
   arr.forEach(a => {
       a == item ? count++ : 0;
       // if (a == item) {
       //     count++;
       // }
   });
   return count;
}
let arr = [1, 2, 3, 5, 1];
let a = countQuantity(arr, 1);
console.log(arr + "\n" + 1 + "出现的次数 :"+ a);