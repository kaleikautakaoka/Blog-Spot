
let createNew = document.querySelector("#createNew");
let newPost = document.querySelector("#newPost");
let currentPost = document.querySelector("#currentPost");


function hideCreateNew() {
    createNew.hidden=true;
}

hideCreateNew(); 

newPost.addEventListener("submit", event => { 
    currentPost.hidden = true;
    createNew.hidden = false;
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;
    event.preventDefault(); 
    if (!title || !content) {
        alert("Please fill out all fields");
        return;
    }
    const post = {
        title,
        content,
    };
    fetch("/api/posts", { 
        method: "POST",
        body: JSON.stringify(post), 
        headers: { "Content-Type": "application/json" } }
    
    ).then(res => {
        if (res.ok) {
    location.reload();
    } else {
        alert("Failed to create post");

    }
    });
    });


