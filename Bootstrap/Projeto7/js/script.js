// scripts.js
$(document).ready(function () {
  $.ajax({
    url: "api/produtos.php",
    method: "GET",
    dataType: "json",
    success: function (produtos) {
      produtos.forEach(function (produto) {
        $("#produtos").append(`
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${
                              produto.imagem
                            }" class="card-img-top" alt="${produto.nome}">
                            <div class="card-body">
                                <h5 class="card-title">${produto.nome}</h5>
                                <p class="card-text">Preço: R$ ${produto.preco.toFixed(
                                  2
                                )}</p>
                                <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                            </div>
                        </div>
                    </div>
                `);
      });
    },
    error: function () {
      console.log("Erro ao carregar os produtos.");
    },
  });
});
