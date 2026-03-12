// public/js/quiz.js

// Состояние приложения
let currentSession = null;
let selectedBouquetId = null;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
    // Получаем токен из URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = window.location.pathname.split('/').pop();
    
    if (token && token.length > 20) { // Похоже на UUID
        await loadSessionResults(token);
    }
});

// Загрузка результатов сессии
async function loadSessionResults(token) {
    try {
        showLoader();
        
        const response = await fetch(`/api/session-results/${token}`);
        const data = await response.json();
        
        if (data.error) {
            showError('Сессия не найдена');
            return;
        }
        
        currentSession = data;
        
        // Отображаем результаты теста
        displayTestResults(data);
        
        // Отображаем букеты
        displayBouquets(data.bouquets);
        
        // Если есть выбранный букет, выделяем его
        const selected = data.bouquets.find(b => b.isSelected);
        if (selected) {
            selectBouquet(selected.id);
        }
        
        hideLoader();
    } catch (err) {
        console.error('Ошибка:', err);
        showError('Не удалось загрузить результаты');
        hideLoader();
    }
}

// Отображение результатов теста
function displayTestResults(session) {
    const resultsDiv = document.getElementById('test-results');
    if (!resultsDiv) return;
    
    resultsDiv.innerHTML = `
        <div class="results-card">
            <h3>Результаты теста</h3>
            <p><strong>Повод:</strong> ${session.occasion || 'Не указан'}</p>
            <p><strong>Для кого:</strong> ${session.recipient_person_type || 'Себя'}</p>
            <p><strong>Настроение:</strong> ${session.mood || 'Счастливое'}</p>
            <p><strong>Цвета:</strong> ${session.color_preferences || 'Любые'}</p>
            <p><strong>Любимые цветы:</strong> ${session.flower_preferences || 'Не указаны'}</p>
            <p><strong>Бюджет:</strong> ${session.budget_range || 'Средний'}</p>
            ${session.note_text ? `<p><strong>Пожелания:</strong> ${session.note_text}</p>` : ''}
        </div>
    `;
}

// Отображение букетов
function displayBouquets(bouquets) {
    const container = document.getElementById('bouquets-container');
    if (!container) return;
    
    if (!bouquets || bouquets.length === 0) {
        container.innerHTML = '<p class="no-bouquets">Букеты еще генерируются...</p>';
        return;
    }
    
    container.innerHTML = bouquets.map(bouquet => `
        <div class="bouquet-card ${bouquet.isSelected ? 'selected' : ''}" 
             data-id="${bouquet.id}"
             onclick="selectBouquet(${bouquet.id})">
            <img src="${bouquet.imageUrl}" alt="Букет" loading="lazy">
            <div class="bouquet-info">
                <p class="bouquet-prompt">${bouquet.promptText.substring(0, 100)}...</p>
                ${bouquet.isSelected ? '<span class="selected-badge">✓ Выбран</span>' : ''}
            </div>
        </div>
    `).join('');
}

// Выбор букета
async function selectBouquet(bouquetId) {
    if (!currentSession) return;
    
    try {
        showLoader();
        
        const response = await fetch('/api/select-bouquet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                bouquetId,
                token: currentSession.share_token
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Обновляем UI
            document.querySelectorAll('.bouquet-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            document.querySelector(`.bouquet-card[data-id="${bouquetId}"]`).classList.add('selected');
            selectedBouquetId = bouquetId;
            
            // Показываем кнопку заказа
            document.getElementById('order-button').style.display = 'block';
        }
        
        hideLoader();
    } catch (err) {
        console.error('Ошибка:', err);
        showError('Не удалось выбрать букет');
        hideLoader();
    }
}

// Переход к оформлению заказа
function goToOrder() {
    if (!selectedBouquetId || !currentSession) {
        showError('Сначала выберите букет');
        return;
    }
    
    // Сохраняем данные в localStorage для страницы заказа
    localStorage.setItem('orderData', JSON.stringify({
        token: currentSession.share_token,
        bouquetId: selectedBouquetId,
        sessionData: currentSession
    }));
    
    // Переходим на страницу заказа
    window.location.href = '/order.html';
}

// Создание новой сессии
async function createNewSession(telegramData = null) {
    try {
        showLoader();
        
        const response = await fetch('/api/create-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                telegramUserId: telegramData?.id,
                telegramUsername: telegramData?.username
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Сохраняем токен
            localStorage.setItem('currentSessionToken', data.token);
            
            // Показываем ссылку для шаринга
            showShareLink(data.shareUrl);
            
            return data;
        }
        
        hideLoader();
    } catch (err) {
        console.error('Ошибка:', err);
        showError('Не удалось создать сессию');
        hideLoader();
    }
}

// Отображение ссылки для шаринга
function showShareLink(url) {
    const shareDiv = document.getElementById('share-link');
    if (!shareDiv) return;
    
    shareDiv.innerHTML = `
        <div class="share-box">
            <p>🔗 Ваша индивидуальная ссылка:</p>
            <input type="text" value="${url}" readonly onclick="this.select()">
            <button onclick="copyToClipboard('${url}')">Копировать ссылку</button>
        </div>
    `;
}

// Копирование в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage('Ссылка скопирована!');
    });
}

