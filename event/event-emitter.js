class Event {
  constructor() {
    this.subscription = {};
  }
  subscribe(event, callback) {
    if (!this.subscription[event]) {
      this.subscription[event] = new Map();
      this.subscription[event].set(callback, 1);
    } else {
      this.subscription[event].set(
        callback,
        this.subscription[event].get(callback) + 1
      );
    }
    return {
      release: () => {
        if (this.subscription[event]) {
          this.subscription[event].set(
            callback,
            this.subscription[event].get(callback) - 1
          );
          if (this.subscription[event].get(callback) === 0) {
            this.subscription[event].delete(callback);
            !this.subscription[event].size && delete this.subscription[event];
          }
        }
      },
    };
  }
  emit(event, ...args) {
    if (this.subscription[event]) {
      for (let [callback, count] of this.subscription[event].entries()) {
        while (count) {
          callback(...args);
          count--;
        }
      }
    }
  }
}
