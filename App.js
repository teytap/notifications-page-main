const notificationEl = document.querySelectorAll(".notification");
const redRecord = document.querySelectorAll(".red-record");
console.log(notificationEl);
function asRead() {
  for (let i = 0; i < notificationEl.length; i++) {
    notificationEl[i].classList.remove("recent");
    redRecord[i].style.display = "none";
  }
}
