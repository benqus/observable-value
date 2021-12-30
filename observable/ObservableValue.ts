import { Observable } from './Observable';

const _u = void 0;

export type Listener<T = unknown> = (value: T) => void;

export class ObservableValue<T = unknown> extends Observable<Listener<T>, [T]> {

  private _value: T = null;

  constructor(value: T = null) {
    super();
    this._value = value;
  }

  public get value(): T {
    return typeof this._value === 'function' ? this._value() : this._value;
  }

  public set value(value: T) {
    if (value === _u || this._value === value) return;
    this._value = value;
    this.notify(this.value);
  }
  
}
