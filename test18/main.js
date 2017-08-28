/*
给定编码如下，给出一个整数,返回解码方法的种数；
例如：
给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
1-> 'A’
2-> ‘B’
…
26-> ‘Z’
*/
function getDecodeNum(num) {
    let alphabet = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let count = 0;
    if (num < 10) {
        count = 1;
        return;
    }
    let bit1 = num % 10;
    let bit2 =  parseInt(num / 10);
    if (alphabet[bit1] && alphabet[bit2]) {
        count = 2;
    }
    return count;
}
let num = 12;
console.log(` 当输入数字${num}时\n 输出结果是：${getDecodeNum(num)}`);