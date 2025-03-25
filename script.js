document.getElementById("generate").addEventListener("click", function () {
    const apiUrl = "https://apis.dark-x-community.my.id/fakeSSgener/bkash/send-money.php?number=01301307865&amount=10.00&transaction=WUR6EI8YRW";
    
    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById("screenshot-container").innerHTML = data;
        })
        .catch(error => console.error("API Fetch Error:", error));
});

document.getElementById("save").addEventListener("click", function () {
    let content = document.getElementById("screenshot-container").innerHTML;
    let blob = new Blob([content], { type: "text/html" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "fake_bkash_screenshot.html";
    a.click();
});
