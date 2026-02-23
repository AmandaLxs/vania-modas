let cart = JSON.parse(localStorage.getItem("cart")) || []

function salvarCarrinho(){
localStorage.setItem("cart", JSON.stringify(cart))
}

function toggleCart(){
document.getElementById("cart").classList.toggle("open")
}

function addToCart(nome, preco){
cart.push({nome, preco})
salvarCarrinho()
updateCart()
}

function updateCart(){

const items = document.getElementById("cartItems")
items.innerHTML=""

let subtotal=0

cart.forEach(p=>{
items.innerHTML += `<div class="cart-item">${p.nome} - R$ ${p.preco}</div>`
subtotal+=p.preco
})

document.getElementById("subtotal").innerText=subtotal
document.getElementById("total").innerText=subtotal
document.getElementById("count").innerText=cart.length
}

function carregarProdutos(){

db.collection("produtos").get().then(snapshot=>{

const area = document.getElementById("produtos")
area.innerHTML=""

snapshot.forEach(doc=>{

const p = doc.data()

area.innerHTML += `
<div class="card">
<div class="foto">IMAGEM</div>
<div class="nome">${p.nome}</div>
<div class="preco">R$ ${p.preco}</div>
<button class="add" onclick="addToCart('${p.nome}',${p.preco})">
Adicionar
</button>
</div>
`
})
})
}

updateCart()
carregarProdutos()
