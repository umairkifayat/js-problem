// // const div = document.querySelector('.div');
// // const btn = document.querySelector('.btn');

// const obj = [
//     {
//         name: "Alice",
//         age: 30
//     },
//     {
//         name: "Bob",
//         age: 25
//     },
//     {
//         name: "Charlie",
//         age: 35
//     },
//     {
//         name: "David",
//         age: 28
//     },
//     {
//         name: "Eva",
//         age: 22
//     },
//     {
//         name: "Frank",
//         age: 40
//     },
//     {
//         name: "Grace",
//         age: 27
//     },
//     {
//         name: "Helen",
//         age: 33
//     },
//     {
//         name: "Ian",
//         age: 29
//     },
//     {
//         name: "Jasmine",
//         age: 24
//     },
// ];



// // btn.addEventListener('click', () => {
// //     obj.map((item) => {

// //         div.innerHTML += `<h1>Name:${item.name}</h1>
// //     <p>Age:${item.age}</p>`

// //     const cart = JSON.stringify(obj);
// //     console.log(obj);
// //     localStorage.setItem("obj", cart)
// //     });
// // })

// // function gocart(obj) {
// //     window.location = 'cart.html'
// // }



// // const hello =document.querySelector('.hello');
// // const div = document.querySelector('.div');

// // console.log(hello);
// //  let interval = 0; 
// // interval = setInterval(() => {
// //     interval++
// //     div.innerHTML = interval 
// //     // console.log(div);
// // },1000)

// // interval = setTimeout(() => {
// //     // interval++
// //     div.innerHTML = interval
// // }, 1000);


// // function updateDiv() {
// //     interval++;
// //     div.innerHTML = interval;
// //     setTimeout(updateDiv, 1000);
// // }

// // updateDiv();



// // const btn = document.querySelector('.btn');
// // const div = document.querySelector('.div');

// // let obj;
// // btn.addEventListener('click',(async) =>{
// //     // console.log(btn);
// //    axios.get(`https://newsapi.org/v2/everything?q=cricket&apiKey=6e384cd7c2dd46dfa365c93c1e568b58`)
// //     .then((res)=>{
// //        console.log(res.data);
// //     })
// // })


// // const btn = document.querySelector('.btn');
// // const data = [
// //     {
// //         Email:'umair',
// //         password:'123'
// //     },
// //     {
// //         Email:'uzaiur',
// //         password:'123'
// //     },{
// //         Email:'umar',
// //         password:'123'
// //     },{
// //         Email:'zaim',
// //         password:'123'
// //     },{
// //         Email:'usama',
// //         password:'123'
// //     },
// // ]
// // let arr ;
// const div = document.querySelector('.div');
// const btn = document.querySelector('.btn');

// let array= [];

// btn.addEventListener('click' , ()=>{

//     obj.map((item)=>{
//         try {
//             // div.innerHTML = ''
//             array.push(obj);
//             console.log(array);
//             div.innerHTML+= `${item.name}
//             ${item.age}<br>
//             <button onclick=" edittext()">Edit</button>
//             <button>delete</button><br>`
//         } catch (error) {
//             // console.log(error);
//             div.innerHTML += `Not Found`
//         }
//     })
// })
// function edittext(item) {
//     let uservalue = prompt('enter your edit value');
// array.splice(item,1,uservalue);
// obj.map(item) 
//     try {
//         // div.innerHTML = ''
//         array.push(obj);
//         console.log(array);
//         div.innerHTML+= `${item.name}
//         ${item.age}<br>
//         <button onclick=" edittext()">Edit</button>
//         <button>delete</button><br>`
//     }

// }
// / btn.addEventListener('click', async () => {
//     try {
//         const response = await axios.get('https://newsapi.org/v2/everything?q=cricket&apiKey=YOUR_API_KEY');
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });



// 6e384cd7c2dd46dfa365c93c1e568b58



// const div = document.querySelector('.div');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const form = document.querySelector('#form');
// const form1 = document.querySelector('#form1');

// let arr = []

// // form1.addEventListener('click',()=>{
//     form.addEventListener('click', (event) => {
//     setTimeinterval (()=>{
//     event.preventDef ault();
//     arr.push({
//         email: email.value,
//         password: password.value,
//     })

//         div.innerHTML = `${email.value}, ${password.value}`
//     },1000)
//     // console.log(arr);

// })

// // })





// const array =['bat','ball','wicket','helment','shirt','shoes']
// const arr =['batwertyuioplkjhgf']

// array.push('shalwar') add krta ha array ma last ma
// array.pop() delete krta ha last sa
// array.shift() start sa delete krta ha
// array.unshift('add') start ma add krta ha 
// array.splice(0,2)
// array.slice()
// array.sort() terteeb wise la ajata ha
// array.reverse() ulta la ata ha
// console.log(len);
// let arr = [9, 6, 3, 7, 2];
// // arr.sort();
// // console.log(arr);
// const indexNumber = arr.indexOf(6);

// array.indexOf('bat')
// const len = array.split(' ')
// // console.log(myname.split(' '));

// console.log(array.split(' '));














// let fruits = ['grapes', 'apple', 'watermelon', 'mango', 'peach', 'nashpati'];
// let eaten = fruits.slice(0, 3)
// console.log(eaten);










// let nameArr = prompt("Enter Your name here")
// let myname = "umair kifayat thakur";
// // console.log(myname.slice(0 ,5 ));
// // console.log(myname.split(' '));
// // console.log(nameArr);
// // console.log(nameArr[4]);
// let result = []
// for (let i = 0; i < nameArr.length; i++) {
//     //    console.log(nameArr[i].slice());
//     let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
//     let lastLetter = nameArr[i].slice(1).toLowerCase();
//     let completeLetter = firstLetter + lastLetter;
//     result.push(completeLetter);
//     console.log(result.join(" "));

// }
// let completeLetter = result.join(' ');

//     alert("processed name " + completeLetter)

