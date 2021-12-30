export class Observable<L extends Function, A extends Array<unknown>> {

  private readonly _listeners: Set<L> = new Set();

  notify(...args: A): void {
    this._listeners.forEach((fn: L): void => fn(...args));
  }
  
  observe(fn: L): L {
    this._listeners.add(fn);
    return fn;
  }

  ignore(fn: L): void {
    this._listeners.delete(fn);
  }

}