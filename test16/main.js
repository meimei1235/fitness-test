/*
将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].
*/

    function findElemContact(arr, elem){
    let elem_arr = arr.filter(item => {
        return item == elem;
    });
    let arr1 = arr.filter(item => {
       return item !== elem;
    });
    return arr1.concat(elem_arr);
}

let nums = [0, 1, 0, 3, 12];
console.log( ` 输入：${nums}和 0 \n 输出：${findElemContact(nums, 0)}`);
