let name = document.getElementById("name");

let saludar = () => {
    alert("Hola " + name.value);
}

let leaf = document.getElementById("left")
let text = document.getElementById("text")

let escribir = () => {
    leaf.innerHTML = "<p>" + text.value + "</p>"
}

let Home = ""
fetch('home.html')
    .then(res => res.text())
    .then(content => {

        Home = content
    });

let Index = " "
let page = document.getElementById("html")
console.log(page)

let home = () => {
    page.innerHTML = Home
}

let index = () => {
    page.innerHTML = Index
}





// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
} else {
    alert('The File APIs are not fully supported in this browser.');
}