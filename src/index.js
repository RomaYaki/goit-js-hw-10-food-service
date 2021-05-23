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

window.addEventListener('load', (e) => {
  console.log('load')

  const currentTheme = localStorage.getItem('theme');
  console.log(currentTheme)
  if (currentTheme) {
    
    refs.body.className = currentTheme;
    console.log(Theme.DARK === currentTheme ? false : true, 'checker');
    refs.switch.checked = Theme.DARK === currentTheme ? false : true;
  }
})

refs.switch.addEventListener('change', (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  localStorage.setItem('theme', refs.body.classList);
})


// if(currentTheme === Theme.DARK)
// refs.switch.checked = true;