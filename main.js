//Get All Images In Array
let pictures = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5"
];

//Get Button And Images Container
const buttons = document.querySelectorAll('.btn');
const imageDiv = document.querySelector('.imgContainer');
let counter = 0;

//Now Start Working Images Sliders
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //For Left
        if (button.classList.contains('btn-left')) {
            counter--;
            if (counter < 0) {
                counter = pictures.length - 1;
            }
            imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
        }

        //For Right Button
        if (button.classList.contains('btn-right')) {
            counter++;
            if (counter > pictures.length - 1) {
                counter = 0;
            }

            imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
        }
    });
});