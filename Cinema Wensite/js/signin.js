// chuyển trang
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// -----------------------------------------------
// 1. kiểm tra form trước khi nhập dữ liệu
function validateFormSignin(email,password) {
	if (!email || !password) {
		alert("Vui lòng nhập đầy đủ các thông tin theo yên cầu");
		return false;
	}
	return true;
}

function validateFormSignup(username, email, password) {
	if (!username || !email || !password) {
		alert("Vui lòng nhập đầy đủ các thông tin theo yên cầu");
		return false;
	}

	if (username.length < 6) {
		alert("Username phải trên 6 ký tự!");
		return false;
	}

	const hasLetter = /[a-zA-Z]/.test(username);
  	const hasNumber = /\d/.test(username);
	if (!hasLetter || !hasNumber) {
		alert("Username phải có cả chữ lẫn số!");
		return false;
	}

	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	console.log(emailRegex.test(email))
	if (!emailRegex.test(email)) {
		alert("Email chưa đúng cú pháp!");
		return false;
	}

	if (password.length < 6) {
		alert("Password phải trên 6 ký tự!");
		return false;
	}
	return true;
}

// -----------------------------------------------
// 2. tạo user mới => lưu user local storage
function signup() {
	const email = document.querySelector("#signup_email").value.trim();
	const username = document.querySelector("#signup_username").value.trim();
	const password = document.querySelector("#signup_password").value.trim();

	if (validateFormSignup(username, email, password)) {
		const duplicateEmail = localStorage.getItem(email);
		if (!duplicateEmail) {
			localStorage.setItem(email, JSON.stringify({username, password}));  // JSON.stringify: đổi từ kiểu javascript (object, array, ...) => JSON
			alert("Đăng ký thành công!");
			location.href = "./html/home.html";
			return; // kết thúc hàm
		} else {
			alert("Email đã được sử dụng, vui lòng nhập email khác hoặc chuyển sang trang đăng nhập!");
			return;
		}
	}
}

// -----------------------------------------------
// 3. lấy dữ liệu user => so sánh => chuyển đến trang home
function signin() {
	const email = document.querySelector("#signin_email").value.trim();
	const password = document.querySelector("#signin_password").value.trim();
	if (validateFormSignin(email, password)) {
		const userInfoJSON = localStorage.getItem(email); // lấy dữ liệu user thông qua email
		const userInfo = JSON.parse(userInfoJSON); // chuyển dữ liệu từ JSON => javascript
		
		if (!userInfo) {
			alert("Thông tin đăng nhập không tồn tại trong hệ thống, vui lòng kiểm tra lại hoặc chuyển đến trang đăng kí");
			return;
		}
		if (userInfo.password != password) {
			alert("Mật khẩu không chính xác");
			return;
		}
		alert("Đăng nhập thành công!");
		location.href = "./html/home.html";
	}
}

// -----------------------------------------------
// 3. Bắt sự kiện cho Sign In
document.getElementById("signin_btn").addEventListener("click", function(event) {
	event.preventDefault();
	signin();
})
// 4. Bắt sự kiện cho Sign Up
document.getElementById("signup_btn").addEventListener("click", function(event) {
	event.preventDefault();
	signup();
})