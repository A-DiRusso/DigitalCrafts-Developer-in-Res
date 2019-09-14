// //jS
// //sanity check
// console.log('Is this thing on?');
// // grab the container and the addBtn
// const container = document.querySelector(`btn-container`);
// const addBtn = document.querySelector(`[name=addBtn]`);
// // set a random number veriable for later use
// const randNum = (max) => Math.floor(Math.random() * Math.floor(max));
// // function adds a box
// const addABox = (e) => {
//     console.log(e.target.dataset)
//     const box = document.createElement('button');
//     const clickNum = randNum(10);
//     console.log(clickNum);
//     box.dataset.name = `${clickNum}`;
//     e.target.container.appendChild(box);
// }
// // the new button should only be clicked a random number of times between 1 - 10
// // the button should be disabled when it runs out of clicks

// // Add New Button should add a new button
// addBtn.addEventListener('click', (e) => addABox(e));


const container = document.querySelector(`.btn-container`);
const addBtn = document.querySelector(`[name="addBtn"]`);

const randNum = (max) => Math.floor(Math.random() * Math.floor(max));
const turnBlue = (box) => box.style.backgroundColor="lightblue";

const buttonClick = (e) => {
    // console.log(e.target.dataset.number)
    // if (e.target !== e.currentTarget) {
    //     e.target.dataset.number -= 1
    //     if (e.target.dataset.number === 0) {
        //     } else {
            //     }
            // }
           if ( e.target !== e.currentTarget) {
               e.target.dataset.number -= 1;
               if (e.target.dataset.number > 0) {
                   console.log(e.target.dataset.number)
                   e.target.innerHTML = `I can be clicked ${e.target.dataset.number} times`;
               } else {
                   console.log("I'm disabled");
                   e.target.innerHTML = `I'm a developer`;
                   turnBlue(e.target);
                   e.target.disabled = true;
               }

           }
    // if (e.target === e.currentTarget && e.target.dataset.number > 0)  {
    //     e.target.innerHTML = `I can be clicked ${e.target.dataset.number} times`;
    // } else {
    //     e.target.innerHTML = `I'm disabled`;
    //     turnBlue(e.target);
    //     e.target.disabled = true;
    // } 
};
            


const createButton = () => {
    const el = document.createElement('button');
    const newNum = randNum(10);
    el.dataset.number = `${newNum}`;
    el.innerHTML = `I can be clicked ${newNum} times`;
    container.appendChild(el);
}

addBtn.addEventListener('click', createButton);
container.addEventListener('click', buttonClick);
     