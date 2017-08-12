//题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
//例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
function daffodilNum() {
    let result = [];
  for(let i = 100; i < 1000; i++) {
      let bit0 =  i % 10;
      let bit1 = parseInt(i / 10) % 10;
      let bit2 = parseInt(i / 100);
      if(Math.pow(bit0, 3) + Math.pow(bit1, 3) + Math.pow(bit2, 3) == i) {
          result.push(i);
      }
  }
  return result;
}
let a  = daffodilNum();
console.log("输出的水仙花数有："+ a );