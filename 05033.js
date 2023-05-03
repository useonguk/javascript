var check = document.querySelectorAll('.checkbx');
var total = document.getElementById("total");
var max = 0;

// console.log(max);
// document.getElementsByClassName('price').value = max+"원";
// check[0].addEventListener("click", function(){
//     if (check[0].checked === true){
//         max += Number(check[0].value);
//         console.log(max);
//     } else{
//         max -= Number(check[0].value);
//         console.log(max);
//     }
//     document.querySelector('.price').value = max+"원";
// });

// check[1].addEventListener("click", function(){
//     if (check[1].checked === true){
//         max += Number(check[1].value);
//         console.log(max);
//     } else{
//         max -= Number(check[1].value);
//         console.log(max);
//     }
//     document.querySelector('.price').value = max+"원";
// });

// check[2].addEventListener("click", function(){
//     if (check[2].checked === true){
//         max += Number(check[2].value);
//         console.log(max);
//     } else{
//         max -= Number(check[2].value);
//         console.log(max);
//     }
//     document.querySelector('.price').value = max+"원";
// });

// check[3].addEventListener("click", function(){
//     if (check[3].checked === true){
//         max += Number(check[3].value);
//         console.log(max);
//     } else{
//         max -= Number(check[3].value);
//         console.log(max);
//     }
//     document.querySelector('.price').value = max+"원";
// });

// check[4].addEventListener("click", function(){
    // if (check[4].checked === true){
    //     max += Number(check[4].value);
    //     console.log(max);
    // } else{
    //     max -= Number(check[4].value);
    //     console.log(max);
    // }
    // document.querySelector('.price').value = max+"원";
// });

check.forEach(function(e){
    e.addEventListener("click", function(){
    if (e.checked === true){
        max += parseInt(e.value);
        console.log(max);
    } else{
        max -= parseInt(e.value);
        console.log(max);
    }
    document.querySelector('.price').value = max+"원";
    });
});