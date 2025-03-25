document.getElementById("generate").addEventListener("click", function () {
    const apiUrl = "https://apis.dark-x-community.my.id/fakeSSgener/bkash/send-money.php?number=01301307865&amount=10.00&transaction=WUR6EI8YRW";
    
    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            // API response set korar jayga
            document.getElementById("screenshot-container").innerHTML = data;
        })
        .catch(error => {
            console.error("API Fetch Error:", error);
            document.getElementById("screenshot-container").innerHTML = "<p style='color: red;'>Failed to load API data.</p>";
        });
});

document.getElementById("save").addEventListener("click", function () {
    let content = document.getElementById("screenshot-container").innerHTML;
    let blob = new Blob([content], { type: "text/html" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "fake_bkash_screenshot.html";
    a.click();
});

// Made by Burhan Link
document.getElementById("burhan-link").addEventListener("click", function () {
    window.location.href = "https://www.facebook.com/bullavaii01"; // Replace with your actual link
});
