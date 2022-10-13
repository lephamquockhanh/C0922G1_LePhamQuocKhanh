function upArrow() {
    let element = document.getElementById("aaa");
    element.style.top = parseInt(element.style.top) - 5 + "px";
}
function downArrow() {
    let element = document.getElementById("aaa");
    element.style.top = parseInt(element.style.top) + 5 + "px";
}
function leftArrow() {
    let element = document.getElementById("aaa");
    element.style.left = parseInt(element.style.left) - 5 + "px";
}
function rightArrow() {
    let element = document.getElementById("aaa");
    element.style.left = parseInt(element.style.left) + 5 + "px";
}
function moveSelecttion(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrow();
            break;
        case 39:
            rightArrow();
            break;
        case 38:
            upArrow();
            break;
        case 40:
            downArrow();
            break; 
    }
}
function docready() {
    window.addEventListener('keydown', moveSelecttion);
}