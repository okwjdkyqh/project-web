function checkSeat() {
    let seat = document.getElementById("seat").value;
    seat = parseInt(seat);
    let result = "";

    if (isNaN(seat)) {
        result = "Введите число!";
    } else if (seat < 1 || seat > 54) {
        result = "Место должно быть от 1 до 54!";
    } else {
        // Проверяем — купейное или боковое
        if (seat <= 36) {
            result = "Это купейное место, ";
        } else {
            result = "Это боковое место, ";
        }

        // Проверяем — верхнее или нижнее
        if (seat % 2 === 0) {
            result += "верхнее.";
        } else {
            result += "нижнее.";
        }
    }

    document.getElementById("result").textContent = result;
}

document.getElementById("checkBtn").addEventListener("click", checkSeat);