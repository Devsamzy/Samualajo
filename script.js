// var modal=document.createElement("img");


// var img=document.querySelectorAll(".img");
// img.forEach(function(img){
//     img.onclick=()=>{
//         modal.src=img.src;
        
//         document.querySelector(".modalimg").appendChild(modal);
//         document.querySelector(".modalimg").classList="show";
//         modal.className="modal";
//     }
// });
// var produc=document.querySelectorAll(".product");
// produc.forEach(function (produc){
//     produc.onclick=()=>{
//     // document.querySelector(".product").Style.height="auto";
//     // document.querySelector(".conainer").classList.toggle("more");
//     var con=document.querySelectorAll(".conainer");
// con.forEach(function (con){
//     // con.onclick=()=>{
//     // document.querySelector(".product").Style.height="auto";
//     // document.querySelector(".conainer")
//     con.classList.toggle("more");
// // }
// });
// }
// });
document.querySelector(".navbn").onclick=()=>{
    document.querySelector(".nav").className="navi";
    document.querySelector(".navbn").className="closebn";
}
document.querySelector(".closebn").onclick=()=>{
    document.querySelector(".navi").className=".nav";
    document.querySelector(".closebn").classList=".navbn"
}