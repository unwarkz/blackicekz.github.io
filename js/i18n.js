(function() {
  'use strict';

  var translations = {
    ru: {
      'intro.tag': 'ХАКЕРСПЕЙС',
      'intro.heading': 'Мы — независимая лаборатория <br>и сообщество IT энтузиастов в Алматы.',
      'intro.join': 'Присоединиться',
      'intro.scroll': 'Листай ниже',
      'about.heading': 'Привет. Это Черный лёд.',
      'about.lead': 'Мы объединяем инженеров, программистов, специалистов по информационной безопасности и мейкеров.',
      'about.body': 'В отличие от коворкингов, мы не просто сдаем столы в аренду. Мы создаем среду для обмена опытом, экспериментов с "железом" и изучения технологий, которые сложно освоить в одиночку дома.',
      'about.equipment_intro': 'Резидентам доступно все общее оборудование:',
      'services.heading': 'Как это работает.',
      'services.lead': 'Мы существуем в формате Общественного объединения. Это значит, что у нас нет владельца, который забирает прибыль. Все средства идут на аренду, коммуналку и закупку нового оборудования',
      'services.principles_heading': 'Принципы сообщества.',
      'services.doocracy': 'Если хочешь, чтобы что-то было сделано — сделай это',
      'services.whitehat': 'Мы изучаем уязвимости только для защиты. Любая незаконная деятельность, кардинг или деструктивные действия строго запрещены.',
      'services.sharing': 'Знания должны быть свободными. Научился сам — научи другого.',
      'contact.heading': 'Как стать участником.',
      'contact.lead': 'Мы открыты для новых людей. Не обязательно быть гуру электроники, достаточно иметь желание учиться.',
      'contact.guest_title': 'Гостевой визит',
      'contact.guest_body': 'Приходите к нам на <b>День открытых дверей</b> или на любой открытый воркшоп или митап. Посмотрите атмосферу, познакомьтесь с резидентами. Обо всех мероприятиях мы сообщаем в своих социальных сетях, в первую очередь в <a href="https://t.me/blackicehackerspace">Telegram канале</a>.',
      'contact.membership_title': 'Резидентство (Membership)',
      'contact.membership_body': 'Постоянный доступ к хакерспейсу и оборудованию.',
      'contact.student': 'Студент:',
      'contact.resident': 'Резидент:',
      'contact.enthusiast': 'Энтузиаст:',
      'contact.corporate': 'Корпоративное участие:',
      'contact.corporate_body': 'Для компаний, которые хотят прокачать своих инженеров (свяжитесь с нами для деталей).',
      'contact.find_us': 'Как нас найти',
      'contact.social': 'Социальные сети',
      'footer.copyright': '© Copyright Black Ice 2024 — forever',
      'gallery.museum_link': 'Музей ретро-консолей →',
      'gallery.heading': 'Фотогалерея'
    },
        en: {
      'intro.tag': 'HACKERSPACE',
      'intro.heading': 'We are an independent laboratory<br>and a community of IT enthusiasts in Almaty.',
      'intro.join': 'Join',
      'intro.scroll': 'Scroll below',
      'about.heading': 'Hello. This is Black Ice.',
      'about.lead': 'We bring together engineers, programmers, information security specialists and makers.',
      'about.body': 'Unlike coworking spaces, we don\'t just rent desks. We create an environment for sharing experiences, experimenting with hardware, and learning technologies that are difficult to master alone at home.',
      'about.equipment_intro': 'Residents have access to all common equipment:',
      'services.heading': 'How does this work.',
      'services.lead': 'We exist in the format of a public association. This means that we do not have an owner who takes the profits. All funds go towards rent, utilities and the purchase of new equipment.',
      'services.principles_heading': 'Community Guidelines.',
      'services.doocracy': 'If you want something done, do it',
      'services.whitehat': 'We study vulnerabilities only for protection. Any illegal activity, carding or destructive activities are strictly prohibited.',
      'services.sharing': 'Knowledge should be free. If you learn it yourself, teach someone else.',
      'contact.heading': 'How to become a member.',
      'contact.lead': 'We are open to new people. You don\'t have to be an electronics guru, just have a desire to learn.',
      'contact.guest_title': 'Guest visit',
      'contact.guest_body': 'Come visit us at<b>Open Day</b>or to any open workshop or meetup. See the atmosphere, meet the residents. We report all events on our social networks, primarily in<a href="https://t.me/blackicehackerspace">Telegram channel</a>.',
      'contact.membership_title': 'Residence (Membership)',
      'contact.membership_body': 'Constant access to hackerspace and equipment.',
      'contact.student': 'Student:',
      'contact.resident': 'Resident:',
      'contact.enthusiast': 'Enthusiast:',
      'contact.corporate': 'Corporate participation:',
      'contact.corporate_body': 'For companies that want to upgrade their engineers (contact us for details).',
      'contact.find_us': 'How to find us',
      'contact.social': 'Social media',
      'footer.copyright': '© Copyright Black Ice 2024 — forever',
      'gallery.museum_link': 'Retro Console Museum →',
      'gallery.heading': 'Photo gallery'
    },
        kz: {
      'intro.tag': 'HACKERSPACE',
      'intro.heading': 'Біз тәуелсіз зертханамыз<br>және Алматыдағы IT-энтузиастар қауымдастығы.',
      'intro.join': 'Қосылыңыз',
      'intro.scroll': 'Төменде айналдырыңыз',
      'about.heading': 'Сәлем. Бұл Қара мұз.',
      'about.lead': 'Біз инженерлерді, бағдарламашыларды, ақпараттық қауіпсіздік мамандарын және мейкерлерді біріктіреміз.',
      'about.body': 'Коворкинг орындарынан айырмашылығы, біз жай ғана үстелдерді жалға алмаймыз. Біз тәжірибе алмасуға, аппараттық құралдармен тәжірибе жасауға және үйде жалғыз меңгеру қиын оқыту технологияларына жағдай жасаймыз.',
      'about.equipment_intro': 'Тұрғындар барлық жалпы жабдыққа қол жеткізе алады:',
      'services.heading': 'Бұл қалай жұмыс істейді.',
      'services.lead': 'Біз қоғамдық бірлестік форматында өмір сүреміз. Бұл бізде пайданы алатын иесі жоқ деген сөз. Барлық қаражат жалға алуға, коммуналдық қызметтерге және жаңа жабдық сатып алуға жұмсалады.',
      'services.principles_heading': 'Қауымдастық нұсқаулары.',
      'services.doocracy': 'Егер сіз бірдеңе жасағыңыз келсе, оны жасаңыз',
      'services.whitehat': 'Біз осалдықтарды тек қорғау үшін зерттейміз. Кез келген заңсыз іс-әрекетке, картингке немесе деструктивті әрекеттерге қатаң тыйым салынады.',
      'services.sharing': 'Білім еркін болуы керек. Өзіңіз үйренсеңіз, басқаға үйретіңіз.',
      'contact.heading': 'Қалай мүше болуға болады.',
      'contact.lead': 'Біз жаңа адамдарға ашықпыз. Сізге электроника гурусы болудың қажеті жоқ, тек үйренуге деген құлшынысыңыз бар.',
      'contact.guest_title': 'Қонақ келу',
      'contact.guest_body': 'Бізге қонаққа келіңіз<b>Ашық есік күні</b>немесе кез келген ашық семинарға немесе кездесуге. Атмосфераны қараңыз, тұрғындармен танысыңыз. Біз барлық оқиғаларды әлеуметтік желілерде хабарлаймыз, ең алдымен<a href="https://t.me/blackicehackerspace">Телеграм каналы</a>.',
      'contact.membership_title': 'Тұрғылықты жері (мүшелік)',
      'contact.membership_body': 'Хакерлер кеңістігі мен жабдыққа тұрақты қол жеткізу.',
      'contact.student': 'Оқушы:',
      'contact.resident': 'Тұрғын:',
      'contact.enthusiast': 'Энтузиаст:',
      'contact.corporate': 'Корпоративтік қатысу:',
      'contact.corporate_body': 'Инженерлерін жаңартқысы келетін компаниялар үшін (толығырақ ақпарат алу үшін бізге хабарласыңыз).',
      'contact.find_us': 'Бізді қалай табуға болады',
      'contact.social': 'Әлеуметтік желі',
      'footer.copyright': '© Copyright Black Ice 2024 — мәңгі',
      'gallery.museum_link': 'Ретро консоль мұражайы →',
      'gallery.heading': 'Фотогалерея'
    }
  };

  function applyLanguage(lang) {
    var t = translations[lang];
    if (!t) return;

    // Translations are static/hardcoded strings (not user input), safe to use innerHTML for HTML tags like <br>, <b>, <a>
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update document lang attribute for accessibility / screen readers
    var langMap = { ru: 'ru', en: 'en', kz: 'kk' };
    document.documentElement.lang = langMap[lang] || lang;

    localStorage.setItem('bi_lang', lang);
  }

  function init() {
    var saved = localStorage.getItem('bi_lang') || 'ru';
    applyLanguage(saved);

    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.lang-btn');
      if (btn) {
        applyLanguage(btn.getAttribute('data-lang'));
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.BlackIceI18n = { applyLanguage: applyLanguage, init: init, translations: translations };
})();
