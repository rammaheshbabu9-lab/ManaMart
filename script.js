fetch("products.json")
.then(response=>response.json())
.then(products=>{


const container=document.getElementById("products");


products.forEach(product=>{


container.innerHTML+=`


<div class="card">


<img src="${product.image}">


<h3>${product.name}</h3>


<p>₹${product.price}/${product.unit}</p>


<select>


<option>250 g</option>


<option>500 g</option>


<option selected>1 kg</option>


<option>2 kg</option>


</select>


<br><br>


<button>Add To Cart</button>


</div>


`;


});


});
