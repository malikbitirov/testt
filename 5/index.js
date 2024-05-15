/**
 * Функция для получения простых чисел до заданного максимального значения.
 * @param {number} max - Максимальное значение, до которого нужно найти простые числа.
 * @returns {number[]} - Массив простых чисел до максимального значения.
 */
var getNaturalNumbers = function (max) {
    /**
     * Проверяет, является ли число простым.
     * @param {number} num - Число для проверки.
     * @returns {boolean} - Возвращает true, если число простое, иначе false.
     */
    function isPrime(num) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    var primes = [];

    // Получение всех простых чисел до max
    for (var i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
};

module.exports = getNaturalNumbers;
