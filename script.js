let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let uploadedImage = null;
let textList = [];

document.getElementById("uploadImage").addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function (e) {
        uploadedImage = new Image();
        uploadedImage.onload = function () {
            canvas.width = uploadedImage.width / 2;
            canvas.height = uploadedImage.height / 2;
            ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
        };
        uploadedImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById("addText").addEventListener("click", function () {
    let text = document
