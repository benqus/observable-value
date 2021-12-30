import { ObservableValue, Listener } from './ObservableValue';

export * from './Observable';
export * from './ObservableValue';

export interface Accessor<T> {
  (): T;

  readonly observable: ObservableValue<T>;

  set(v: T): void;
  observe(fn: Listener<T>): Listener<T>;
  ignore(fn: Listener<T>): void;
}

export function observable<T = unknown>(initialValue: T = null): Accessor<T> {

  function get(): T {
    return get.observable.value;
  }

  get.observable = new ObservableValue<T>(initialValue);

  get.set = function set(newValue: T): Accessor<T> {
    get.observable.value = newValue;
    return get;
  };

  get.observe = function observe(fn: Listener<T>): Listener<T> {
    return get.observable.observe(fn);
  };

  get.ignore = function ignore(fn: Listener<T>): void {
    return get.observable.ignore(fn);
  };

  return get;
}