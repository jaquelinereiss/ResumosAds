document.addEventListener('DOMContentLoaded', function () {
    const modalHTML = `
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="modal-body"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");

    const links = document.querySelectorAll('.conteudo-semestre-materia-resumo-card-ancora');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.getAttribute('data-url');

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    modalContent.innerHTML = data;
                    modal.style.display = "block";
                    modalContent.scrollTop = 0;
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                });
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});