
document.querySelector("newView").addEventListener("submit", event => {
    event.preventDefault();
    const view = {
        body: document.querySelector("#view").value,
        post_id: document.querySelector("#hiddenView_id").value,
    };
fetch("/api/view", { 
    method: "POST",
    body: JSON.stringify(view), 
    headers: { "Content-Type": "application/json" } }

).then(res => {
    if (res.ok) {
location.reload();
} else {
alert("Failed to create view");
}
});
});

document.querySelector('.view-post-btn').addEventListener('click', viewFormHandler);