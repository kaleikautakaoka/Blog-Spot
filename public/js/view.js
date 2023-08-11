
// async function to post comment

async function viewFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (id) {
        const response = await fetch('/api/posts/view', {
            method: 'PUT',
            body: JSON.stringify({
                post_id: id
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
}

document.querySelector('.view-post-btn').addEventListener('click', viewFormHandler);