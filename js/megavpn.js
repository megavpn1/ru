// MegaVPN Scripts

// Wait for jQuery to load
$(document).ready(function() {
    // Initialize Bootstrap collapse for navbar
    $('.navbar-collapse').collapse({
        toggle: false
    });
});

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Logo click - scroll to top
document.querySelector('.navbar-brand').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Track download clicks
document.querySelectorAll('a[href*="apps.apple.com"], a[href*="play.google.com"]').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.href.includes('apps.apple.com') ? 'iOS' : 'Android';
        console.log(`V2Box download clicked: ${platform}`);
        // Add analytics here
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Mobile menu improvements
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Manual toggle handler for mobile menu
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle collapse using jQuery (Bootstrap 4 way)
            $(navbarCollapse).collapse('toggle');
        });

        // Listen to Bootstrap collapse events for proper aria-expanded sync
        $(navbarCollapse).on('show.bs.collapse', function() {
            navbarToggler.setAttribute('aria-expanded', 'true');
        });

        $(navbarCollapse).on('hide.bs.collapse', function() {
            navbarToggler.setAttribute('aria-expanded', 'false');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                if (navbarCollapse.classList.contains('show')) {
                    $(navbarCollapse).collapse('hide');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            const isClickInsideNav = navbar.contains(e.target);
            const isNavOpen = navbarCollapse.classList.contains('show');
            
            if (!isClickInsideNav && isNavOpen) {
                $(navbarCollapse).collapse('hide');
            }
        }
    });
    
    // Improve navbar scrolling behavior on mobile
    let lastScrollTop = 0;
    let isScrolling = false;
    
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                const navbar = document.querySelector('.navbar');
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                
                // Always show navbar on mobile (no hide on scroll down)
                if (currentScroll > 50) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
                
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
});

console.log('🚀 MegaVPN Landing Page loaded successfully!');

// Проверка VPN статуса
function checkVPNStatus() {
    const statusBar = document.getElementById('vpn-status');
    const statusText = document.getElementById('status-text');

    // Показываем статус "не защищено"
    statusBar.classList.remove('protected');
    statusText.innerHTML = '<i class="fas fa-exclamation-triangle text-danger"></i> Ваше подключение НЕ защищено - подключитесь к нашим серверам MegaVPN';

    // Запускаем эмуляцию подключения через 3 секунды
    setTimeout(() => {
        simulateVPNConnection();
    }, 3000);
}

let connectionTimer = null;
let connectionStartTime = null;
let currentServer = null;

// Эмуляция подключения к VPN
function simulateVPNConnection() {
    const statusBar = document.getElementById('vpn-status');
    const statusText = document.getElementById('status-text');

    // Выбираем случайный сервер один раз для сессии
    if (!currentServer) {
        const servers = ['США', 'Нидерланды', 'Сингапур', 'Германия', 'Япония'];
        currentServer = servers[Math.floor(Math.random() * servers.length)];
    }

    // Показываем процесс подключения
    statusText.innerHTML = '<i class="fas fa-spinner fa-spin text-primary"></i> Подключаемся к серверам MegaVPN...';

    // Запускаем анимацию телефона одновременно
    setTimeout(() => {
        try {
            animatePhoneConnection();
        } catch (error) {
            console.error('Phone animation error:', error);
        }
    }, 500);

    // Эмуляция задержки подключения
    setTimeout(() => {
        statusText.innerHTML = `<i class="fas fa-server text-info"></i> Подключение к серверу ${currentServer}...`;
    }, 1000);

    setTimeout(() => {
        statusText.innerHTML = '<i class="fas fa-shield-alt text-success"></i> Проверяем безопасность канала...';
    }, 2000);

    // Успешное подключение
    setTimeout(() => {
        statusBar.classList.add('protected');
        statusText.innerHTML = `<i class="fas fa-check-circle text-success"></i> Подключено к MegaVPN | ${currentServer} | Время: 00:00:01`;

        // Запускаем таймер
        connectionStartTime = new Date();
        startConnectionTimer();

        console.log(`🟢 VPN connected to ${currentServer}`);
    }, 3500);
}

