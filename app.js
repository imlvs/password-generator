const passOut = document.getElementById('generated-password');
const passCopy = document.getElementById('copy-password');
const passGen = document.getElementById('generate-password');

const passLen = document.getElementById('password-length');
const passUp = document.getElementById('password-up');
const passLow = document.getElementById('password-lower');
const passNum = document.getElementById('password-numbers');
const passSymbols = document.getElementById('password-symbols');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


passGen.addEventListener('click', () => {
    let password = '';
    const len = passLen.value;
    const list = [];

    if (passUp.checked) {
        list.push(upperLetters);
    }
    if (passLow.checked) {
        list.push(lowerLetters);
    }
    if (passNum.checked) {
        list.push(numbers);
    }
    if (passSymbols.checked) {
        list.push(symbols);
    }

    const readyList = list.join('');
    if (readyList.length != 0) {
        for (let i = 0; i < len; i++) {
            password += readyList[Math.floor(Math.random() * readyList.length)]
        }
        passOut.textContent = password;
    } else {
        return;
    }
});

passCopy.addEventListener('click', () => {
    const passArea = document.createElement('pass-area');
    const password = passOut.textContent;

    if (password) {
        const el = document.createElement('textarea')
        el.value = password;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    } else {
        return;
    }
});