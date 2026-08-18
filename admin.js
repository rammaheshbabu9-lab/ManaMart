let products =
JSON.parse(localStorage.getItem("products")) || [];

function displayProducts(){

const list =
document.getElementById("list");

list.innerHTML = "";

products.forEach((product,index)=>{

list.innerHTML += `

<div>

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>${product.category}</p>

<button onclick="deleteProduct(${index})">

Delete

</button>

</div>

<hr>

`;

});

}

function addProduct(){

const name =
document.getElementById("name").value;

const price =
document.getElementById("price").value;

const category =
document.getElementById("category").value;

const image =
document.getElementById("image").value;

products.push({

name,
price,
category,
image

});

localStorage.setItem(

"products",

JSON.stringify(products)

);

displayProducts();

}

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem(

"products",

JSON.stringify(products)

);

displayProducts();

}

displayProducts();
