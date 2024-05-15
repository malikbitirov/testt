/**
 * Функция для подсчета кликов до трех включительно.
 * @param {MouseEvent} event - Событие клика.
 * @returns {void}
 */
function clickHandler(event) {
    // Увеличиваем счетчик кликов на 1
    clickCount++;

    // Проверяем, не превышает ли количество кликов 3
    if (clickCount <= 3) {
        console.log(`Клик ${clickCount}`);
    } else {
        // Если превышено, удаляем обработчик события клика
        document.removeEventListener('click', clickHandler);
        console.log("Достигнут максимальный лимит кликов.");
    }
}

// Инициализация счетчика кликов
let clickCount = 0;

// Добавляем обработчик события клика
document.addEventListener('click', clickHandler);
