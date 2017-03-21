import 'whatwg-fetch';

import data from './user_data';

console.log(data);
const person = data.results[0];

const userImg = document.querySelector('.card-top__img img');
userImg.src = person.picture.large;

const userName = document.querySelector('.card-bottom__name');
userName.innerText = `${person.name.first} ${person.name.last}`;

const userEmail = document.querySelector('.card-bottom__email');
userEmail.innerText = person.email;

const userPhone = document.querySelector('.card-bottom__phone');
userPhone.innerText = person.phone;

const userCity = document.querySelector('.card-bottom__city');
userCity.innerText = `${person.location.city}, ${person.location.state}`;
