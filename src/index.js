import './sass/main.scss';
import card from '../menu.json'
import itemsMarcup from './tamplate/menu_items.hbs';

const tamplateCard = document.querySelector('#menu');
const markup = itemsMarcup(card);
tamplateCard.insertAdjacentHTML('beforeend', markup);


const refs = {
  switch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', (e) => {
  if (e.target.checked) {   
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  localStorage.setItem('theme', refs.body.classList);
})

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  
  refs.body.className = currentTheme;
}

if(currentTheme === Theme.DARK)
refs.switch.checked = true;