window.VALKYOS_TEXTO_PT = {
  meta: {
    titulo: "ValkyOS",
    descripcion: "ValkyOS: Android 17 com privacidade de verdade, Google Play opcional e isolado, para aparelhos com LineageOS 24."
  },
  nav: {
    inicio: "Início",
    funciones: "Recursos",
    acerca: "Sobre",
    apps: "Apps",
    descargas: "Downloads",
    instalar: "Instalar",
    compilar: "Compilar",
    limitaciones: "Limitações",
    faq: "FAQ",
    creditos: "Créditos",
    apoyar: "Apoiar"
  },
  inicio: {
    frase: "Android 17 com privacidade de verdade. Google Play opcional e isolado.",
    linea: "Android 17 · Google Play isolado · Código aberto",
    descargar: "Baixar",
    compilar: "Compilar"
  },
  funciones: {
    titulo: "Recursos",
    sub: "Privacidade e controle desde o primeiro boot.",
    items: [
      { t: "Google Play isolado", d: "Play Store e Play Services rodam como apps normais, sem privilégios de sistema (GmsCompat)." },
      { t: "Contact Scopes", d: "Você escolhe quais contatos cada app pode ver, em vez de entregar todos." },
      { t: "Storage Scopes", d: "Você escolhe quais fotos e arquivos cada app pode ver; o que ele cria continua visível." },
      { t: "Permissão de Sensores", d: "Uma permissão por app para acelerômetro, giroscópio, bússola e barômetro." },
      { t: "Vanadium", d: "Navegador e WebView do GrapheneOS, endurecidos, no lugar dos do LineageOS." },
      { t: "Hora por HTTPS", d: "A hora é buscada por HTTPS em time.grapheneos.org, sem NTP nem servidores do Google." },
      { t: "MAC aleatório", d: "Um endereço diferente em cada conexão Wi-Fi, sem enviar o nome do aparelho." },
      { t: "GPS assistido sem Google", d: "O GPS assistido (SUPL) passa pelo intermediário do GrapheneOS." },
      { t: "Reinício automático", d: "Depois de oito horas bloqueado, o aparelho reinicia e volta ao estado criptografado." },
      { t: "Relógios da tela de bloqueio", d: "67 estilos do crDroid com seletor e prévias." },
      { t: "Assinada com suas chaves", d: "Nos aparelhos que permitem, o bootloader pode ser bloqueado de novo com sua própria chave." }
    ]
  },
  acerca: {
    titulo: "Sobre",
    sub: "O que é o ValkyOS e por que existe.",
    bloques: [
      { t: "O que é", d: "Um sistema focado em privacidade e segurança que permite usar o Google Play sem dar privilégios de sistema. Existe para ter os apps do Google sem entregar o aparelho." },
      { t: "Em que se baseia", d: "No LineageOS 24 (Android 17). Do GrapheneOS pega o Google Play isolado, Contact e Storage Scopes, a permissão de Sensores, o Vanadium, a hora por HTTPS, o MAC aleatório por conexão e o GPS assistido sem Google. Do crDroid, os relógios da tela de bloqueio e melhorias de desempenho." },
      { t: "O que o ValkyOS acrescenta", d: "A integração de tudo em uma só ROM e o próprio: a seção ValkyOS nos Ajustes, a personalização (nome, logos, papéis de parede) e a assinatura com chaves próprias." },
      { t: "Para quais aparelhos", d: "Qualquer aparelho com árvore, kernel e arquivos do fabricante funcionando no LineageOS 24. <a href=\"#compilar\">Compilar</a> explica como." },
      { t: "Quem faz", d: "Criado por dvy-jp, dedicado a Valky. Projeto independente, sem relação com LineageOS, GrapheneOS, crDroid, Motorola ou Google." }
    ]
  },
  apps: {
    titulo: "Apps",
    sub: "Todos os apps do GrapheneOS são instalados pela App Store dele, que já vem incluída na ROM.",
    nota: "A App Store do GrapheneOS vem incluída. Por ela se instala:",
    items: ["Play Store", "Play Services", "Câmera", "Visualizador de PDF"]
  },
  capturas: {
    titulo: "Capturas",
    sub: "A ROM no aparelho."
  },
  descargas: {
    titulo: "Downloads",
    sub: "Por aparelho. Hoje há um, como qualquer outro aparelho.",
    proximamente: "Em breve",
    mantenido: "Mantido por",
    agregar: "Quer adicionar seu aparelho? <a href=\"#compilar\">Compilar</a> ou o <a href=\"https://github.com/ValkyOS/android\" target=\"_blank\" rel=\"noopener\">guia para mantenedores</a>.",
    version: "Versão",
    fecha: "Data",
    tamano: "Tamanho",
    sha: "SHA-256",
    descargar: "Baixar",
    copiar: "Copiar",
    copiado: "Copiado"
  },
  instalar: {
    titulo: "Instalar",
    sub: "Igual ao LineageOS no seu aparelho.",
    aviso: "Todos os dados do aparelho são apagados.",
    texto: "Siga o guia do LineageOS ou o de quem mantém seu aparelho. O ZIP é instalado pelo recovery, igual a qualquer ROM do LineageOS.",
    nota: "O Google Play não vem instalado: instale pela App Store do GrapheneOS."
  },
  compilar: {
    titulo: "Compilar",
    sub: "O ValkyOS pode ser compilado para qualquer aparelho.",
    requisitos: "Você precisa de árvore, kernel e arquivos do fabricante que funcionem no LineageOS 24, em uma lista de <code>local_manifests</code>.",
    pasos: [
      { t: "Preparar a pasta", c: "mkdir -p ~/valkyos && cd ~/valkyos" },
      { t: "Baixar o manifesto do ValkyOS", c: "repo init -u https://github.com/ValkyOS/android -b 17 --git-lfs" },
      { t: "Baixar a lista do aparelho ANTES do primeiro sync (exemplo: eqe)", c: "git clone https://github.com/dvy-jp/local_manifests -b valkyos-17 .repo/local_manifests" },
      { t: "Sincronizar uma vez", c: "repo sync -c -j8" },
      { t: "Compilar", c: "source build/envsetup.sh\nbrunch eqe" }
    ],
    nota: "Troque a lista do eqe pela do seu aparelho e <code>brunch eqe</code> pelo seu. Guia completo: <a href=\"https://github.com/ValkyOS/android\" target=\"_blank\" rel=\"noopener\">README do manifesto</a>."
  },
  limitaciones: {
    titulo: "Limitações",
    sub: "Sem promessas demais.",
    items: [
      { t: "Play Integrity", d: "Não está prometido. Apps que exigem podem não funcionar." },
      { t: "Hardware", d: "StrongBox e o bloqueio do bootloader dependem do aparelho." },
      { t: "Versões de teste", d: "As versões atuais são de teste." }
    ]
  },
  faq: {
    titulo: "Perguntas frequentes",
    sub: "",
    items: [
      { q: "Quais aparelhos são suportados?", a: "Qualquer aparelho com árvore, kernel e arquivos do fabricante funcionando no LineageOS 24." },
      { q: "Em que o ValkyOS se baseia?", a: "No LineageOS 24 (Android 17), com recursos portados do GrapheneOS e do crDroid." },
      { q: "O Google Play funciona?", a: "Sim. Play Store e Play Services rodam isolados, como apps normais, e são instalados pela App Store do GrapheneOS." },
      { q: "O Play Integrity é garantido?", a: "Não. Não é falsificado. Apps que exigem podem não funcionar." },
      { q: "Tem StrongBox?", a: "Depende do aparelho. O ValkyOS não anuncia." },
      { q: "Posso bloquear o bootloader?", a: "Nos aparelhos que permitem, com sua própria chave AVB." },
      { q: "Como são instaladas as atualizações?", a: "Instalando o ZIP novo pelo recovery. Ainda não há servidor de atualizações." },
      { q: "Quais apps vêm?", a: "Os do LineageOS e Android, mais o Vanadium e a App Store do GrapheneOS. O resto é instalado pela App Store." },
      { q: "É grátis?", a: "Sim, é um projeto pessoal sem fins lucrativos. Se for útil, você pode apoiar com Ko-fi." }
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
    creador: "Criado por dvy-jp",
    dedicada: "Dedicada a Valky."
  },
  pie: {
    github: "GitHub",
    telegram: "Telegram",
    licencia: "Licença",
    aviso: "Projeto pessoal, sem fins lucrativos."
  }
};
