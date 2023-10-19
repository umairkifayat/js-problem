const div = document.querySelector('.div');
const btn = document.querySelector('.btn');

const obj = [
    {
        name: "Alice",
        age: 30
    },
    {
        name: "Bob",
        age: 25
    },
    {
        name: "Charlie",
        age: 35
    },
    {
        name: "David",
        age: 28
    },
    {
        name: "Eva",
        age: 22
    },
    {
        name: "Frank",
        age: 40
    },
    {
        name: "Grace",
        age: 27
    },
    {
        name: "Helen",
        age: 33
    },
    {
        name: "Ian",
        age: 29
    },
    {
        name: "Jasmine",
        age: 24
    },
];



btn.addEventListener('click', () => {
    obj.map((item) => {
        
        div.innerHTML += `<h1>Name:${item.name}</h1>
    <p>Age:${item.age}</p>`

    const cart = JSON.stringify(obj);
    console.log(obj);
    localStorage.setItem("obj", cart)
    });
})

function gocart(obj) {
    window.location = 'cart.html'
}
