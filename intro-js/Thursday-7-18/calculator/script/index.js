// jS
const allDivs = document.querySelectorAll('.calc');

allDivs.forEach((key) => {
    // const divTextArray = [];
    // divTextArray.push(key.innerText);
    // console.log(divTextArray[0]);
    // screen.append(divTextArray[0]);
})

const handleClick = (e) => {
    const key = e.target.innerText;
    const screen = document.querySelector('[data-screen]');
    screen.append(key);
    switch (key) {
        case key === "C":
            screen.remove(key);
            break;
    }
}

allDivs.forEach((key) => {key.addEventListener('click', handleClick)})