// Запуск таймера соединения
function startConnectionTimer() {
    // Очищаем предыдущий таймер если был
    if (connectionTimer) {
        clearInterval(connectionTimer);
    }

    // Устанавливаем время начала если не установлено
    if (!connectionStartTime) {
        connectionStartTime = new Date();
    }

    connectionTimer = setInterval(() => {
        const currentTime = new Date();
        const elapsedSeconds = Math.floor((currentTime - connectionStartTime) / 1000);

        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;

        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        const statusText = document.getElementById('status-text');
        statusText.innerHTML = `<i class="fas fa-shield-alt text-success"></i> Защищено MegaVPN | ${currentServer} | Время: ${timeString}`;
    }, 1000);
}

// Остановка таймера
function stopConnectionTimer() {
    if (connectionTimer) {
        clearInterval(connectionTimer);
        connectionTimer = null;
        connectionStartTime = null;
        currentServer = null;
    }
}

// Добавляем клики на статус-бар для ручного обновления
const vpnStatusElement = document.getElementById('vpn-status');
if (vpnStatusElement) {
    vpnStatusElement.addEventListener('click', function() {
        const statusBar = document.getElementById('vpn-status');
        const statusText = document.getElementById('status-text');

        // Обычный клик - перезапуск проверки статуса
        if (statusBar.classList.contains('protected')) {
            stopConnectionTimer();
            statusBar.classList.remove('protected');
        }

        statusText.innerHTML = '<i class="fas fa-sync fa-spin text-primary"></i> Обновляем статус...';

        setTimeout(() => {
            checkVPNStatus();
        }, 1000);
    });
}

// Загрузка страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем телефон в отключенном состоянии
    const phoneIndicator = document.getElementById('phone-status-indicator');
    if (phoneIndicator) {
        phoneIndicator.className = 'status-indicator disconnected';
        phoneIndicator.innerHTML = '<i class="fas fa-times"></i>';
    }
    
    // Инициализируем все элементы телефона в начальном состоянии
    const phoneTitle = document.getElementById('phone-status-title');
    const phoneServer = document.getElementById('phone-status-server');
    const phoneTimer = document.getElementById('phone-timer');
    
    if (phoneTitle) phoneTitle.textContent = 'Отключено';
    if (phoneServer) phoneServer.textContent = 'Нажмите для подключения';
    if (phoneTimer) {
        phoneTimer.style.display = 'none';
        phoneTimer.textContent = '00:00:00';
    }

    // Проверяем VPN статус через 2 секунды после загрузки
    setTimeout(checkVPNStatus, 2000);

    // Обновляем статус каждые 30 секунд
    setInterval(checkVPNStatus, 30000);
    
    // Добавляем клик по телефону для ручного запуска анимации
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('click', function() {
            const phoneIndicator = document.getElementById('phone-status-indicator');
            if (phoneIndicator && !phoneIndicator.classList.contains('connecting') && !phoneIndicator.classList.contains('connected')) {
                console.log('📱 Manual phone connection triggered');
                try {
                    animatePhoneConnection();
                } catch (error) {
                    console.error('Manual phone animation error:', error);
                }
            }
        });
        
        // Добавляем стили для интерактивности
        phoneMockup.style.cursor = 'pointer';
        phoneMockup.title = 'Нажмите для подключения к VPN';
    }
});

// Управление плавающей кнопкой "Вверх"
const scrollToTopBtn = document.getElementById('scrollToTop');

