//jS

//createElement
const el = document.createElement('div');
// add the box class
el.classList.add('top-box');
//append the new element to the DOM
// 1st grab the dom element we want to add box to
const container = document.querySelector('.top-box-container');
//  2nd appendChild to give box-container a new child
container.appendChild(el);

// change the background color of all the boxes
// get all the boxes from the dom
const boxes = document.querySelectorAll('.top-box');
// loop through all the boxes
boxes.forEach((box) => {
    // add an event  listener that fires on 'click'
    box.addEventListener('click', (e) => {
        // make a varible to hold the current color
        const currentBackground = e.target.style.backgroundColor; 
        // check the current color against the string 'orange'
        // if (currentBackground === "orange") {
        //     // if orange make the background 'blue'
        //     e.target.style.backgroundColor = "blue";
        // } else {
        //     // otherwise make the background 'orange'
        //     e.target.style.backgroundColor = 'orange';
        //  }
        //
//the if block above can also be written as a ternary function
        // currentBackground === 'orange' 
        // ? e.target.style.backgroundColor = "blue"
        // :  e.target.style.backgroundColor = 'orange';

// can also be written - becareful mixing hashes -they will return as rbg() with strings
        e.target.style.backgroundColor =
        currentBackground === 'orange'
        ? 'blue' 
        : (currentBackground === 'blue')
        ? 'red'
        : 'orange'
    });
// update all the box background-colors
// box.style.backgroundColor = 'orange';
})


// valid way to generate a random color
// let randomColor = "#"+((1<<24)*Math.random()|0).toString(16)

console.log('**********************');

// grab the box-container from the DOM
const boxContainer = document.querySelector('.box-container');
// grab all of the box class items from the DOM
const boxes2 = document.querySelectorAll('.box');


// Add a form for the user to input an X and Y coordinate
// create an element for the X input
const xInput = document.createElement('input');
// add a class to the X input
xInput.classList.add('x-input');
// add an attribute of placeholder to the x-input
xInput.setAttribute('placeholder', 'X-Value')
// add some padding 
xInput.style.padding = "10px";

// repeat the steps for Y input
const yInput = document.createElement('input');
yInput.classList.add('y-input');
yInput.setAttribute('placeholder', 'Y-Value');
yInput.style.padding = "10px";

// create a button to send the values
const btn = document.createElement('button');
// give the button a class
// btn.classList.add('button');
btn.setAttribute('class', 'btn');
btn.innerHTML = "Add Box";

// create a drop down to pre-select a background color
// create the div container
const dropDownContainer = document.createElement('div');
//give the container a class of dropdown
dropDownContainer.classList.add("dropdown");
const dropDownAnchors = document.createElement('div');
// add an id to the div
dropDownAnchors.setAttribute('id', 'myDropdown');
// add a class to the div
dropDownAnchors.setAttribute('class', 'dropdown-content');
// create the clickable button
const dropDownButton = document.createElement('button');
// give the button a class of dropbtn
dropDownButton.setAttribute('class', 'dropbtn');
// add text to the drop down button
dropDownButton.innerText = "Select Color";
// create a div to hold the anchor tags that we will hide
// create 4 color options using anchor tags
const redOption = document.createElement('a');
const blueOption = document.createElement('a');
const greenOption = document.createElement('a');
const pinkOption = document.createElement('a');
//add the button to the dropDownContainer
dropDownContainer.appendChild(dropDownButton);
//add the anchors div to the dropdown div
dropDownContainer.appendChild(dropDownAnchors);
//add all colorOptions to the button
dropDownAnchors.appendChild(redOption);
dropDownAnchors.appendChild(blueOption);
dropDownAnchors.appendChild(greenOption);
dropDownAnchors.appendChild(pinkOption);
// style the dropDownAnchors
redOption.style.backgroundColor = "red";
blueOption.style.backgroundColor = "blue";
greenOption.style.backgroundColor = "green";
pinkOption.style.backgroundColor = "pink";
// redOption.textContent('Red');
// blueOption.textContent('blue');
// greenOption.textContent('green');
// blueOption.textContent('blue');

// add all four as children of form-container
// grab the parent element from the DOM
const formContainer = document.querySelector('.form-container');
formContainer.appendChild(xInput);
formContainer.appendChild(yInput);
formContainer.appendChild(dropDownContainer);
formContainer.appendChild(btn);


// ON 'click' handler function for Add Box
function handleClick(event) {
    // On click add a box inside of the box container
    //grab the x and y cords from the dom
    const xAxis = document.querySelector('.x-input').value;
    const yAxis = document.querySelector('.y-input').value;
    // get the width and height of the box container
    const boxContHi = boxContainer.clientHeight;
    const boxContWi = boxContainer.clientWidth;
    // make sure the box is not past the size 
    // of the container, and not a negitive number
    // or anthing other than numbers
    // or empty
    (isNumber(xAxis, yAxis)
        ? 
    (xAxis >= boxContWi 
    || yAxis >= boxContHi
    || xAxis < 0
    || yAxis < 0) 
        ? alert("Please enter a valid number") 
        : loadBox(xAxis, yAxis)
        : alert("Please enter a valid number")
    );
   

}

// function loads the boxes into box-container
function loadBox(x, y) {
    //create a div to be the new box
    const bx = document.createElement('div');
    bx.classList.add('box')
    // use x and y inputs to set x and y box-locations
    bx.style.top = x + "px";
    bx.style.left = y + "px";
    boxContainer.appendChild(bx);
}

// function verifies that a only a number is entered
function isNumber(x, y) {
   const verify = 
   // check x and y to verify numerical value
   !(/^-?\d+\.?\d*$/.test(x)) 
        ? false 
        : (/^-?\d+\.?\d*$/.test(y)) 
            ? true
            : false
    return verify;
}

// function to handle the dropdown click
const dropDownClickHandler = (e) => {
    console.log(e);
    document.getElementById('myDropdown').classList.toggle('show');
}

// function to close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            (openDropdown.classList.contains('show')) 
                ? openDropdown.classList.remove('show')
                : null
        }
    }
}

// add a click event on an Add Box button
// grab the button from the dom
const addBox = document.querySelector('.btn');
// add event listener to addBox
addBox.addEventListener('click', handleClick);

// add a click event for the drop down
const colorDropDown = document.querySelector('.dropbtn');
colorDropDown.addEventListener('click', dropDownClickHandler)
console.log(colorDropDown);