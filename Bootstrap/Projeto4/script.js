function generateIdenticon() {
  const name = document.getElementById("username").value;
  const avatar = document.getElementById("avatar");
  const modalAvatar = document.getElementById("modalAvatar");
  const modalUsername = document.getElementById("modalUsername");

  if (name) {
    const size = 150;
    const svg = jdenticon.toSvg(name, size);
    avatar.innerHTML = svg;
    modalAvatar.innerHTML = svg;
    modalUsername.textContent = name;
  } else {
    avatar.innerHTML = "";
    modalAvatar.innerHTML = "";
    modalUsername.textContent = "";
  }
}

function togglePassword() {
  const passwordField = document.getElementById("password");
  const passwordIcon = document.getElementById("password-icon");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordField.type = "password";
    passwordIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

function toggleConfirmPassword() {
  const confirmPasswordField = document.getElementById("confirmPassword");
  const confirmPasswordIcon = document.getElementById("confirm-password-icon");
  if (confirmPasswordField.type === "password") {
    confirmPasswordField.type = "text";
    confirmPasswordIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    confirmPasswordField.type = "password";
    confirmPasswordIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  generateIdenticon();
  $("#successModal").modal("show");
}
