
function test(num) {
    var regex = new RegExp(/^[0-9]*[1-9][0-9]*$/);
    var i = 2;
    var handle = num;
    var arr = [];
    while (i < handle) {     //i小于num则一直循环下去，直到i=num为止
        var result = handle / i;
        if (regex.test(result)) { //除2结果为整数
            arr.push(i);
            i = 2;
            handle = result;
        } else {
            i++;
        }
        if (i == handle) {  //判断是否要结尾
            arr.push(handle)
            break;
        }
    }
    //打印结果
    var str = '';
    for (i = 0; i < arr.length; i++) {
        str += arr[i];
        //     if(i != arr.length-1)
        //         str += '*';
    }
    // }
   console.log(num + "=" + str);
}
var a = test(90);
