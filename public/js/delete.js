const deleteNow = document.querySelector('#deleteBtn');
const postId = document.querySelector('input[name="post-id"]').value;

const deleteFormHandler = async () => { 
    const response = await fetch(`/api/posts/${postId}`, {

        method: "DELETE"
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

if (deleteNow) {
    deleteNow.addEventListener('click', deleteFormHandler);


}