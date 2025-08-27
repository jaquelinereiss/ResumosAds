document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const semestre = params.get("semestre");
  const materia = params.get("materia");

  const listaResumos = document.getElementById("lista-resumos");
  const tituloMateria = document.getElementById("titulo-materia");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const fecharModal = document.getElementById("fechar-modal");

  if (!semestre || !materia) {
    listaResumos.innerHTML = "<p>Parâmetros inválidos na URL.</p>";
    return;
  }

  try {
    // Caminho relativo ao resumos.html
    const response = await fetch("/data/materias.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const dados = await response.json();

    // Busca a matéria exata, decodificando o parâmetro e ignorando cases
    const materiaSelecionada = dados.find(
      item => item.semestre == semestre && item.materia.toLowerCase() === decodeURIComponent(materia).toLowerCase()
    );

    if (!materiaSelecionada) {
      listaResumos.innerHTML = "<p>Matéria não encontrada.</p>";
      return;
    }

    tituloMateria.textContent = `Resumos de ${materiaSelecionada.materia}`;

    // Cria os cards dos resumos com título e conteúdo resumido
    materiaSelecionada.resumos.forEach((resumo) => {
      // Container do card
      const card = document.createElement("div");
      card.classList.add("card-titulo");

      // Título do resumo
      const titulo = document.createElement("h3");
      titulo.textContent = resumo.titulo;
  
      // Descrição do resumo
      const descricao = document.createElement("p");
      descricao.textContent = resumo.conteudo;

      // Adiciona título e descrição no card
      card.appendChild(titulo);
      card.appendChild(descricao);

      // Guarda o caminho para carregar o conteúdo do modal
      card.setAttribute("data-arquivo", resumo.arquivoHTML);

      card.addEventListener("click", async () => {
        try {
          const res = await fetch(resumo.arquivoHTML);
          if (!res.ok) throw new Error(`Erro ao carregar resumo. Status: ${res.status}`);
          const html = await res.text();
          modalBody.innerHTML = html;
          modal.style.display = "block";
          window.scrollTo(0, 0);
        } catch (e) {
          modalBody.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
          modal.style.display = "block";
          console.error(e);
        }
      });

      listaResumos.appendChild(card);
    });

  } catch (error) {
    listaResumos.innerHTML = "<p>Erro ao carregar os dados.</p>";
    console.error(error);
  }

  fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  });
});