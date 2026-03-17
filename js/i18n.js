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
      'intro.heading': 'We are an independent laboratory <br>and community of IT enthusiasts in Almaty.',
      'intro.join': 'Join us',
      'intro.scroll': 'Scroll down',
      'about.heading': 'Hello. This is Black Ice.',
      'about.lead': 'We bring together engineers, programmers, information security specialists and makers.',
      'about.body': 'Unlike coworking spaces, we don\'t just rent desks. We create an environment for sharing experience, experimenting with hardware and exploring technologies that are hard to master alone at home.',
      'about.equipment_intro': 'Residents have access to all shared equipment:',
      'services.heading': 'How it works.',
      'services.lead': 'We operate as a Public Association. This means there is no owner taking profit. All funds go towards rent, utilities and new equipment purchases.',
      'services.principles_heading': 'Community Principles.',
      'services.doocracy': 'If you want something done — do it',
      'services.whitehat': 'We study vulnerabilities only for defense. Any illegal activity, carding or destructive actions are strictly prohibited.',
      'services.sharing': 'Knowledge should be free. Learn yourself — teach others.',
      'contact.heading': 'How to become a member.',
      'contact.lead': 'We are open to new people. You don\'t need to be an electronics guru — just have a desire to learn.',
      'contact.guest_title': 'Guest Visit',
      'contact.guest_body': 'Come to our <b>Open House</b> or any open workshop or meetup. Check out the atmosphere, meet the residents. We announce all events on our social networks, primarily in our <a href="https://t.me/blackicehackerspace">Telegram channel</a>.',
      'contact.membership_title': 'Residency (Membership)',
      'contact.membership_body': 'Permanent access to the hackerspace and equipment.',
      'contact.student': 'Student:',
      'contact.resident': 'Resident:',
      'contact.enthusiast': 'Enthusiast:',
      'contact.corporate': 'Corporate participation:',
      'contact.corporate_body': 'For companies looking to upskill their engineers (contact us for details).',
      'contact.find_us': 'How to find us',
      'contact.social': 'Social networks',
      'footer.copyright': '© Copyright Black Ice 2024 — forever',
      'gallery.museum_link': 'Retro Console Museum →',
      'gallery.heading': 'Photo Gallery'
    },
    kz: {
      'intro.tag': 'ХАКЕРСПЕЙС',
      'intro.heading': 'Біз — Алматыдағы тәуелсіз зертхана <br>және IT энтузиасттарының қауымдастығы.',
      'intro.join': 'Қосылу',
      'intro.scroll': 'Төменге қараңыз',
      'about.heading': 'Сәлем. Бұл Қара мұз.',
      'about.lead': 'Біз инженерлерді, бағдарламашыларды, ақпараттық қауіпсіздік мамандарын және мейкерлерді біріктіреміз.',
      'about.body': 'Коворкингтерден айырмашылығымыз, біз тек үстел жалдамаймыз. Біз тәжірибе алмасуға, жабдықпен тәжірибе жасауға және үйде өз бетіңізше меңгеру қиын технологияларды зерттеуге орта жасаймыз.',
      'about.equipment_intro': 'Резиденттерге барлық ортақ жабдыққа қол жетімді:',
      'services.heading': 'Бұл қалай жұмыс істейді.',
      'services.lead': 'Біз Қоғамдық бірлестік форматында жұмыс істейміз. Бұл пайданы алатын иесіз деген сөз. Барлық қаражат жалдауға, коммуналдық қызметтерге және жаңа жабдықтарды сатып алуға жұмсалады.',
      'services.principles_heading': 'Қауымдастық принциптері.',
      'services.doocracy': 'Бір нәрсе жасалуын қаласаң — өзің жаса',
      'services.whitehat': 'Біз осалдықтарды тек қорғаныс үшін зерттейміз. Кез келген заңсыз іс-әрекет, кардинг немесе деструктивті әрекеттер қатаң тыйым салынады.',
      'services.sharing': 'Білім еркін болуы тиіс. Өзің үйрен — басқаны үйрет.',
      'contact.heading': 'Мүше болу жолы.',
      'contact.lead': 'Біз жаңа адамдарға ашықпыз. Электроника гурусы болудың қажеті жоқ, үйренуге ынта болса жеткілікті.',
      'contact.guest_title': 'Қонақ визиті',
      'contact.guest_body': '<b>Ашық есік күніне</b> немесе кез келген ашық воркшоп немесе митапқа келіңіз. Атмосфераны сезініп, резиденттермен танысыңыз. Барлық іс-шаралар туралы біз өз әлеуметтік желілерімізде, ең алдымен <a href="https://t.me/blackicehackerspace">Telegram арнасында</a> хабарлаймыз.',
      'contact.membership_title': 'Резиденттік (Мүшелік)',
      'contact.membership_body': 'Хакерспейс пен жабдыққа тұрақты қол жетімділік.',
      'contact.student': 'Студент:',
      'contact.resident': 'Резидент:',
      'contact.enthusiast': 'Энтузиаст:',
      'contact.corporate': 'Корпоративтік қатысу:',
      'contact.corporate_body': 'Өз инженерлерін жетілдіргісі келетін компаниялар үшін (толығырақ бізге хабарласыңыз).',
      'contact.find_us': 'Бізді қалай табуға болады',
      'contact.social': 'Әлеуметтік желілер',
      'footer.copyright': '© Copyright Black Ice 2024 — forever',
      'gallery.museum_link': 'Ретро-консольдер мұражайы →',
      'gallery.heading': 'Фотогалерея'
    }
  };

  function applyLanguage(lang) {
    var t = translations[lang];
    if (!t) return;

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
