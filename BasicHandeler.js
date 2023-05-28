console.log("wortking");

// console.log(document.getElementsByClassName("container"))
// console.log(document.getElementById("container1"))

// const abc = document.getElementById("container1")

// abc.innerText = "umer is one"   // notes update heading chnage


const array = [
    {
        title: "first note",
        description: "tizh ius hius auio aisufdfiu"
    },
    {
        title: "second note",
        description: "tizh ius hius auio aisufdfiu"
    }
    , {
        title: "third note",
        description: "tizh ius hius auio aisufdfiu"
    }
]

const nme = "hassan"

// document.getElementById("main").innerHTML = `<div>${array[0].title}</div> <p>${array[0].description}</p>`;

for (let i = 0; i < array.length; i++) {
    document.getElementById("main").innerHTML += `<div>${array[i].title}</div> <p>${array[i].description}</p>`;
}



// function handlechange() {
//     const input = document.getElementById("abc");
//     const output = document.getElementById("container1");
//     output.innerText = input.value;
// }












//documnent  complete html css
//document functions GEBI GEBC  return 
// innerText , innerHTML , value   get and giove
