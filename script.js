let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let uploadedImage = new Image();
let textList = [];

// API theke Image Load Kora
const apiUrl = "https://apis.dark-x-community.my.id/fakeSSgener/bkash/send-money.php?number=01301307865&amount=10.00&transaction=WUR6EI8YRW";
uploadedImage.crossOrigin = "anonymous"; // API theke image fetch er somossa na howar jonno

uploadedImage.onload = function () {
    canvas.width = uploadedImage.width / 2;
    canvas.height = uploadedImage.height / 2;
    ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
};
uploadedImage.src = apiUrl;

document.getElementById("addText").addEventListener("click", function () {
    let text = document.getElementById("textInput").value;
    if (text.trim() === "") return;

    textList.push({ text, x: 50, y: 50 });
    redrawCanvas();
});

canvas.addEventListener("click", function (event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    textList.forEach(t => {
        if (x >= t.x && x <= t.x + 100 && y >= t.y - 20 && y <= t.y) {
            let newText = prompt("Edit Text:", t.text);
            if (newText) t.text = newText;
            redrawCanvas();
        }
    });
});

document.getElementById("saveImage").addEventListener("click", function () {
    let link = document.createElement("a");
    link.download = "edited_screenshot.png";
    link.href = canvas.toDataURL();
    link.click();
});

function redrawCanvas() {
    ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.font = "bold 16px Arial";

    textList.forEach(t => {
        ctx.fillText(t.text, t.x, t.y);
    });
}

// Made by Burhan link
document.getElementById("burhan-link").addEventListener("click", function () {
    window.location.href = "https://your-link.com"; // Replace with your actual link
});
