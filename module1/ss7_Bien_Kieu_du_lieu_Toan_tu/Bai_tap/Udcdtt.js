function ChangeMoney() {
    let amount = document.getElementById("Amount").value;
    let from = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let result;
    if (from == "Vnd" && to == "Jpy") {
        result = "result: " + (amount / 164.81) + "¥";
    } else if (from == "Jpy" && to == "Vnd") {
        result = "result: " + (amount * 164.81) + "Đ";
    } else if (from == "Vnd" && to == "Vnd") {
        result = "result: " + amount + "Đ";
    } else {
        result = "result: " + amount + "¥";
    }
    document.getElementById("result").innerHTML = result;
}