// Показываем/скрываем кнопку при прокрутке
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Прокрутка наверх при клике на плавающую кнопку
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Прокрутка наверх при клике на кнопку "Наверх за настройками"
const scrollTopBtn = document.querySelector('.scroll-top-btn');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Инициализация карусели отзывов
$(document).ready(function() {
    console.log('🎠 Initializing testimonials carousel...');

    // Проверяем, что элемент существует
    if ($('.testimonials-carousel').length === 0) {
        console.error('❌ Testimonials carousel element not found!');
        return;
    }

    console.log('✅ Found testimonials carousel element');

    // Проверяем, что Owl Carousel загружен
    if (typeof $.fn.owlCarousel === 'undefined') {
        console.error('❌ Owl Carousel not loaded!');
        // Показываем отзывы в обычном виде
        $('.testimonials-carousel .testimonial-card').show();
        return;
    }

    console.log('✅ Owl Carousel plugin loaded');

    try {
        $('.testimonials-carousel').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            dotsClass: 'custom-dots',
            dotClass: 'custom-dot',
            responsive: {
                0: {
                    items: 1,
                    margin: 15
                },
                768: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 3,
                    margin: 30
                }
            },
            onInitialized: function() {
                console.log('✅ Testimonials carousel initialized successfully!');
            },
            onInitialize: function() {
                console.log('🔄 Testimonials carousel initializing...');
            }
        });
    } catch (error) {
        console.error('❌ Error initializing carousel:', error);
        // Fallback: показываем отзывы в обычном виде
        $('.testimonials-carousel .testimonial-card').show();
    }
});

let phoneConnectionTimer = null;
let phoneDownloadMB = 0;
let phoneUploadMB = 0;
let phonePingIntervals = [];
let phoneTimerInterval = null;
let phoneStartTime = null;

// Анимация телефона
function animatePhoneConnection() {
    const phoneIndicator = document.getElementById('phone-status-indicator');
    const phoneTitle = document.getElementById('phone-status-title');
    const phoneServer = document.getElementById('phone-status-server');
    const phoneTimer = document.getElementById('phone-timer');

    // Проверяем, что все элементы существуют
    if (!phoneIndicator || !phoneTitle || !phoneServer || !phoneTimer) {
        console.error('Phone animation elements not found');
        return;
    }

    // Используем тот же сервер, что и в главном VPN статусе
    const selectedServer = currentServer || 'США';

    // Этап 1: Подключение
    phoneIndicator.className = 'status-indicator connecting';
    phoneIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    phoneTitle.textContent = 'Подключение...';
    phoneServer.textContent = `Подключение к ${selectedServer}`;
    phoneTimer.style.display = 'none';

    console.log('📱 Phone animation: connecting phase started');

    setTimeout(() => {
        try {
            // Этап 2: Успешное подключение
            phoneIndicator.className = 'status-indicator connected';
            phoneIndicator.innerHTML = `
                <div class="pulse-ring"></div>
                <div class="pulse-ring delay-1"></div>
                <div class="pulse-ring delay-2"></div>
                <i class="fas fa-check"></i>
            `;
            phoneTitle.textContent = 'Подключено';
            phoneServer.textContent = `Сервер: ${selectedServer}`;

            // Показываем и запускаем таймер
            phoneTimer.style.display = 'block';
            startPhoneTimer();

            // Запускаем анимацию пингов и трафика
            startPhonePingAnimation();
            startPhoneTrafficAnimation();

            console.log('📱 Phone animation: connected phase completed');
        } catch (error) {
            console.error('Phone animation connection phase error:', error);
        }
    }, 2500);
}

// Запуск таймера телефона
function startPhoneTimer() {
    const phoneTimer = document.getElementById('phone-timer');
    if (!phoneTimer) {
        console.error('Phone timer element not found');
        return;
    }

    phoneStartTime = new Date();

    phoneTimerInterval = setInterval(() => {
        try {
            const currentTime = new Date();
            const elapsedSeconds = Math.floor((currentTime - phoneStartTime) / 1000);

            const hours = Math.floor(elapsedSeconds / 3600);
            const minutes = Math.floor((elapsedSeconds % 3600) / 60);
            const seconds = elapsedSeconds % 60;

            const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            phoneTimer.textContent = timeString;
        } catch (error) {
            console.error('Phone timer error:', error);
        }
    }, 1000);
}

