const notificationEl = document.querySelectorAll(".notification");
const notificationNumber = document.getElementById("notification-number");
const redRecord = document.querySelectorAll(".red-record");
console.log(notificationEl);
function asRead() {
  notificationNumber.textContent = "0";
  for (let i = 0; i < notificationEl.length; i++) {
    notificationEl[i].classList.remove("recent");
    redRecord[i].style.display = "none";
  }
}
