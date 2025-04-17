# Khai báo
> Cách 1: `const obj =  {'full-name': 'abc', age: 10}`

> Cách 2: khai báo bằng Object constructor `const obj = new Object()`

> Cách 3: `const obj = Object.create({name: 'abc'})`

# Truy xuất thuộc tính
> Cách 1: dùng dấu call (.) `obj.full-name`
- **LƯU Ý**: chỉ sử dụng cho thuộc tính có tên đúng quy tắc, gọi trong trường hợp biết trước tên thuộc tính
> Cách 2:  dùng dấu bracket ([]) `obj[name]`
- **LƯU Ý**: sử dụng khi tên thuộc tính đặt không đúng quy tắc / không biết trước tên thuộc tính cần gọi

# Duyệt Object
- for in: duyệt qua từng thuộc tính trong object
```js
for (const key in obj) {
    console.log(key, obj[key])
}
```

# Thêm thuộc tính
> Cách 1: dùng dấu call (.) `obj.name = 'abc'`

> Cách 2: dùng dấu bracket ([]) `obj['full-name'] = 'Nguyễn Văn B'`

# Cập nhật giá trị thuộc tính
> Cách 1: dùng dấu call (.) `obj.name = 'mno'`

> Cách 2: dùng dấu bracket ([]) `obj['full-name'] = 'Nguyễn Văn B'`

# Tìm kiếm giá trị thuộc tính
> Cách 1: dùng toán tử `in`
```js
if ('age' in obj) {
    console.log(true);
}
```

> Cách 2: dùng phương thức 'hasOwnProperty()'
```js
if (obj.hasOwnProperty('age')) {
    console.log(true);
}
```

# Xoá thuộc tính
- Sau khi xoá xong thuộc tính, return `true`
```js
delete obj['full-name']:
delete obj.age
```

# Tạo bản sao
> **GIẢI THÍCH**: do object và array là **kiểu dữ liệu tham chiếu** (chỉ lưu địa chỉ, không lưu giá trị) => nếu `const new_obj = old_obj` thì **không tạo bản sao mà chỉ lưu địa chỉ** của old_obj vào new_obj => khi **thay đổi old_obj thì new_obj cũng thay đổi**, và ngược lại
> Cách 1: dùng phương thức `Object.assign()`
```js
const obj2 = Object.assign({}, obj);
```

> Cách 2: dùng spread operator (toán tử ...)
```js
const obj = {...obj, ...obj1}; // gộp obj và obj1
```