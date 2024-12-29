//in html we see we cant use those event dircetly on html in js so we can do alternate thing

//we selects that id

// document.getElementById('box1').onclick = function(){
//     alert('now you can touch this')
// }


//this is also not that optimized approach

//you can also do !!!


//eventlistner
//see syntax carefully
//in this we pass three parameters the third one is optioncal it is "false" or"true" but if you can tgive anything it is default false




// document.getElementById('box3').addEventListener('click',function(){
//     alert('again you click this bastard')
// },false)





//you have to study more about
//timestamp,"srcElement",target,preventdefault
//type,toelement


//interview prespective things

//timestamp,srcelement,client positions like client x,client y,screen position screen x,screen y


//let us take a goal we have to do that when we click on any box that box should have to vanish

// document.querySelector('#box1').addEventListener('click',function(e){
//    let removeit = e.target.parentNode;
//    removeit.parentNode.childNode(removeit)
// },false)



//this false and true are event bubbling and event capturing respectively
