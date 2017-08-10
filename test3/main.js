//题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
function findNum(arr){
    let n = arr.length;
    let num = arr[0];
    for(let i = 1; i < n; i++)
       num ^= arr[i];
    return num;
}
let arr = [2, 3, 5, 8, 2, 5, 8, 10, 3];
let a = findNum(arr);
console.log("["+ arr + "]\n" + "输出" + a);