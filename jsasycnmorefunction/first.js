//set interval

// const saydate = function(){
//     // console.log("str",Date.now());

// }


// const setinteval = setInterval(saydate
//     // console.log("mihir");
// ,1000,"hi");


// //for stoping setinterval we have clear inteval
// // we have to pass Reference;


// clearInterval(setinteval);
const execute = function(){
    console.log("hello");
}




document.querySelector('.start').addEventListener('click',function(){
const stop = setInterval(execute,2000)
})

document.querySelector('.stop').addEventListener('click',function(){
    clearInterval(stop);
})