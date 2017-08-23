/*
给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。

给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
*/
function getSinglrArr(arr) {
    /*let result = [];
    arr.forEach(item => {
        if (item instanceof Array) {
            for (let i = 0; i < item.length; i++) {
                result.push(item[i]);
            }
            return getSinglrArr(item);
        }
        result.push(item);
    });
    return result;*/
    let result =[];
    let str_arr = arr.join(',').split(',');
    str_arr.forEach(item => {
            result.push(parseInt(item));
    });
    return result;
}
let arr1 = [1,2,[1,2]];
let arr2 = [1,2,[1,2],[3,4]];
let arr3 = [4,[3,[2,[1]]]];
console.log('输入数组1：' + arr1 + " 返回：" + getSinglrArr(arr1));
console.log('输入数组2：' + arr2 + " 返回：" + getSinglrArr(arr2));
console.log('输入数组3：' + arr3 + " 返回：" + getSinglrArr(arr3));