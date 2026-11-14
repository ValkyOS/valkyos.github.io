window.VALKYOS_TEXTO_EN = {
  meta: {
    titulo: "ValkyOS",
    descripcion: "ValkyOS: LineageOS 24 / Android 17 with GrapheneOS privacy features, for the Motorola Edge 50 Pro."
  },
  nav: {
    inicio: "Home",
    funciones: "Features",
    dispositivos: "Devices",
    descargas: "Downloads",
    instalacion: "Install",
    compilar: "Build",
    limitaciones: "Limitations",
    creditos: "Credits",
    apoyar: "Support"
  },
  inicio: {
    titulo: "ValkyOS",
    frase: "LineageOS 24 / Android 17 with GrapheneOS privacy features, for the Motorola Edge 50 Pro.",
    descargar: "Download",
    compilar: "Build"
  },
  funciones: {
    titulo: "Features",
    sub: "The important parts, without the fluff.",
    items: [
      { t: "Sandboxed Google Play", d: "Play Store and Play services run as regular apps, without system privileges (GmsCompat)." },
      { t: "Contact Scopes", d: "Choose which contacts each app can see, instead of handing over all of them." },
      { t: "Storage Scopes", d: "Choose which photos and files each app can see; files it creates stay visible." },
      { t: "Sensors permission", d: "A per-app permission for the accelerometer, gyroscope, compass and barometer." },
      { t: "Vanadium and App Store", d: "GrapheneOS browser and WebView, plus the App Store to install Play and GrapheneOS apps." },
      { t: "HTTPS time", d: "Time is fetched over HTTPS from time.grapheneos.org, with no NTP or Google servers." },
      { t: "Random MAC", d: "A different address on every Wi-Fi connection, without sending the device name." },
      { t: "Assisted GPS without Google", d: "Assisted GPS (SUPL) goes through the GrapheneOS proxy." },
      { t: "Automatic reboot", d: "After eight hours locked, the phone reboots and returns to its encrypted state." },
      { t: "Lock screen clocks", d: "67 crDroid styles with a picker and live previews." },
      { t: "Lockable bootloader", d: "On the eqe it can be locked with your own key: only a system signed by you boots." }
    ]
  },
  dispositivos: {
    titulo: "Devices",
    sub: "One for now. The plan is to add more.",
    mantenido: "Maintained by",
    agregar: "Have another phone? It can be added once its tree is ready."
  },
  descargas: {
    titulo: "Downloads",
    sub: "The ROM is installed from recovery.",
    ejemplo: "EXAMPLE",
    ejemploNota: "This shows how a download will look. No versions have been published yet.",
    version: "Version",
    fecha: "Date",
    tamano: "Size",
    sha: "SHA-256",
    descargar: "Download",
    sin: "No downloads published yet.",
    error: "Could not load the download list.",
    copiar: "Copy",
    copiado: "Copied"
  },
  instalacion: {
    titulo: "Install",
    sub: "Read everything before you start.",
    aviso: "Everything on the phone is erased. Back up first and make sure the bootloader is unlocked.",
    pasos: [
      "Back up your photos, contacts and files.",
      "Unlock the bootloader with the Motorola code. This wipes the phone too.",
      "Flash the ValkyOS recovery with <code>fastboot flash recovery</code>.",
      "Boot into recovery and format the data (factory reset).",
      "Install the ValkyOS ZIP from recovery or with <code>adb sideload</code>.",
      "Reboot. The first boot takes a few minutes."
    ],
    nota: "Google Play is not included. Install it from the GrapheneOS App Store, just like on GrapheneOS.",
    avanzado: {
      titulo: "Advanced: lock the bootloader with your key",
      aviso: "Only if you built your own ROM with your own AVB key. A mistake here leaves the phone unable to boot; recovering it means unlocking and wiping everything.",
      pasos: [
        "Generate your keys and build with <code>avb.pem</code> in <code>vendor/lineage-priv/keys</code>.",
        "Extract the public key: <code>avbtool extract_public_key --key avb.pem --output avb_pkmd.bin</code>.",
        "With the bootloader unlocked: <code>fastboot flash avb_custom_key avb_pkmd.bin</code>.",
        "Lock it: <code>fastboot oem lock</code>.",
        "Check: <code>fastboot getvar securestate</code>."
      ],
      nota: "The rollback index cannot go down: with the bootloader locked, an older build will not install."
    }
  },
  compilar: {
    titulo: "Build for your phone",
    sub: "The same commands the project uses. You need your phone's sources.",
    pasos: [
      { t: "Prepare the folder", c: "mkdir -p ~/valkyos && cd ~/valkyos" },
      { t: "Fetch the ValkyOS manifest", c: "repo init -u https://github.com/ValkyOS/android -b 17 --git-lfs" },
      { t: "Sync", c: "repo sync -c -j8" },
      { t: "Add the phone's sources (example: eqe)", c: "git clone https://github.com/dvy-jp/local_manifests -b valkyos-17 .repo/local_manifests\nrepo sync -c -j8" },
      { t: "Build", c: "source build/envsetup.sh\nbrunch eqe" }
    ],
    nota: "For another phone, replace the eqe list with your device's. Your own keys go in <code>vendor/lineage-priv/keys</code>; without them the ROM is signed with test keys."
  },
  limitaciones: {
    titulo: "Limitations",
    sub: "No overpromising.",
    items: [
      { t: "Play Integrity", d: "Not promised. Apps that require it may refuse to run." },
      { t: "StrongBox", d: "The eqe does not have it, and the ROM does not announce it." },
      { t: "Locked bootloader", d: "Depends on the phone. It works on the eqe with your own key; others may not accept it." }
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
    sponsor: "GitHub Sponsor",
    creador: "Created by dvy-jp",
    dedicada: "Dedicated to Valky."
  },
  pie: {
    creditos: "ValkyOS",
    github: "GitHub",
    telegram: "Telegram",
    licencia: "License",
    aviso: "Personal, non-commercial project."
  }
};
