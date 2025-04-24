// bat su kien cho "Search" button
document.getElementById("searchBtn").addEventListener("click", function() {
    const searchInput = document.getElementById("search").value.trim();
    if (searchInput === "") {
        alert("Vui lòng nhập từ khoá tìm kiếm trên API")
        return;
    }
    loadData(searchInput);
    return
});

// ham load du lieu tu API
function loadData(searchInput) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    //   fetch du lieu tu API
    fetch(apiURL)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Khong tim thay du lieu phu hop.");
        }
        //   chuyen tu kieu json -> javascript object (json())
        return response.json();
      })
      .then((data) => {
          console.log(data);
        //   hien thi du lieu len man hinh
  renderData(data.name, data.sprites.front_default, data.weight);
      })
      .catch((error) => {
        alert(error);
      });
  }

function renderData(name, img_url,bio) {
    const nameElement = document.getElementById("name");
    const imgElement = document.querySelector("#image");
    const bioElement = document.getElementById("bio");
    nameElement.textContent = name;
    imgElement.src = img_url;
    imgElement.alt = name;
    bioElement.innerHTML = "";
}