
const submit = document.querySelector('#submit-button');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const usernameInput = document.querySelector('#username');

// adding event event listener to save objects to locale storage and add to array
submit.addEventListener('click', function (event) {
    event.preventDefault();
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; // initializing the array or storing the object
    const post = {
        userName: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    blogPosts.push(post);


    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    usernameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";
});



