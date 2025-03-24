// Инициализация WebApp
const tg = window.Telegram.WebApp;

// Основная функция
function init() {
    tg.expand(); // Раскрываем приложение на весь экран
    tg.MainButton.hide(); // Скрываем основную кнопку
    
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    
    btn.addEventListener('click', () => {
        result.textContent = 'Кнопка нажата! ✅';
        tg.showAlert('Это работает!'); // Показываем алерт в Telegram
    });
}

// Запускаем приложение когда Telegram готов
tg.ready();
init();