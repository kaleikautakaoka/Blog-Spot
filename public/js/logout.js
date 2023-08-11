// logout response in async function logout

const logout = async () => {
    const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        window.location.replace("/");
    } else {
        alert("Failed to log out.");
    }
};

    document.querySelector("#logout").addEventListener("click", logout);