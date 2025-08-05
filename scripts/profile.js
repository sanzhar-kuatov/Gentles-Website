document.addEventListener("DOMContentLoaded", function () {
  const storedUserJSON = localStorage.getItem("registeredUser");
  const loggedInEmail = localStorage.getItem("loggedInUserEmail");

  if (!storedUserJSON || !loggedInEmail) {
    alert("You are not logged in!");
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(storedUserJSON);

  if (user.email !== loggedInEmail) {
    alert("Unauthorized access.");
    window.location.href = "login.html";
    return;
  }

  const fields = [
    { id: "profile-fullname", value: `${user.firstname} ${user.lastname}` },
    { id: "profile-username", value: user.firstname.toLowerCase() + "12345" },
    { id: "profile-email", value: user.email },
    { id: "profile-phone", value: user.phone },
    { id: "profile-address", value: user.address || "Not provided" },
    { id: "profile-gender", value: user.gender || "Not provided" },
    { id: "profile-dob", value: user.dob || "Not provided" },
    { id: "profile-nationality", value: user.nationality || "Not provided" },
  ];

  fields.forEach(field => {
    document.getElementById(field.id).textContent = field.value;
  });

  // Edit & Save buttons
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");

  editBtn.addEventListener("click", function () {
    fields.forEach(field => {
      const value = document.getElementById(field.id).textContent;
      document.getElementById(field.id).innerHTML = `<input type="text" id="input-${field.id}" value="${value}">`;
    });
    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
  });

  saveBtn.addEventListener("click", function () {
    // Read values from input fields and update user object
    const fullName = document.getElementById("input-profile-fullname").value.trim().split(" ");
    user.firstname = fullName[0] || "";
    user.lastname = fullName[1] || "";

    user.email = document.getElementById("input-profile-email").value.trim();
    user.phone = document.getElementById("input-profile-phone").value.trim();
    user.address = document.getElementById("input-profile-address").value.trim();
    user.gender = document.getElementById("input-profile-gender").value.trim();
    user.dob = document.getElementById("input-profile-dob").value.trim();
    user.nationality = document.getElementById("input-profile-nationality").value.trim();

    localStorage.setItem("registeredUser", JSON.stringify(user));

    fields.forEach(field => {
      let value;
      switch (field.id) {
        case "profile-fullname":
          value = `${user.firstname} ${user.lastname}`;
          break;
        case "profile-username":
          value = user.firstname.toLowerCase() + "12345";
          break;
        case "profile-email":
          value = user.email;
          break;
        case "profile-phone":
          value = user.phone;
          break;
        case "profile-address":
          value = user.address;
          break;
        case "profile-gender":
          value = user.gender;
          break;
        case "profile-dob":
          value = user.dob;
          break;
        case "profile-nationality":
          value = user.nationality;
          break;
        default:
          value = "Not provided";
      }
      document.getElementById(field.id).textContent = value;
    });

    editBtn.style.display = "inline-block";
    saveBtn.style.display = "none";
  });
});

function logout() {
  localStorage.removeItem("loggedInUserEmail");
  window.location.href = "login.html";
}
