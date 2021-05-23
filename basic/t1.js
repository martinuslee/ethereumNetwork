console.log("--callback funtion test--");

const callup = () => {
  console.log("callup !!");
};

callup();

const add = (x, y) => {
  return x + y;
};

const task1 = (x, y, task2) => {
  task2(x + y);
};

task1(1,2, (task2)=>{
    console.log(task2," is the output")
})