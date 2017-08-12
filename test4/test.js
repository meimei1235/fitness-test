Array.prototype.distinct = function() {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i+1; j < this.length; j++) {
            if (this[i] == this[j]) {
                result.push(this.splice(j, 1)[0]);
            }
        }
    }
    return result;
}
let arr = [1, 2, 3, 2, 5, 8, 1, 3];
console.log(arr.distinct());