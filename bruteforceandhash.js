let fs = require('fs');
let arg = process.argv;
let requiredStr = 0;
let str = fs.readFileSync(arg[2]).toString();
let currStr = 0;
let tempStr = "";
for (let i = 0; i < arg[3].length; i++) {
    requiredStr += Math.pow(arg[3].charCodeAt(i), 2)
    currStr += Math.pow(str.charCodeAt(i), 2)
    tempStr += str[i];

}
let answer = 0
let l = tempStr.length - 1;
let k;
while (l != str.length) {
    k=false;
    if (requiredStr == currStr) {
        k = true;
        for (let i = 0; i < arg[3].length; i++) {
            if (tempStr[i] != arg[3][i]) {
                k = false;
                break
            }
        }
    }
    currStr -= Math.pow(str.charCodeAt(l - arg[3].length + 1), 2) - Math.pow(str.charCodeAt(s + 1), 2)
    tempStr = tempStr.substr(1);
    tempStr += str[l + 1];
    l++;
    if (k == true)
        ans++;
}
console.log(answer);