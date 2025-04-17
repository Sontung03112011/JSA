# Khai báo mảng
> Cách 1: `const arr = [12, 'a', 0.5, false]`

> Cách 2: `const arr = Array.of(12, 'a', 0.5, false)`

# Truy vấn
- `arr[index]`: Lấy giá trị của phần tử ở vị trí index
> Lấy phần tử ở vị trí thứ 2:  `arr[1]`

# Duyệt phần tử
- for i: duyệt bằng độ dài phần tử => **Duyệt cả phần tử rỗng (underfined, null)**
```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr{i}); // in ra từng phần tử trong danh sách
}
```

- for of: duyệt bằng phần tử => **duyệt cả phần tử rỗng**
```js
for (const item of arr) {
    console.log(item)
}
```
- for Each: Duyệt bằng phần tử => **Không duyệt phần tử rỗng**
```js
const empty_arr = Array(10); // danh sách gồm 10 phần tử undefined
empty_arr.foreach(item => console.log(item))
```
- map (ES6): duyệt bằng phần tử => **Không duyệt phần tử rỗng** + **return danh sách mới**
```js
const empty_arr = Array(10); 
empty_arr.map(item => console.log(item))
```

# Thêm phần tử
- `push(new_item)`: Thêm phần tử vào cuối danh sách
```js
arr.push(100); // [..., 100]
```
- `splice(start, 0, new_item)`: Thêm phần tử vào vị trí start
```js
arr.splice(2, 0, 100); // [item1, item2, 100, item3, item...]
```
- `splice(start, 1, new_item)`: Thay phần tử vào vị trí start
```js
// thay item 3 => 100
arr.splice(2, 1, 100); // [item1, item2, 100, item3,...]
```
- `arr[index] = new_item`: thay phần tử ở vị trí index
```js
arr[2] = 12 // thay phần tử ở vị trí index
```

# Tìm kiếm phần tử
- `indexOf(item)`: tìm kiếm vị trí của phần tử item
```js
arr.indexOf('item3'); // trả về index đầu tiên
```

# Xoá phần tử
- `splice(start, 1)`: xoá 1 phần tử ở vị trí start
```js
arr.splice(0, 2); // xoá 2 phần tử từ vị trí 0
```

# Tạo bản sao
> Cách 1: sử dụng `slice` (ES5)
```js
const arr_clone = arr.slice();
```

> Cách 2: sử dụng spread operator (ES6)
```js
const arr_clone = [...arr, ...arr1] // gộp 2 mảng arr và arr1
```

> Cách 3: sử dụng `Array.from` (ES6)
```js
const arr_clone = Array.from(arr);
```