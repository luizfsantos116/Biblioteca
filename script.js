const btn = document.getElementById('showMessage');

const box = document.getElementById('messageBox');

const messages = [
'Olá, mundo!',
'Bem-vindo à programação!',
'Você está indo muito bem',
'Continue praticando',
'Frontend é divertido!'
];

let current = 0;

btn.addEventListener('click', () => {

box.classList.add('show');
box.textContent = messages[current];
current = (current + 1) % messages.length;
});