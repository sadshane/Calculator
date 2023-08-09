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
    let textLength = bottomText.replace(/\s+/g, '').length;
    if (textLength === 13)
    {
        console.log(textLength)
        upperScreen.textContent = "max digits is 13";
        let choice = ['Del', 'Clear']
        return choice.includes(character) ? bottomScreen.textContent = checkOperator(character, bottomScreen, upperScreen) : 0;
    }
    let operators = ['+', '-', '÷', '×', 'Del', 'Clear', '='];
    
    if (operators.includes(character))
    {
        bottomScreen.textContent = checkOperator(character, bottomScreen, upperScreen);
    }   
    else if (+bottomText === 0)
    {
        bottomScreen.textContent = character;
    }
    else
    {
        bottomScreen.textContent = bottomText + character;
    }

    automaticallyOperateEquation(bottomScreen, upperScreen, operators);
}

function checkOperator(char, bottomScreen, upperScreen) {
    let bottomText = bottomScreen.textContent;
    switch (char)
    {
        case '+':
            return `${bottomText} + `;
        case '-':
            return `${bottomText} - `;
        case '×':
            return `${bottomText} × `;
        case '÷':
            return `${bottomText} ÷ `;
        case 'Del':
            if (bottomText.length === 1)
            {
                return 0
            }
            else
            {
                return bottomText[bottomText.length - 1] !== ' ' ? `${bottomText.slice(0, -1)}` : `${bottomText.slice(0, -3)}`;
            }
        case 'Clear':
            upperScreen.textContent = 0;
            return 0;
        default:
            return upperScreen.textContent;
    }
}


function operate(value) {
    let integers = value;
    let operator = integers[1];
    switch (operator)
    {
        case '+':
            return +integers[0] + +integers[2];
        case '-':
            return +integers[0] - +integers[2];
        case '×':
            return +integers[0] * +integers[2];
        default:
            return +integers[0] / +integers[2];
    }
}

function automaticallyOperateEquation(bottomScreen, upperScreen, operators) {
    let equation = bottomScreen.textContent.split(' ')
    let subEquation = equation.slice(0, 3);
    if (subEquation.length === 3 && subEquation[2] !== '')
    {
        do
        {
            equation.splice(0, 3, operate(subEquation));
            subEquation = equation.slice(0, 3);
        }while(subEquation.length === 3 && subEquation[2] !== '');
        if(isNaN(subEquation))
        {
            upperScreen.textContent = 'Error'
            return
        }
        upperScreen.textContent = subEquation;
    }
    // if (subEquation.length === 1 || bottomScreen.textContent.length !== 1)
    // {
    //     if(isNaN(subEquation))
    //     {
    //         upperScreen.textContent = 'Error'
    //         return
    //     }
    //     upperScreen.textContent = subEquation;
    // }
}

getInputs();