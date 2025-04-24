// Данные о событиях
const events = [
    {
        id: 1,
        date: '12 июня 1812',
        title: 'Вторжение армии Наполеона',
        description: 'Великая армия Наполеона, насчитывающая более 600 тысяч человек, начала переправу через реку Неман. Это событие ознаменовало начало Отечественной войны 1812 года. Армия включала в себя войска не только из Франции, но и из многих других европейских стран, находившихся под властью Наполеона.',
        icon: 'fa-flag',
        stats: {
            russianForces: '220,000',
            frenchForces: '600,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 2,
        date: '28 июня 1812',
        title: 'Оставление Вильно',
        description: '1-я Западная армия под командованием Барклая де Толли оставила Вильно (современный Вильнюс) и начала отступление к укрепленному лагерю в Дриссе. Это решение было частью стратегического плана, направленного на заманивание противника вглубь территории России.',
        icon: 'fa-person-walking',
        stats: {
            russianForces: '200,000',
            frenchForces: '440,000',
            duration: '1 день',
            losses: {
                russian: 'Минимальные',
                french: 'Минимальные'
            }
        }
    },
    {
        id: 3,
        date: '13-14 июля 1812',
        title: 'Сражение под Островно',
        description: 'Арьергардные бои между французскими войсками под командованием маршала Мюрата и русскими войсками генерала Остермана-Толстого. Несмотря на численное превосходство противника, русские войска успешно задержали продвижение французской армии, что позволило главным силам продолжить организованное отступление.',
        icon: 'fa-burst',
        stats: {
            russianForces: '25,000',
            frenchForces: '28,000',
            duration: '2 дня',
            losses: {
                russian: '2,500',
                french: '1,000'
            }
        }
    },
    {
        id: 4,
        date: '23 июля 1812',
        title: 'Соединение армий в Смоленске',
        description: 'Историческое соединение 1-й и 2-й Западных армий под командованием Барклая де Толли и Багратиона в Смоленске. Это событие значительно усилило русскую армию и создало предпосылки для перехода к активным действиям против армии Наполеона.',
        icon: 'fa-handshake',
        stats: {
            russianForces: '120,000',
            frenchForces: '180,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 5,
        date: '4-6 августа 1812',
        title: 'Смоленское сражение',
        description: 'Героическая оборона Смоленска русскими войсками. В ходе ожесточённых боёв город был практически полностью разрушен, но русская армия сумела организованно отступить, сохранив свои основные силы. Смоленское сражение показало решимость русской армии к сопротивлению и высокий моральный дух войск.',
        icon: 'fa-fort',
        stats: {
            russianForces: '30,000',
            frenchForces: '45,000',
            duration: '3 дня',
            losses: {
                russian: '6,000',
                french: '8,000-9,000'
            }
        }
    },
    {
        id: 6,
        date: '8 августа 1812',
        title: 'Назначение Кутузова',
        description: 'М.И. Кутузов был назначен главнокомандующим всеми русскими армиями. Это решение было принято императором Александром I под давлением общественного мнения и военных кругов. Опытный полководец, участник многих войн, Кутузов пользовался огромным авторитетом в армии и обществе.',
        icon: 'fa-crown',
        stats: {
            russianForces: '95,000',
            frenchForces: '130,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 7,
        date: '26 августа 1812',
        title: 'Бородинское сражение',
        description: 'Крупнейшее сражение Отечественной войны 1812 года между русской армией под командованием М.И. Кутузова и французской армией Наполеона I Бонапарта. В ходе 12-часового сражения обе стороны понесли огромные потери, но ни одна не достигла решающего перевеса. Бородинская битва считается одним из самых кровопролитных сражений XIX века и стала переломным моментом в войне.',
        icon: 'fa-chess-rook',
        stats: {
            russianForces: '130,000',
            frenchForces: '135,000',
            duration: '1 день',
            losses: {
                russian: '45,000',
                french: '35,000'
            }
        }
    },
    {
        id: 8,
        date: '1 сентября 1812',
        title: 'Военный совет в Филях',
        description: 'На военном совете в деревне Фили под председательством М.И. Кутузова было принято историческое решение оставить Москву без боя ради сохранения армии. Это решение, хотя и было болезненным для русского общества, оказалось стратегически верным и в конечном итоге привело к победе над Наполеоном.',
        icon: 'fa-users',
        stats: {
            russianForces: '90,000',
            frenchForces: '100,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 9,
        date: '2 сентября 1812',
        title: 'Оставление Москвы',
        description: 'Русская армия и большая часть жителей покинули Москву. В тот же день в город вступила армия Наполеона. Вскоре в городе начались пожары, уничтожившие значительную часть построек. Оставление и пожар Москвы стали поворотным моментом войны, после которого начался моральный надлом французской армии.',
        icon: 'fa-city',
        stats: {
            russianForces: '90,000',
            frenchForces: '100,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 10,
        date: '6 октября 1812',
        title: 'Тарутинское сражение',
        description: 'Тарутинское сражение (6 (18) октября 1812 года) — это одно из ключевых столкновений Отечественной войны 1812 года между русской и французской армиями, произошедшее вблизи деревни Тарутино. Это сражение стало первым крупным наступательным действием русской армии после отступления от Москвы и началом стратегического перелома в кампании против Наполеона.',
        icon: 'fa-burst',
        stats: {
            russianForces: '97,000',
            frenchForces: '110,000',
            duration: '1 день',
            losses: {
                russian: '1,200',
                french: '3,000'
            }
        }
    },
    {
        id: 11,
        date: '7 октября 1812',
        title: 'Отступление французов',
        description: 'Отступление французов из Москвы 7 (19) октября 1812 года стало ключевым событием Отечественной войны 1812 года и ознаменовало начало краха Наполеоновской армии в России. После захвата Москвы Наполеон ожидал, что русские предложат ему мир, но этого не произошло.',
        icon: 'fa-person-walking',
        stats: {
            russianForces: '90,000',
            frenchForces: '100,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 12,
        date: '10 октября 1812',
        title: 'Русские войска вошли в Москву',
        description: 'Русские войска действительно вошли в Москву 10 (22) октября 1812 года, через месяц после того, как армия Наполеона захватила город 14 сентября 1812 года. К этому времени ситуация для французов резко ухудшилась.',
        icon: 'fa-city',
        stats: {
            russianForces: '90,000',
            frenchForces: '0',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 13,
        date: '12 октября 1812',
        title: 'Сражение при Малоярославце',
        description: 'Сражение при Малоярославце произошло 12 (24) октября 1812 года и стало важным эпизодом Отечественной войны 1812 года. Это было одно из решающих сражений в ходе русской кампании Наполеона.',
        icon: 'fa-burst',
        stats: {
            russianForces: '24,000',
            frenchForces: '24,000',
            duration: '1 день',
            losses: {
                russian: '6,000',
                french: '5,000'
            }
        }
    },
    {
        id: 14,
        date: '17 октября 1812',
        title: 'Наполеон вышел на Смоленск',
        description: '17 (29) октября 1812 года — это дата, когда Наполеон Бонапарт, после своего пребывания в Москве, начал движение своих войск из Москвы в сторону Смоленска. Это событие произошло во время Отечественной войны 1812 года, когда французские войска, возглавляемые Наполеоном, были вынуждены отступать из России после неудачного похода.',
        icon: 'fa-route',
        stats: {
            russianForces: '80,000',
            frenchForces: '70,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 15,
        date: '3-6 ноября 1812',
        title: 'Сражение под Красным',
        description: 'Сражение под Красным, которое произошло с 3 по 6 ноября 1812 года (по старому стилю) или с 15 по 18 ноября (по новому стилю), является значимым эпизодом в Отечественной войне 1812 года. Это сражение состоялось в ходе отступления французской армии из России после её поражения в битве под Москвой и последующего русским контрнаступления.',
        icon: 'fa-burst',
        stats: {
            russianForces: '70,000',
            frenchForces: '50,000',
            duration: '4 дня',
            losses: {
                russian: '2,000',
                french: '6,000'
            }
        }
    },
    {
        id: 16,
        date: '14-16 ноября 1812',
        title: 'Переправа через Березину',
        description: 'Переправа через Березину (14-16 (26-28) ноября 1812 года) — это одно из решающих событий во время Отечественной войны 1812 года, которое сыграло ключевую роль в окончательном крахе Великой армии Наполеона и её бегстве из России.',
        icon: 'fa-water',
        stats: {
            russianForces: '80,000',
            frenchForces: '29,000',
            duration: '3 дня',
            losses: {
                russian: '4,000',
                french: '21,000'
            }
        }
    },
    {
        id: 17,
        date: '23 декабря 1812',
        title: 'Наполеон покинул армию',
        description: '23 декабря (5 января по новому стилю) 1812 года Наполеон Бонапарт покинул свою армию и отправился в Париж, оставив своих солдат на произвол судьбы. Это событие стало кульминацией катастрофического отступления Великой армии из России и ознаменовало важный момент в Отечественной войне 1812 года.',
        icon: 'fa-person-walking',
        stats: {
            russianForces: '100,000',
            frenchForces: '20,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 18,
        date: '14 декабря 1812',
        title: 'Французы покинули Россию',
        description: 'Да, французские войска действительно покинули Россию 14 (26) декабря 1812 года. Это событие завершило один из самых трагичных и катастрофических этапов в истории Наполеоновских войн.',
        icon: 'fa-flag',
        stats: {
            russianForces: '100,000',
            frenchForces: '20,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 19,
        date: '21 декабря 1812',
        title: 'Кутузов поздравил войска',
        description: '21 декабря 1812 года (2 января 1813 года по новому стилю). После тяжелых боев и отступления французской армии из России, Кутузов обратился к своим солдатам с речью, в которой выразил благодарность и признательность за их стойкость и мужество.',
        icon: 'fa-handshake',
        stats: {
            russianForces: '100,000',
            frenchForces: '20,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    },
    {
        id: 20,
        date: '25 декабря 1812',
        title: 'Манифест Александра I',
        description: 'Манифест Александра I от 25 декабря 1812 года (6 января 1813 года по новому стилю) стал важным документом в контексте Отечественной войны 1812 года. Этот манифест был опубликован в момент, когда русские войска уже начали возвращение в свои территории после успешного отступления французской армии из России.',
        icon: 'fa-scroll',
        stats: {
            russianForces: '100,000',
            frenchForces: '20,000',
            duration: '1 день',
            losses: {
                russian: 'Нет',
                french: 'Нет'
            }
        }
    }
];

// Текущее состояние
let currentEventIndex = 0;
let isDarkMode = false;

// DOM элементы
const timelineContainer = document.querySelector('.timeline');
const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventDescription = document.getElementById('eventDescription');
const eventGallery = document.getElementById('eventGallery');
const themeToggle = document.getElementById('themeToggle');
const scrollToTop = document.getElementById('scrollToTopBtn');

// Инициализация временной линии
function initializeTimeline() {
    // Очищаем контейнер перед добавлением событий
    timelineContainer.innerHTML = '';
    
    events.forEach((event, index) => {
        const eventElement = createTimelineEvent(event, index);
        timelineContainer.appendChild(eventElement);
    });
    
    // Добавляем обработчики для существующих событий
    const existingEvents = document.querySelectorAll('.timeline-event');
    existingEvents.forEach((event, index) => {
        event.addEventListener('click', () => selectEvent(index));
    });
    
    updateEventDisplay();
}

// Создание элемента события
function createTimelineEvent(event, index) {
    const eventElement = document.createElement('div');
    eventElement.className = 'timeline-event';
    eventElement.setAttribute('data-id', event.id);
    eventElement.innerHTML = `
        <div class="timeline-date">${event.date}</div>
        <div class="timeline-title">${event.title}</div>
        <div class="timeline-icon">
            <i class="fas ${event.icon}"></i>
        </div>
    `;
    eventElement.addEventListener('click', () => selectEvent(index));
    return eventElement;
}

// Обновление отображения текущего события
function updateEventDisplay() {
    const event = events[currentEventIndex];
    if (!event) return;

    eventTitle.textContent = event.title;
    eventDate.textContent = event.date;
    eventDescription.textContent = event.description;
    
    // Обновление галереи
    eventGallery.innerHTML = '';
    if (event.media) {
        event.media.forEach(media => {
            if (media.type === 'image') {
                const img = document.createElement('img');
                img.src = media.url;
                img.alt = media.caption;
                img.title = media.caption;
                eventGallery.appendChild(img);
            }
        });
    }

    // Обновление статистики
    if (event.stats) {
        updateStatistics(event.stats);
    }


    // Прокрутка к выбранному событию
    const selectedEvent = document.querySelectorAll('.timeline-event')[currentEventIndex];
    if (selectedEvent) {
        selectedEvent.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Обновление статистики
function updateStatistics(stats) {
    const russianForces = document.querySelector('.russian-forces .stat-value');
    const frenchForces = document.querySelector('.french-forces .stat-value');
    const battleDuration = document.querySelector('.battle-duration .stat-value');
    const frenchLosses = document.querySelector('.french-losses .stat-value');

    if (russianForces) russianForces.textContent = stats.russianForces;
    if (frenchForces) frenchForces.textContent = stats.frenchForces;
    if (battleDuration) battleDuration.textContent = stats.duration;
    if (frenchLosses) frenchLosses.textContent = stats.losses.french;
}

// Выбор события
function selectEvent(index) {
    if (index >= 0 && index < events.length) {
        currentEventIndex = index;
        updateEventDisplay();
    }
}

// Навигация по событиям
function navigateEvents(direction) {
    const newIndex = currentEventIndex + direction;
    if (newIndex >= 0 && newIndex < events.length) {
        selectEvent(newIndex);
    }
}

// Переключение темы
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    
    if (isDarkMode) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
    
    // Сохраняем выбор темы
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Обработка прокрутки
function handleScroll() {
    if (window.scrollY > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
}

// Прокрутка к началу страницы
function scrollToTopHandler() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация временной линии
    initializeTimeline();
    
    // Добавляем обработчик для переключения темы
    themeToggle.addEventListener('click', toggleTheme);
    
    // Добавляем обработчик прокрутки
    window.addEventListener('scroll', handleScroll);
    
    // Добавляем обработчик для кнопки прокрутки вверх
    scrollToTop.addEventListener('click', scrollToTopHandler);
    
    // Инициализация темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('sunIcon').style.display = 'none';
        document.getElementById('moonIcon').style.display = 'block';
    }
}); 