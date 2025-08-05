function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    const savedUserJSON = localStorage.getItem("registeredUser");

    if (!savedUserJSON) {
        alert("No registered user found. Please sign up first.");
        return;
    }

    const savedUser = JSON.parse(savedUserJSON);

    if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");

    if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
    } else {
        localStorage.removeItem("rememberedEmail");
    }

    localStorage.setItem("loggedInUserEmail", email);

    window.location.href = "profile.html";

    } else {
        alert("Invalid email or password");
    }
}

window.onload = function () {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("rememberMe").checked = true;
    }
};

function togglePassword(id, icon) {
    const input = document.getElementById(id);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";

    icon.src = isHidden
    ? "images/eye-password-show-svgrepo-com.svg"
    : "images/eye-password-see-view-svgrepo-com.svg";
}