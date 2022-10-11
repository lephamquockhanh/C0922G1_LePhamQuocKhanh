let imgObj = null;
imgObj =document.getElementById('myImage');
function innit() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.right= '10px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
function moveLeft(){
    imgObj.style.right = parseInt(imgObj.style.right) + (-10) + "px";
}
window.onload = innit;