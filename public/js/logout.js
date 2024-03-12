// Function to handle user logout
const logout = async () => {
  // Send a POST request to the logout endpoint
  const response = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // Check if the response is successful
  if (response.ok) {
    // Redirect the user to the login page if logout is successful
    document.location.replace("/");
  } else {
    // Display an alert with the error message if logout fails
    alert(response.statusText);
  }
};

// Add event listener to the logout button to trigger the logout function
document.querySelector("#logout").addEventListener("click", logout);