// Анимация пингов в телефоне
function startPhonePingAnimation() {
    const pingElements = [
        { element: document.getElementById('phone-ping'), baseValue: 45, variation: 10 },
        { element: document.getElementById('phone-server-ping-1'), baseValue: 47, variation: 8 },
        { element: document.getElementById('phone-server-ping-2'), baseValue: 23, variation: 5 },
        { element: document.getElementById('phone-server-ping-3'), baseValue: 89, variation: 15 }
    ];

    pingElements.forEach((ping, index) => {
        // Проверяем существование элемента
        if (!ping.element) {
            console.error(`Phone ping element ${index} not found`);
            return;
        }

        const interval = setInterval(() => {
            try {
                const variation = (Math.random() - 0.5) * ping.variation;
                const newPing = Math.round(ping.baseValue + variation);

                ping.element.classList.add('ping-animate');
                ping.element.textContent = `${newPing}ms`;

                setTimeout(() => {
                    ping.element.classList.remove('ping-animate');
                }, 300);
            } catch (error) {
                console.error('Phone ping animation error:', error);
            }
        }, 3000 + (index * 500)); // Разные интервалы для каждого пинга

        phonePingIntervals.push(interval);

        // Устанавливаем начальное значение
        ping.element.textContent = `${ping.baseValue}ms`;
    });
}

// Анимация трафика в телефоне
function startPhoneTrafficAnimation() {
    const downloadElement = document.getElementById('phone-download');
    const uploadElement = document.getElementById('phone-upload');
    
    // Проверяем существование элементов
    if (!downloadElement || !uploadElement) {
        console.error('Phone traffic elements not found');
        return;
    }

    phoneConnectionTimer = setInterval(() => {
        try {
            // Более медленные приращения трафика
            const downloadIncrease = Math.random() * 0.3 + 0.1; // 0.1-0.4 MB (медленнее)
            const uploadIncrease = Math.random() * 0.15 + 0.05; // 0.05-0.2 MB (медленнее)

            phoneDownloadMB += downloadIncrease;
            phoneUploadMB += uploadIncrease;

            // Простое обновление без цветовой анимации
            downloadElement.textContent = `${phoneDownloadMB.toFixed(0)}MB`;
            uploadElement.textContent = `${phoneUploadMB.toFixed(0)}MB`;
        } catch (error) {
            console.error('Phone traffic animation error:', error);
        }
    }, 4000); // Обновляем каждые 4 секунды (медленнее)
}

// Остановка анимации телефона
function stopPhoneAnimation() {
    const phoneIndicator = document.getElementById('phone-status-indicator');
    const phoneTitle = document.getElementById('phone-status-title');
    const phoneServer = document.getElementById('phone-status-server');
    const phoneTimer = document.getElementById('phone-timer');

    phoneIndicator.className = 'status-indicator disconnected';
    phoneIndicator.innerHTML = '<i class="fas fa-times"></i>';
    phoneTitle.textContent = 'Отключено';
    phoneServer.textContent = 'Нажмите для подключения';
    phoneTimer.style.display = 'none';

    // Останавливаем все таймеры
    if (phoneConnectionTimer) {
        clearInterval(phoneConnectionTimer);
        phoneConnectionTimer = null;
    }

    if (phoneTimerInterval) {
        clearInterval(phoneTimerInterval);
        phoneTimerInterval = null;
        phoneStartTime = null;
    }

    phonePingIntervals.forEach(interval => clearInterval(interval));
    phonePingIntervals = [];

    // Сбрасываем значения
    document.getElementById('phone-ping').textContent = '--';
    document.getElementById('phone-download').textContent = '0MB';
    document.getElementById('phone-upload').textContent = '0MB';
    document.getElementById('phone-server-ping-1').textContent = '--';
    document.getElementById('phone-server-ping-2').textContent = '--';
    document.getElementById('phone-server-ping-3').textContent = '--';
    phoneTimer.textContent = '00:00:00';

    phoneDownloadMB = 0;
    phoneUploadMB = 0;
} 