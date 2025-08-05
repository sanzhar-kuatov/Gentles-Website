const form = document.getElementById("register-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const phone= document.getElementById("mobilenumber");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("emailaddress");

const passworderror = document.getElementById("passworderror");
const phoneerror = document.getElementById("phoneerror");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  if (password.value !== confirmpassword.value) {
    passworderror.textContent = "Passwords do not match!";
    valid = false;
  } else {
    passworderror.textContent = "";
  }

  const phoneRegex = /^\d{10,15}$/;
  console.log("Phone value:", phone.value);    
  console.log("PhoneError div:", phoneerror);       
  if (!phoneRegex.test(phone.value)) {
    phoneerror.textContent = "Phone number must be 10–15 digits.";
    valid = false;
  } else {
    phoneerror.textContent = "";
  }
  if (!valid) {
    e.preventDefault();
  } else {
    alert("Registration successful!");
  }

if (valid) {
    const user = {
      firstname: firstname.value.trim(),
      lastname: lastname.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      password: password.value, 
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));
    alert("Registration successful! You can now log in.");

    window.location.href = "login.html";
  }
});

function togglePassword(id, icon) {
    const input = document.getElementById(id);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";

    icon.src = isHidden
    ? "images/eye-password-show-svgrepo-com.svg"
    : "images/eye-password-see-view-svgrepo-com.svg";
}