export const locales = [
  { code: "en", label: "English (EN)" },
  { code: "uk", label: "Українська (UK)" },
  { code: "cs", label: "Čeština (CS)" },
] as const;
export type Locale = (typeof locales)[number]["code"];
export const defaultLocale: Locale = "en";

const ui = {
  en: {
    // General
    "site.hero_name": "Veronika Pozniak",
    "site.nav_about": "Bio",
    "site.nav_events": "Events",
    "site.nav_press": "Press",
    "site.nav_gallery": "Gallery",
    "site.nav_contacts": "Contacts",

    "site.page_title.index": "Home",
    "site.page_title.about": "Bio",

    // About
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
    "video.title": "Videos",

    // Press
    "press.listen_radio": "Radio Interview [CS]",
    "press.read_article": "Web Interview [UK]",
    "press.download_article": "Magazine Interview [CS]",
  },
  uk: {
    // General
    "site.hero_name": "Вероніка Позняк",
    "site.nav_about": "Біо",
    "site.nav_events": "Події",
    "site.nav_press": "Преса",
    "site.nav_gallery": "Галерея",
    "site.nav_contacts": "Контакти",

    "site.page_title.index": "Головна",
    "site.page_title.about": "Біографія",

    // About
    "about.cta": "Дізнатись більше",

    // Events
    "events.title": "Майбутні вистави",
    "events.tickets": "Квитки",

    // Workshops
    "workshops.title": "Майстер-класи",
    "workshops.individual.title": "Шукаєте персоналізований підхід?",
    "workshops.individual.request": "Замовити індивідуальний урок",

    // Gallery
    "gallery.title": "Галерея",
    "video.title": "Відео",

    // Press
    "press.listen_radio": "Радіоінтерв'ю [CS]",
    "press.read_article": "Інтерв'ю на сайті [UK]",
    "press.download_article": "Інтерв'ю в журналі [PDF/CS]",
  },
  cs: {
    // General
    "site.hero_name": "Veronika Pozniak",
    "site.nav_about": "Bio",
    "site.nav_events": "Události",
    "site.nav_press": "Tisk",
    "site.nav_gallery": "Galerie",
    "site.nav_contacts": "Kontakty",

    "site.page_title.index": "Domů",
    "site.page_title.about": "Životopis",

    // About
    "about.cta": "Zjistit více",

    // Events
    "events.title": "Nadcházející vystoupení",
    "events.tickets": "Vstupenky",

    // Workshops
    "workshops.title": "Workshopy",
    "workshops.individual.title": "Hledáte individuální přístup?",
    "workshops.individual.request": "Požádat o individuální hodinu",

    // Gallery
    "gallery.title": "Galerie",
    "video.title": "Videa",

    // Press
    "press.listen_radio": "Rozhlasový rozhovor [CS]",
    "press.read_article": "Rozhovor na webu [UK]",
    "press.download_article": "Rozhovor v časopise [PDF/CS]",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(locale: string | undefined) {
  const validLocale =
    locale && locales.some((l) => l.code === locale)
      ? (locale as Locale)
      : defaultLocale;

  return (key: UiKey) => {
    return ui[validLocale][key] || ui[defaultLocale][key];
  };
}
