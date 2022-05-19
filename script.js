const counter = document.getElementById("counter");
const add = document.getElementById("incr");
const sub = document.getElementById("decr");
const reset = document.getElementById("reset");

let number = 0;

add.addEventListener("click", () => {
  number++;
  counter.innerHTML = number;
  if(number > 0){
    counter.style.color="green"
  }
});

sub.addEventListener("click", () => {
  number--;
  counter.innerHTML = number;
  if(number > 0){
    counter.style.color="red"
  }
});

reset.addEventListener("click", () => {
  number = 0;
  counter.innerHTML = number;
  
    counter.style.color=""
  
});
