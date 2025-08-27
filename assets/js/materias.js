// Função para carregar o JSON com as matérias
async function carregarJSON(caminho) {
  const response = await fetch(caminho);
  if (!response.ok) throw new Error("Falha ao carregar JSON");
  return response.json();
}

// Função para criar o card da matéria
function criarCardMateria(materia, semestre) {
  const link = document.createElement("a");
  link.className = "materias__card";
  // Link para a página de resumos com os parâmetros semestre e matéria
  link.href = `./resumos.html?semestre=${semestre}&materia=${encodeURIComponent(materia)}`;
  link.textContent = materia;
  return link;
}

// Função para exibir mensagem na tela
function exibirMensagem(container, mensagem) {
  container.innerHTML = `<p>${mensagem}</p>`;
}

async function main() {
  const params = new URLSearchParams(window.location.search);
  const semestre = params.get("semestre");
  const listaContainer = document.getElementById("lista-materias");
  const titulo = document.getElementById("titulo-semestre");

  if (!semestre) {
    exibirMensagem(listaContainer, "Semestre não especificado.");
    return;
  }

  try {
    // Ajuste o caminho para onde está seu JSON, aqui assumo pasta data na raiz
    const materias = await carregarJSON("../data/materias.json");
    // Filtra só as matérias do semestre selecionado
    const materiasDoSemestre = materias.filter(m => m.semestre == semestre);

    if (materiasDoSemestre.length === 0) {
      exibirMensagem(listaContainer, "Nenhuma matéria encontrada para este semestre.");
      return;
    }

    titulo.textContent = `Matérias do ${semestre}º semestre`;

    materiasDoSemestre.forEach(item => {
      const card = criarCardMateria(item.materia, semestre);
      listaContainer.appendChild(card);
    });

  } catch (error) {
    exibirMensagem(listaContainer, "Erro ao carregar matérias.");
    console.error(error);
  }
}

// Executa quando a página carregar
document.addEventListener("DOMContentLoaded", main);
