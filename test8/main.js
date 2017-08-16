//题目：找出数组 arr 中重复出现过的元素
//例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
function find_same_elenment(arr) {
    /*方法1：使用过滤器实现
    let result = arr.filter((elem, index, arr) => {
        return arr.indexOf(elem) != index;
    });
    //方法2：使用for循环
    return result;*/
    let result = [];
    let arr1 = arr;
    arr1.sort();
    arr1.forEach(item => {
       if(arr1.indexOf(item) != arr1.lastIndexOf(item) && result.indexOf(item) == -1) {
           result.push(item);
       }
   });
   return result;
}
let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
let b = find_same_elenment(arr);
console.log("输入：" + arr +"\n"+ "输出：" + b);