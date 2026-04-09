export function initDropdown() {
    // 1. Знаходимо всі кнопки, які відкривають дропдавни
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    // 2. Додаємо обробник подій для кожної знайденої кнопки
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            // Зупиняємо спливання, щоб не спрацював клік по window
            event.stopPropagation();

            // Знаходимо саме те меню, яке належить цій кнопці
            // this.nextElementSibling - це елемент, що йде одразу за кнопкою в HTML
            const currentMenu = this.nextElementSibling;

            // Запам'ятовуємо, чи відкрите саме це меню зараз
            const isMenuOpen = currentMenu.classList.contains('show');

            // 3. Закриваємо ВСІ відкриті дропдавни та скидаємо активні стани кнопок
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.dropdown-btn').forEach(button => {
                button.classList.remove('active');
            });

            // 4. Якщо наше поточне меню було закрите - відкриваємо його
            if (!isMenuOpen) {
                currentMenu.classList.add('show');
                this.classList.add('active'); // this вказує на поточну кнопку
            }
        });
    });

    // 5. Закриття всіх меню при кліку в будь-якому місці екрана
    window.addEventListener('click', function (event) {
        // Перевіряємо, чи клік був не всередині блоку з класом .dropdown
        if (!event.target.closest('.dropdown')) {
            // Закриваємо всі меню
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
            // Знімаємо класи active з усіх кнопок
            document.querySelectorAll('.dropdown-btn').forEach(button => {
                button.classList.remove('active');
            });
        }
    });
}