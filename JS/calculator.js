let www_window = document.querySelector('.www_window');
let buttons = document.querySelectorAll('.buttons button');

// Функции обработки событий
function appendNumber(number) {
    www_window.value += number;
}

function appendOperator(operator) {
    // Предотвращаем ввод двух операторов подряд
    if (www_window.value !== '' && !isNaN(www_window.value.slice(-1))) {
        www_window.value += operator;
    }
}

function calculate() {
    try {
        // Преобразование знаков для выполнения операции
        let expression = www_window.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        // Выполнение выражения
        let result = new Function(`return ${expression}`)();
        www_window.value = result;
    } catch (error) {
        www_window.value = 'Error';

    }
}

function clearDisplay() {
    www_window.value = '';
}

// Привязка событий к кнопкам
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '×', '÷'].includes(value)) {
            appendOperator(value);
        } else {
            appendNumber(value);
        }
    });
});