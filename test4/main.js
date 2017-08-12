//题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function chain(str,val){
    let arr = str.split("->");
    let result = [];
    arr.forEach(item => {
        if(parseInt(item) !== val) {
            result.push(item);
        }
    });
    let chain = result.join("->");
    return chain;

}
let str = '1->2->3->3->4->5->3';
let a = chain(str, 3 );
console.log("输入：" + str + " 和 3\n" + "输出：" + a);
