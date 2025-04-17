let arr = [5, 12, 8, 19, 3, 14, 7, 22, 9];
let threshold = 10;
let sumEven = 0;
let sumOdd = 0;
let countGreaterThanThreshold = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven += arr[i];
    } else {
        sumOdd += arr[i];
    }

    if (arr[i] > threshold) {
        countGreaterThanThreshold++;
    }
}

console.log("Tổng số chẵn: " + sumEven);
console.log("Tổng số lẻ: " + sumOdd);
console.log("Số lượng số lớn hơn ngưỡng: " + countGreaterThanThreshold);