// Вспомогательные функции
function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'block';
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}
// Функция для отображения статуса ожидания
function showWaitingIndicator(orderId) {
    const waitingDiv = document.createElement('div');
    waitingDiv.className = 'waiting-indicator';
    waitingDiv.id = 'waitingIndicator';
    waitingDiv.innerHTML = `
        <div class="waiting-content">
            <div class="waiting-spinner">
                <i class="fas fa-spinner fa-spin"></i>
            </div>
            <div class="waiting-text">
                <h3>⏳ Ожидаем прохождения теста в Telegram</h3>
                <p>Статус: <span class="waiting-status">ожидание</span></p>
                <p class="waiting-order-id">🆔 ID заказа: ${orderId}</p>
                <p class="waiting-bot-info">
                    🤖 Бот: <a href="https://t.me/yourvibecheck_bot" target="_blank">@yourvibecheck_bot</a>
                </p>
                <p class="waiting-instruction">
                    👆 Перейдите в бота и пройдите тест, чтобы увидеть ваш уникальный букет
                </p>
            </div>
        </div>
    `;
    
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        chatMessages.appendChild(waitingDiv);
    }
}

// Функция для обновления статуса
function updateWaitingStatus(status) {
    const statusSpan = document.querySelector('.waiting-status');
    if (statusSpan) {
        statusSpan.textContent = status;
        statusSpan.className = `waiting-status status-${status}`;
    }
}

// Функция для удаления индикатора ожидания
function removeWaitingIndicator() {
    const indicator = document.getElementById('waitingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Обновленная функция загрузки результатов
async function loadSessionResults(token) {
    try {
        showLoader();
        
        // Показываем индикатор ожидания
        const orderId = localStorage.getItem('currentOrderId') || '???';
        showWaitingIndicator(orderId);
        
        // Опрашиваем сервер на наличие результатов
        let attempts = 0;
        const maxAttempts = 60; // 60 * 5 = 5 минут
        
        const checkInterval = setInterval(async () => {
            attempts++;
            
            const response = await fetch(`/api/session-results/${token}`);
            const data = await response.json();
            
            if (data.error) {
                if (attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    updateWaitingStatus('таймаут');
                    showError('Превышено время ожидания');
                }
                return;
            }
            
            if (data.status === 'completed' || data.bouquets?.length > 0) {
                clearInterval(checkInterval);
                removeWaitingIndicator();
                
                updateWaitingStatus('получены результаты');
                currentSession = data;
                
                // Отображаем результаты
                displayTestResults(data);
                displayBouquets(data.bouquets);
                
                addMessage('✨ Отлично! Я получила все ваши ответы! Сейчас начинаю генерацию вашего уникального букета...', false);
                
                // Запускаем генерацию
                if (data.bouquets?.length === 0) {
                    await startGeneration(data);
                }
            }
        }, 5000); // Проверяем каждые 5 секунд
        
        hideLoader();
    } catch (err) {
        console.error('Ошибка:', err);
        showError('Не удалось загрузить результаты');
        hideLoader();
    }
}

// Функция добавления сообщения в чат
function addMessage(text, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Функция запуска генерации
async function startGeneration(session) {
    try {
        addMessage('🎨 Запрос на генерацию отправлен! Искусственный интеллект создает ваш букет. Это займет около 30 секунд...', false);
        
        // Получаем промпт из сессии
        const response = await fetch(`/api/generate-bouquet/${session.share_token}`, {
            method: 'POST'
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Начинаем опрашивать статус генерации
            checkGenerationStatus(data.requestId);
        }
    } catch (err) {
        console.error('Ошибка генерации:', err);
        addMessage('😔 Произошла ошибка при генерации. Пожалуйста, попробуйте еще раз.', false);
    }
}

// Функция проверки статуса генерации
function checkGenerationStatus(requestId) {
    let attempts = 0;
    const maxAttempts = 30; // 30 * 3 = 90 секунд
    
    const interval = setInterval(async () => {
        attempts++;
        
        const response = await fetch(`/api/generation-status/${requestId}`);
        const data = await response.json();
        
        if (data.status === 'completed') {
            clearInterval(interval);
            addMessage('✅ Букет готов! Обновите страницу, чтобы увидеть результат.', false);
            // Перезагружаем результаты сессии
            loadSessionResults(currentSession.share_token);
        } else if (attempts >= maxAttempts) {
            clearInterval(interval);
            addMessage('⏰ Время генерации истекло. Пожалуйста, обновите страницу.', false);
        }
    }, 3000);
}