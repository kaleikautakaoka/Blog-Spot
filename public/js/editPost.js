
// async function to edit post

const id = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[username="post-title"]').value;
    const content = document.querySelector('textarea[username="post-text"]').value;
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            postId: id,
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
};

document.querySelector('.editPost').addEventListener('submit', editFormHandler);