// login form handler with post request to api/users/login
// signup form handler with post request to api/users
const loginForm = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    
    if (email && password) {
        const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
        window.location.replace("/home");
        } else {
        alert("Failed to log in.");
        }
    }
    };


    // signup
    const signupForm = async (event) => {
        event.preventDefault();
        
        const username = document.querySelector('#username-signup').value.trim();
        const email = document.querySelector("#email-signup").value.trim();
        const password = document.querySelector("#password-signup").value.trim();
        // if statement to check if all fields are filled out
        if (username && email && password) {
            const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
            });
        // if statement to check if response is ok
            if (response.ok) {
            window.location.replace("/");
            } else {
            alert("Failed");
            }
        }
        };



        document.querySelector(".login-form").addEventListener("submit", loginForm);
        
        document.querySelector(".signup-form").addEventListener("submit", signupForm);



