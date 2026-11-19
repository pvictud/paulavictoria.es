/* ===========================================================
   CONTENIDO DEL PORTFOLIO
   - Imágenes: nombre del archivo en assets/img sin ".webp"
   - Vídeos:   "v:nombre" → assets/video/nombre.mp4 (+ póster .webp)
   =========================================================== */
const seq = (p, n) => Array.from({ length: n }, (_, i) => `${p}-${i + 1}`);

window.CASES = [
  {
    id: 'spotter', title: 'Spotter', client: 'Spotter App España', year: '2022 — hoy',
    cats: ['marca', 'rrss', 'video', 'web'], tags: 'Fundadora · Marca · Growth · Contenido',
    cover: 'sp-nueva-1', hero: ['sp-que-1', 'me-spotter', 'sp-guia-1'], accent: '#e3262b',
    lead: 'Fundé Spotter, una app para encontrar compañeros de entrenamiento y crear comunidad deportiva. Desde el primer día llevo la marca, el producto, el contenido y la captación de usuarios.',
    meta: [['Rol', 'Fundadora y responsable de marketing'], ['Sector', 'App / Fitness / Comunidad'], ['Servicios', 'Identidad, propuesta de valor, contenido, reels, web, lanzamiento'], ['Web', '<a href="https://spotterapp.es/" target="_blank" rel="noopener">spotterapp.es ↗</a>']],
    blocks: [
      { t: 'text', h: 'El reto', p: 'Entrenar solo es una de las razones más comunes para dejar el deporte. Spotter tenía que conectar a personas que no se conocen, y para eso necesitaba algo más que una buena app: una marca cercana, con humor y en la que se pudiera confiar.' },
      { t: 'text', h: 'El enfoque', p: 'Creé una identidad oscura y enérgica, con el rojo como color de acción. El lema “Entrena. Conecta. Avanza.” resume la promesa. El contenido mezcla carruseles educativos, humor de gimnasio y reels con creadoras reales. Cada actualización de la app se convierte en una campaña con teaser, revelación y llamada a actualizar.' },
      { t: 'carousel', title: 'Carrusel — ¿Sabes qué es un spotter?', items: seq('sp-que', 7) },
      { t: 'carousel', title: 'Carrusel — Guía de supervivencia', items: seq('sp-guia', 7) },
      { t: 'stories', title: 'Reels & stories', items: ['v:sp-empezar', 'v:sp-gimnasio', 'v:sp-motivacion', 'v:sp-gymsisters', 'v:sp-montanejos', 'v:sp-youlove', 'v:sp-tiktok'] },
      { t: 'carousel', title: 'Campaña nueva versión — teaser', items: seq('sp-teaser', 5) },
      { t: 'carousel', title: 'Campaña nueva versión — revelación', items: seq('sp-nueva', 6) },
      { t: 'carousel', title: 'Actualización: filtros, historias y calendario', items: seq('sp-filtro', 7) },
      { t: 'stories', title: 'Stories de producto y comunidad', items: [...seq('sp-story', 7), 'v:sp-nueva'] },
      { t: 'carousel', title: 'Tipos de personas que te encuentras en el gym', items: seq('sp-tipos', 6) },
      { t: 'carousel', title: 'Conoce al equipo', items: seq('sp-equipo', 5) },
      { t: 'grid', cols: 3, title: 'Lanzamiento iPhone Duo & Halloween', items: ['sp-duo-1', 'sp-duo-2', 'sp-duo-3', 'sp-hallo-1', 'sp-hallo-2', 'sp-hallo-3'] },
      { t: 'text', h: 'Nuevo logo 2026', p: 'Rediseñé el logotipo para la nueva etapa de la app: un pin de ubicación con un disco de pesas y un brazo en tensión, y una tipografía más redondeada y cercana. Tiene versiones para fondo claro y oscuro, icono de app y aplicaciones como el banner de LinkedIn.' },
      { t: 'grid', cols: 3, items: ['sp-logo', 'sp-logo-dark', 'sp-logo-solo'] },
      { t: 'grid', cols: 1, items: ['sp-banner'] },
      { t: 'text', h: 'Evento de marca — The Match Afterwork', p: 'Una experiencia presencial junto a Makaliss para llevar la comunidad de Spotter del móvil a la vida real: sesión de entrenamiento, afterwork y networking.' },
      { t: 'grid', cols: 3, items: seq('sp-evento', 6) },
      { t: 'browser', img: 'sp-web', url: 'https://spotterapp.es/' },
    ]
  },
  {
    id: 'wonderskids', title: 'Wonders Kids', client: 'Wonders · Trabajo Fin de Máster', year: '2025',
    cats: ['marca', 'rrss', 'web', 'video'], tags: 'Nueva línea de negocio · Estrategia · E-commerce · Filtro AR',
    cover: 'wk-rrss-2', hero: ['wk-sens-1', 'wk-sens-2', 'wk-sens-3', 'wk-sens-4'], accent: '#ff6fa3',
    lead: 'Para mi Trabajo Fin de Máster creé Wonders Kids, una nueva línea de negocio de la marca de calzado Wonders: zapatillas sensoriales para niños de 1 a 5 años. Incluye el plan de marketing, el e-commerce, las redes sociales, la publicidad digital y un filtro interactivo de TikTok.',
    meta: [['Rol', 'Estrategia, marca, web y contenido'], ['Proyecto', 'TFM — Máster en Marketing y Comunicación Digital (UPV)'], ['Servicios', 'Investigación de mercados, plan de comunicación, e-commerce, SEO/SEM, social media, realidad aumentada'], ['Herramientas', 'WordPress, Elementor, WooCommerce, Yoast, Google Ads, Effect House']],
    blocks: [
      { t: 'text', h: 'La idea', p: 'La colección Sensaciones tiene cuatro líneas para estimular a los más pequeños mientras dan sus primeros pasos: Texturas, Sonidos, Luces y Recuerdos (kits de regalo). Cada línea tiene su propio claim y su propio color. Todo gira en torno a un vínculo emocional: madres, padres e hijos con zapatos a juego.' },
      { t: 'grid', cols: 4, items: ['wk-sens-1', 'wk-sens-2', 'wk-sens-3', 'wk-sens-4'] },
      { t: 'text', h: 'Investigación', p: 'Antes de definir la estrategia hice una encuesta a familias con hijos de 1 a 5 años. Solo el 10 % conocía Wonders, pero al 93 % le gustaba la idea de llevar calzado a juego con sus hijos, y la mitad se informaba sobre todo en redes sociales. Con esos datos definí el buyer persona, el posicionamiento y el peso de cada canal.' },
      { t: 'grid', cols: 4, items: ['wk-persona', 'wk-enc-1', 'wk-enc-2', 'wk-enc-3'] },
      { t: 'text', h: 'E-commerce', p: 'Diseñé y monté la tienda online en WordPress con Elementor y WooCommerce: home, página de inspiración, catálogo por colecciones, ficha de producto, carrito y versión móvil. El SEO on-page lo trabajé con Yoast.' },
      { t: 'video', src: 'wk-web', title: 'Recorrido por la web (a doble velocidad)' },
      { t: 'grid', cols: 2, items: ['wk-web-1', 'wk-web-2', 'wk-web-3', 'wk-web-4'] },
      { t: 'grid', cols: 4, items: ['wk-web-5', 'wk-web-6', 'wk-mob-1', 'wk-mob-2'] },
      { t: 'text', h: 'Redes sociales y filtro de TikTok', p: 'Planifiqué el calendario de Instagram, Facebook y TikTok y produje las piezas, también los vídeos con mi voz. Para que la marca se compartiera sola creé un filtro interactivo de TikTok, “¿Qué tipo de Sensación eres?”, que te asigna al azar una de las cuatro líneas y termina con una llamada a visitar la tienda.' },
      { t: 'stories', title: 'Filtro, TikTok y reels', items: ['v:wk-filtro', 'v:wk-tiktok', 'wk-rrss-1', 'wk-rrss-2'] },
      { t: 'grid', cols: 2, items: ['wk-rrss-3', 'wk-rrss-4'] },
      { t: 'text', h: 'Publicidad digital', p: 'Una campaña de búsqueda en Google Ads con palabras clave transaccionales y banners display en formatos estándar para la colección Texturas.' },
      { t: 'grid', cols: 2, items: ['wk-ban-2', 'wk-ban-1'] },
    ]
  },
  {
    id: 'camarote', title: 'Grupo Camarote', client: 'El Camarote · La Vela · Razza · Catedral', year: '2025 — 2026',
    cats: ['marca', 'rrss', 'video', 'print'], tags: 'Ocio nocturno · Restauración · 4 marcas',
    cover: 'razza-1', hero: ['razza-1', 'v:cat-teaser', 'cam-2', 'vela-5'], accent: '#d4a64a',
    lead: 'Fui la responsable de marketing de cuatro locales del grupo: un restaurante, una vinoteca y dos clubs. Llevé su presencia digital, su comunicación y su estrategia de marca, cada uno con su propia voz.',
    meta: [['Rol', 'Responsable de marketing'], ['Marcas', 'El Camarote de la Marina, La Vela del Camarote, Razza Clubbing, Catedral Club'], ['Servicios', 'Redes sociales, flyers, cartas, rebranding, reels, campañas'], ['Instagram', '<a href="https://www.instagram.com/razzaclubbing/" target="_blank" rel="noopener">Razza ↗</a> · <a href="https://www.instagram.com/catedral.vlc/" target="_blank" rel="noopener">Catedral ↗</a> · <a href="https://www.instagram.com/elcamarotedelamarina/" target="_blank" rel="noopener">El Camarote ↗</a>']],
    blocks: [
      { t: 'text', h: 'El reto', p: 'Cuatro públicos distintos dentro de un mismo grupo. Cada local necesitaba una imagen coherente y diferenciada, y cada semana había que llenar las sesiones con contenido nuevo.' },
      { t: 'text', h: 'Razza Clubbing — rebranding y noches temáticas', p: 'Vectoricé y actualicé el logotipo, creé un sistema de flyers por noche (Wild Wednesdays, Sin Tabú Fridays, Euphoria Saturdays) y diseñé visuales para las pantallas del club.' },
      { t: 'grid', cols: 3, items: ['razza-5', 'razza-6', 'razza-logo'] },
      { t: 'stories', items: ['razza-1', 'razza-2', 'razza-3', 'razza-4', 'v:razza-flyer', 'v:razza-reel'] },
      { t: 'video', src: 'razza-visuales', title: 'Visuales para las pantallas de Razza' },
      { t: 'text', h: 'Catedral Club — reapertura', p: 'Campaña de reapertura con teasers en stories (“Algo vuelve”), reels con música y flyers animados para cada noche de la semana.' },
      { t: 'stories', items: ['v:cat-algovuelve', 'v:cat-teaser', 'v:cat-reapertura', 'v:cat-flyer-mie', 'v:cat-flyer-vie'] },
      { t: 'text', h: 'El Camarote de la Marina', p: 'Flyers de sesiones con DJ, menús de Navidad y Nochevieja y promociones de temporada para el restaurante de la Marina de Valencia.' },
      { t: 'stories', items: ['cam-1', 'cam-2', 'v:cam-flyer-jue', 'v:cam-flyer-sab', 'cam-4', 'cam-5', 'cam-6'] },
      { t: 'grid', cols: 1, items: ['cam-3'] },
      { t: 'text', h: 'La Vela del Camarote — nueva carta', p: 'Una línea editorial sobria y elegante para la vinoteca: diseño de la carta, de la carta de vinos y del menú, posts de lanzamiento y plantillas de stories.' },
      { t: 'grid', cols: 4, items: ['vela-6', 'vela-7', 'vela-8', 'vela-9'] },
      { t: 'stories', items: ['vela-1', 'vela-2', 'vela-5', 'v:vela-reel'] },
      { t: 'grid', cols: 2, items: ['vela-3', 'vela-4'] },
    ]
  },
  {
    id: 'krysthaleco', title: 'Krysthaleco', client: 'Krysthaleco', year: '2025 — 2026',
    cats: ['rrss', 'web', 'marca'], tags: 'Industria · Horeca · B2B · Web',
    cover: 'krys-12', hero: ['krys-3', 'v:krys-2', 'krys-12', 'krys-10'], accent: '#c040ff',
    lead: 'Llevé el marketing de una empresa que fabrica vasos y copas reutilizables e irrompibles para hostelería y ocio nocturno. Mi objetivo era que un producto industrial resultara deseable.',
    meta: [['Rol', 'Responsable de marketing'], ['Sector', 'Industria / Hostelería / Ocio nocturno'], ['Servicios', 'Estrategia, redes, contenido, web WordPress, catálogos, ferias'], ['Web', '<a href="https://krysthaleco.com/" target="_blank" rel="noopener">krysthaleco.com ↗</a>']],
    blocks: [
      { t: 'text', h: 'El enfoque', p: 'Saqué el producto de la ficha técnica y lo llevé al lugar donde se usa: la barra, la terraza, el after. Las stories siguen un calendario semanal (los martes, “¿Sabías que…?”; los jueves, el producto; los fines de semana, ambiente) y la estética es de bebida premium.' },
      { t: 'stories', items: ['v:krys-2', ...seq('krys', 6), 'v:krys-3', ...seq('krys', 19).slice(6)] },
      { t: 'text', h: 'Web, catálogos y ferias', p: 'Diseñé y monté desde cero la web corporativa en WordPress, con contenidos pensados para el posicionamiento. También preparé catálogos, fichas de producto y materiales para ferias del sector horeca, donde además hice sorteos y acciones comerciales.' },
      { t: 'browser', img: 'krys-web', url: 'https://krysthaleco.com/' },
      { t: 'text', h: 'Feria HORECA Baleares — Ibiza 2025', p: 'Organicé de principio a fin la participación de la marca en la feria de hostelería de Baleares, del 23 al 26 de marzo. Me encargué del diseño del stand de 12 m² y de todo el material: lona, roll-up, flyers de las nuevas cubiteras y un cartel con QR. También preparé la campaña previa de invitaciones en Instagram y LinkedIn, una ruleta de premios en la web y un sorteo en el propio stand.' },
      { t: 'grid', cols: 3, items: ['hor-01', 'hor-equipo', 'hor-22'] },
      { t: 'stats', items: [['300–400', 'visitantes en el stand'], ['50', 'clientes potenciales'], ['30', 'contactos registrados'], ['6', 'distribuidores y colaboradores']] },
      { t: 'grid', cols: 5, title: 'Material físico — lona, roll-up, flyers de cubiteras y QR', items: ['hor-02', 'hor-03', 'hor-04', 'hor-05', 'hor-06'] },
      { t: 'stories', title: 'Campaña digital — invitaciones, cuenta atrás, ruleta y sorteo', items: ['hor-07', 'hor-08', 'hor-09', 'hor-10', 'hor-14', 'hor-15'] },
      { t: 'grid', cols: 3, items: ['hor-11', 'hor-12', 'hor-13'] },
      { t: 'grid', cols: 1, items: ['hor-19'] },
      { t: 'text', h: 'Informe y conclusiones', p: 'Al volver redacté el informe de la feria con el perfil de los visitantes, la demanda detectada, el análisis de la competencia, el coste total y las mejoras para próximas ediciones. Las novedades fueron lo que más interés despertó, sobre todo la cubitera pequeña. Para próximas ediciones propuse más interacción en el stand, colaboraciones con bodegas y regalos con el logo serigrafiado.' },
    ]
  },
  {
    id: 'universal', title: 'Universal de Suministro', client: 'Universal Group', year: '2025 — 2026',
    cats: ['web', 'print', 'video', 'marca'], tags: 'Fotovoltaica · B2B · Web multilingüe',
    cover: 'uni-5', hero: ['v:uni-energaia'], accent: '#6fb23e',
    lead: 'Marketing B2B para un fabricante de estructuras para instalaciones fotovoltaicas y agrivoltaicas. Mi trabajo era comunicar producto técnico a clientes profesionales de distintos mercados.',
    meta: [['Rol', 'Responsable de marketing'], ['Sector', 'Energía renovable / Industria'], ['Servicios', 'Web multilingüe, SEO/SEM, LinkedIn, prensa, catálogos, ferias, vídeo'], ['Web', '<a href="https://www.universal99.com/" target="_blank" rel="noopener">universal99.com ↗</a>']],
    blocks: [
      { t: 'text', h: 'El enfoque', p: 'Rediseñé la web desde cero en varios idiomas y la acompañé de campañas de publicidad digital, SEO, artículos de blog y prensa, y contenido para LinkedIn. En las ferias del sector energético preparé roll-ups, folletos, cartelería con QR y merchandising.' },
      { t: 'browser', img: 'uni-web', url: 'https://www.universal99.com/' },
      { t: 'video', src: 'uni-energaia', title: 'Vídeo corporativo — Energaïa' },
      { t: 'grid', cols: 3, items: ['uni-5', 'uni-3', 'uni-4'] },
      { t: 'grid', cols: 1, items: ['uni-1', 'uni-2'] },
      { t: 'grid', cols: 2, items: ['uni-6', 'uni-7'] },
    ]
  },
  {
    id: 'aroma', title: 'Aroma Café', client: 'Cafetería · Identidad visual', year: '2024',
    cats: ['marca', 'print'], tags: 'Logotipo · Identidad · Aplicaciones',
    cover: 'aroma-1', hero: ['aroma-1', 'aroma-logo', 'aroma-3'], accent: '#c9a97c',
    lead: 'Identidad visual para una cafetería: un logotipo de trazo continuo en el que la “a” de Aroma se convierte en una taza, una paleta cálida y sus aplicaciones en vaso, rótulo y banderola.',
    meta: [['Rol', 'Diseño de identidad'], ['Entregables', 'Logotipo, versiones de color, paleta, mock-ups'], ['Herramientas', 'Illustrator, Photoshop']],
    blocks: [
      { t: 'text', h: 'El concepto', p: 'Un solo trazo dibuja a la vez la letra “a” y una taza. La paleta (crema, café tostado y verde botella) se aleja del marrón de siempre y le da un aire de cafetería de especialidad.' },
      { t: 'grid', cols: 2, items: ['aroma-logo', 'aroma-5'] },
      { t: 'grid', cols: 1, items: ['aroma-4'] },
      { t: 'grid', cols: 3, title: 'Aplicaciones', items: ['aroma-1', 'aroma-2', 'aroma-3'] },
    ]
  },
  {
    id: 'apunt', title: 'À Punt Mèdia', client: 'Televisió pública valenciana', year: '2023',
    cats: ['video'], tags: 'Grafismo TV · Motion · Infografía',
    cover: 'v:apunt', accent: '#2ec4e6',
    lead: 'Prácticas como grafista en el área de meteorología de À Punt: infografías animadas, mapas y piezas para informativos en antena.',
    meta: [['Rol', 'Grafista (prácticas)'], ['Sector', 'Televisión / Informativos'], ['Herramientas', 'After Effects, Illustrator'], ['Piezas', 'Mapas, gráficos de datos, rótulos, fotos del tiempo']],
    blocks: [
      { t: 'video', src: 'apunt', title: 'Selección de grafismo meteorológico emitido' },
      { t: 'text', h: 'Lo que aprendí', p: 'Trabajar con plazos de informativo diario: convertir datos en una imagen que se entienda en segundos y respetar a la vez el libro de estilo de una cadena.' },
    ]
  },
  {
    id: 'aiguadolca', title: 'Aigua Dolça', client: 'Cortometraje documental · Menorca', year: '2026',
    cats: ['video'], tags: 'Sonido directo · Documental · Premio Biosfera 2026',
    cover: 'ad-2', hero: ['ad-1', 'ad-5', 'ad-6'], accent: '#3fc1b0',
    lead: 'Fui la técnica de sonido de Aigua Dolça, un cortometraje documental sobre el agua dulce en Menorca. La pieza ganó el Premio Biosfera 2026 en el Menorca Docfest.',
    meta: [['Rol', 'Técnica de sonido (sonidista)'], ['Formato', 'Cortometraje documental'], ['Premio', 'Premio Biosfera — Menorca Docfest 2026'], ['Rodaje', 'Menorca, febrero de 2026']],
    blocks: [
      { t: 'text', h: 'El rodaje', p: 'Me encargué del sonido directo durante el rodaje en la isla: entrevistas en interiores y exteriores, y ambientes naturales en el campo, el barranco y las huertas. En exteriores el reto era conseguir voces limpias con viento de fondo y grabar ambientes que ayudaran a contar la historia.' },
      { t: 'video', src: 'ad-sonido', title: 'Detrás de las cámaras — sonido directo' },
      { t: 'grid', cols: 3, items: ['ad-3', 'ad-4', 'ad-7'] },
      { t: 'grid', cols: 2, items: ['ad-2', 'ad-10'] },
      { t: 'grid', cols: 2, items: ['ad-8', 'ad-9'] },
    ]
  },
  {
    id: 'audiovisual', title: 'Vídeo & narrativa', client: 'Proyectos audiovisuales', year: '2021 — 2024',
    cats: ['video'], tags: 'Edición · Montaje · Etalonaje · Dirección',
    cover: 'v:venus-teaser', accent: '#ff7eb6',
    lead: 'Mi formación como comunicadora audiovisual: cortometraje, reportaje social, videoclip, spot institucional y promoción.',
    meta: [['Rol', 'Edición, montaje, etalonaje y audio'], ['Formatos', 'Corto, reportaje, videoclip, spot, teaser'], ['Nota', 'Fragmentos. Las piezas completas están en el portfolio extendido.']],
    blocks: [
      { t: 'video', src: 'venus-teaser', title: 'Venus FM — teaser del cortometraje' },
      { t: 'video', src: 'venus-corto', title: 'Venus FM — fragmento del cortometraje' },
      { t: 'grid', cols: 2, items: ['cartel-1', 'venus-ig'] },
      { t: 'video', src: 'openarms', title: 'Reportaje — Open Arms (fragmento)' },
      { t: 'video', src: 'howyoufeel', title: 'Videoclip “How You Feel” — edición y audio (fragmento)' },
      { t: 'video', src: 'valencia', title: 'Spot “El + valencià”' },
      { t: 'video', src: 'micrometraje', title: 'Micrometraje — grabación y etalonaje (fragmento)' },
      { t: 'video', src: 'mexico', title: 'Promoción universitaria — México (fragmento)' },
    ]
  },
  {
    id: 'carteleria', title: 'Cartelería & portadas', client: 'Música · Cultura · Instituciones', year: '2021 — 2023',
    cats: ['print'], tags: 'Cartel · Portada de disco · Editorial',
    cover: 'cd-2', hero: ['cd-1', 'cd-2', 'cd-4'], accent: '#9b5cff',
    lead: 'Carteles para el Ajuntament de Favara y otros proyectos culturales, y portadas de disco para artistas urbanos con una estética cruda y de alto contraste.',
    meta: [['Rol', 'Diseño gráfico e ilustración'], ['Clientes', 'Ajuntament de Favara, La Última Gota, Venus FM, proyectos musicales'], ['Herramientas', 'Photoshop, Illustrator']],
    blocks: [
      { t: 'text', h: 'Portadas de disco', p: 'Propuestas de portada para “Fuckturando” (Metrika), “Shadow Ban” (Orslok), “Sin faltar a la verdad” (Dellafuente) y “Twilight” (Rojuu ft. Saramalacara), presentadas en mock-up.' },
      { t: 'grid', cols: 4, items: ['cd-1', 'cd-2', 'cd-3', 'cd-4'] },
      { t: 'grid', cols: 2, items: ['cd-5', 'cd-6', 'cd-7', 'cd-8'] },
      { t: 'text', h: 'Carteles', p: 'Talleres y actividades municipales, merchandising de un cortometraje y una convocatoria de animadores 2D.' },
      { t: 'grid', cols: 4, items: ['cartel-3', 'cartel-4', 'cartel-5', 'cartel-6', 'cartel-1', 'cartel-2', 'cartel-7'] },
    ]
  },
  {
    id: 'identidad', title: 'Identidad & motion', client: 'Black Ice Brand · La Última Gota · 3D', year: '2021 — 2024',
    cats: ['marca', 'video', 'web'], tags: 'Logotipo · Branding · Animación 3D',
    cover: 'bib-1', hero: ['bib-1', 'v:reloj3d', 'bib-4'], accent: '#8fb8ff',
    lead: 'Black Ice Brand, mi propia marca de agencia; identidades para otros proyectos y experimentos de motion y animación 3D.',
    meta: [['Rol', 'Diseño de identidad, web y animación'], ['Proyectos', 'Black Ice Brand, La Última Gota, Spotter, Razza, Aroma Café, Wonders Kids'], ['Web', '<a href="http://blackicebrand.es/" target="_blank" rel="noopener">blackicebrand.es ↗</a>']],
    blocks: [
      { t: 'grid', cols: 2, items: ['bib-1', 'bib-2', 'bib-3', 'bib-4'] },
      { t: 'browser', img: 'bib-web', url: 'http://blackicebrand.es/' },
      { t: 'grid', cols: 5, title: 'Logotipos', items: ['logo-gota', 'sp-logo', 'razza-logo', 'aroma-logo', 'wk-logo'] },
      { t: 'text', h: 'Motion & 3D', p: 'Animación 3D (reloj de arena, personaje y la intro “The Unknown”) y styleframes de motion graphics.' },
      { t: 'video', src: 'unknown3d', title: 'The Unknown — animación 3D' },
      { t: 'grid', cols: 2, items: ['v:reloj3d', 'v:angry3d'] },
      { t: 'grid', cols: 1, items: ['styleframe'] },
      { t: 'text', h: 'Concepto web — TechCom Solutions', p: 'Diseño de landing, home y blog para una empresa tecnológica ficticia.' },
      { t: 'grid', cols: 1, items: ['techcom-1'] },
    ]
  },
];

