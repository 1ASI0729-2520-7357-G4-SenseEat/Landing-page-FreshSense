// assets/translate.js
(() => {
  'use strict';

  /*** Config ***/
  const KEY = 'fs_lang';                   // clave en localStorage
  const SUPPORTED = ['en', 'es'];          // idiomas soportados
  const DEFAULT = 'en';                    // idioma por defecto

  /*** Diccionario ***/
  const dict = {
    en: {
      // Navbar
      'nav.home': 'HOME',
      'nav.about': 'ABOUT',
      'nav.benefits': 'BENEFITS',
      'nav.plans': 'PLANS',
      'nav.testimonials': 'TESTIMONIALS',
      'nav.contact': 'CONTACT',
      'nav.language': 'LANGUAGE',

      // Hero
      'hero.kicker': 'WELCOME TO THE FUTURE OF FRESH FOOD',
      'hero.title': 'TRANSFORM YOUR KITCHEN WITH FRESHSENSE TECHNOLOGY',
      'hero.lead':
        'Experience revolutionary smart refrigeration that learns your habits, preserves food longer, and helps you save money while reducing waste. Join the future of intelligent food storage.',
      'hero.cta.primary': 'GET STARTED',
      'hero.cta.secondary': 'WATCH DEMO',
      'hero.scroll': 'EXPLORE SMART FEATURES',

      // How it works
      'works.title': 'HOW FRESHSENSE WORKS',
      'works.step1.title': 'STEP 1: Place the Sensor',
      'works.step1.text':
        'Install the FreshSense device inside your fridge. It starts measuring temperature, humidity, and ethylene gas right away.',
      'works.step2.title': 'STEP 2: Real-Time Data',
      'works.step2.text':
        'FreshSense sends live data to your personal dashboard. Track the freshness of your food anytime, anywhere.',
      'works.step3.title': 'STEP 3: Smart Alerts',
      'works.step3.text':
        'Get instant alerts when food is about to spoil. Use it before it’s wasted and save money.',
      'works.more': 'Learn More',

      // Benefits
      'benefits.title': 'BENEFITS',
      'benefits.subtitle': "Why You'll Love FreshSense",
      'benefits.b1.title': 'Save Money',
      'benefits.b1.text':
        'Reduce food waste and save on your grocery bills with smart expiration tracking',
      'benefits.b2.title': 'Reduce Food Waste',
      'benefits.b2.text':
        'Get alerts before food spoils and contribute to a more sustainable future',
      'benefits.b3.title': 'Get Smart Recipes',
      'benefits.b3.text':
        'Receive personalized recipe suggestions based on your available ingredients',
      'benefits.b4.title': 'Track Your Food',
      'benefits.b4.text':
        "Monitor freshness levels and get real-time updates on your food's condition",

      // Pricing
      'pricing.title': 'PRICING PLANS',
      'pricing.subtitle': 'Simple Plans for Every Home',
      'pricing.perMonth': '/MON',
      'pricing.signup': 'SIGN UP',

      'pricing.basic.f1': '1 device',
      'pricing.basic.f2': 'Temperature, humidity and ethylene gas monitoring',
      'pricing.basic.f3': 'Spoilage alerts',
      'pricing.basic.f4': '7-day history',
      'pricing.basic.f5': 'Web dashboard with overall food status',
      'pricing.basic.f6': 'Standard support',

      'pricing.std.f1': '2 FreshSense devices',
      'pricing.std.f2': 'Automatic inventory logging',
      'pricing.std.f3': 'Smart expiration alerts',
      'pricing.std.f4': 'Recipe suggestions based on items',
      'pricing.std.f5': '30-day history',
      'pricing.std.f6': 'Monthly savings reports',
      'pricing.std.f7': 'Detailed stats and charts',

      'pricing.prem.f1': 'Unlimited devices',
      'pricing.prem.f2': 'Recipes prioritizing items close to expiring',
      'pricing.prem.f3': 'Smart expiration alerts',
      'pricing.prem.f4': '30-day history',
      'pricing.prem.f5': 'Detailed personalized reports',
      'pricing.prem.f6': '24/7 priority support',

      // Testimonials
      'testimonials.title': 'TESTIMONIALS',
      'testimonials.subtitle': 'What Our Users Say',
      't1.text':
        '“I love that FreshSense not only helps us save money, it also reduces our environmental impact.”',
      't1.role': 'Restaurant Owner',
      't2.text':
        '“I work all day and used to let food go bad. Now FreshSense warns me before something expires, so I can use it in time.”',
      't2.role': 'User',
      't3.text':
        '“I’ve used FreshSense for a year. Food hits the sweet spot and I waste less.”',
      't3.role': 'Entrepreneur',

      // Contact
      'contact.title': 'CONTACT US',
      'contact.subtitle': 'Get in Touch with Us',
      'contact.name.ph': 'Name',
      'contact.lastname.ph': 'Last Name',
      'contact.email.ph': 'Email',
      'contact.message.ph': 'Message',
      'contact.submit': 'SUBMIT',

      // Footer
      'footer.blurb':
        'Fresh food, smart savings and less waste with FreshSense intelligent refrigeration.',
      'footer.contact.title': 'Contact Us',
      'footer.contact.text': 'Feel free to contact and reach us !!',
      'footer.contact.addr': 'Imaginary address',
      'footer.follow': 'FOLLOW US',
      'footer.rights': 'All rights reserved',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Term & Condition',
      'footer.faq': 'FAQ'
    },

    es: {
      // Navbar
      'nav.home': 'INICIO',
      'nav.about': 'NOSOTROS',
      'nav.benefits': 'BENEFICIOS',
      'nav.plans': 'PLANES',
      'nav.testimonials': 'TESTIMONIOS',
      'nav.contact': 'CONTACTO',
      'nav.language': 'IDIOMA',

      // Hero
      'hero.kicker': 'BIENVENIDOS AL FUTURO DE LOS ALIMENTOS FRESCOS',
      'hero.title': 'TRANSFORMA TU COCINA CON LA TECNOLOGÍA FRESHSENSE',
      'hero.lead':
        'Vive una refrigeración inteligente que aprende tus hábitos, conserva tus alimentos por más tiempo y te ayuda a ahorrar reduciendo desperdicios. Únete al futuro del almacenamiento inteligente.',
      'hero.cta.primary': 'EMPEZAR',
      'hero.cta.secondary': 'VER DEMO',
      'hero.scroll': 'DESCUBRE LAS FUNCIONES',

      // How it works
      'works.title': '¿CÓMO FUNCIONA FRESHSENSE?',
      'works.step1.title': 'PASO 1: Coloca el sensor',
      'works.step1.text':
        'Instala el dispositivo FreshSense dentro de tu refrigeradora. Empezará a medir temperatura, humedad y gas etileno al instante.',
      'works.step2.title': 'PASO 2: Datos en tiempo real',
      'works.step2.text':
        'FreshSense envía datos en vivo a tu panel personal. Revisa la frescura de tus alimentos cuando quieras.',
      'works.step3.title': 'PASO 3: Alertas inteligentes',
      'works.step3.text':
        'Recibe alertas cuando un alimento esté por malograrse. Úsalo a tiempo y ahorra dinero.',
      'works.more': 'Saber más',

      // Benefits
      'benefits.title': 'BENEFICIOS',
      'benefits.subtitle': 'Por qué te encantará FreshSense',
      'benefits.b1.title': 'Ahorra dinero',
      'benefits.b1.text':
        'Reduce el desperdicio y ahorra en tus compras con seguimiento de caducidad',
      'benefits.b2.title': 'Menos desperdicio',
      'benefits.b2.text':
        'Recibe alertas antes de que se malogren y contribuye a un futuro sostenible',
      'benefits.b3.title': 'Recetas inteligentes',
      'benefits.b3.text':
        'Obtén recetas personalizadas según tus ingredientes disponibles',
      'benefits.b4.title': 'Controla tus alimentos',
      'benefits.b4.text':
        'Monitorea la frescura y recibe actualizaciones en tiempo real',

      // Pricing
      'pricing.title': 'PLANES',
      'pricing.subtitle': 'Planes simples para cada hogar',
      'pricing.perMonth': '/MES',
      'pricing.signup': 'REGISTRARME',

      'pricing.basic.f1': '1 dispositivo',
      'pricing.basic.f2': 'Monitoreo de temperatura, humedad y gas etileno',
      'pricing.basic.f3': 'Alertas de descomposición',
      'pricing.basic.f4': 'Historial de 7 días',
      'pricing.basic.f5': 'Panel web con estado general de alimentos',
      'pricing.basic.f6': 'Soporte técnico estándar',

      'pricing.std.f1': '2 dispositivos FreshSense',
      'pricing.std.f2': 'Registro de inventario automático',
      'pricing.std.f3': 'Alertas inteligentes de caducidad',
      'pricing.std.f4': 'Recetas sugeridas según los alimentos',
      'pricing.std.f5': 'Historial de 30 días',
      'pricing.std.f6': 'Reportes mensuales de ahorro',
      'pricing.std.f7': 'Estadísticas detalladas y gráficas',

      'pricing.prem.f1': 'Dispositivos ilimitados',
      'pricing.prem.f2': 'Recetas que priorizan ingredientes próximos a vencer',
      'pricing.prem.f3': 'Alertas inteligentes de caducidad',
      'pricing.prem.f4': 'Historial de 30 días',
      'pricing.prem.f5': 'Reportes detallados personalizados',
      'pricing.prem.f6': 'Soporte prioritario 24/7',

      // Testimonials
      'testimonials.title': 'TESTIMONIOS',
      'testimonials.subtitle': 'Lo que dicen nuestros usuarios',
      't1.text':
        '«Me encanta que FreshSense no solo nos ayuda a ahorrar dinero, también reduce nuestro impacto ambiental.»',
      't1.role': 'Dueño de restaurante',
      't2.text':
        '«Trabajo todo el día y antes se me echaban a perder los alimentos. Ahora FreshSense me avisa antes de que venzan y los aprovecho a tiempo.»',
      't2.role': 'Usuario',
      't3.text':
        '«Uso FreshSense hace un año; me encanta. Aprovecho los alimentos a su mejor punto y desperdicio menos.»',
      't3.role': 'Emprendedor',

      // Contact
      'contact.title': 'CONTÁCTANOS',
      'contact.subtitle': 'Ponte en contacto con nosotros',
      'contact.name.ph': 'Nombre',
      'contact.lastname.ph': 'Apellido',
      'contact.email.ph': 'Correo',
      'contact.message.ph': 'Mensaje',
      'contact.submit': 'ENVIAR',

      // Footer
      'footer.blurb':
        'Comida fresca, ahorro inteligente y menos desperdicio con la refrigeración inteligente de FreshSense.',
      'footer.contact.title': 'Contáctanos',
      'footer.contact.text': '¡No dudes en escribirnos!',
      'footer.contact.addr': 'Dirección imaginaria',
      'footer.follow': 'SÍGUENOS',
      'footer.rights': 'Todos los derechos reservados',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos y Condiciones',
      'footer.faq': 'Preguntas Frecuentes'
    }
  };

  /*** Helpers ***/
  const getLang = () => {
    const saved = localStorage.getItem(KEY);
    if (SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || DEFAULT).slice(0, 2);
    return SUPPORTED.includes(nav) ? nav : DEFAULT;
  };

  const t = (key, lang) => dict[lang]?.[key] ?? dict[DEFAULT]?.[key] ?? '';

  const apply = (lang) => {
    // texto
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (val !== '') el.textContent = val;
    });
    // atributos (placeholder, title, aria-label…)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      (el.getAttribute('data-i18n-attr') || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .forEach(attr => {
          const k = attr === 'placeholder' ? key + '.ph' : key;
          const val = t(k, lang);
          if (val !== '') el.setAttribute(attr, val);
        });
    });
  };

  const setLang = (lang) => {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;
    localStorage.setItem(KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    apply(lang);
    const sel = document.getElementById('lang-switch');
    if (sel && sel.value !== lang) sel.value = lang;
  };

  // Export pequeñito por si otros scripts lo necesitan
  window.I18N = { setLang, getLang, t };

  /*** Init ***/
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    setLang(lang);

    const sel = document.getElementById('lang-switch');
    if (sel) {
      sel.value = lang;
      sel.addEventListener('change', e => setLang(e.target.value));
    }
  });
})();
