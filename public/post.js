

// async function edit form

async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[username="post-title"]').value;
    const content = document.querySelector('textarea[username="post-text"]').value;
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'

        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');

    } else {
        alert(response.statusText);

    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);