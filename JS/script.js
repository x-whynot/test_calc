document.addEventListener('DOMContentLoaded', () => {
    const iks = document.querySelector('.iks');
    const whynot = document.querySelector('.whynot');
    const calc = document.querySelector('.calc');
    const calculator = document.querySelector('.calculator');
    const backgroundCalc = document.querySelector('.background_calc');

    // Появление X
    setTimeout(() => {
        iks.style.opacity = '1';
        iks.style.transform = 'scale(1) rotate(360deg)';
    }, 1000);

    // Появление WHYNOT
    setTimeout(() => {
        whynot.style.opacity = '1';
        whynot.style.transform = 'translateX(0)';
    }, 2000);

    // Появление CALCULATOR
    setTimeout(() => {
        calc.style.opacity = '1';
    }, 3000);

    // Убираем X и WHYNOT, поднимаем CALCULATOR
    setTimeout(() => {
        iks.style.opacity = '0'; // Скрываем X
        whynot.style.opacity = '0'; // Скрываем WHYNOT
        calc.classList.add('move_up'); // Поднимаем калькулятор
    }, 5000);

    // Показываем калькулятор
    setTimeout(() => {
        calculator.classList.add('visible'); // Показываем интерфейс
    }, 6000);
});