window.REELS = [
  ['sp-empezar', 'Spotter', 'Reel — Si tuviera que empezar de cero'],
  ['sp-gimnasio', 'Spotter', 'Reel — Humor de gimnasio'],
  ['cat-teaser', 'Catedral Club', 'Teaser de reapertura'],
  ['krys-2', 'Krysthaleco', 'Story de producto'],
  ['sp-motivacion', 'Spotter', 'Reel — No necesitas motivación'],
  ['razza-flyer', 'Razza Clubbing', 'Flyer animado'],
  ['sp-gymsisters', 'Spotter', 'Reel con creadora'],
  ['cam-flyer-sab', 'El Camarote', 'Flyer de sesión'],
  ['vela-reel', 'La Vela del Camarote', 'Reel'],
  ['wk-filtro', 'Wonders Kids', 'Filtro AR de TikTok'],
  ['sp-montanejos', 'Spotter', 'Reel — Ruta Montanejos'],
  ['cat-algovuelve', 'Catedral Club', 'Story — Algo vuelve'],
  ['wk-tiktok', 'Wonders Kids', 'TikTok de lanzamiento'],
  ['krys-3', 'Krysthaleco', 'Story de producto'],
  ['sp-nueva', 'Spotter', 'Lanzamiento nueva versión'],
  ['razza-reel', 'Razza Clubbing', 'Reel de sesión'],
  ['cat-flyer-vie', 'Catedral Club', 'Flyer animado'],
];

