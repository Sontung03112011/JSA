# input/output
- **Thông báo**: hiện hộp thoại + nút ok (hàm không return)
```js
alert('Message')
```
- **Confirm**:  hiện hộp thoại + nút ok -> return true // nút cancel -> return false
```js

var ans = confirm('Mesage'); //true/false
```
- **Promt**:  hiện hộp thoại + Nhập dữ liệu + nút ok -> return dữ liệu (dưới dạng string)
```js
var ans = promt('How old are you?'); //số tuổi (dạng string : vd: '25')
```

- **Console**: hiển thị kết quả trong terminal/console
```js
console.log('Your name:', name); //in trong 1 dòng
console.error('This is an error!'); //in trong 1 dòng, màu đỏ => dừng chương trình tại dòng này
console.warn('This is a warning!'); //in trong 1 dòng, màu vàng
console.table([1,2,3,4]); //tạo bảng (dễ thống kê dữ liệu)
//gộp các dòng log thành 1 group riêng dễ đọc/kiểm tra (Logger - test)
console.group();
//...(Log nhiều loại)
console.groupEnd();
```

# Khai báo biến
- **var**: khai báo biến có thể thay đổi (hoặc không thay đổi)
- Của phiên bản ES5 trở về trước
- Vấn đề: khi khai báo, biến bị đẩy lên đầu phạm vi => trùng biến, sai giá trị
- **let**: của phiên bản ES6+ (giải quyết vấn đề của var)
- **const**: của phiên bản ES6+, dùng để khai báo HẰNG SỐ (biến không được gán lần 2)

# Kiểu dữ liệu:
## Kiểu nguyên thuỷ (primitive)
- **number**: số nguyên, số thực, số phức
```js
const a = 10;
let m = -5.3;
```
- **string**: chuỗi (có thể bao gồm cả chữ số/dấu)
```js
const name = 'ABCD'; //dấu ngoặc kép "/ ngoặc đơn ' đều sử dụng được
```
- **boolean**: true/false
```js
const is Human = true; //dấu ngoặc kép "/ ngoặc đơn' đều sử dụng được
```
- **null**: đại diện cho giá trị không có
```js
cónt myAccount = null;
```
- **underfined**: đại diện cho giá trị không được khai báo (không gán giá trị khi khai báo)
```js
const fullName; //console.log(fullName) => underfined
```
## Kiểu tham chiếu (reference)
- **object**: đối tượng (là một tập hợp các thuộc tính và giá trị)
  - khai báo đối tượng bằng cách sử dụng dấu ngoặc nhọn {}
  - thuộc tính: key (tên) + value (giá trị)
```js
const student = {"1 name": "Nguyễn Văn A", age: 20};
student.age; // 20
student["1 name"]; // "Nguyễn Văn A"
```
- **array**: mảng (là một tập hợp các giá trị có thứ tự)
  - LƯU Ý: typeof [] => object (mảng là một đối tượng) => sử dụng Array.isArray([]) để phân biệt kiểu array
  - Mảng có thể chứa nhiều kiểu dữ liệu khác nhau
  - Phần tử đầu tiên ở vị trí số 0
```js
const arr = [1,1.2,"abc", false, [], {}];
arr[0]; // truy cập đến giá trị của phần tử thứ 0 trong mảng
```
- **function**: hàm(là một khối lệnh có thể được gọi lại nhiều lần)
- Hàm có trả về (return) và hàm không có trả về
- Parameter / param (tham số truyền vào) được viết trong (): biến cần người dùng gán giá trị
- Argument (đổi số): tham số đã được người dùng truyền giá trị
```js
function sum(a, b) {
    return a + b; // hàm trả về giá trị tổng của biến a và b
}
sum(10, 30) // gọi lại hàm để thực thi lệnh được viết trong hàm
```

