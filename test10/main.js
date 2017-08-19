//在数组 arr 中，查找值与 item 相等的元素出现的所有位置
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
//要求：不要使用for，while循环
function find_elem_index(arr, item) {
    let result = [];
    arr.filter((elem, index, arr) => {
       if (elem === item) {
           result.push(index);
           // return arr.indexOf(item);
       }
    });
     return result;
}
let arr = [1, 3, 7, 1 ,4,] ;
let a = find_elem_index(arr, 1);
console.log("输入：" + arr + "\n" + "输出：" + a);