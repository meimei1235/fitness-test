//数组去重
//例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
function removeDup(arr) {
    let result = [];
  /*  let json = {};
    arr.forEach(elem => {
        if (!json[elem] ) {
            result.push(elem);
            json[elem] = 1;
        }
        //return arr.indexOf(elem) == arr.lastIndexOf(elem);
    });*/
    arr.map(elem => {
        if (result.indexOf(elem) === -1) {
            result.push(elem);
        }
    });
    return result;
}
let arr = ['s', 'a', 's', 'b', 'a', 1, '1', 1];
let a = removeDup(arr);
console.log("输入数组：" + arr + "\n" + "输出：" + a);