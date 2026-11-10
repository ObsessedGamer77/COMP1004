document.querySelectorAll(".toggleButtons button").forEach(function(button, index) {
    button.addEventListener("click", function() {
        var trollImage = document.querySelector("#trollContent" + (index + 1) + " img");
        trollImage.style.display = window.getComputedStyle(trollImage).display === "none" ? "block" : "none";
    });
});