document.addEventListener("DOMContentLoaded", function () {
    let darkModeBtn = document.getElementById("dark-mode-btn");

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
