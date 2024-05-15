var sum = require('./index.js');

// Тест 1: Проверяем суммирование положительных чисел
var test1 = sum(1, 2, 3);
console.log('Test 1 result:', test1 === 6 ? 'Passed' : 'Failed');

// Тест 2: Проверяем суммирование отрицательных чисел
var test2 = sum(-1, -2, -3);
console.log('Test 2 result:', test2 === -6 ? 'Passed' : 'Failed');

// Тест 3: Проверяем суммирование положительных и отрицательных чисел
var test3 = sum(-1, 2, -3, 4);
console.log('Test 3 result:', test3 === 2 ? 'Passed' : 'Failed');

// Тест 4: Проверяем суммирование без аргументов
var test4 = sum();
console.log('Test 4 result:', test4 === 0 ? 'Passed' : 'Failed');
