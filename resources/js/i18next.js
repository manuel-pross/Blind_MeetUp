import i18n from "i18next";
// For detecting the Language of the user
import LanguageDetector from "i18next-browser-languagedetector";
// For lazy loading the Language files
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

import impressumEN from './../../public/translations/en/impressum.json';
import impressumDE from './../../public/translations/de/impressum.json';
import footerEN from '../../public/translations/en/footer.json';
import footerDE from '../../public/translations/de/footer.json';

// the translations
const resources = {
    en: {
        impressum: impressumEN,
        footer: footerEN
    },
    de: {
        impressum: impressumDE,
        footer: footerDE
    }
};

// Options for LanugageDetector
const options = {
    // order and from where user language should be detected; All Options ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain']
    order: ['navigator', 'htmlTag', 'path', 'subdomain'],

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
    .use(LanguageDetector)
    .use(backend)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        // ns: ['impressum'],
        // defaultNS: 'impressum',
        resources,
        // lng: "en",
        fallbackLng: "en", // use en if detected lng is not available

        // keySeparator: false, // we do not use keys in form messages.welcome
        detection: options,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;