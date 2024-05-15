# Array Size
Этот проект добавляет свойство `size` к массивам JavaScript, аналогичное свойству `length`. Свойство `size` позволяет получать текущий размер массива и изменять его.

## Установка
1. Скопируйте репозиторий 
git clone https://github.com/malikbitirov/testt/

## Использование
1. Перейдите в директорию проекта:
cd testt/1

2. Запуск проекта:
node index.js

3. Запуск тестов проекта:
node test.js

## Пример использования
```javascript
console.log([0, 1].size); // 2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
