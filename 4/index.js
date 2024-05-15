/**
 * Суммирует все переданные числа.
 *
 * @param {...number} numbers - Числа для суммирования.
 * @returns {number} - Сумма всех переданных чисел.
 */
var sum = function (...numbers) {
    /**
     * Общая сумма всех переданных чисел.
     * @type {number}
     */
    var total = 0;
    
    // Суммируем каждое переданное число.
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    
    return total;
};

module.exports = sum;