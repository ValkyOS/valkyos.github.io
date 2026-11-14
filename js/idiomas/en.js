window.VALKYOS_TEXTO_EN = {
  meta: {
    titulo: "ValkyOS",
    descripcion: "ValkyOS: Android 17 with real privacy, optional sandboxed Google Play, for phones running LineageOS 24."
  },
  nav: {
    inicio: "Home",
    funciones: "Features",
    acerca: "About",
    apps: "Apps",
    descargas: "Downloads",
    instalar: "Install",
    compilar: "Build",
    limitaciones: "Limitations",
    faq: "FAQ",
    creditos: "Credits",
    apoyar: "Support"
  },
  inicio: {
    frase: "Android 17 with real privacy. Google Play optional and sandboxed.",
    linea: "Android 17 · Sandboxed Google Play · Open source",
    descargar: "Download",
    compilar: "Build"
  },
  funciones: {
    titulo: "Features",
    sub: "Privacy and control from the first boot.",
    items: [
      { t: "Sandboxed Google Play", d: "Play Store and Play services run as regular apps, without system privileges (GmsCompat)." },
      { t: "Contact Scopes", d: "Choose which contacts each app can see, instead of handing over all of them." },
      { t: "Storage Scopes", d: "Choose which photos and files each app can see; files it creates stay visible." },
      { t: "Sensors permission", d: "A per-app permission for the accelerometer, gyroscope, compass and barometer." },
      { t: "Vanadium", d: "GrapheneOS hardened browser and WebView, instead of the LineageOS ones." },
      { t: "HTTPS time", d: "Time is fetched over HTTPS from time.grapheneos.org, with no NTP or Google servers." },
      { t: "Random MAC", d: "A different address on every Wi-Fi connection, without sending the device name." },
      { t: "Assisted GPS without Google", d: "Assisted GPS (SUPL) goes through the GrapheneOS proxy." },
      { t: "Automatic reboot", d: "After eight hours locked, the phone reboots and returns to its encrypted state." },
      { t: "Lock screen clocks", d: "67 crDroid styles with a picker and live previews." },
      { t: "Signed with your keys", d: "On phones that allow it, the bootloader can be locked again with your own key." }
    ]
  },
  acerca: {
    titulo: "About",
    sub: "What ValkyOS is and why it exists.",
    bloques: [
      { t: "What it is", d: "A privacy and security focused system that lets you use Google Play without giving it system privileges. It exists so you can have Google's apps without handing over your phone." },
      { t: "What it is based on", d: "LineageOS 24 (Android 17). From GrapheneOS it takes sandboxed Google Play, Contact and Storage Scopes, the Sensors permission, Vanadium, HTTPS time, random MAC per connection and assisted GPS without Google. From crDroid, the lock screen clocks and performance improvements." },
      { t: "What ValkyOS adds", d: "The integration of all of it into a single ROM, plus its own: the ValkyOS section in Settings, personalization (name, logos, wallpapers) and signing with your own keys." },
      { t: "Which phones", d: "Any phone with a device tree, kernel and vendor files working on LineageOS 24. <a href=\"#compilar\">Build</a> explains how." },
      { t: "Who makes it", d: "Created by dvy-jp, dedicated to Valky. An independent project, not related to LineageOS, GrapheneOS, crDroid, Motorola or Google." }
    ]
  },
  apps: {
    titulo: "Apps",
    sub: "All GrapheneOS apps are installed from its App Store, which already comes included in the ROM.",
    nota: "The GrapheneOS App Store is included. From it you install:",
    items: ["Play Store", "Play Services", "Camera", "PDF Viewer"]
  },
  capturas: {
    titulo: "Screenshots",
    sub: "The ROM on the phone."
  },
  descargas: {
    titulo: "Downloads",
    sub: "By device. There is one today, like any other phone.",
    proximamente: "Coming soon",
    mantenido: "Maintained by",
    agregar: "Want to add your phone? <a href=\"#compilar\">Build</a> or read <a href=\"https://github.com/ValkyOS/android\" target=\"_blank\" rel=\"noopener\">the maintainer guide</a>.",
    version: "Version",
    fecha: "Date",
    tamano: "Size",
    sha: "SHA-256",
    descargar: "Download",
    copiar: "Copy",
    copiado: "Copied"
  },
  instalar: {
    titulo: "Install",
    sub: "Same as LineageOS on your phone.",
    aviso: "All data on the phone is erased.",
    texto: "Follow the LineageOS guide or the one from whoever maintains your device. The ZIP is installed from recovery, just like any LineageOS ROM.",
    nota: "Google Play is not included: install it from the GrapheneOS App Store."
  },
  compilar: {
    titulo: "Build",
    sub: "ValkyOS can be built for any phone.",
    requisitos: "You need a device tree, kernel and vendor files that work on LineageOS 24, in a <code>local_manifests</code> list.",
    pasos: [
      { t: "Prepare the folder", c: "mkdir -p ~/valkyos && cd ~/valkyos" },
      { t: "Fetch the ValkyOS manifest", c: "repo init -u https://github.com/ValkyOS/android -b 17 --git-lfs" },
      { t: "Fetch the phone's list BEFORE the first sync (example: eqe)", c: "git clone https://github.com/dvy-jp/local_manifests -b valkyos-17 .repo/local_manifests" },
      { t: "Sync once", c: "repo sync -c -j8" },
      { t: "Build", c: "source build/envsetup.sh\nbrunch eqe" }
    ],
    nota: "Replace the eqe list with your phone's and <code>brunch eqe</code> with yours. Full guide: <a href=\"https://github.com/ValkyOS/android\" target=\"_blank\" rel=\"noopener\">manifest README</a>."
  },
  limitaciones: {
    titulo: "Limitations",
    sub: "No overpromising.",
    items: [
      { t: "Play Integrity", d: "Not promised. Apps that require it may refuse to run." },
      { t: "Hardware", d: "StrongBox and bootloader locking depend on the phone." },
      { t: "Test versions", d: "Current versions are test builds." }
    ]
  },
  faq: {
    titulo: "Frequently asked questions",
    sub: "",
    items: [
      { q: "Which phones are supported?", a: "Any phone with a device tree, kernel and vendor files working on LineageOS 24." },
      { q: "What is ValkyOS based on?", a: "LineageOS 24 (Android 17), with features ported from GrapheneOS and crDroid." },
      { q: "Does Google Play work?", a: "Yes. Play Store and Play services run sandboxed as regular apps, and are installed from the GrapheneOS App Store." },
      { q: "Is Play Integrity guaranteed?", a: "No. It is not spoofed. Apps that require it may refuse to run." },
      { q: "Does it have StrongBox?", a: "It depends on the phone. ValkyOS does not announce it." },
      { q: "Can I lock the bootloader?", a: "On phones that allow it, with your own AVB key." },
      { q: "How are updates installed?", a: "By flashing the new ZIP from recovery. There is no update server yet." },
      { q: "Which apps are included?", a: "The LineageOS and Android apps, plus Vanadium and the GrapheneOS App Store. The rest is installed from the App Store." },
      { q: "Is it free?", a: "Yes, it is a personal non-commercial project. If it helps you, you can support it with Ko-fi." }
    ]
  },
  creditos: {
    titulo: "Credits",
    sub: "This rests on other people's work.",
    items: [
      { n: "LineageOS", d: "The base of the system." },
      { n: "GrapheneOS", d: "GmsCompat and the privacy features." },
      { n: "crDroid", d: "Ideas and code for some features, like the lock screen clocks and performance fixes." }
    ],
    aviso: "ValkyOS is an independent project. It is not affiliated with or endorsed by LineageOS, GrapheneOS, crDroid, Motorola or Google. Their logos are not used."
  },
  apoyar: {
    titulo: "Support",
    texto: "ValkyOS is free and non-commercial. If it is useful to you, you can help with the build servers.",
    kofi: "Ko-fi",
    creador: "Created by dvy-jp",
    dedicada: "Dedicated to Valky."
  },
  pie: {
    github: "GitHub",
    telegram: "Telegram",
    licencia: "License",
    aviso: "Personal, non-commercial project."
  }
};
