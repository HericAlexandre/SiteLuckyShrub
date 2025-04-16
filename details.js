const details = document.getElementById("first-details");
const readLess = document.getElementById("read-less");

details.addEventListener("toggle", () => {
  readLess.style.display = details.open ? "inline" : "none";
});

readLess.addEventListener("click", () => {
  details.open = false;
});
