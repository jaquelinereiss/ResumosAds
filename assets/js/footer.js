function carregarRodape() {
    var rodapeHTML = `
        <footer class="rodape">
            <p>Página desenvolvida apenas para fins acadêmicos</p>
        </footer>
    `;

    var rodapeCSS = `
    <style>
    .rodape {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 10em 0.2em 10em;
        height: 5em; /* Adiciona altura suficiente para centralizar verticalmente */
        background: var(--degrade);
        color: var(--cor-quarta);
        text-align: center;
    }
    </style>
`;

    document.querySelector('head').insertAdjacentHTML('beforeend', rodapeCSS);
    document.querySelector('body').insertAdjacentHTML('beforeend', rodapeHTML);
}

document.addEventListener('DOMContentLoaded', carregarRodape);