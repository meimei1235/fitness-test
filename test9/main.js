/*
为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
要求：不要使用for，while循环
*/
function arr_pow(arr) {
    let result = [];
    result = arr.map(elem => {
        return Math.pow(elem, 2);
    }) ;
        return result;
}
let arr = [5, 3, 7, 1];
let a = arr_pow(arr);
console.log("输入数组：" + arr + "\n" + "输出：" + a);