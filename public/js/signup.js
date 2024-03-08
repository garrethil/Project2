// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get username, email, and password input values, and trim any whitespace
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Check if all fields are provided
  if (username && email && password) {
    // Send a POST request to the API endpoint with username, email, and password
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect to the login page
    if (response.ok) {
      document.location.replace("/login"); // Redirect to login page if registration is successful
    } else {
      // If registration fails, show an alert
      alert("Failed to sign up! Please try again.");
    }
  } else {
    // If any field is missing, show an alert
    alert("Please fill in all fields correctly.");
  }
};

// Add event listener to the submit button
document
  .querySelector(".submitBtn")
  .addEventListener("click", handleFormSubmit);
