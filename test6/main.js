//给定一个未排序的整数数组，找到其中位数。
function findMid(arr){
    let arr1 = arr.sort((a, b) => {
        return a - b;
    });
    if (arr1.length % 2 == 0) {
        return (arr1[arr1.length / 2 - 1] + arr1[arr1.length / 2]) / 2;
    }
    return arr1[(arr1.length - 1) / 2];
}
let arr1 = [5, 4, 8, 6, 1, 10, 2];
let a = findMid(arr1);
console.log("输入数组：" + arr1 + "\n" + "输出中位数：" + a);
let arr2 = [5, 4, 8, 6, 1, 10];
let b = findMid(arr2);
console.log("输入数组：" + arr2 + "\n" + "输出中位数：" + b);