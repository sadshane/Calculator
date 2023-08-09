console.log('Shania Claire');

function getInputs() {
    let keys = document.querySelectorAll('.key')
    let bottomScreen = document.querySelector('.answer');
    let upperScreen = document.querySelector('.input');
    keys.forEach(key => {
        key.addEventListener('click', () => {
            checkInput(bottomScreen, key, upperScreen);
        });
    })
}

function checkInput(bottomScreen, key, upperScreen) {
    let character = key.textContent;
    let bottomText = bottomScreen.textContent;  
    let operators = ['+', '-', '÷', '×', 'Del', 'AC', '='];
    
    if (operators.includes(character, bottomScreen))
    {
        checkOperator(character, bottomScreen);
    }   
    else if (+bottomText === 0)
    {
        bottomScreen.textContent = character;
    }
    else
    {
        bottomScreen.textContent = bottomText + character;
    }
}

function checkOperator(char, bottomScreen) {
    let bottomText = bottomScreen.textContent;
    switch (char)
    {
        case '+':
            bottomScreen.textContent = `${bottomText} + `;
            break;
        case '-':
            bottomScreen.textContent = `${bottomText} - `;
            break;
        case '×':
            bottomScreen.textContent = `${bottomText} × `;
            break;
        case '÷':
            bottomScreen.textContent = `${bottomText} ÷ `;
            break;
    }
}

function operate() {

}

getInputs();