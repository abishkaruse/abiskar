document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("successMessage").classList.remove("hidden");
  });
  