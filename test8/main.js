//题目：找出数组 arr 中重复出现过的元素
//例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
function find_same_elenment(arr) {
    let result = arr.filter((elem, index, arr) => {
        return arr.indexOf(elem) != index;
    });
    return result;
}
let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
let b = find_same_elenment(arr);
console.log("输入：" + arr +"\n"+ "输出：" + b);