const btnClick = document.getElementById("btn-click");
const btnDoubleClick = document.getElementById("btn-double-click");
const btnMouseEnter = document.getElementById("btn-mouse-enter");
const btnMouseLeave = document.getElementById("btn-mouse-leave");
const moveArea = document.getElementById("moving-area")

btnClick.addEventListener('click', () => {
    console.log('clicked');
    // btnClick.style.cssText = 'border: 2px solid red';
    btnClick.classList.toggle("newBtnClick");
});
btnDoubleClick.addEventListener('dblclick', () => {
    console.log('double clicked');
});
btnMouseEnter.addEventListener('mouseenter', () => {
    console.log('mouse enter');
});
btnMouseLeave.addEventListener('mouseleave', () => {
    console.log('mouse leave');
});
moveArea.addEventListener('mousemove', () => {
    console.log('I am moving');
});

document.getElementById("btn-color").addEventListener('click', () => {
    moveArea.style.background = getRandomColor();
});

function getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
