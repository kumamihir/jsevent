
const textchange = function(){
    document.querySelector('.mih').innerHTML = "i am 19 years old"
}
  const changeme= setTimeout(textchange,3000)

   //this means you make a function textchahnge which is act as a handler in settimeout function and another parameter is time that after how much time you want to execute thi function on you DOM;


   //we have another function clear timeout;

   //in which you have to pass reference so we have to stroe settimeout in a const variable;

// clearTimeout(changeme); //this will remove settimeout;

//now we have to put this clear time out on any event

document.querySelector('.stop').addEventListener('click',function(){
    clearTimeout(changeme);
    console.log("stoped");

})
//doing this stop that change 