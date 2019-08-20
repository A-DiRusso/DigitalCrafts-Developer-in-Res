console.log('is this thing on?');

const parseAddress = ({ street, city, state, postcode }) => `${street}<br/>${city} ${state}<br/>${postcode}`;
const parseName = (name) => `${name.first} ${name.last}`;

const createPerson = ({ name, location, email, phone, picture }) => {
    name = parseName(name);
    location = parseAddress(location);
    return {
        picture: picture.large || picture.medium || picture.thumbnail,
        name,
        location,
        email,
        phone,
    };
};

const createAvatar = (person) => {
    const { name, location, email, phone, picture } = person;
    const el = document.createElement('section');
    el.classList.add('avatar');
    el.innerHTML = `
        <div class="avatar-image">
            <img src="${picture}" alt="${name}"/>
        </div>
        <div class="avatar-content">
            <h2 class="avatar-header">${name}</h2>
            <div class="avatar-location">${location}</div>
            <ul class="avatar-contact-list">
                <li class="avatar-contact-list-item">
                    <a href="mailto:${email}">✉</a>
                </li>
                <li class="avatar-contact-list-item">
                    <a href="tel:${phone}">✆</a> 
                </li>
            </ul>
        </div>
    `;
    return el;
};

const createLetterBtn = letter => {
    const el = document.createElement('button');
    el.innerText= letter;
    return el;
}

const addLetter = () => {
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = allLetters.split('');
    const letterContainer = document.querySelector('.letters');
    const letterButtons = letters.map(createLetterBtn);
    letterButtons.forEach( (el) => letterContainer.appendChild(el));
    const btn = createLetterBtn('Reset');
    btn.classList.add('clear');
    letterContainer.appendChild(btn);
    letterContainer.addEventListener('click', filterListByLetter)
}

const filterListByLetter = (e) => {
    if (e.target === e.currentTarget) {
        return;
    }
    const letter = e.target.innerText;
    let updated = userDataArray.map(createPerson);
    if (letter !== 'Reset') {
        updated = updated.filter(({name}) => {
            const [first, last] = name.split(' ');
            return last.charAt(0).toUpperCase() === letter;
        });
    };
    container.innerHTML='';
    if (updated.length) {
        updated.forEach( el => {
            container.appendChild(createAvatar(el));
        });
    } else {
        container.innerHTML=`<h2>No Results</h2>`;
    }
};

let userDataArray, container;

const start = async () => {
    container = document.querySelector('.container');
    const data = await fetch(`https://randomuser.me/api/?results=50`)
    const dataJsonObject = await data.json();
    userDataArray = dataJsonObject.results;
    const peopleAvatars = userDataArray.map(createPerson).map(createAvatar);
    peopleAvatars.forEach( user => container.appendChild(user));
    addLetter();
}

document.addEventListener('DOMContentLoaded', start);