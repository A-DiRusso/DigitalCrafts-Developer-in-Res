const makeBreakfast = (bacon) => {
    const pancakes = bacon.results[0].name
    localStorage.setItem('grits', pancakes);
    const oatMeal = localStorage.getItem('grits');
    console.log(oatMeal);
    const URL = bacon.results[0].image
    document.body.style.backgroundImage = `url(${URL})`
}
const coffee = 'character'
const URL = `https://rickandmortyapi.com/api/${coffee}`;
fetch(URL)
.then((response) => {
    return response.json();
}).then((eggs) => {
    makeBreakfast(eggs);
});


