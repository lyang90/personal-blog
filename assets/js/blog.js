const buttonOne = document.querySelector('#light');
const a = document.querySelector('a');

let bright = true

function toggle(event) {
    event.preventDefault();
    if (bright) {
        changeDark(event);
    } else {
        changeLight(event);
    }
    bright = !bright
}

// Function for changing the theme dark
function changeDark(event) {
    event.preventDefault();
    theme.setAttribute('style', 'background-color: #432818; color: #EDE0D4;'); // #432818 from different coolors palate https://coolors.co/palette/6f1d1b-bb9457-432818-99582a-ffe6a7
    header.setAttribute('style', 'border-color: #DDB892');
    section.setAttribute('style', 'border-color: #DDB892');
    a.setAttribute('style', 'color: #EDE0D4');
}

// Function for changing the theme back to light
function changeLight(event) {
    event.preventDefault();
    theme.setAttribute('style', 'background-color: #EDE0D4; color: black;');
    header.setAttribute('style', 'border-color: #7F5539');
    section.setAttribute('style', 'border-color: #7F5539');
    a.setAttribute('style', 'color: #000000');

}

// Function populates pots and iterates through the array while adding the a new child
function displayPosts() {
    const section = document.querySelector('section');
    let array = JSON.parse(localStorage.getItem('blogPosts')) || [];
    for (let i = 0; i < array.length; i++) {
        const postElement = document.createElement('main');


        const p1 = document.createElement('p');
        p1.className = "title";
        p1.textContent = array[i].title;

        const p2 = document.createElement('p');
        p2.className = "content";
        p2.textContent = array[i].content;

        const p3 = document.createElement('p');
        p3.className = "username";
        p3.textContent = array[i].userName;

        postElement.appendChild(p1);
        postElement.appendChild(p2);
        postElement.appendChild(p3);

        section.appendChild(postElement);





    }


}

// Display posts on page load
document.addEventListener('DOMContentLoaded', displayPosts);

buttonOne.addEventListener('click', toggle);


