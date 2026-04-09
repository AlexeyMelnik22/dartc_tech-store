export function initCollapse() {

    const toggleButtons = document.querySelectorAll('.menu__toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            button.classList.toggle("active")
            const collapseMenu = this.nextElementSibling;
            if (collapseMenu) {
                collapseMenu.classList.toggle('open');
            }
        });
    });
}