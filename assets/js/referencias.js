function getMateriaAtual() {
  const params = new URLSearchParams(window.location.search);
  return params.get('materia');
}

// flag para controlar se as referências estão visíveis
let referenciasVisiveis = false;

//função para expandir as referências
async function expandirReferencias() {
    const container = document.getElementById('lista-referencias');

    // Se já estiver visível, remove as referências da tela
    if (referenciasVisiveis) {
        const cards = container.querySelectorAll('.card-referencia');
        cards.forEach(card => card.remove());
        referenciasVisiveis = false;
        return;
    }

    try {
        const response = await fetch('../data/referencias.json');
        const data = await response.json();

        const materiaAtual = getMateriaAtual();
        const materiaEncontrada = data.find(item => item.materia === materiaAtual);

        if (!materiaEncontrada) {
            const aviso = document.createElement('p');
                aviso.classList.add('paragrafo');
                aviso.textContent = `Nenhuma referência encontrada para '${materiaAtual}'.`;
                container.appendChild(aviso);
            return;
        }

        const referencias = materiaEncontrada.referencias[0].links;

        referencias.forEach(ref => {
            const card = document.createElement('div');
            card.classList.add("card-referencia", "lista");

            card.innerHTML = `
                <span class="mdi mdi-circle-medium destaque-2"></span>
                <a href="${ref.url}" target="_blank" class="destaque-1 bold ancora">${ref.descricao}</a>  
            `;

      container.appendChild(card);
    });

    referenciasVisiveis = true;

    } catch {
        console.error("Erro ao carregar as referências:", error);
    }
}