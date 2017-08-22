/*
题目：计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
*/
function arrIntersection(arr1, arr2) {
    return arr1.filter(item => {
        return arr2.includes(item) == true;
    });
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(` 数组1：${nums1}\n 数组2：${nums2}\n 交集为：${arrIntersection(nums1, nums2)}`);