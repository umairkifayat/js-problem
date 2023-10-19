let dataa = localStorage.getItem("obj");
// console.log(dataa);
let array = JSON.parse(dataa);




const div = document.querySelector('.div1');


const btn=document.querySelector('#btn');
// console.log(btn);
btn.addEventListener('click',() =>{
array.forEach((item) => {
    // console.log(item);
    div.innerHTML += `Name:${item.name}<br>
    Age:${item.age}<br>`
});
})