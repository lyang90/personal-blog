/*Adding a function for the light/dark theme */
const button = document.querySelector('#light');
const theme = document.querySelector('.theme');
const section = document.querySelector('section');
const header = document.querySelector('header');
const submitButton = document.querySelector('#submit-button');
const aEl = document.querySelector('a');

let light = true

function toggle(event){
    event.preventDefault();
    if (light){
        changeDark(event);
    } else{
        changeLight(event);
    }
    light = !light
}

// Function for changing the theme dark
function changeDark(event){
    event.preventDefault();
    theme.setAttribute('style', 'background-color: #432818; color: #EDE0D4;'); // #432818 from different coolors palate https://coolors.co/palette/6f1d1b-bb9457-432818-99582a-ffe6a7
    header.setAttribute('style', 'border-color: #DDB892');
    section.setAttribute('style', 'border-color: #DDB892');
    submitButton.setAttribute('style', 'color: #EDE0D4');
    aEl.setAttribute('style', 'color: #EDE0D4');
}

// Function for changing the theme back to light
function changeLight(event){
    event.preventDefault();
    theme.setAttribute('style', 'background-color: #EDE0D4; color: black;');
    header.setAttribute('style', 'border-color: #7F5539');
    section.setAttribute('style', 'border-color: #7F5539');
    submitButton.setAttribute('style', 'color: #000000');
    aEl.setAttribute('style', 'color: #000000');

}

button.addEventListener('click', toggle);
