// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    // Listen for form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Get input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the credentials are correct
        if (username === "admin" && password === "admin123") {
            // Redirect to the dashboard if correct
            window.location.href = "dashboard.html";
        } else {
            // Show an alert if the credentials are incorrect
            alert("Invalid Username or Password. Please try again.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".container", {
        duration: 1,
        y: 50, // Slide up from 50px below
        scale: 0.9, // Slight scale effect
        opacity: 0, // Start with opacity 0
        ease: "power2.out", // Smooth easing
        delay: 0.2 // Slight delay
    });
});

