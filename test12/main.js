/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
*/

function getJson(str) {
    let json = {};
    for (let i = 0; i < str.length; i++) {
        json[str.charAt(i)] ? json[str.charAt(i)]++ : json[str.charAt(i)] = 1;
    }
    return json;
}

function countCharMost(str) {
    let json = getJson(str);
    let count = 0;
    let char = '';
    let arr = [];
    for (let item in json) {
        if (json[item] > count) {
            count = json[item];
            char = item;
        }
        // arr[json[item]] ? arr[json[item]].push(item) : arr[json[item]] = [item];
    }
   let json_obj = `{ ${char}: ${count} }`;
    return json_obj;
}
let str = 'abcsbaddbizdbas';
let a = countCharMost(str);
console.log(`输入字符串：'${str}'\n 得出结果：${a}`);
