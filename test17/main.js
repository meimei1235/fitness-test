/*
给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
    如果这个数被5整除，打印buzz.
    如果这个数能同时被3和5整除，打印fizz buzz.
 */
function printNum(num) {
    let fizz = 'fizz';
    let buzz = 'buzz';
    let fizz_buzz = 'fizz buzz';
    let i = 1;
    let result = [];
    while (i <= num) {
        let n = (i % 3 == 0)? fizz : (i % 5 === 0) ? buzz : (i % 5 === 0 &&　i % 3 === 0) ? fizz_buzz : '';
        result.push(n);
        i++;
    }
    return result;
}
let num = 50;
console.log(printNum(num).toString());

