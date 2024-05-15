/**
 * Находит пропущенное значение в неотсортированном массиве целых чисел.
 * @param {number[]} values - Массив целых чисел.
 * @returns {number|undefined} - Пропущенное значение или undefined, если пропущенных значений нет.
 */
function missing(values) {
    // Создаем объект Set для быстрого поиска элементов массива
    const numSet = new Set(values);
    
    // Находим минимальное и максимальное значение в массиве
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    
    // Проверяем каждое число в диапазоне от minValue до maxValue
    for (let i = minValue; i <= maxValue; i++) {
        // Если число отсутствует в массиве, возвращаем его
        if (!numSet.has(i)) {
            return i;
        }
    }
    
    // Если пропущенных значений нет, возвращаем undefined
    return undefined;
}

module.exports = missing;