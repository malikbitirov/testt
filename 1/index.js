/**
 * Получает или устанавливает размер массива.
 * @name Array.prototype.size
 * @type {number}
 */

Object.defineProperty(Array.prototype, 'size', {
  /**
   * Возвращает текущий размер массива.
   * @memberof Array.prototype.size
   * @type {number}
   */
  get: function() {
    return this.length;
  },
  /**
   * Устанавливает новый размер массива.
   * @param {number} value Новый размер массива.
   * @memberof Array.prototype.size
   */
  set: function(value) {
    this.length = value;
  }
});


