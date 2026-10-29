const produtos = [
    
    { nome: "Cachorro", categoria: "Mamífero", quantidade: 5, preco: 1200.00 },
    { nome: "Gato", categoria: "Mamífero", quantidade: 8, preco: 700.00 },
    { nome: "Calopsita", categoria: "Ave", quantidade: 6, preco: 250.00 },
    { nome: "Coelho",categoria: "Mamífero", quantidade: 4, preco: 180.00 },
    { nome: "Gavião", categoria: "Ave", quantidade: 7, preco: 875.00 },
    { nome: "Jacaré", categoria: "Réptil", quantidade: 10, preco: 1780.00 },
    { nome: "Papagaio", categoria: "Ave", quantidade: 6, preco: 140.00 },
    { nome: "Camaleão", categoria: "Réptil", quantidade: 5, preco: 450.00 },
    { nome: "Canarinho", categoria: "Ave", quantidade: 50, preco: 850.00 },
    { nome: "Vaca", categoria: "Mamífero", quantidade: 13, preco: 560.00 },
    { nome: "Galinha", categoria: "Ave", quantidade: 14, preco: 140.00 },
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }