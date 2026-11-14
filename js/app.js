/* ValkyOS - lógica del sitio. Sin frameworks, sin rastreo, sin pedidos externos. */

const IDIOMAS = ["es", "en", "pt"];
const LOCALE = { es: "es-UY", en: "en-US", pt: "pt-BR" };

const GITHUB = "https://github.com/ValkyOS";
const KOFI = "https://ko-fi.com/dvyjp";
const SPONSOR = "https://github.com/sponsors/dvy-jp";
const TELEGRAM = ""; // vacío por ahora: no se muestra
const LICENCIA = "https://github.com/ValkyOS/valkyos.github.io/blob/main/LICENSE";

let lang = idiomaInicial();
let DATA = null;

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

function nombreDispositivo(id) {
  const d = (DATA && DATA.dispositivos || []).find(x => x.id === id);
  return d ? d.nombre : (id || "");
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
    ["inicio", "funciones", "descargas", "instalacion", "compilar", "creditos"]
      .map(k => `<a href="#${k}">${esc(t.nav[k])}</a>`).join("");

  document.getElementById("app").innerHTML = [
    hero(t),
    funciones(t),
    dispositivos(t),
    descargas(t),
    instalacion(t),
    compilar(t),
    limitaciones(t),
    creditos(t),
    apoyar(t)
  ].join("");

  pie(t);
  enlazarBotones(t);
}

function hero(t) {
  return `
  <div class="hero" id="inicio"><div class="wrap">
    <h1>${esc(t.inicio.titulo)}</h1>
    <p>${esc(t.inicio.frase)}</p>
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
    <div class="cards">
      ${f.items.map(x => `<article class="card"><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></article>`).join("")}
    </div>
  </div></section>`;
}

function dispositivos(t) {
  const d = t.dispositivos;
  const lista = (DATA && DATA.dispositivos) || [];
  return `
  <section id="dispositivos"><div class="wrap">
    <h2>${esc(d.titulo)}</h2>
    <p class="sub">${esc(d.sub)}</p>
    <div class="devs">
      ${lista.map(x => `
        <article class="dev">
          <div class="dev-main">
            <h3>${esc(x.nombre)} <span class="tag">${esc(x.codename || "")}</span></h3>
            <p>${esc(x.descripcion || "")}</p>
            <div class="mant"><b>${esc(d.mantenido)}</b> ${esc(x.mantenedor || "")}</div>
          </div>
        </article>`).join("")}
    </div>
    <div class="pnote">${esc(d.agregar)}</div>
  </div></section>`;
}

function descargas(t) {
  const d = t.descargas;
  const items = (DATA && DATA.descargas) || [];

  const fila = (x, ejemplo) => {
    const enlace = x.enlace || "";
    const boton = enlace
      ? `<a class="btn primary small" href="${esc(enlace)}" target="_blank" rel="noopener">${esc(d.descargar)}</a>`
      : `<span class="btn small" style="opacity:.45;pointer-events:none">${esc(d.descargar)}</span>`;
    return `
    <article class="dl-item">
      <div class="dl-head">
        <h3>${esc(x.version || "")}</h3>
        ${ejemplo ? `<span class="tag example">${esc(d.ejemplo)}</span>` : ""}
        <span class="tag">${esc(nombreDispositivo(x.dispositivo) || x.dispositivo || "")}</span>
      </div>
      <div class="dl-meta">
        <b>${esc(d.fecha)}</b> ${esc(fmtFecha(x.fecha))} · <b>${esc(d.tamano)}</b> ${esc(x.tamano || "—")}
      </div>
      <div class="sha-row">
        <span>${esc(d.sha)}</span>
        <span class="sha">${esc(x.sha256 || "—")}</span>
        ${x.sha256 ? `<button class="btn small" type="button" data-copy="${esc(x.sha256)}" data-copiado="${esc(d.copiado)}">${esc(d.copiar)}</button>` : ""}
      </div>
      <div style="margin-top:14px">${boton}</div>
    </article>`;
  };

  let cuerpo;
  if (items.length) {
    cuerpo = items.map(x => fila(x, false)).join("");
  } else if (DATA && DATA.ejemplo) {
    cuerpo = fila(DATA.ejemplo, true);
  } else {
    cuerpo = `<p class="sub">${esc(d.sin)}</p>`;
  }

  return `
  <section id="descargas"><div class="wrap">
    <h2>${esc(d.titulo)}</h2>
    <p class="sub">${esc(d.sub)}</p>
    ${items.length ? "" : `<div class="warn"><span>⚠️</span><div>${esc(d.ejemploNota)}</div></div>`}
    <div class="dl-list">${cuerpo}</div>
  </div></section>`;
}

function instalacion(t) {
  const i = t.instalacion;
  const a = i.avanzado;
  return `
  <section id="instalacion"><div class="wrap">
    <h2>${esc(i.titulo)}</h2>
    <p class="sub">${esc(i.sub)}</p>
    <div class="warn"><span>⚠️</span><div>${esc(i.aviso)}</div></div>
    <div class="panel">
      <ol class="steps">${i.pasos.map(p => `<li>${p}</li>`).join("")}</ol>
      <div class="pnote">${esc(i.nota)}</div>
    </div>
    <details class="adv">
      <summary>${esc(a.titulo)}</summary>
      <div class="adv-body">
        <div class="danger"><span>⚠️</span><div>${esc(a.aviso)}</div></div>
        <ol class="steps">${a.pasos.map(p => `<li>${p}</li>`).join("")}</ol>
        <div class="pnote">${esc(a.nota)}</div>
      </div>
    </details>
  </div></section>`;
}

function compilar(t) {
  const c = t.compilar;
  return `
  <section id="compilar"><div class="wrap">
    <h2>${esc(c.titulo)}</h2>
    <p class="sub">${esc(c.sub)}</p>
    ${c.pasos.map(p => `
      <div class="panel">
        <h3>${esc(p.t)}</h3>
        <div class="code">
          <button class="copy" type="button" data-copy="${esc(p.c)}" data-copiado="${esc(t.descargas.copiado)}">${esc(t.descargas.copiar)}</button>
          <pre>${esc(p.c)}</pre>
        </div>
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
    <ul class="limits">
      ${l.items.map(x => `<li><b>${esc(x.t)}:</b> ${esc(x.d)}</li>`).join("")}
    </ul>
  </div></section>`;
}

function creditos(t) {
  const c = t.creditos;
  return `
  <section id="creditos"><div class="wrap">
    <h2>${esc(c.titulo)}</h2>
    <p class="sub">${esc(c.sub)}</p>
    ${c.items.map(x => `<div class="cred"><div><b>${esc(x.n)}</b><p>${esc(x.d)}</p></div></div>`).join("")}
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
        <a class="btn" href="${esc(SPONSOR)}" target="_blank" rel="noopener">${esc(a.sponsor)}</a>
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

/* ---------- datos ---------- */
fetch("descargas.json", { cache: "no-cache" })
  .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
  .then(d => { DATA = d; })
  .catch(() => { DATA = { dispositivos: [], descargas: [], ejemplo: null }; })
  .finally(() => render());
