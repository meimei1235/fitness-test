/*
实现一个left-pad函数
leftpad功能，就是字符串前面拼指定字符到固定长度，比如
leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
三个参数，
第一个：当前字符串；
第二个：需要返回字符串的长度
第三个：用来拼接的字符串
*/
function left_pad(str1, num, str2) {
    let str1_len = str1.length;
    let str = '';
   if (str1_len < num) {
       for (let i = 0; i < num - str1_len; i++) {
           str += str2;
       }
       return str + str1;
   }
   str = str1.substring(0, num);
   return str;
}
console.log('输出：'+ left_pad('hello', 20, '1'));
