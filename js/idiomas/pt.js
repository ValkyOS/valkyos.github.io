window.VALKYOS_TEXTO_PT = {
  meta: {
    titulo: "ValkyOS",
    descripcion: "ValkyOS: LineageOS 24 / Android 17 com recursos de privacidade do GrapheneOS, para o Motorola Edge 50 Pro."
  },
  nav: {
    inicio: "Início",
    funciones: "Recursos",
    dispositivos: "Dispositivos",
    descargas: "Downloads",
    instalacion: "Instalação",
    compilar: "Compilar",
    limitaciones: "Limitações",
    creditos: "Créditos",
    apoyar: "Apoiar"
  },
  inicio: {
    titulo: "ValkyOS",
    frase: "LineageOS 24 / Android 17 com recursos de privacidade do GrapheneOS, para o Motorola Edge 50 Pro.",
    descargar: "Baixar",
    compilar: "Compilar"
  },
  funciones: {
    titulo: "Recursos",
    sub: "O importante, sem enrolação.",
    items: [
      { t: "Google Play isolado", d: "Play Store e Play Services rodam como apps normais, sem privilégios de sistema (GmsCompat)." },
      { t: "Contact Scopes", d: "Você escolhe quais contatos cada app pode ver, em vez de entregar todos." },
      { t: "Storage Scopes", d: "Você escolhe quais fotos e arquivos cada app pode ver; o que ele cria continua visível." },
      { t: "Permissão de Sensores", d: "Uma permissão por app para acelerômetro, giroscópio, bússola e barômetro." },
      { t: "Vanadium e App Store", d: "Navegador e WebView do GrapheneOS, mais a App Store para instalar o Play e apps do GrapheneOS." },
      { t: "Hora por HTTPS", d: "A hora é buscada por HTTPS em time.grapheneos.org, sem NTP nem servidores do Google." },
      { t: "MAC aleatório", d: "Um endereço diferente em cada conexão Wi-Fi, sem enviar o nome do aparelho." },
      { t: "GPS assistido sem Google", d: "O GPS assistido (SUPL) passa pelo intermediário do GrapheneOS." },
      { t: "Reinício automático", d: "Depois de oito horas bloqueado, o aparelho reinicia e volta ao estado criptografado." },
      { t: "Relógios da tela de bloqueio", d: "67 estilos do crDroid com seletor e prévias." },
      { t: "Bootloader bloqueável", d: "No eqe pode ser bloqueado com uma chave própria: só inicia um sistema assinado por você." }
    ]
  },
  dispositivos: {
    titulo: "Dispositivos",
    sub: "Por enquanto, um. A ideia é adicionar mais.",
    mantenido: "Mantido por",
    agregar: "Tem outro aparelho? Pode ser adicionado quando a árvore estiver pronta."
  },
  descargas: {
    titulo: "Downloads",
    sub: "A ROM é instalada pelo recovery.",
    ejemplo: "EXEMPLO",
    ejemploNota: "Isto é um exemplo de como um download vai aparecer. Ainda não há versões publicadas.",
    version: "Versão",
    fecha: "Data",
    tamano: "Tamanho",
    sha: "SHA-256",
    descargar: "Baixar",
    sin: "Ainda não há downloads publicados.",
    error: "Não foi possível carregar a lista de downloads.",
    copiar: "Copiar",
    copiado: "Copiado"
  },
  instalacion: {
    titulo: "Instalação",
    sub: "Leia tudo antes de começar.",
    aviso: "Tudo o que estiver no aparelho é apagado. Faça backup e garanta que o bootloader esteja desbloqueado.",
    pasos: [
      "Faça backup das fotos, contatos e arquivos.",
      "Desbloqueie o bootloader com o código da Motorola. Isso também apaga tudo.",
      "Instale o recovery do ValkyOS com <code>fastboot flash recovery</code>.",
      "Entre no recovery e formate os dados (factory reset).",
      "Instale o ZIP do ValkyOS pelo recovery ou com <code>adb sideload</code>.",
      "Reinicie. O primeiro boot leva alguns minutos."
    ],
    nota: "O Google Play não vem instalado. Instale pela App Store do GrapheneOS, como no GrapheneOS.",
    avanzado: {
      titulo: "Avançado: bloquear o bootloader com sua chave",
      aviso: "Só se você compilou sua própria ROM com sua própria chave AVB. Um erro aqui deixa o aparelho sem iniciar; para recuperar é preciso desbloquear e apagar tudo.",
      pasos: [
        "Gere suas chaves e compile com <code>avb.pem</code> em <code>vendor/lineage-priv/keys</code>.",
        "Extraia a chave pública: <code>avbtool extract_public_key --key avb.pem --output avb_pkmd.bin</code>.",
        "Com o bootloader desbloqueado: <code>fastboot flash avb_custom_key avb_pkmd.bin</code>.",
        "Bloqueie: <code>fastboot oem lock</code>.",
        "Confira: <code>fastboot getvar securestate</code>."
      ],
      nota: "O número de rollback não pode descer: com o bootloader bloqueado, uma versão mais antiga não instala."
    }
  },
  compilar: {
    titulo: "Compilar para o seu aparelho",
    sub: "Os mesmos comandos que o projeto usa. Você precisa das fontes do seu aparelho.",
    pasos: [
      { t: "Preparar a pasta", c: "mkdir -p ~/valkyos && cd ~/valkyos" },
      { t: "Baixar o manifesto do ValkyOS", c: "repo init -u https://github.com/ValkyOS/android -b 17 --git-lfs" },
      { t: "Sincronizar", c: "repo sync -c -j8" },
      { t: "Adicionar as peças do aparelho (exemplo: eqe)", c: "git clone https://github.com/dvy-jp/local_manifests -b valkyos-17 .repo/local_manifests\nrepo sync -c -j8" },
      { t: "Compilar", c: "source build/envsetup.sh\nbrunch eqe" }
    ],
    nota: "Para outro aparelho, troque a lista do eqe pela do seu dispositivo. Suas chaves vão em <code>vendor/lineage-priv/keys</code>; sem elas a ROM sai com chaves de teste."
  },
  limitaciones: {
    titulo: "Limitações",
    sub: "Sem promessas demais.",
    items: [
      { t: "Play Integrity", d: "Não está prometido. Apps que exigem podem não funcionar." },
      { t: "StrongBox", d: "O eqe não tem e a ROM não anuncia." },
      { t: "Bootloader bloqueado", d: "Depende do aparelho. No eqe funciona com chave própria; em outros pode não ser aceita." }
    ]
  },
  creditos: {
    titulo: "Créditos",
    sub: "Isto se apoia no trabalho de outras pessoas.",
    items: [
      { n: "LineageOS", d: "A base do sistema." },
      { n: "GrapheneOS", d: "GmsCompat e os recursos de privacidade." },
      { n: "crDroid", d: "Ideias e código de alguns recursos, como os relógios da tela de bloqueio e o desempenho." }
    ],
    aviso: "ValkyOS é um projeto independente. Não é afiliado nem endossado por LineageOS, GrapheneOS, crDroid, Motorola ou Google. As logos deles não são usadas."
  },
  apoyar: {
    titulo: "Apoiar",
    texto: "ValkyOS é grátis e sem fins lucrativos. Se for útil, você pode ajudar com os servidores de compilação.",
    kofi: "Ko-fi",
    sponsor: "GitHub Sponsor",
    creador: "Criado por dvy-jp",
    dedicada: "Dedicada a Valky."
  },
  pie: {
    creditos: "ValkyOS",
    github: "GitHub",
    telegram: "Telegram",
    licencia: "Licença",
    aviso: "Projeto pessoal, sem fins lucrativos."
  }
};