window.FILMS = [
  ['venus-teaser', 'Venus FM', 'Teaser de cortometraje'],
  ['apunt', 'À Punt Mèdia', 'Grafismo meteorológico'],
  ['openarms', 'Open Arms', 'Reportaje'],
  ['uni-energaia', 'Universal', 'Vídeo corporativo'],
  ['howyoufeel', 'How You Feel', 'Videoclip'],
  ['razza-visuales', 'Razza Clubbing', 'Visuales de pantalla'],
  ['valencia', 'El + valencià', 'Spot'],
  ['unknown3d', 'The Unknown', 'Animación 3D'],
];

window.WEBS = [
  ['sp-web', 'Spotter', 'spotterapp.es', 'https://spotterapp.es/', 'Landing de producto · descarga de la app'],
  ['krys-web', 'Krysthaleco', 'krysthaleco.com', 'https://krysthaleco.com/', 'WordPress · Catálogo industrial'],
  ['uni-web', 'Universal de Suministro', 'universal99.com', 'https://www.universal99.com/', 'Wix · Multilingüe · SEO'],
  ['bib-web', 'Black Ice Brand', 'blackicebrand.es', 'http://blackicebrand.es/', 'HTML/CSS · Marca personal'],
];

window.SOCIAL = [
  ['Spotter', '@spotterapp_es', 'https://www.instagram.com/spotterapp_es/', 'Instagram · App fitness', 'sp-logo-solo'],
  ['Spotter', '@spotterapp_es', 'https://www.tiktok.com/@spotterapp_es', 'TikTok · App fitness', 'sp-logo-solo'],
  ['Razza Clubbing', '@razzaclubbing', 'https://www.instagram.com/razzaclubbing/', 'Instagram · Club', 'av-razza'],
  ['Catedral Club', '@catedral.vlc', 'https://www.instagram.com/catedral.vlc/', 'Instagram · Club', 'av-catedral'],
  ['El Camarote de la Marina', '@elcamarotedelamarina', 'https://www.instagram.com/elcamarotedelamarina/', 'Instagram · Restaurante', 'av-camarote'],
  ['La Vela del Camarote', 'Cuenta renombrada', '', 'Instagram · Vinoteca', 'av-vela'],
  ['Krysthaleco', '@krysthaleco', 'https://www.instagram.com/krysthaleco/', 'Instagram · Industria', 'av-krys'],
  ['Krysthaleco', 'LinkedIn', 'https://www.linkedin.com/company/krysthal-eco/', 'LinkedIn · B2B', 'av-krys'],
  ['Universal de Suministro', 'LinkedIn', 'https://www.linkedin.com/company/universaldesuministro/', 'LinkedIn · B2B', 'av-universal'],
];

