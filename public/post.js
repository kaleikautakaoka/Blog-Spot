

// async function edit form

async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[username="post-title"]').value;
    const content = document.querySelector('textarea[username="post-text"]').value;
    const user_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    
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

<script src="/js/edit-post.js"></script>

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);