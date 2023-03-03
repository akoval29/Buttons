// const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.querySelector('.overlay');

// Спосіб назначити обработчик № 1
// btn.onclick = function () {
//   alert('Click');
// }

// АБО

// Спосіб назначити обработчик № 2
btn1.addEventListener('click', (e) => {
  e.target.remove();

})


// АБО

const eTarget = (e) => {
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(e);
  console.log(e.type);
}
btn2.addEventListener('click', eTarget)

// зняти обработчик, опрацювати один раз

let i = 0;
const deleteElement = (e) => {
  alert('Click');
  i++;
  if (i == 1) {
    btn3.removeEventListener('click', deleteElement)
  }
}
btn3.addEventListener('click', deleteElement)

// АБО 
// btn3.addEventListener('click', deleteElement, {once: true})


// випливання подій !!!!!!  capturing phase  !!!!!!!!

const overlay = (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
}
btn4.addEventListener('click', overlay)
overlay.addEventListener('click', overlay)

// prevent default on link

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(e.target);
});

// навішуєм групу обработчиків подій

btns.forEach(btn => {
  btn.addEventListener('mouseenter', (e) => {
    console.log(`hover !`);
  })
})