const produtos = [
    {
      nome: "Cachorro",
      categoria: "Mamífero",
      quantidade: 5,
      preco: 1200.00
    },
    {
        nome: "Gato",
      categoria: "Mamífero",
      quantidade: 8,
      preco: 700.00
    },
    {
        nome: "Calopsita",
      categoria: "Ave",
      quantidade: 6,
      preco: 250.00
    },
    {
        nome: "Coelho",
      categoria: "Mamífero",
      quantidade: 4,
      preco: 180.00
    },
    {
    }
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