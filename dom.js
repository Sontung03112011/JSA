// Lấy danh sách thẻ
const cardList = document.querySelectorAll(".container .card");

// Đặt biến phụ
let firstElement;

// Bắt sự kiện click
for (let index = 0; index < cardList.length; index++) {
    const cardElement = cardList[index];
    cardElement.addEventListener("click", function (event) {
        if (firstElement) {
            // Trường hợp đã chọn trước 1 card
            if (firstElement.innerHTML == cardElement.innerHTML) {
                // Xoá 2 card
                firstElement.classList.add("hide");
                cardElement.classList.add("hide")
            } else {
                alert("Khong Dung!");
                firstElement = undefined
            }
        } else {
            firstElement = cardElement;
            console.log(firstElement);
        }
    })
}