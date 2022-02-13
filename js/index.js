const color = ['#330000', '#660066', '#330033', '#330066', '#000066',
            '#6600CC', '#6699FF', '#999999', '#9999CC'];

const mainLink = document.querySelector('.main__link');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');
const mainTextText = document.querySelector('.main_text-text');
const mainTextAuthor = document.querySelector('.main_text-author');
const ruRadio = document.querySelector('#ru');
const enRadio = document.querySelector('#en');

function colorRandom(random) {
    let rand = Math.round(0 - 0.5 + Math.random() * (random.length - 0 + 1));
    return random[rand];
}

function changeColor() {
    let rand = colorRandom(color)
    header.style.background = rand;
    main.style.background = rand;
    footer.style.background = rand;
}

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    let rand = Math.round(0 - 0.5 + Math.random() * (data.length - 0 + 1));
    mainTextText.textContent = data[rand].text;
    mainTextAuthor.textContent = data[rand].author;
}

getData('data.json');

mainLink.addEventListener('click', () => {
    changeColor();

    if(ru.checked) {
        mainLink.textContent = 'Нажми меня'
        getData('data.json');
    }

    if(en.checked) {
        mainLink.textContent = 'Click me'
        getData('https://type.fit/api/quotes');
    }
});