const form = document.querySelector("form")
const form = document.querySelector("h3")
const form = document.querySelector("h4")

//cria um ouvinte

form.addEventListener("submit",(e) =>{
    e.preventDefault()             //evita o envio do form
    
    const nome = form.inNome.value          //obtém o nome
    const nota1 = Number(form.inNota1.value) //obtém a primeira nota
    const nota2 = Number(form.inNota2.value) //obtém a segunda nota
    const media = (nota1 + nota2)/2          //média das notas
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    //Cria referência ao form e elementos de resposta do programa

    const form = document.querySelector("form")
    const resp1 = document. querySelector("h3")
    const resp2 = document.querySelector("h4")