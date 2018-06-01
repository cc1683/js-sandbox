const demo1 = document.querySelector('.demo-1');
const btnDemo1 = document.getElementById("btn-demo1");

btnDemo1.addEventListener('click', () => {
    demo1.classList.toggle("new-demo-1");
})