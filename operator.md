# Toán tử số học
```js
console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20); // chia có lẻ (0,5)
console.log(10%20); // chia lấy dư (10)
```

# Toán tử gán
- **=**: gán giá trị mới cho 1 biến (lưu ý không dùng cho `const`)
```js
const a = 10 // gán giá trị 10 cho biến a (chỉ gán khi khai báo)
a = 20 // báo lỗi vì a là const
```

- `+=`, `-=`, `/=`; cộng/ trừ/ ... dồn cho giá trị cũ
```js
let b = 10;
b += 20 // b = b + 20 => 30
```
- `++`, `--`: tăng/ giảm 1 đơn vị cho giá trị cũ
- **Prefix**: tăng/ giảm *trước khi sử dụng*
```js
let c = 10;
++c; // 11
```
- **Postfix**: tăng/ giảm *sau khi sử dụng*
```js
let d = 10;
d--; // 10
d; // 9 (gọi lần 2 mới trả về kết quả sau tính toán)
```
# Toán tử so sánh
```js
"a" < "b"; // true
12 >= 40 // false
```
- `==`: so sánh bằng (**Chỉ so sánh giá trị, không kiểm tra kiểu dữ liệu**)
- **LƯU Ý**: chuyển kiểu dữ liệu về string / number để kiểm tra
```js
1 == "1"; // true
```
- `===`: so sánh nghiêm ngặt (strict mode) (**Kiểm tra cả giá trị và dữ liệu**)
```js
1 === "1"; // false (do 2 vế không cùng kiểu dữ liệu)
```
# Toán tử Logic
- **LƯU Ý** : kết quả phép toán sẽ trả về dữ liệu của 1 trong 2 vế (không trả về chính xác boolean - true/ false)
- `&&`: AND (và) trả về dữ liệu `false` gần nhất, nếu không có false thì trả về `true` cuối cùng
```js
true && true; // true
true && false // false
```
- `||`: OR (hoặc) trả về dữ liệu `true` gần nhất, nếu không có `true` thì trả về `false` cuối cùng
```js
true || false; // true
true || true; // false
name || "Unknown"; // nếu name không có giá trị thì trả về "Unknown"
```
- `!`: NOT (phủ định) trả về dữ liệu ngược lại với giá trị ban đầu (chuyển kiểu vế boolean)
```js
if (!"") {
    console.log("String không rỗng!");
}
```

# Truly and Falsy
- 6 giá trị khi **chuyển kiểu về boolean** sẽ trả về `false`:
1. `0`  (số 0)
2. `''` (chuỗi rỗng)
3. `undefined` (tạo biến và không gán giá trị)
4. `false` (giá trị logic false)
5. `null` (giá trị null)
6. `NaN` (kết quả của 1 phép toán số học bị lỗi)
- **Còn lại đều trả về** `true` khi chuyển kiểu dữ liệu
```js
[] == true; // true (chuỗi rỗng vẫn là true)
```

# Toán tử 3 ngôi
- **LƯU Ý**: chỉ sử dụng trong 1 câu lệnh if
```js
let x = ''
if (x == "") {
    console.log("x rỗng!")
} else {
    console.log("x không rỗng!")
}

console.log(x == "" ? "x rỗng!" : "x không rỗng!");
```