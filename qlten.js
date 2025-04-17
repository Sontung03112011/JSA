const userList = document.getElementById('userList');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const cityInput = document.getElementById('cityInput');
const emailInput = document.getElementById('emailInput');
const addUserButton = document.getElementById('addUserButton');

let users = [];

// Function to render users
function renderUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${user.name} (${user.age}, ${user.city})</span>
            <div>
                <button class="update" onclick="updateUser(${index})">Update</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </div>
        `;
        userList.appendChild(li);
    });
}

// Function to add a new user
addUserButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = ageInput.value;
    const city = cityInput.value.trim();
    const email = emailInput.value.trim();

    if (name && age && city && email) {
        const user = {
            id: users.length + 1,
            name: name,
            age: age,
            city: city,
            email: email
        };
        users.push(user);
        nameInput.value = '';
        ageInput.value = '';
        cityInput.value = '';
        emailInput.value = '';
        renderUsers();
    }
});

// Function to update a user's name
function updateUser(index) {
    const newName = prompt("Enter new name:", users[index].name);
    if (newName) {
        users[index].name = newName;
        renderUsers();
    }
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

// Initial render
renderUsers();
