

//adding form handler 
const formHandlerLogin = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#post_content").value.trim();
    const user_id = document.querySelector("#user_id").value.trim(); 

    if (title && content && user_id) {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title, content, user_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to create post.");
        }
    }
};

const formHandlerEdit = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#post_content").value.trim();
    const user_id = document.querySelector("#user_id").value.trim(); 

    if (title && content && user_id) {
        const response = await fetch("/api/posts", {
            method: "PUT",
            body: JSON.stringify({ title, content, user_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to edit post.");
        }
    }
};

const formHandlerDelete = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#post_content").value.trim();
    const user_id = document.querySelector("#user_id").value.trim(); 

    if (title && content && user_id) {
        const response = await fetch("/api/posts", {
            method: "DELETE",
            body: JSON.stringify({ title, content, user_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to delete post.");
        }
    }
};

document.querySelector(".new-post-form").addEventListener("submit", formHandlerLogin);
document.querySelector(".edit-post-form").addEventListener("submit", formHandlerEdit);
document.querySelector(".delete-post-form").addEventListener("submit", formHandlerDelete);
