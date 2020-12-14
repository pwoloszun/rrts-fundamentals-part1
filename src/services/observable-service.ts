type ListenerFn = () => void;
type UnsubscribeFn = () => void;

export default class ObservableService {
  private _listeners: ListenerFn[] = [];

  subscribe(listenerFn: ListenerFn): UnsubscribeFn {
    this._listeners.push(listenerFn);
    return () => { // unsubscribe function
      this._listeners = this._listeners.filter((fn) => fn !== listenerFn);
    };
  }

  protected _notifyListeners() {
    this._listeners.forEach((listenerFn) => listenerFn());
  }
}
