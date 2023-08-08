console.log('Shania Claire');

function getInputs() {
    let keys = document.querySelectorAll('.key')
    let input = document.querySelector('.answer');
    keys.forEach(key => {
        key.addEventListener('click', () => {
            checkInput(input, key);
        });
    })
}

function checkInput(input, key) {
    if (key.textContent === 'AC')
    {
        input.textContent = 0;
        return;
    }
    if (!Number.isInteger(+key.textContent))
    {
        console.log("not ints");
    }
    if (key.textContent === 'Del' && input.textContent.length === 1)
    {
        input.textContent = 0;
    }
    else if (input.textContent === '0' && input.textContent.length === 1)
    {
        input.textContent = key.textContent;
    }
    else if (key.textContent === 'Del')
    {
        input.textContent = input.textContent.slice(0, -1);
    }
    else 
    {
        input.textContent = input.textContent + key.textContent;
    }
}

function operate() {

}

getInputs();