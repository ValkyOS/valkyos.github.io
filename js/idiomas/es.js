window.VALKYOS_TEXTO_ES = {
  meta: {
    titulo: "ValkyOS",
    descripcion: "ValkyOS: Android 17 con privacidad de verdad, Google Play opcional y aislado, para teléfonos con LineageOS 24."
  },
  nav: {
    inicio: "Inicio",
    funciones: "Funciones",
    acerca: "Acerca de",
    apps: "Apps",
    descargas: "Descargas",
    instalar: "Instalar",
    compilar: "Compilar",
    limitaciones: "Limitaciones",
    faq: "FAQ",
    creditos: "Créditos",
    apoyar: "Apoyar"
  },
  inicio: {
    frase: "Android 17 con privacidad de verdad. Google Play opcional y aislado.",
    linea: "Android 17 · Google Play aislado · Código abierto",
    descargar: "Descargar",
    compilar: "Compilar"
  },
  funciones: {
    titulo: "Funciones",
    sub: "Privacidad y control desde el primer arranque.",
    items: [
      { t: "Google Play aislado", d: "Play Store y Play Services corren como apps normales, sin privilegios de sistema (GmsCompat)." },
      { t: "Contact Scopes", d: "Elegís qué contactos puede ver cada app, en vez de darle todos." },
      { t: "Storage Scopes", d: "Elegís qué fotos y archivos puede ver cada app; lo que crea, lo sigue viendo." },
      { t: "Permiso de Sensores", d: "Un permiso por app para acelerómetro, giroscopio, brújula y barómetro." },
      { t: "Vanadium", d: "Navegador y WebView de GrapheneOS, endurecidos, en lugar de los de LineageOS." },
      { t: "Hora por HTTPS", d: "La hora se pide por HTTPS a time.grapheneos.org, sin NTP ni servidores de Google." },
      { t: "MAC aleatoria", d: "Una dirección distinta en cada conexión Wi-Fi, sin mandar el nombre del equipo." },
      { t: "GPS asistido sin Google", d: "El GPS asistido (SUPL) pasa por el intermediario de GrapheneOS." },
      { t: "Reinicio automático", d: "Si el teléfono pasa 8 horas bloqueado, se reinicia y vuelve al estado cifrado." },
      { t: "Relojes de la pantalla de bloqueo", d: "67 estilos de crDroid con selector y vistas previas." },
      { t: "Firmada con tus llaves", d: "En los teléfonos que lo permiten, el bootloader se puede volver a bloquear con tu propia llave." }
    ]
  },
  acerca: {
    titulo: "Acerca de",
    sub: "Qué es ValkyOS y por qué existe.",
    bloques: [
      { t: "Qué es", d: "Un sistema enfocado en privacidad y seguridad que permite usar Google Play sin darle privilegios de sistema. Existe para tener las apps de Google sin entregarle el teléfono." },
      { t: "En qué se basa", d: "En LineageOS 24 (Android 17). De GrapheneOS toma Google Play aislado, Contact y Storage Scopes, el permiso de Sensores, Vanadium, la hora por HTTPS, la MAC aleatoria por conexión y el GPS asistido sin Google. De crDroid, los relojes de la pantalla de bloqueo y mejoras de rendimiento." },
      { t: "Qué agrega ValkyOS", d: "La integración de todo en una sola ROM y lo propio: la sección ValkyOS en Ajustes, la personalización (nombre, logos, fondos) y la firma con llaves propias." },
      { t: "Para qué teléfonos", d: "Para cualquier teléfono con árbol, kernel y archivos del fabricante funcionando en LineageOS 24. <a href=\"#compilar\">Compilar</a> explica cómo." },
      { t: "Quién la hace", d: "Creada por dvy-jp, dedicada a Valky. Proyecto independiente, sin relación con LineageOS, GrapheneOS, crDroid, Motorola ni Google." }
    ]
  },
  apps: {
    titulo: "Apps",
    sub: "Todas las apps de GrapheneOS se instalan desde su App Store, que ya viene incluida en la ROM.",
    nota: "La App Store de GrapheneOS viene incluida. Desde ahí se instalan:",
    items: ["Play Store", "Play Services", "Cámara", "Visor de PDF"]
  },
  capturas: {
    titulo: "Capturas",
    sub: "La ROM en el teléfono."
  },
  descargas: {
    titulo: "Descargas",
    sub: "Por dispositivo. Hoy hay uno, como cualquier otro teléfono.",
    proximamente: "Próximamente",
    mantenido: "Mantenido por",
    agregar: "¿Querés agregar tu teléfono? <a href=\"#compilar\">Compilar</a> o <a href=\"https://github.com/ValkyOS/android\" target=\"_blank\" rel=\"noopener\">la guía para mantenedores</a>.",
    version: "Versión",
    fecha: "Fecha",
    tamano: "Tamaño",
    sha: "SHA-256",
    descargar: "Descargar",
    copiar: "Copiar",
    copiado: "Copiado"
  },
  instalar: {
    titulo: "Instalar",
    sub: "Igual que LineageOS en tu teléfono.",
    aviso: "Se borran todos los datos del teléfono.",
    texto: "Seguí la guía de LineageOS o la de quien mantiene tu dispositivo. El ZIP se instala desde el recovery, igual que cualquier ROM de LineageOS.",
    nota: "Google Play no viene instalado: se instala desde la App Store de GrapheneOS."
  },
  compilar: {
    titulo: "Compilar",
    sub: "ValkyOS se puede compilar para cualquier teléfono.",
    requisitos: "Necesitás árbol, kernel y archivos del fabricante que funcionen en LineageOS 24, en una lista de <code>local_manifests</code>.",
    pasos: [
      { t: "Preparar la carpeta", c: "mkdir -p ~/valkyos && cd ~/valkyos" },
      { t: "Bajar el manifiesto de ValkyOS", c: "repo init -u https://github.com/ValkyOS/android -b 17 --git-lfs" },
      { t: "Bajar la lista del teléfono ANTES del primer sync (ejemplo: eqe)", c: "git clone https://github.com/dvy-jp/local_manifests -b valkyos-17 .repo/local_manifests" },
      { t: "Sincronizar una sola vez", c: "repo sync -c -j8" },
      { t: "Compilar", c: "source build/envsetup.sh\nbrunch eqe" }
    ],
    nota: "Cambiá la lista del eqe por la de tu teléfono y <code>brunch eqe</code> por el tuyo. Guía completa: <a href=\"https://github.com/ValkyOS/android\" target=\"_blank\" rel=\"noopener\">README del manifiesto</a>."
  },
  limitaciones: {
    titulo: "Limitaciones",
    sub: "Sin promesas de más.",
    items: [
      { t: "Play Integrity", d: "No está prometido. Las apps que lo exigen pueden no funcionar." },
      { t: "Hardware", d: "StrongBox y el bloqueo del bootloader dependen del teléfono." },
      { t: "Versiones de prueba", d: "Las versiones actuales son de prueba." }
    ]
  },
  faq: {
    titulo: "Preguntas frecuentes",
    sub: "",
    items: [
      { q: "¿Qué teléfonos soporta?", a: "Cualquiera con árbol, kernel y archivos del fabricante funcionando en LineageOS 24." },
      { q: "¿En qué se basa ValkyOS?", a: "LineageOS 24 (Android 17), con funciones portadas de GrapheneOS y crDroid." },
      { q: "¿Google Play funciona?", a: "Sí. Play Store y Play Services corren aislados, como apps normales, y se instalan desde la App Store de GrapheneOS." },
      { q: "¿Play Integrity está garantizado?", a: "No. No se falsifica. Las apps que lo exigen pueden no funcionar." },
      { q: "¿Tiene StrongBox?", a: "Depende del teléfono. ValkyOS no lo anuncia." },
      { q: "¿Puedo bloquear el bootloader?", a: "En los teléfonos que lo permiten, con tu propia llave AVB." },
      { q: "¿Cómo se actualiza?", a: "Instalando el ZIP nuevo desde el recovery. Todavía no hay servidor de actualizaciones." },
      { q: "¿Qué apps trae?", a: "Las de LineageOS y Android, más Vanadium y la App Store de GrapheneOS. El resto se instala desde la App Store." },
      { q: "¿Es gratis?", a: "Sí, es un proyecto personal sin fines de lucro. Si te sirve, podés apoyarlo con Ko-fi." }
    ]
  },
  creditos: {
    titulo: "Créditos",
    sub: "Esto se apoya en trabajo ajeno.",
    items: [
      { n: "LineageOS", d: "La base del sistema." },
      { n: "GrapheneOS", d: "GmsCompat y las funciones de privacidad." },
      { n: "crDroid", d: "Ideas y código de algunas funciones, como los relojes de la pantalla de bloqueo y el rendimiento." }
    ],
    aviso: "ValkyOS es un proyecto independiente. No está afiliado ni avalado por LineageOS, GrapheneOS, crDroid, Motorola ni Google. No se usan sus logos."
  },
  apoyar: {
    titulo: "Apoyar",
    texto: "ValkyOS es gratis y sin fines de lucro. Si te sirve, podés ayudar con los servidores de compilación.",
    kofi: "Ko-fi",
    creador: "Creado por dvy-jp",
    dedicada: "Dedicada a Valky."
  },
  pie: {
    github: "GitHub",
    telegram: "Telegram",
    licencia: "Licencia",
    aviso: "Proyecto personal, sin fines de lucro."
  }
};
