const states = {
  pending: "PENDING",
  fulfilled: "FULFILLED",
  rejected: "REJECTED",
};

const thenable = (obj) => obj && typeof obj.then === "function";

class VPPromise {
  constructor(computation) {
    this._value;
    this._reason;

    this._state = states.pending;
    this._thenqueue = [];

    if (typeof computation === "function") {
      setTimeout(() => {
        try {
          computation(
            this._onFulfilled.bind(this),
            this._onRejected.bind(this)
          );
        } catch (err) {
          this._onRejected(err);
        }
      });
    }
  }

  then(fullFilledfn, rejectedFn) {
    let controlledPromise = new VPPromise();
    this._thenqueue.push([controlledPromise, fullFilledfn, rejectedFn]);

    if (this._state === states.fulfilled) {
      this._propagateFulfilled();
    } else if (this.state === states.rejected) {
      this._propagateRejected();
    }

    return controlledPromise;
  }

  catch(rejectedFn) {
    return this.then(undefined, rejectedFn);
  }

  _propagateFulfilled() {
    this._thenqueue.forEach(([controlledPromise, fullFilledfn]) => {
      if (typeof fullFilledfn === "function") {
        let result;
        if (thenable(this._value)) {
          this._value.then(
            (val) => {
              result = fullFilledfn(val);
            },
            (err) => controlledPromise._onRejected(err)
          );
        } else {
          result = fullFilledfn(this._value);
        }
        if (thenable(result)) {
          result
            .then((val) => controlledPromise._onFulfilled(val))
            .catch((err) => controlledPromise._onRejected(err));
        } else {
          controlledPromise._onFulfilled(result);
        }
      } else {
        return controlledPromise._onFulfilled(this._value);
      }
    });
    this._thenqueue = [];
  }

  _propagateRejected() {
    this._thenqueue.forEach(([controlledPromise, _, rejectedFn]) => {
      if (typeof rejectedFn === "function") {
        let result = rejectedFn(this._reason);
        if (thenable(result)) {
          result
            .then((val) => controlledPromise._onFulfilled(val))
            .catch((err) => controlledPromise._onRejected(err));
        } else {
          controlledPromise._onFulfilled(result);
        }
      } else {
        return controlledPromise._onRejected(this._reason);
      }
    });
    this._thenqueue = [];
  }

  _onFulfilled(value) {
    if ((this._state = states.pending)) {
      this._value = value;
      this._state = states.fulfilled;
      this._propagateFulfilled();
    }
  }

  _onRejected(value) {
    if ((this._state = states.pending)) {
      this._reason = value;
      this._state = states.rejected;
      this._propagateRejected();
    }
  }
}

VPPromise.resolve = (val) => new VPPromise((resolve, reject) => resolve(val));
VPPromise.reject = (val) => new VPPromise((resolve, reject) => reject(val));

let promise = new VPPromise((resolve, reject) => {
  setTimeout(() => resolve("Heello"), 1000);
});

VPPromise.resolve(promise).then((cal) => console.log("Hello", cal));

let p1 = promise
  .then((val) => {
    console.log(val);
    return "hello again";
  })
  .then((val) => {
    console.log(val);
    return VPPromise.reject("error");
  })
  .catch((err) => {
    console.log(err);
    return VPPromise.resolve("resolved");
  })
  .then((val) => {
    console.log(val);
  });
