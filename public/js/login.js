// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get email and password input values, and trim any whitespace
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Check if both email and password are provided
  if (email && password) {
    // Send a POST request to the login endpoint with email and password
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect to the homepage
    if (response.ok) {
      document.location.replace("/"); // Redirect to homepage if login is successful
    } else {
      // If login fails, show an alert
      alert("Failed to login!");
    }
  } else {
    // If email or password is missing, show an alert
    alert("email or password is incorrect!");
  }
};

// Add event listener to the submit button
document
  .querySelector(".submitBtn")
  .addEventListener("click", handleFormSubmit);
