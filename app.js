const btn = document.querySelector('button');
const span = document.querySelector('span');

btn.addEventListener('click', () => {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  span.innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}