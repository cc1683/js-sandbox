const demo1 = document.querySelector('#demo-1');
const btnDemo1 = document.getElementById("btn-demo1");

const demo2 = document.querySelector('#demo-2');
const btnDemo2 = document.getElementById("btn-demo2");
const btnDemo2Remove = document.getElementById("btn-demo2-remove");

const demo3 = document.querySelector('#demo-3');
const btnDemo3 = document.getElementById("btn-demo3");

btnDemo1.addEventListener('click', () => {
    demo1.classList.toggle("new-demo-1");
});

btnDemo2.addEventListener('click', () => {
    demo2.classList.add("new-demo-2");
});

btnDemo2Remove.addEventListener('click', () => {
    demo2.classList.remove("new-demo-2");
});

btnDemo3.addEventListener('click', () => {
    demo3.classList.replace("demo", "new-demo-3");
});
