document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("newTask");
  const descriptionInput = document.getElementById("taskDescription");
  const imageInput = document.getElementById("taskImage");

  if (taskInput.value.trim() === "") {
    alert("Por favor, insira uma tarefa.");
    return;
  }

  // Criação do elemento da tarefa
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  listItem.draggable = true; // Permite arrastar o item
  listItem.ondragstart = drag; // Define a função drag
  listItem.innerHTML = `
        <strong>${taskInput.value}</strong><br />
        <small>${descriptionInput.value}</small>
    `;

  // Exibe a imagem se houver uma
  if (imageInput.files[0]) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(imageInput.files[0]);
    img.className = "task-image";
    img.alt = "Imagem da tarefa";
    img.style.maxWidth = "100px"; // Define um tamanho máximo para a imagem
    img.style.height = "auto"; // Mantém a proporção
    listItem.appendChild(img);
  }

  // Botão de excluir
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Excluir";
  deleteButton.className = "btn btn-danger btn-sm";
  deleteButton.onclick = function () {
    listItem.remove();
  };

  listItem.appendChild(deleteButton);
  document.getElementById("todoList").appendChild(listItem);

  // Limpa os campos
  taskInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
});

// Função para permitir arrastar
function allowDrop(ev) {
  ev.preventDefault();
}

// Função chamada ao arrastar um item
function drag(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.outerHTML); // Salva o conteúdo da tarefa
}

// Função chamada ao soltar um item
function drop(ev, targetId) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");

  // Cria um novo item de lista sem duplicar o botão de excluir
  const newListItem = document.createElement("li");
  newListItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  newListItem.innerHTML = data;

  // Encontra o botão de excluir original e o reutiliza
  const originalButton = newListItem.querySelector("button");
  newListItem.removeChild(originalButton); // Remove o botão de excluir do novo item

  // Cria novo botão de excluir que remove o item corretamente
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Excluir";
  deleteButton.className = "btn btn-danger btn-sm";
  deleteButton.onclick = function () {
    newListItem.remove();
  };

  newListItem.appendChild(deleteButton);

  // Adiciona o novo item à nova lista
  document.getElementById(targetId).appendChild(newListItem);

  // Remove o item da lista original
  const originalList = document.getElementById(
    ev.dataTransfer.getData("taskType")
  );
  const originalItems = originalList.getElementsByTagName("li");

  for (let i = 0; i < originalItems.length; i++) {
    if (originalItems[i].outerHTML === data) {
      originalItems[i].remove();
      break; // Sai do loop após remover o item
    }
  }
}
