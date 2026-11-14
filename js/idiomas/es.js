window.VALKYOS_TEXTO_ES = {
  meta: {
    titulo: "ValkyOS",
    descripcion: "ValkyOS: ROM Android 17 para el Motorola Edge 50 Pro, con privacidad de GrapheneOS."
  },
  nav: {
    inicio: "Inicio",
    funciones: "Funciones",
    apps: "Apps",
    descargas: "Descargas",
    instalar: "Instalar",
    compilar: "Compilar",
    faq: "FAQ",
    creditos: "Créditos",
    apoyar: "Apoyar"
  },
  inicio: {
    titulo: "ValkyOS",
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
      { t: "Bootloader bloqueable", d: "En el eqe se puede bloquear con una llave propia: solo arranca un sistema firmado por vos." }
    ]
  },
  apps: {
    titulo: "Apps",
    sub: "Todas las apps de GrapheneOS se instalan desde su App Store, que ya viene incluida en la ROM.",
    nota: "La App Store de GrapheneOS viene incluida. Desde ahí se instalan:",
    items: ["Play Store", "Play Services", "Cámara", "Visor de PDF", "Auditor"]
  },
  descargas: {
    titulo: "Descargas",
    sub: "Motorola Edge 50 Pro (eqe). La ROM se instala desde el recovery.",
    ejemplo: "EJEMPLO",
    ejemploNota: "Esto es un ejemplo de cómo se va a ver una descarga. Todavía no hay versiones publicadas.",
    version: "Versión",
    fecha: "Fecha",
    tamano: "Tamaño",
    sha: "SHA-256",
    descargar: "Descargar",
    sin: "Todavía no hay descargas publicadas.",
    error: "No se pudo cargar la lista de descargas.",
    copiar: "Copiar",
    copiado: "Copiado"
  },
  instalar: {
    titulo: "Instalar",
    sub: "Leé todo antes de empezar.",
    aviso: "Se borra todo lo que tengas en el teléfono. Hacé copia de seguridad y asegurate de tener el bootloader desbloqueado.",
    pasos: [
      "Hacé copia de seguridad de fotos, contactos y archivos.",
      "Desbloqueá el bootloader con el código de Motorola. Esto también borra todo.",
      "Flasheá el recovery de ValkyOS con <code>fastboot flash recovery</code>.",
      "Entrá al recovery y formateá los datos (factory reset).",
      "Instalá el ZIP de ValkyOS desde el recovery o por <code>adb sideload</code>.",
      "Reiniciá. El primer arranque tarda unos minutos."
    ],
    nota: "Google Play no viene instalado. Se instala desde la App Store de GrapheneOS.",
    avanzado: {
      titulo: "Avanzado: bloquear el bootloader con tu llave",
      aviso: "Solo si compilaste tu propia ROM con tu llave AVB. Un error acá deja el teléfono sin arrancar; para recuperarlo hay que desbloquear y se borra todo.",
      pasos: [
        "Generá tus llaves y compilá con <code>avb.pem</code> en <code>vendor/lineage-priv/keys</code>.",
        "Sacá la llave pública: <code>avbtool extract_public_key --key avb.pem --output avb_pkmd.bin</code>.",
        "Con el bootloader desbloqueado: <code>fastboot flash avb_custom_key avb_pkmd.bin</code>.",
        "Bloqueá: <code>fastboot oem lock</code>.",
        "Comprobá: <code>fastboot getvar securestate</code>."
      ],
      nota: "El número de rollback no se puede bajar: con el bootloader bloqueado no se instala una versión más vieja."
    }
  },
  compilar: {
    titulo: "Compilar",
    sub: "Los mismos comandos que usa el proyecto. Hacen falta las fuentes de tu teléfono.",
    pasos: [
      { t: "Preparar la carpeta", c: "mkdir -p ~/valkyos && cd ~/valkyos" },
      { t: "Bajar el manifiesto de ValkyOS", c: "repo init -u https://github.com/ValkyOS/android -b 17 --git-lfs" },
      { t: "Sincronizar", c: "repo sync -c -j8" },
      { t: "Agregar las piezas del teléfono (ejemplo: eqe)", c: "git clone https://github.com/dvy-jp/local_manifests -b valkyos-17 .repo/local_manifests\nrepo sync -c -j8" },
      { t: "Compilar", c: "source build/envsetup.sh\nbrunch eqe" }
    ],
    nota: "Para otro teléfono, cambiá la lista del eqe por la de tu dispositivo. Las llaves propias van en <code>vendor/lineage-priv/keys</code>; sin ellas la ROM sale con llaves de prueba."
  },
  faq: {
    titulo: "Preguntas frecuentes",
    sub: "",
    items: [
      { q: "¿En qué se basa ValkyOS?", a: "En LineageOS 24.0 (Android 17), con funciones de privacidad portadas de GrapheneOS." },
      { q: "¿Google Play funciona?", a: "Sí. Play Store y Play Services corren aislados, como apps normales, y se instalan desde la App Store de GrapheneOS." },
      { q: "¿Play Integrity está garantizado?", a: "No. No se falsifica. Las apps que lo exigen pueden no funcionar." },
      { q: "¿Tiene StrongBox?", a: "El Motorola Edge 50 Pro no lo tiene y la ROM no lo anuncia." },
      { q: "¿Puedo bloquear el bootloader?", a: "En el eqe sí, con tu propia llave AVB. En otros teléfonos depende de si el bootloader acepta una llave propia." },
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
    sponsor: "GitHub Sponsor",
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
