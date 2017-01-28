export class AbstractEventTarget {

  constructor() {
    if (this.constructor.name === "AbstractEventTarget") {
      throw new Error(`Can't instantiate ${this.constructor.name}`);
    }
  }

  addEventListener(event, callback) {
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || []).push(callback);
    return this;
  }

  removeEventListener(event = null, callback = null) {
    this._callbacks = this._callbacks || {};
    if (!event) {
      // all
      this._callbacks = {};
    } else if (!callback) {
      // remove all event-specific handlers
      delete this._callbacks[event];
    } else {
      // remove specific handler
      var callbacks = this._callbacks[event];
      this._callbacks[event] = callback.filter((cb) => cb === callback);
    }
    return this;
  }

  dispatchEvent(event) {
    var self = this;
    var args = Array.from(arguments).slice(1);
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || []).slice(0).forEach((cb) => cb.apply(self, args));
    return this;
  }
}