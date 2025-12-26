import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Epiphyt Documentations',
  description: 'A collection of product documentations from Epiphyt',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'Epiphyt-Dokumentationen',
      description: 'Eine Sammlung an Produkt-Dokumentationen von Epiphyt',
      themeConfig: {
        docFooter: {
          next: 'Nächste Seite',
          prev: 'Vorherige Seite',
        },
        lastUpdated: {
          text: 'Zuletzt aktualisiert'
        },
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Impressum', link: 'https://epiph.yt/impressum/' },
          { text: 'Datenschutzerklärung', link: 'https://epiph.yt/datenschutz/' },
        ],
        notFound: {
          title: 'Seite nicht gefunden',
          quote:
            'Aber wenn du deine Richtung nicht änderst und weiter suchst, kommst du vielleicht genau dort an, wo du hinwillst.',
          linkLabel: 'Zur Startseite gehen',
          linkText: 'Zur Startseite gehen'
        },
        outline: {
          label: 'Auf dieser Seite',
        },
        langMenuLabel: 'Sprache ändern',
        returnToTopLabel: 'Nach oben',
        sidebarMenuLabel: 'Menü',
        lightModeSwitchTitle: 'Zum hellen Theme wechseln',
        darkModeSwitchTitle: 'Zum dunklen Theme wechseln',
        skipToContentLabel: 'Zum Inhalt wechseln',
        siteTitle: 'Dokumentationen',
        socialLinks: [
          { icon: { svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 181 107.1" style="enable-background:new 0 0 181 107.1;" xml:space="preserve"><style type="text/css">.st0{fill:currentColor;}.st1{opacity:0.5;fill:currentColor;enable-background:new    ;}.st2{opacity:0.7;fill:currentColor;enable-background:new    ;}.st3{opacity:0.1;fill:currentColor;enable-background:new    ;}.st4{opacity:0.3;fill:currentColor;enable-background:new    ;}</style><path class="st1" d="M144.4,37C136.4,16.5,105,9.5,101,8.2c1.2,4.7,10.5,36.8,39.8,55.9c11.5,7.5,27.8,10.1,40.1,10.8C163,72.6,152.3,57.1,144.4,37z"/><path class="st2" d="M146.4,29.1c-7.1-13.5-21.1-20.8-24-21.1c1,1.7,1.9,5,3.1,9.8c1.9,7.3,4.4,17.2,9.5,28.7c7.6,17.1,31.7,28.2,45.8,28.6c-7.4-0.6-19.1-6.5-25.2-16.8C150.2,49,150.2,36.3,146.4,29.1z"/><path class="st2" d="M132.5,40.2c-11-6.9-19.5-9.3-25.4-12.2c-4.1-2-7-3.4-8.7-4.7c1.9,5.3,9.7,24.7,21.8,36.8c21,21,49.5,17.3,60.7,14.9C164.7,74.4,139.7,44.7,132.5,40.2z"/><path class="st3" d="M86.4,94.1c39.2,8.7,83.3-11.9,94.5-19.2c-7.4,2.8-28.9,8.9-44.2,4c-13.3-4.2-25.2-10.4-36.7-16.4c-14.1-7.3-27.5-14.3-41.1-16.2C23.7,41.4,5.2,59.7,2.1,63.2C24.1,58.6,69.8,90.5,86.4,94.1z"/><path class="st4" d="M121.5,79.8C110.4,77,99.9,74.3,90,75.2c-25,2.3-50.9,20.1-52.8,23.4c37-10.3,49.3,11.7,83,6.5c23.6-3.7,53.4-22.6,60.7-30.1c-4.8,3.1-20.5,11.1-30.9,10.2C140,84.4,130.6,82.1,121.5,79.8z"/></svg>' }, link: 'https://epiph.yt/en/', ariaLabel: 'Epiphyt' },
          { icon: 'github', link: 'https://github.com/epiphyt', ariaLabel: 'Epiphyt auf GitHub' }
        ],
      },
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      dark: '/images/logo-sign_white.svg',
      light: '/images/logo-sign_black.svg',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Legal Notice', link: 'https://epiph.yt/en/imprint/' },
      { text: 'Privacy Policy', link: 'https://epiph.yt/en/privacy-policy/' },
    ],
    search: {
      options: {
        locales: {
          de: {
            translations: {
              button: {
                buttonAriaLabel: 'Suchen',
                buttonText: 'Suchen'
              },
              modal: {
                displayDetails: 'Detaillierte Liste anzeigen',
                resetButtonTitle: 'Suche zurücksetzen',
                backButtonTitle: 'Zurück',
                noResultsText: 'Keine Ergebnisse gefunden',
                footer: {
                  selectText: 'zum auswählen',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'zum navigieren',
                  navigateUpKeyAriaLabel: 'Zum vorherigen Eintrag',
                  navigateDownKeyAriaLabel: 'Zum nächsten Eintrag',
                  closeText: 'zum schließen',
                  closeKeyAriaLabel: 'Escape'
                }
              }
            }
          }
        }
      },
      provider: 'local',
    },
    sidebar: {
      '/de/embed-privacy/': [
        {
          text: 'Embed Privacy',
          items: [
            { text: 'Installation', link: '/de/embed-privacy/installation' },
            {
              text: 'Erste Schritte',
              link: '/de/embed-privacy/getting-started',
              items: [
                { text: 'Einstellungen', link: '/de/embed-privacy/settings' },
                { text: 'Embed-Anbieter verwalten', link: '/de/embed-privacy/manage-providers' },
              ],
            },
            { text: 'Systemanforderungen', link: '/de/embed-privacy/system-requirements' },
            { text: 'Änderungsprotokoll', link: '/de/embed-privacy/changelog' },
          ]
        },
        {
          text: 'Entwickler',
          items: [
            { text: 'Verwendung in einem Plugin', link: '/de/embed-privacy/developer/using-in-a-plugin' },
            { text: 'Vorschaubild-Anbieter', link: '/de/embed-privacy/developer/thumbnail-provider' },
            { text: 'Filter', link: '/de/embed-privacy/developer/filters' },
          ]
        },
      ],
      '/de/impressum/': [
        {
          text: 'Impressum (Plus)',
          items: [
            { text: 'Installation', link: '/de/impressum/installation' },
            {
              text: 'Erste Schritte',
              link: '/de/impressum/getting-started',
              items: [
                { text: 'Einstellungen', link: '/de/impressum/getting-started/settings' },
                { text: 'Netzwerk-Einstellungen', link: '/de/impressum/getting-started/network-settings' },
                { text: 'Ausgabe', link: '/de/impressum/getting-started/output' },
              ],
            },
            { text: 'Systemanforderungen', link: '/de/impressum/system-requirements' },
            { text: 'Änderungsprotokoll', link: '/de/impressum/changelog' },
            { text: 'Lizenz', link: '/de/impressum/license' },
            { text: 'Wechsel auf Impressum Plus', link: '/de/impressum/switch' }
          ]
        },
        {
          text: 'WP-CLI',
          items: [
            { text: 'Impressum-Befehle', link: '/de/impressum/wp-cli/imprint' },
            { text: 'Datenschutzerklärung-Befehle', link: '/de/impressum/wp-cli/privacy-policy' },
            { text: 'Befehle zur Information zur Barrierefreiheit', link: '/de/impressum/wp-cli/accessibility-information' },
            { text: 'Lizenz-Befehle', link: '/de/impressum/wp-cli/license' },
            { text: 'API-Befehle', link: '/de/impressum/wp-cli/api' },
          ]
        },
        {
          text: 'API',
          items: [
            { text: 'Authentifizierung', link: '/de/impressum/api/authentication' },
            { text: 'Serveranforderungen', link: '/de/impressum/api/server-requirements' },
            { text: 'Struktur', link: '/de/impressum/api/structure' },
            { text: 'Impressum-Daten', link: '/de/impressum/api/imprint' },
            { text: 'Datenschutzerklärung-Daten', link: '/de/impressum/api/privacy-policy' },
            { text: 'Daten zur Information zur Barrierefreiheit', link: '/de/impressum/api/accessibility-information' }
          ]
        },
        {
          text: 'Entwickler',
          items: [
            { text: 'Allgemein', link: '/de/impressum/developer/general' },
            { text: 'Filter Impressum', link: '/de/impressum/developer/filters/imprint' },
            { text: 'Filter Datenschutzerklärung', link: '/de/impressum/developer/filters/privacy-policy' },
            { text: 'Filter Datenschutzerklärung-Systemprüfung', link: '/de/impressum/developer/filters/privacy-policy-system-check' },
            { text: 'Filter Information zur Barrierefreiheit', link: '/de/impressum/developer/filters/accessibility-information' },
            { text: 'Filter API', link: '/de/impressum/developer/filters/api' },
            { text: 'Migration zu Version 2.0.0', link: '/de/impressum/developer/migration-2' }
          ]
        }
      ],
      '/impressum/': [
        {
          text: 'Impressum (Plus)',
          items: [
            { text: 'Installation', link: '/impressum/installation' },
            {
              text: 'Getting started',
              link: '/impressum/getting-started',
              items: [
                { text: 'Settings', link: '/impressum/getting-started/settings' },
                { text: 'Network Settings', link: '/impressum/getting-started/network-settings' },
                { text: 'Output', link: '/impressum/getting-started/output' },
              ],
            },
            { text: 'System requirements', link: '/impressum/system-requirements' },
            { text: 'Changelog', link: '/impressum/changelog' },
            { text: 'License', link: '/impressum/license' },
            { text: 'Switch to Impressum Plus', link: '/impressum/switch' }
          ]
        },
        {
          text: 'WP-CLI',
          items: [
            { text: 'Imprint commands', link: '/impressum/wp-cli/imprint' },
            { text: 'Privacy policy commands', link: '/impressum/wp-cli/privacy-policy' },
            { text: 'Accessibility information commands', link: '/impressum/wp-cli/accessibility-information' },
            { text: 'License commands', link: '/impressum/wp-cli/license' },
            { text: 'API commands', link: '/impressum/wp-cli/api' },
          ]
        },
        {
          text: 'API',
          items: [
            { text: 'Authentication', link: '/impressum/api/authentication' },
            { text: 'Server requirements', link: '/impressum/api/server-requirements' },
            { text: 'Structure', link: '/impressum/api/structure' },
            { text: 'Imprint data', link: '/impressum/api/imprint' },
            { text: 'Privacy data', link: '/impressum/api/privacy-policy' },
            { text: 'Accessibility information data', link: '/impressum/api/accessibility-information' }
          ]
        },
        {
          text: 'Developer',
          items: [
            { text: 'General', link: '/impressum/developer/general' },
            { text: 'Imprint filters', link: '/impressum/developer/filters/imprint' },
            { text: 'Privacy policy filters', link: '/impressum/developer/filters/privacy-policy' },
            { text: 'Privacy policy system check filters', link: '/impressum/developer/filters/privacy-policy-system-check' },
            { text: 'Accessibility information filters', link: '/impressum/developer/filters/accessibility-information' },
            { text: 'API filters', link: '/impressum/developer/filters/api' },
            { text: 'Migration to version 2.0.0', link: '/impressum/developer/migration-2' }
          ]
        }
      ],
      '/embed-privacy/': [
        {
          text: 'Embed Privacy',
          items: [
            { text: 'Installation', link: '/embed-privacy/installation' },
            {
              text: 'Getting started',
              link: '/embed-privacy/getting-started',
              items: [
                { text: 'Settings', link: '/embed-privacy/settings' },
                { text: 'Manage embed providers', link: '/embed-privacy/manage-providers' },
              ],
            },
            { text: 'System requirements', link: '/embed-privacy/system-requirements' },
            { text: 'Changelog', link: '/embed-privacy/changelog' },
          ]
        },
        {
          text: 'Developer',
          items: [
            { text: 'Using in a plugin', link: '/embed-privacy/developer/using-in-a-plugin' },
            { text: 'Thumbnail provider', link: '/embed-privacy/developer/thumbnail-provider' },
            { text: 'Filters', link: '/embed-privacy/developer/filters' },
          ]
        },
      ],
    },
    siteTitle: 'Documentations',
    socialLinks: [
      { icon: { svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 181 107.1" style="enable-background:new 0 0 181 107.1;" xml:space="preserve"><style type="text/css">.st0{fill:currentColor;}.st1{opacity:0.5;fill:currentColor;enable-background:new    ;}.st2{opacity:0.7;fill:currentColor;enable-background:new    ;}.st3{opacity:0.1;fill:currentColor;enable-background:new    ;}.st4{opacity:0.3;fill:currentColor;enable-background:new    ;}</style><path class="st1" d="M144.4,37C136.4,16.5,105,9.5,101,8.2c1.2,4.7,10.5,36.8,39.8,55.9c11.5,7.5,27.8,10.1,40.1,10.8C163,72.6,152.3,57.1,144.4,37z"/><path class="st2" d="M146.4,29.1c-7.1-13.5-21.1-20.8-24-21.1c1,1.7,1.9,5,3.1,9.8c1.9,7.3,4.4,17.2,9.5,28.7c7.6,17.1,31.7,28.2,45.8,28.6c-7.4-0.6-19.1-6.5-25.2-16.8C150.2,49,150.2,36.3,146.4,29.1z"/><path class="st2" d="M132.5,40.2c-11-6.9-19.5-9.3-25.4-12.2c-4.1-2-7-3.4-8.7-4.7c1.9,5.3,9.7,24.7,21.8,36.8c21,21,49.5,17.3,60.7,14.9C164.7,74.4,139.7,44.7,132.5,40.2z"/><path class="st3" d="M86.4,94.1c39.2,8.7,83.3-11.9,94.5-19.2c-7.4,2.8-28.9,8.9-44.2,4c-13.3-4.2-25.2-10.4-36.7-16.4c-14.1-7.3-27.5-14.3-41.1-16.2C23.7,41.4,5.2,59.7,2.1,63.2C24.1,58.6,69.8,90.5,86.4,94.1z"/><path class="st4" d="M121.5,79.8C110.4,77,99.9,74.3,90,75.2c-25,2.3-50.9,20.1-52.8,23.4c37-10.3,49.3,11.7,83,6.5c23.6-3.7,53.4-22.6,60.7-30.1c-4.8,3.1-20.5,11.1-30.9,10.2C140,84.4,130.6,82.1,121.5,79.8z"/></svg>' }, link: 'https://epiph.yt/en/', ariaLabel: 'Epiphyt' },
      { icon: 'github', link: 'https://github.com/epiphyt', ariaLabel: 'Epiphyt on GitHub' }
    ]
  }
})
