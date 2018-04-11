/**
 * Класс реализует механизма подписки на события
 * @class
 */
class Emitter {

	/**
	 * Создаёт экземпляр Emitter
	 * @constructs
	 */
	constructor () {
		this._listeners = new Map()
	}

	/**
	 * Подписывает функцию обратного вызова на события определённого типа,
	 * если она не была подписана ранее
	 * @param  {String} event - тип события
	 * @param  {Function} handler - функция обратного вызова
	 * @return {Emitter} Возвращает текущий экземпляр класса
	 */
	on (event, handler) {
		let handlers

		if (this._listeners.has(event)) {
			handlers = this._listeners.get(event)
		} else {
			handlers = new Set()
			this._listeners.set(event, handlers)
		}

		handlers.add(handler)

		return this
	}

	/**
	 * Отписывает функцию обратного вызова от событий определённого типа
	 * @param  {String} event - тип события
	 * @param  {Function} handler - функция обратного вызова
	 * @return {Emitter} Возвращает текущий экземпляр класса
	 */
	off (event, handler) {
		if (this._listeners.has(event)) {
			const handlers = this._listeners.get(event)

			handlers.delete(handler)

			if (handlers.size === 0) {
				this._listeners.delete(event)
			}
		}

		return this
	}

	/**
	 * Вызывает все функции обратного вызова,
	 * подписанные на событие определённого типа
	 * @param  {String} event - тип события
	 * @return {Emitter} Возвращает текущий экземпляр класса
	 */
	emit (event) {
		if (this._listeners.has(event)) {
			const handlers = this._listeners.get(event)
			const iterator = handlers[Symbol.iterator]()
			let next

			/* eslint-disable-next-line no-cond-assign */
			while ((next = iterator.next()) && !next.done) {
				next.value() // Вызываем функцию обратного вызова
			}
		}

		return this
	}
}

module.exports = Emitter