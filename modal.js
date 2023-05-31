let modalVisible = false;

function openModal() {
  modalVisible = true;
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  modalVisible = false;
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
