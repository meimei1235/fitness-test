//第一种算法：不使用递归
function fib1(num) {
    var arr = [];
    if(num == 1){
        return arr = [0];
    }else if(num == 2){
        return arr = [0,1];
    }else{
        arr = [0,1];
        var a=0;
        var b=1;
        var c=1;
        var arrlen =arr.length;
        for(var i=2;i<num;i++){
            arr.push(c);
            a=b;
            b=c;
            c=a+b;
        }
        return arr;

    }

}
//第二种算法：使用递归
let arr = [];
function fib2(num) {
    return num < 1 ? 0 : (num < 3 ? 1: fib2(num - 1) + fib2(num - 2));
}
for(let i = 0; i < 10; i++) {
    arr.push(fib2(i));
}
console.log(arr + "...");
console.log(fib1(10)+"...");