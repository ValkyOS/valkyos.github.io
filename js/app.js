/* ValkyOS - lógica del sitio. Sin frameworks, sin rastreo, sin pedidos externos. */

const IDIOMAS = ["es", "en", "pt"];
const LOCALE = { es: "es-UY", en: "en-US", pt: "pt-BR" };

const GITHUB = "https://github.com/ValkyOS";
const KOFI = "https://ko-fi.com/dvyjp";
const TELEGRAM = ""; // vacío por ahora: no se muestra
const LICENCIA = "https://github.com/ValkyOS/valkyos.github.io/blob/main/LICENSE";

let lang = idiomaInicial();
let DATA = null;
let CAPTURAS = [];

function idiomaInicial() {
  try {
    const guardado = localStorage.getItem("lang");
    if (IDIOMAS.includes(guardado)) return guardado;
  } catch (e) {}
  const navegador = (navigator.language || "es").slice(0, 2).toLowerCase();
  return IDIOMAS.includes(navegador) ? navegador : "es";
}

function textos() {
  const clave = "VALKYOS_TEXTO_" + lang.toUpperCase();
  return window[clave] || window.VALKYOS_TEXTO_ES;
}

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function fmtFecha(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
  if (!m) return iso || "";
  return new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" });
}

/* ---------- render ---------- */
function render() {
  const t = textos();
  document.documentElement.lang = lang;
  document.title = t.meta.titulo;
  document.getElementById("meta-desc").content = t.meta.descripcion;

  document.querySelectorAll("#lang button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.l === lang)));

  document.getElementById("nav").innerHTML =
    ["inicio", "funciones", "acerca", "descargas", "instalar", "compilar", "faq", "apoyar"]
      .map(k => `<a href="#${k}">${esc(t.nav[k])}</a>`).join("");

  document.getElementById("app").innerHTML = [
    hero(t),
    funciones(t),
    acerca(t),
    apps(t),
    capturas(t),
    descargas(t),
    instalar(t),
    compilar(t),
    limitaciones(t),
    faq(t),
    creditos(t),
    apoyar(t)
  ].filter(Boolean).join("");

  pie(t);
  enlazarBotones(t);

  document.querySelectorAll("#nav a").forEach(a =>
    a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
}

function hero(t) {
  return `
  <div class="hero" id="inicio"><div class="wrap">
    <h1>${esc(t.inicio.frase)}</h1>
    <p class="linea">${esc(t.inicio.linea)}</p>
    <div class="hero-actions">
      <a class="btn primary" href="#descargas">${esc(t.inicio.descargar)}</a>
      <a class="btn" href="#compilar">${esc(t.inicio.compilar)}</a>
    </div>
  </div></div>`;
}

function funciones(t) {
  const f = t.funciones;
  return `
  <section id="funciones"><div class="wrap">
    <h2>${esc(f.titulo)}</h2>
    <p class="sub">${esc(f.sub)}</p>
    <div class="feats">
      ${f.items.map(x => `<div class="feat"><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></div>`).join("")}
    </div>
  </div></section>`;
}

function acerca(t) {
  const a = t.acerca;
  return `
  <section id="acerca"><div class="wrap">
    <h2>${esc(a.titulo)}</h2>
    <p class="sub">${esc(a.sub)}</p>
    <div class="feats">
      ${a.bloques.map(x => `<div class="feat"><h3>${esc(x.t)}</h3><p>${x.d}</p></div>`).join("")}
    </div>
  </div></section>`;
}

function apps(t) {
  const a = t.apps;
  return `
  <section id="apps"><div class="wrap">
    <h2>${esc(a.titulo)}</h2>
    <p class="sub">${esc(a.sub)}</p>
    <p class="apps-note">${esc(a.nota)}</p>
    <div class="apps">
      ${a.items.map(n => `<span>${esc(n)}</span>`).join("")}
    </div>
  </div></section>`;
}

function capturas(t) {
  if (!CAPTURAS.length) return "";
  return `
  <section id="capturas"><div class="wrap">
    <h2>${esc(t.capturas.titulo)}</h2>
    <p class="sub">${esc(t.capturas.sub)}</p>
    <div class="phones">
      ${CAPTURAS.map(f => `<div class="phone"><img src="img/capturas/${esc(f)}" alt="ValkyOS" loading="lazy"></div>`).join("")}
    </div>
  </div></section>`;
}

function filaDescarga(x, t) {
  const d = t.descargas;
  const enlace = x.enlace || "";
  const boton = enlace
    ? `<a class="btn primary small" href="${esc(enlace)}" target="_blank" rel="noopener">${esc(d.descargar)}</a>`
    : `<span class="btn small" style="opacity:.45;pointer-events:none">${esc(d.descargar)}</span>`;
  return `
  <div class="dl-item">
    <div class="dl-meta"><b>${esc(d.version)}</b> ${esc(x.version || "")} · <b>${esc(d.fecha)}</b> ${esc(fmtFecha(x.fecha))} · <b>${esc(d.tamano)}</b> ${esc(x.tamano || "—")}</div>
    <div class="sha-row">
      <span>${esc(d.sha)}</span>
      <span class="sha">${esc(x.sha256 || "—")}</span>
      ${x.sha256 ? `<button class="btn small" type="button" data-copy="${esc(x.sha256)}" data-copiado="${esc(d.copiado)}">${esc(d.copiar)}</button>` : ""}
    </div>
    <div style="margin-top:12px">${boton}</div>
  </div>`;
}

function descargas(t) {
  const d = t.descargas;
  const dispositivos = (DATA && DATA.dispositivos) || [];
  const items = (DATA && DATA.descargas) || [];
  return `
  <section id="descargas"><div class="wrap">
    <h2>${esc(d.titulo)}</h2>
    <p class="sub">${esc(d.sub)}</p>
    ${dispositivos.map(dev => {
      const propios = items.filter(x => x.dispositivo === dev.id);
      return `
      <div class="dev">
        <div class="dev-head"><h3>${esc(dev.nombre)}</h3><span class="tag">${esc(dev.codename || "")}</span></div>
        <div class="mant"><b>${esc(d.mantenido)}</b> ${esc(dev.mantenedor || "")}</div>
        ${propios.length ? propios.map(x => filaDescarga(x, t)).join("") : `<div class="prox">${esc(d.proximamente)}</div>`}
      </div>`;
    }).join("")}
    <div class="pnote">${d.agregar}</div>
  </div></section>`;
}

function instalar(t) {
  const i = t.instalar;
  return `
  <section id="instalar"><div class="wrap">
    <h2>${esc(i.titulo)}</h2>
    <p class="sub">${esc(i.sub)}</p>
    <div class="warn"><span>⚠️</span><div>${esc(i.aviso)}</div></div>
    <p style="max-width:70ch;color:var(--tx2);font-size:.93rem">${esc(i.texto)}</p>
    <div class="pnote">${esc(i.nota)}</div>
  </div></section>`;
}

function compilar(t) {
  const c = t.compilar;
  return `
  <section id="compilar"><div class="wrap">
    <h2>${esc(c.titulo)}</h2>
    <p class="sub">${esc(c.sub)}</p>
    <p style="max-width:70ch;color:var(--tx2);font-size:.93rem;margin-bottom:22px">${c.requisitos}</p>
    ${c.pasos.map(p => `
      <div class="feat" style="margin-bottom:6px"><h3>${esc(p.t)}</h3></div>
      <div class="code">
        <button class="copy" type="button" data-copy="${esc(p.c)}" data-copiado="${esc(t.descargas.copiado)}">${esc(t.descargas.copiar)}</button>
        <pre>${esc(p.c)}</pre>
      </div>`).join("")}
    <div class="pnote">${c.nota}</div>
  </div></section>`;
}

function limitaciones(t) {
  const l = t.limitaciones;
  return `
  <section id="limitaciones"><div class="wrap">
    <h2>${esc(l.titulo)}</h2>
    <p class="sub">${esc(l.sub)}</p>
    <div class="feats">
      ${l.items.map(x => `<div class="feat"><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></div>`).join("")}
    </div>
  </div></section>`;
}

function faq(t) {
  const f = t.faq;
  return `
  <section id="faq"><div class="wrap">
    <h2>${esc(f.titulo)}</h2>
    <div class="faq">
      ${f.items.map(x => `<details><summary>${esc(x.q)}</summary><div class="a">${esc(x.a)}</div></details>`).join("")}
    </div>
  </div></section>`;
}

function creditos(t) {
  const c = t.creditos;
  return `
  <section id="creditos"><div class="wrap">
    <h2>${esc(c.titulo)}</h2>
    <p class="sub">${esc(c.sub)}</p>
    ${c.items.map(x => `<div class="cred"><b>${esc(x.n)}</b><p>${esc(x.d)}</p></div>`).join("")}
    <div class="pnote">${esc(c.aviso)}</div>
  </div></section>`;
}

function apoyar(t) {
  const a = t.apoyar;
  return `
  <section id="apoyar"><div class="wrap">
    <h2>${esc(a.titulo)}</h2>
    <div class="support">
      <p>${esc(a.texto)}</p>
      <div class="actions">
        <a class="btn primary" href="${esc(KOFI)}" target="_blank" rel="noopener">${esc(a.kofi)}</a>
      </div>
      <p class="dedicated">${esc(a.creador)} · ${esc(a.dedicada)}</p>
    </div>
  </div></section>`;
}

function pie(t) {
  document.getElementById("foot-credit").textContent = `${t.apoyar.creador} · ${t.apoyar.dedicada}`;
  const enlaces = [`<a href="${esc(GITHUB)}" target="_blank" rel="noopener">${esc(t.pie.github)}</a>`];
  if (TELEGRAM) enlaces.push(`<a href="${esc(TELEGRAM)}" target="_blank" rel="noopener">${esc(t.pie.telegram)}</a>`);
  enlaces.push(`<a href="${esc(LICENCIA)}">${esc(t.pie.licencia)}</a>`);
  document.getElementById("foot-links").innerHTML = enlaces.join(" · ");
  document.getElementById("foot-disclaimer").textContent = t.pie.aviso;
}

function enlazarBotones(t) {
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.onclick = async () => {
      const texto = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(texto);
      } catch (e) {
        const area = document.createElement("textarea");
        area.value = texto;
        document.body.appendChild(area);
        area.select();
        try { document.execCommand("copy"); } catch (err) {}
        area.remove();
      }
      const antes = btn.textContent;
      btn.textContent = btn.dataset.copiado || "OK";
      btn.classList.add("ok");
      setTimeout(() => { btn.textContent = antes; btn.classList.remove("ok"); }, 1500);
    };
  });
}

/* ---------- idioma ---------- */
document.getElementById("lang").addEventListener("click", ev => {
  const b = ev.target.closest("button[data-l]");
  if (!b) return;
  lang = b.dataset.l;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});

document.getElementById("menu").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

/* ---------- datos ---------- */
Promise.all([
  fetch("descargas.json", { cache: "no-cache" }).then(r => r.ok ? r.json() : Promise.reject()).catch(() => ({ dispositivos: [], descargas: [] })),
  fetch("capturas.json", { cache: "no-cache" }).then(r => r.ok ? r.json() : Promise.reject()).catch(() => [])
]).then(([d, c]) => {
  DATA = d;
  CAPTURAS = Array.isArray(c) ? c : [];
  render();
});
