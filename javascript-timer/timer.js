const btnShow = document.getElementById("btn-show-alert");

btnShow.addEventListener('click', () => {
    setTimeout(showAlert, 2000);
});

function showAlert() {
    alert('Here I come!');
}