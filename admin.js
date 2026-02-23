function salvar(){

const nome = document.getElementById("nome").value
const preco = Number(document.getElementById("preco").value)

db.collection("produtos").add({
nome,
preco,
criado: new Date()
})

alert("Produto cadastrado!")
}
