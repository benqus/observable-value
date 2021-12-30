import { observable } from './observable';

// import './test'

// UI
const $increment = document.getElementById('increment');
const $decrement = document.getElementById('decrement');
const $counter = document.getElementById('counter')

const counter = observable<number>(0);
counter.observe(render);

function render() {
  $counter.innerHTML = `<h2>Count: ${counter()}</h2>`;
}

function increment() {
  counter.set(counter() + 1);
}

function decrement() {
  counter.set(counter() - 1);
}

$increment.onclick = () => increment();
$decrement.onclick = () => decrement();

render();