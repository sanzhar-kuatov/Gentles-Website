document.addEventListener("DOMContentLoaded", function () {
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");

    const userIcon = document.querySelector('.nav-img a[href="login.html"]');

    if (loggedInEmail) {
        if (userIcon) {
            userIcon.href = "profile.html";
        }
    } else {
        if (userIcon) {
            userIcon.href = "login.html";
        }
    }
});
