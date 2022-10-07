function cong(){
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let result = parseFloat(so1) + parseFloat(so2);
    document.getElementById('ketqua').innerHTML = result
}
function tru() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let result = parseFloat(so1) - parseFloat(so2);
    document.getElementById('ketqua').innerHTML = result

}
function nhan() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let result = parseFloat(so1) * parseFloat(so2);
    document.getElementById('ketqua').innerHTML = result
}
function chia() {
    let so1 = document.getElementById('so1').value;
    let so2 = document.getElementById('so2').value;
    let result = parseFloat(so1) / parseFloat(so2);
    document.getElementById('ketqua').innerHTML = result
}