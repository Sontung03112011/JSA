let n = 5;

console.log("Bài 1: In hình tam giác số");
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    console.log(str);
}

let inputStr = "abc";
let reversedStr = inputStr.split('').reverse().join('');
let outputStr = inputStr + reversedStr.slice(1);

console.log("\nBài 2: Hiển thị chuỗi đối xứng");
console.log("Input:", inputStr);
console.log("Output:", outputStr);
