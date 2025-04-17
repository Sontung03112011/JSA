# if - else
- Câu điều kiện - cấu trúc rẽ nhánh (nếu thì)
```js
const x = 10
if (x == "10") {
    console.log(true);
} else if (x == 11) {
    console.log("x là 11");
} else {
    console.log(false); // áp dụng cho tất cả trường hợp còn lại
}
```

# Loops
## for loop (vòng lập hữu hạn)
```js
for (let x = 1; x < 10; x++) {
    console.log(x); // chạy vòng lặp in số 1 đến 9
}
```
## while loop
```js
let m = 0;
while (m < 10) {
    console.log(m); // chạy vòng lặp in số 0 đến 9
    m++;
}
```
## do while loop
- **LƯU Ý**: chắc chắn được thực thi code ít nhất 1 lần trong vòng lặp
```js
let n = 10
do {
    console.log(n); // chạy vòng lặp in số 10 -> 5
    n--;
} while (n >= 5);
```