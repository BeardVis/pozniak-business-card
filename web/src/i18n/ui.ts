export const locales = ["en", "uk", "cs"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const ui = {
  en: {
    // General
    "site.hero_name": "Veronika Pozniak",
    "site.nav_about": "Bio",
    "site.nav_events": "Events",
    "site.nav_press": "Press",

    "site.page_title.index": "Home",
    "site.page_title.about": "Bio",

    // Hero
    "hero.title": "Vocalist & Performer",

    // About
    "about.title": "Voice of the Soul",
    "about.description":
      "Veronika Pozniak is a singer, performer, and vocal educator whose work bridges musical traditions from different cultures with a contemporary artistic vision. Moving freely across genres, she creates a unique space where diverse influences meet through an original and personal approach. Her long-term artistic research focuses on the voice and the many forms of singing — from traditional vocal practices and cultural heritage to contemporary authorial and performative expressions, often naturally intertwined with theatre. Born in Ukraine, Veronika studied acting there and was a member of the Les Kurbas Theatre in Lviv. Since 2021, she has been living and working in the Czech Republic. She graduated from the Department of Authorial Creativity and Pedagogy at the Academy of Performing Arts in Prague (DAMU), where she currently teaches singing. Alongside her own artistic projects, Veronika collaborates with creators across the fields of music and theatre and remains open to new artistic encounters and interdisciplinary collaborations.",
    "about.cta": "Learn more",

    // Events
    "events.title": "Upcoming Performances",
    "events.tickets": "Tickets",

    // Workshops
    "workshops.title": "Workshops",
    "workshops.individual.title": "Looking for a personalized approach?",
    "workshops.individual.request": "Request Individual Masterclass",

    // Gallery
    "gallery.title": "Gallery",

    // Bio
    "bio.title": "Biography",
    "bio.content":
      "Veronika Pozniak is a versatile artist whose work naturally bridges the worlds of drama, traditional music, and vocal research. Her artistic journey began in her native Kyiv, where she graduated from the Secondary School of Theatre and gained her initial stage experience at the New Ukrainian Theatre (now known as the Theatre on Mykhailivska / Театр на Михайлівській). Her subsequent studies in Drama and Film Acting at the National University in Lviv proved pivotal, as she became a member of the prestigious Les Kurbas Theatre, which provided her with essential professional training. Even during her studies, Veronika demonstrated her musical sensibility as a co-founder of the folk band Yagody, where she spent four years as a singer and accordionist. Her artistic scope gradually expanded toward experimental and physical theatre, largely due to her long-term collaboration with the international ensemble Gershom Theatre, led by American director Seth Baumrin. This experience, including a theatre residency in Ljubljana and performances in the original productions Birds and Nature’s Path/Ancestral Rhythms, served as a key milestone in her understanding of the connection between body and voice. For the past thirteen years, Veronika has been deeply dedicated to the study of the human voice, a passion that continues to this day. A fascination with traditional singing cultures from around the world led her to participate in numerous international projects focused on voice pedagogy, which now serves as the foundation of her professional practice. Since moving to the Czech Republic in 2021, Veronika has been fully involved in the local cultural life. Starting in 2022, she has performed her own solo musical programs, and between 2022 and 2025, she served as both an actress and musical director for several projects at the Municipal Theatres of Prague. Currently, she shares her extensive stage and vocal research experience as a voice pedagogue at the Department of Authorial Creativity and Pedagogy at DAMU, where she was awarded the Josef Hlávka Prize in 2024 for exceptional talent, creative thinking, and achievements in her field. As a musical director, she also contributed to the award-winning VR project Fragile Home (Křehký domov, 2024–2025) by director Ondra Moravec, which won two awards at the Annecy International Animation Film Festival. Veronika Pozniak further explores her artistic range through collaborations with guitarist Artem Pozdnyakov, Přemysl Rut (the Okolostolalala project), the Subito choir, the Cantus Adventus ensemble, and the Ateliér živé pedagogiky. Her work is a synthesis of deep respect for tradition, creative courage, and a constant quest for new modes of expression.",
  },
  uk: {
    // General
    "site.hero_name": "Вероніка Позняк",
    "site.nav_about": "Біо",
    "site.nav_events": "Події",
    "site.nav_press": "Преса",

    "site.page_title.index": "Головна",
    "site.page_title.about": "Біографія",

    // Hero
    "hero.title": "Вокалістка та виконавиця",

    // About
    "about.title": "Голос Душі",
    "about.description":
      "Вероніка Позняк — співачка, перформерка та викладачка вокалу. У своїй творчості вона поєднує музичні традиції різних культур із сучасним авторським баченням, вільно досліджуючи межі жанрів і створюючи власний художній простір. Її багаторічна практика зосереджена на дослідженні голосу та співу — від традиційних вокальних культур і способів передачі музичної спадщини до сучасних авторських і перформативних форм, які вона природно переплітає з театром. Народилася в Україні, де здобула акторську освіту та працювала в театрі Леся Курбаса у Львові. З 2021 року живе й працює в Чехії. Закінчила кафедру авторської творчості та педагогіки Академії мистецтв у Празі (DAMU), де сьогодні викладає спів. Окрім власних творчих проєктів, Вероніка співпрацює з митцями з різних сфер музики й театру, відкриваючись до нових творчих зустрічей, пошуків і міждисциплінарних проєктів.",
    "about.cta": "Дізнатись більше",

    // Events
    "events.title": "Майбутні вистави",
    "events.tickets": "Квитки",

    // Workshops
    "workshops.title": "Майстер-класи",
    "workshops.individual.title": "Шукаєте персоналізований підхід?",
    "workshops.individual.request": "Замовити індивідуальний майстер-клас",

    // Gallery
    "gallery.title": "Галерея",

    // Bio
    "bio.title": "Біографія",
    "bio.content":
      "Вероніка Позняк — багатогранна мисткиня, чия творчість природно поєднує світ драматичного театру, традиційної музики та фахового дослідження голосу. Її шлях розпочався в рідному Києві: закінчивши Коледж театру та кіно, вона отримала свій перший сценічний досвід у Новому українському театрі (нині — Театр на Михайлівській). Згодом, здобуваючи фах акторки драматичного театру і кіно у Львівському національному університеті імені Івана Франка, Вероніка долучилася до престижного ансамблю Театру імені Леся Курбаса, де заклала міцний фундамент своєї професійної майстерності. Ще під час навчання вона розкрила свій музичний потенціал, ставши співзасновницею фольк-гурту Yagody, в якому впродовж чотирьох років була вокалісткою та акордеоністкою. Її мистецькі обрії поступово розширювалися в бік експериментального та фізичного театру, чому значною мірою посприяла тривала співпраця з міжнародною групою Gershom Theatre під керівництвом американського режисера Сета Баумріна. Цей досвід, що охопив театральну резиденцію в Любляні та участь в авторських перформансах Birds і Nature’s Path / Ancestral Rhythms, став важливою віхою в усвідомленні глибинного взаємозв’язку між тілом та голосом. Ось уже понад тринадцять років Вероніка присвячує себе вивченню людського голосу. Захоплення традиційними співочими культурами різних народів спонукало її до участі в багатьох міжнародних проєктах, присвячених вокальній педагогіці, що зрештою стало осердям її фахової діяльності. Від моменту переїзду до Чеської Республіки у 2021 році Вероніка стала невід’ємною частиною місцевого культурного простору. Починаючи з 2022 року, вона представляє власні сольні музичні програми, а в період 2022–2025 років працювала як акторка та музична режисерка над низкою постановок у Міських театрах Праги (Městská divadla pražská). Наразі вона передає свій багатий сценічний та дослідницький досвід як викладачка вокалу на Кафедрі авторської творчості та педагогіки DAMU, де у 2024 році отримала премію Йозефа Главки за виняткові здібності, творче мислення та досягнення в галузі. Також вона виступила музичною режисеркою відзначеного нагородами VR-проєкту «Крихкий дім» (Křehký domov, 2024–2025) режисера Ондри Моравця, який здобув дві нагороди на фестивалі в Ансі. Вероніка Позняк також продовжує розширювати свій мистецький діапазон завдяки співпраці з гітаристом Артемом Поздняковим, Пшемислом Рутом (проєкт Okolostolalala), хором Subito, гуртом Cantus Adventus та Ateliérem živé pedagogiky. Її творчість — це гармонійний синтез поваги до традиції, сміливості авторського вислову та невтомного пошуку нових шляхів самовираження.",
  },
  cs: {
    // General
    "site.hero_name": "Veronika Pozniak",
    "site.nav_about": "Bio",
    "site.nav_events": "Události",
    "site.nav_press": "Tisk",

    "site.page_title.index": "Domů",
    "site.page_title.about": "Životopis",

    // Hero
    "hero.title": "Vokální umělec a performer",

    // About
    "about.title": "Hlas duše",
    "about.description":
      "Veronika Pozniak je zpěvačka, performerka a lektorka zpěvu. Ve své tvorbě propojuje hudební tradice různých kultur se současným autorským přístupem a svobodně si pohrává se žánry. Dlouhodobě se věnuje výzkumu hlasu a zpěvu – od tradičních pěveckých kultur až po současné autorské a performativní formy, které přirozeně propojuje s divadlem. Narodila se na Ukrajině, kde vystudovala herectví a působila v Divadle Lese Kurbase ve Lvově. Od roku 2021 žije v České republice. Absolvovala DAMU, Katedru autorské tvorby a pedagogiky, kde dnes působí jako pedagožka zpěvu. Vedle vlastní autorské tvorby spolupracuje s umělci napříč hudebními i divadelními obory a je otevřená novým tvůrčím setkáním a mezioborovým projektům.",
    "about.cta": "Zjistit více",

    // Events
    "events.title": "Nadcházející vystoupení",
    "events.tickets": "Vstupenky",

    // Workshops
    "workshops.title": "Workshopy",
    "workshops.individual.title": "Hledáte individuální přístup?",
    "workshops.individual.request": "Požádat o individuální mistrovskou třídu",

    // Gallery
    "gallery.title": "Galerie",

    // Bio
    "bio.title": "Životopis",
    "bio.content":
      "Veronika Pozniak je výrazná umělkyně, jejíž tvorba přirozeně propojuje svět činoherního herectví, tradiční hudby a odborného výzkumu hlasu. Její cesta začala v rodném Kyjevě, kde absolvovala Střední divadelní školu a získala první jevištní zkušenosti v Novém ukrajinském divadle (dnes známé jako Divadlo na Mykhailivské / Театр на Михайлівській). Studium činoherního a filmového herectví na Národní univerzitě ve Lvově pak zásadně ovlivnilo její další směřování – stala se součástí prestižního souboru Divadla Lese Kurbase, které pro ni představovalo klíčovou hereckou průpravu. Už během studií Veronika prokázala své hudební cítění jako spoluzakladatelka folk kapely Yagody, v níž jako zpěvačka a akordeonistka strávila čtyři roky. Její umělecký záběr se postupně rozšířil směrem k experimentálnímu a fyzickému divadlu, a to především díky dlouhodobé spolupráci s mezinárodním uskupením Gershom Theatre pod vedením amerického režiséra Setha Baumrina. Tato zkušenost, zahrnující divadelní rezidenci v Lublani i účinkování v autorských performancích Birds či Nature’s Path/Ancestral Rhythms, byla důležitým milníkem v jejím vnímání propojení těla a hlasu. Tématu lidského hlasu se Veronika věnuje hloubkově již třináct let. Fascinace tradičními pěveckými kulturami různých národů ji vedla k účasti na řadě mezinárodních projektů zaměřených na hlasovou pedagogiku, což dnes tvoří pilíř její odborné práce. Od svého příchodu do České republiky v roce 2021 se Veronika plně zapojila do zdejšího kulturního života.Od roku 2022 realizuje vlastní sólové hudební programy a v letech 2022–2025 byla jako herečka a hudební režisérka klíčovou tváří několika projektů Městských divadel pražských. V současnosti své bohaté zkušenosti z jeviště i z výzkumu hlasu předává dále jako pedagožka na Katedře autorské tvorby a pedagogiky DAMU. V roce 2024 jí byla za mimořádné schopnosti, tvůrčí myšlení a výsledky v oboru udělena Cena Josefa Hlávky.Jako hudební režisérka se podílela na oceňovaném VR projektu Křehký domov (2024–2025) režiséra Ondry Moravce, který získal dvě ceny na festivalu v Annecy. Veronika Pozniak dále rozvíjí svůj umělecký přesah prostřednictvím spolupráce s kytaristou Artemem Pozdniakovym, Přemyslem Rutem (projekt Okolostolalala), sborem Subito, kapelou Cantus Adventus a Ateliérem živé pedagogiky. Její tvorba je syntézou hlubokého respektu k tradici, autorské odvahy a neustálého hledání nových výrazových cest.",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

// export function useTranslations(locale: Locale) {
//     return (key: UiKey) =>
//         {
//             return ui[locale][key] || ui[defaultLocale][key];
//         };
// }

export function useTranslations(locale: string | undefined) {
  const validLocale =
    locale && locales.includes(locale as Locale)
      ? (locale as Locale)
      : defaultLocale;

  return (key: UiKey) => {
    return ui[validLocale][key] || ui[defaultLocale][key];
  };
}
