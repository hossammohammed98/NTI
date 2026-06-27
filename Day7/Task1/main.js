let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let cityInput = document.getElementById("city");

let addBtn = document.getElementById("addUser");
let tbody = document.getElementById("tbody");

let users = [];
let editIndex = null;

// Add Or Update User
addBtn.addEventListener("click", function () {

  // Validation
  if (
    nameInput.value === "" ||
    ageInput.value === "" ||
    cityInput.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  // Update User
  if (editIndex !== null) {

    users[editIndex].name = nameInput.value;
    users[editIndex].age = ageInput.value;
    users[editIndex].city = cityInput.value;

    editIndex = null;

    addBtn.innerHTML = "Add";

  } else {

    // Add New User
    let user = {
      id: users.length + 1,
      name: nameInput.value,
      age: ageInput.value,
      city: cityInput.value,
    };

    users.push(user);
  }

  displayUsers();

  // Clear Inputs
  clearInputs();
});

// Display Users
function displayUsers() {

  tbody.innerHTML = "";

  users.forEach((user, index) => {

    tbody.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.city}</td>

        <td>
          <button 
            class="edit-btn"
            onclick="editUser(${index})"
          >
            Edit
          </button>
        </td>

        <td>
          <button 
            class="delete-btn"
            onclick="deleteUser(${index})"
          >
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

// Delete User
function deleteUser(index) {

  users.splice(index, 1);

  // Reorder IDs
  for (let i = 0; i < users.length; i++) {
    users[i].id = i + 1;
  }

  displayUsers();
}

// Edit User
function editUser(index) {

  nameInput.value = users[index].name;
  ageInput.value = users[index].age;
  cityInput.value = users[index].city;

  editIndex = index;

  addBtn.innerHTML = "Update";
}

// Clear Inputs
function clearInputs() {

  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
}