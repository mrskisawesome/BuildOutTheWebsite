/*function changeBackground1() {
  document.getElementById("background").style.backgroundImage =
    "url('https://techcrunch.com/wp-content/uploads/2019/11/spacex-starlink-lift-off.gif')";
}
const button1 = document.querySelector('button');
button1.addEventListener('click', function(changeBackground1)}
document
  .getElementById("changeBtn")
  .addEventListener("click", changeBackground1);*/

const changeBtn = document.getElementById("changeBtn");
const changebackBtn = document.getElementById("changebackBtn");

function changeBackground1() {
  document.getElementById("background").style.backgroundImage =
    "url('https://techcrunch.com/wp-content/uploads/2019/11/spacex-starlink-lift-off.gif')";
}

function changeBackground2() {
  document.getElementById("background").style.backgroundImage =
    'url("./images/galaxy.jpg")';
}

changeBtn.addEventListener("click", changeBackground1);

changebackBtn.addEventListener("click", changeBackground2);
