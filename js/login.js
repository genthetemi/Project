    function validateLoginForm() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Sample validation - you can customize this based on your requirements
      if (username.trim() === '' || password.trim() === '') {
        alert("All fields are required");
        return;
      }

      // Additional validation logic (if needed)

      // Login successful, you can submit the form or perform additional actions
      console.log("Login successful");
    }

    function validateRegisterForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var dob = document.getElementById("dob").value;
      var password = document.getElementById("registerPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      // Sample validation - you can customize this based on your requirements
      if (name.trim() === '' || email.trim() === '' || dob.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert("All fields are required");
        return;
      }

       // Validate name: at least 3 letters and no symbols or numbers
  var nameRegex = /^[A-Za-z]{3,}$/;
  if (!nameRegex.test(name)) {
    alert("Name must contain at least 3 letters and cannot contain symbols or numbers");
    return;
  }

      // Email validation using regex
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
      }

      // Date of Birth validation (MM/DD/YYYY format)
      var dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
      if (!dobRegex.test(dob)) {
        alert("Invalid date format. Please use MM/DD/YYYY");
        return;
      }

      // Password strength validation (at least 8 characters with a mix of letters and numbers)
      var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
      if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include both letters and numbers");
        return;
      }

      // Password confirmation check
      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
      }

      // Additional validation logic (if needed)

      // Registration successful, you can submit the form or perform additional actions
      console.log("Registration successful");
    }

    function showRegisterForm() {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("registerForm").style.display = "block";
    }

    function showLoginForm() {
      document.getElementById("loginForm").style.display = "block";
      document.getElementById("registerForm").style.display = "none";
    }
