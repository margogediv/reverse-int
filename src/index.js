module.exports = function reverse(n) {
    if (n > 0) {
        let input = n;
        let arr = (`${input}`.split('').map(Number));
        let arrRevers = arr.reverse();
        let resalt = +arrRevers.join("")
        return resalt;
    } else {
        let input = n;
        let arr = (`${input}`.split('').map(Number));
        let arrRevers = arr.reverse();
        arrRevers.pop();
        let resalt = +arrRevers.join("");
        return resalt;
    }
}
