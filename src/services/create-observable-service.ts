import { merge, cloneDeep } from 'lodash';

type ListenerFn = () => void;

export class MyObservable {
  private listeners: ListenerFn[] = [];

  subscribe(listenerFn: ListenerFn) {
    this.listeners.push(listenerFn);
    return () => { // unsubscribe function
      this.listeners = this.listeners.filter((fn) => fn !== listenerFn);
    };
  }

  protected notifyListeners() {
    this.listeners.forEach((listenerFn) => listenerFn());
  }
}

const observablePrototype = {
  _listeners: [] as ListenerFn[],

  subscribe(listenerFn: ListenerFn) {
    this._listeners.push(listenerFn);
    return () => { // unsubscribe function
      this._listeners = this._listeners.filter((fn) => fn !== listenerFn);
    };
  },

  _notifyListeners() {
    this._listeners.forEach((listenerFn) => listenerFn());
  }
};

export default function createObservableService(serviceDefinition: any) {
  return merge({}, cloneDeep(observablePrototype), serviceDefinition);
}
