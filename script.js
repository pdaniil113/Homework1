function defineSeason(month) {
    if (month < 1 || month > 12) {
        return 'Ошибка: введите число от 1 до 12';
    } else if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Лето';
    } else if (month >= 9 && month <= 11) {
        return 'Осень';
    } else {
        return 'Зима';
    }
}

document.querySelector('.gameOne__button').addEventListener('click', function () {
    let month = prompt('Введите номер месяца (от 1 до 12):');
    let season = defineSeason(month);
    alert(season);
});