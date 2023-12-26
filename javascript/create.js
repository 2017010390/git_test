const container = document.querySelector('#container');

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";
container.appendChild(para);

const headThree = document.createElement('h3');
headThree.style.color = 'blue';
headThree.textContent = "I'm a blue h3!";
container.appendChild(headThree);

const div = document.createElement('div');
div.style.cssText = "bold:1 solid black;";
div.style.backgroundColor = 'pink';

const divHeadOne = document.createElement('h1');
divHeadOne.textContent = "I'm in a div";
div.appendChild(divHeadOne);

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";
div.appendChild(divPara);

container.appendChild(div);