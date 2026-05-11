const moveBtn = document.getElementById("moveBtn");
const backBtn = document.getElementById("backBtn");

const rightBox = document.querySelector("#selectedBox .elements");
const leftBox = document.querySelector(".left-card .elements");

let selectedItem = null;

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    document.querySelectorAll(".item").forEach((item) => {
      item.classList.remove("active");
    });

    e.target.classList.add("active");
    selectedItem = e.target;
  }
});

moveBtn.addEventListener("click", function () {
  if (selectedItem && selectedItem.parentElement === leftBox) {
    rightBox.appendChild(selectedItem);
    selectedItem.classList.remove("active");
    selectedItem = null;
  }
});

// Move back to left
backBtn.addEventListener("click", function () {
  if (selectedItem && selectedItem.parentElement === rightBox) {
    leftBox.appendChild(selectedItem);
    selectedItem.classList.remove("active");
    selectedItem = null;
  }
});
