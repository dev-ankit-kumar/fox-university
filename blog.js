// function setFadeIn(){
// 	document.body.className = 'body fade-in'
// 	setTimeout(setFadeOut, 1000);
// }

// function setFadeOut(){
// 	document.body.className = 'body';
// }

// let btnfor=document.querySelector('.btn2')

// btnfor.addEventListener("click" , unhide



// )

// function unhide(){
//     let unh=document.querySelector('.itemsrow')

//     unh.classList.toggle("hide");
//     btnfor.classList.toggle("hide");

// }

let mnu=document.querySelector('.menu')

mnu.addEventListener("click" ,hidemenu);

function hidemenu(){
    let tbl=document.querySelector('.menuofpage')
    tbl.classList.toggle("hide");
    mnu.classList.toggle("hide");
}




