let inp = document.querySelector('input');
let btn = document.querySelector('.Add');
let ol = document.querySelector('ol');

btn.addEventListener('click',function () {
    let item = document.createElement('li');
    item.innerText = inp.value;
    inp.value = "";

    let del = document.createElement('button');
    del.innerText = 'Delete';
    del.classList.add('delete');
    
    item.appendChild(del);
    ol.appendChild(item); 

});

inp.addEventListener('keypress', function (event){
    if (event.code == "Enter"){
        event.preventDefault();
        btn.click();
    }
});


ol.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }


})

// ol.addEventListener('click', function(){
//     let delbtns = document.querySelectorAll('.delete');
//     for (delbtn of delbtns){
//         delbtn.addEventListener('click', function (){
//             let par = this.parentElement ;
//             par.remove();
//         })
//     }
// })


// let delbtns = document.querySelectorAll('.delete');
// for (delbtn of delbtns){
//     delbtn.addEventListener('click', function (){
//         let par = this.parentElement ;
//         par.remove();
//     })
// }