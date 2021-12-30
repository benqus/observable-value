import { observable } from './observable';

console.clear();

const o = observable<string>('bla');

const fn1 = (v: string) => console.log('observe 1:', v);
const fn2 = (v: string) => console.log('observe 2:', v);

console.log('observe 0:', o());

o.observe(fn1);
o.observe(fn1);
o.observe(fn2);

o.set("bla1");

o.ignore(fn1);

o.set("bla2");
