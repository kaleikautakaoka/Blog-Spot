//adding form handler 
const formHandlerLogin = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();
    const user_id = document.querySelector("#user_id").value.trim(); 