window.TIMELINE = [
  ['2022 — hoy', 'Fundadora y responsable de marketing', 'Spotter App España'],
  ['2025 — 2026', 'Responsable de marketing', 'Krysthaleco'],
  ['2025 — 2026', 'Responsable de marketing', 'Universal de Suministro (Group)'],
  ['2025 — 2026', 'Responsable de marketing', 'Grupo Camarote'],
  ['2026', 'Técnica de sonido', 'Aigua Dolça (documental)'],
  ['2023', 'Grafista (prácticas)', 'À Punt Mèdia'],
  ['2023', 'Diseñadora gráfica', 'Universitat Politècnica de València'],
  ['2022', 'Diseñadora gráfica', 'Ajuntament de Favara'],
  ['2022', 'Diseñadora gráfica freelance', 'La Última Gota'],
];

window.EDUCATION = [
  ['2024 — 2025', 'Máster en Marketing y Comunicación Digital', 'Universitat Politècnica de València'],
  ['2019 — 2023', 'Grado en Comunicación Audiovisual', 'Universitat Politècnica de València'],
];

window.LANGUAGES = [
  ['Castellano', 'Nativo / experto', ''],
  ['Valenciano', 'Nativo / experto', ''],
  ['Inglés', 'Avanzado', ''],
  ['Alemán', 'Principiante', ''],
];

window.SKILLS = ['Estrategia de marketing', 'Branding', 'Redes sociales', 'Creación de contenido', 'Meta Ads', 'Google Ads', 'SEO', 'Google Analytics', 'Email marketing', 'Marketing B2B', 'Ferias y eventos', 'Edición de vídeo', 'Motion graphics', 'Diseño gráfico', 'Diseño web', 'WordPress / WooCommerce', 'Wix', 'HTML / CSS', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'DaVinci Resolve', 'Canva', 'CRM', 'Excel / Office', 'IA generativa'];
