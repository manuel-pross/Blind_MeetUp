// For IE 11 polyfill
let ES6Promise = require("es6-promise");
ES6Promise.polyfill();

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import impressumEN from '../translations/en/impressum.json';
import impressumDE from '../translations/de/impressum.json';
import footerEN from '../translations/en/footer.json';
import footerDE from '../translations/de/footer.json';
import faqEN from '../translations/en/faq.json';
import faqDE from '../translations/de/faq.json';
import timelineEN from '../translations/en/timeline.json';
import timelineDE from '../translations/de/timeline.json';
import aboutProjectEN from '../translations/en/aboutProject.json';
import aboutProjectDE from '../translations/de/aboutProject.json';
import headerEN from '../translations/en/header.json';
import headerDE from '../translations/de/header.json';

// the translations
const resources = {
    en: {
        impressum: impressumEN,
        footer: footerEN,
        faq: faqEN,
        timeline: timelineEN,
        aboutProject: aboutProjectEN,
        header: headerEN
    },
    de: {
        impressum: impressumDE,
        footer: footerDE,
        faq: faqDE,
        timeline: timelineDE,
        aboutProject: aboutProjectDE,
        header: headerDE
    }
};

// Options for LanugageDetector
const options = {
    // order and from where user language should be detected; All Options ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain']
    order:  ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
    cookieOptions: { path: '/', sameSite: 'strict' }
}

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // IE 11 doesnt support LanguageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
        react: {
            useSuspense: false
        },
        resources,
        fallbackLng: 'en',
        debug: true,
        // lng: 'de',
        // detection: options,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;