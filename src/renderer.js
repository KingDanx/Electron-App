const testers = document.querySelector("#testers");
let width = testers.offsetWidth;
let height = testers.offsetHeight;
let count = 12;
let xCoordDown;
let yCoordDown;
let xCoordUp;
let yCoordUp;

const mouseDown = (e) => {
  e.preventDefault();
  if (e.ctrlKey) {
    count = count * 2;
    testers.style.background = "pink";
    testers.style.fontSize = `${count}px`;
  } else if (e.shiftKey) {
    count = count / 2;
    testers.style.background = "green";
    testers.style.fontSize = `${count}px`;
  } else if (e.altKey) {
    testers.style.background = "red";
  } else {
    testers.style.background = "blue";
  }
  //   testers.style.left = `${xCoordDown}px`;
  //   testers.style.top = `${yCoordDown}px`;
  xCoordDown = e.pageX;
  yCoordDown = e.pageY;

  document.onmousemove = elementDrag;
};

const elementDrag = (e) => {
  e.preventDefault();
  // set the element's new position:
  testers.style.left = e.clientX - width / 2 + "px";
  testers.style.top = e.clientY - width / 2 + "px";
};

const mouseUp = (e) => {
  e.preventDefault();
  testers.style.background = "mediumpurple";
  xCoordUp = e.pageX;
  yCoordUp = e.pageY;
  console.log(xCoordDown - xCoordUp + " x");
  console.log(yCoordDown - yCoordUp + " y");
  console.log(e.target);

  testers.style.left = `${xCoordUp - width / 2}px`;
  testers.style.top = `${yCoordUp - height / 2}px`;

  document.onmousemove = null;
};

testers.addEventListener("mousedown", (e) => mouseDown(e));
window.addEventListener("mouseup", (e) => mouseUp(e));
