// Change colour of buttons on game
let clickedBox = {};

function changeBackground(divId) {
    let div = document.getElementById(divId);

    if (clickedBox[divId]) {
        div.style.backgroundColor = "#e7014c";
    } else {
        div.style.backgroundColor = "#ff9e1d";
        clickedBox[divId] = true;
    }
}

// Change colour of button after 30 seconds - level 1
let colorOne = document.getElementById()

let levelOne = () => {

}
