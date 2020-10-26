import { merge } from 'lodash';

type SubscribeFn = () => void;

export interface MyState {
  [key: string]: any;
}

const myStore = {
  _subscribers: [] as SubscribeFn[],
  _state: {
    triangle: {
      a: 6,
      h: 9
    }
  } as MyState,

  getState(): MyState {
    return {
      ...this._state
    };
  },

  subscribe(fn: SubscribeFn) {
    this._subscribers.push(fn);
  },

  dispatchChange(data = {}) {
    this._state = merge({}, this._state, data);
    console.log('state', this._state);
    this._notifySubscribers();
  },

  _notifySubscribers() {
    this._subscribers.forEach((fn) => fn());
  }

};

export type MyStore = typeof myStore;

export default myStore;
