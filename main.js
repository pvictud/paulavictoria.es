(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const IMG = window.IMG || {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- media helpers ---------- */
  const isVid = k => k.startsWith('v:');
  const vname = k => k.replace(/^v:/, '');
  const img = (k, cls = '', lazy = true) => {
    const [w, h] = IMG[k] || [1200, 1500];
    return `<img src="assets/img/${k}.webp" width="${w}" height="${h}" alt="" ${lazy ? 'loading="lazy"' : ''} decoding="async" class="${cls}">`;
  };
  const vid = (k, { auto = true, controls = false } = {}) =>
    `<video ${auto ? 'data-auto muted loop playsinline' : 'controls playsinline'} preload="none" poster="assets/video/${k}.webp" src="assets/video/${k}.mp4" ${controls ? 'controls' : ''}></video>`;
  const media = (k, zoom = true) => isVid(k) ? vid(vname(k)) : img(k, zoom ? 'zoomable' : '');

  /* ---------- autoplay muted videos only when visible ---------- */
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { if (v.preload === 'none') v.preload = 'auto'; v.play().catch(() => { }); }
    else v.pause();
  }), { threshold: .25 });
  const watchVideos = root => $$('video[data-auto]', root).forEach(v => { if (!reduced) vio.observe(v); });

  /* ---------- reveal on scroll ---------- */
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); rio.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  const watchReveal = root => $$('.reveal', root).forEach(el => rio.observe(el));

  /* ---------- loader ---------- */
  const loader = $('.loader'), count = $('.loader__count');
  const finish = () => { loader.classList.add('is-done'); document.body.classList.add('is-loaded'); setTimeout(() => loader.remove(), 1400); };
  if (reduced) finish(); else {
    let n = 0; const t0 = performance.now(); const D = 1100;
    const tick = now => { n = Math.min(100, Math.round(((now - t0) / D) ** .7 * 100)); count.textContent = n; n < 100 ? requestAnimationFrame(tick) : setTimeout(finish, 150); };
    requestAnimationFrame(tick);
  }

  /* ---------- work list ---------- */
  const CASES = window.CASES;
  const coverKey = c => isVid(c.cover) ? `assets/video/${vname(c.cover)}.webp` : `assets/img/${c.cover}.webp`;
  $('#workList').innerHTML = CASES.map((c, i) => `
    <li class="work__item reveal" data-cats="${c.cats.join(' ')}" style="--item-accent:${c.accent}">
      <a class="work__link" href="#${c.id}" data-case="${c.id}" data-cursor="Ver caso">
        <span class="work__thumb"><img src="${coverKey(c)}" alt="" loading="lazy"></span>
        <span class="work__n">${String(i + 1).padStart(2, '0')}</span>
        <span class="work__t">${esc(c.title)}</span>
        <span class="work__tags">${esc(c.tags)}</span>
        <span class="work__y">${esc(c.year)}</span>
        <span class="work__arrow">→</span>
      </a>
    </li>`).join('');

  // filters
  $$('.filters button').forEach(b => b.addEventListener('click', () => {
    $$('.filters button').forEach(x => x.classList.toggle('is-active', x === b));
    const f = b.dataset.filter;
    $$('.work__item').forEach(li => li.classList.toggle('is-hidden', f !== 'all' && !li.dataset.cats.split(' ').includes(f)));
  }));

  // hover preview following cursor
  const prev = $('.work__preview'), prevImg = $('img', prev);
  if (fine) {
    let px = 0, py = 0, tx = 0, ty = 0;
    $$('.work__link').forEach(a => {
      a.addEventListener('mouseenter', () => { const c = CASES.find(x => x.id === a.dataset.case); prevImg.src = coverKey(c); prev.classList.add('is-on'); });
      a.addEventListener('mouseleave', () => prev.classList.remove('is-on'));
    });
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    const loop = () => { px += (tx - px) * .14; py += (ty - py) * .14; prev.style.left = px + 'px'; prev.style.top = py + 'px'; requestAnimationFrame(loop); };
    loop();
  }

  /* ---------- reels ---------- */
  $('#reelRail').innerHTML = window.REELS.map(([k, b, s]) => `
    <figure class="reel reveal">
      <div class="reel__phone" data-cursor="Sonido">${vid(k)}<span class="reel__sound" aria-hidden="true">🔇</span></div>
      <figcaption class="reel__cap"><b>${esc(b)}</b><span>${esc(s)}</span></figcaption>
    </figure>`).join('');
  $$('.reel__phone').forEach(p => p.addEventListener('click', () => {
    const v = $('video', p), on = v.muted;
    $$('.reel__phone video').forEach(x => { x.muted = true; x.nextElementSibling.textContent = '🔇'; });
    v.muted = !on; p.querySelector('.reel__sound').textContent = on ? '🔊' : '🔇';
    if (on) { v.currentTime = 0; v.play().catch(() => { }); }
  }));
  $$('.rail-btn').forEach(b => b.addEventListener('click', () => {
    const r = $('#reelRail'); r.scrollBy({ left: +b.dataset.dir * r.clientWidth * .8, behavior: 'smooth' });
  }));

  /* ---------- film ---------- */
  $('#filmGrid').innerHTML = window.FILMS.map(([k, t, s]) => `
    <figure class="film__item reveal" data-film="${k}" data-cursor="Play">
      <div class="film__media">${vid(k)}<span class="film__play">▶ Ver con sonido</span></div>
      <figcaption class="film__cap"><b>${esc(t)}</b><span>${esc(s)}</span></figcaption>
    </figure>`).join('');
  $$('.film__item').forEach(f => f.addEventListener('click', () => {
    const v = $('video', f);
    if (v.hasAttribute('controls')) return;
    vio.unobserve(v); v.removeAttribute('loop'); v.controls = true; v.muted = false; v.currentTime = 0; v.play().catch(() => { });
    $('.film__play', f).remove(); f.removeAttribute('data-cursor'); cursorReset();
  }));

  /* ---------- webs ---------- */
  $('#webGrid').innerHTML = window.WEBS.map(([k, t, u, href, s]) => `
    <a class="webcard reveal" href="${href}" target="_blank" rel="noopener" data-cursor="Visitar">
      <div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span>${esc(u)}</span></div>
      <div class="browser__view">${img(k)}</div></div>
      <div class="webcard__cap"><div><b>${esc(t)}</b><div class="webcard__url">${esc(u)} ↗</div></div><span>${esc(s)}</span></div>
    </a>`).join('');

  /* ---------- social ---------- */
  $('#socialList').innerHTML = window.SOCIAL.map(([n, h, href, type, k]) => {
    const inner = `<span class="social__av">${img(k, '')}</span><span class="social__name">${esc(n)}</span><span class="social__handle">${esc(h)}</span><span class="social__type">${esc(type)} ${href ? '↗' : ''}</span>`;
    return `<li class="reveal">${href ? `<a class="social__row" href="${href}" target="_blank" rel="noopener">${inner}</a>` : `<div class="social__row">${inner}</div>`}</li>`;
  }).join('');

  /* ---------- about ---------- */
  const rows = list => list.map(([y, r, c]) => `<li class="reveal"><span class="tl-y">${esc(y)}</span><span class="tl-r">${esc(r)}</span><span class="tl-c">${esc(c)}</span></li>`).join('');
  $('#timeline').innerHTML = rows(window.TIMELINE);
  $('#education').innerHTML = rows(window.EDUCATION);
  $('#languages').innerHTML = rows(window.LANGUAGES);
  $('#chips').innerHTML = window.SKILLS.map(s => `<li>${esc(s)}</li>`).join('');

  /* ---------- contact ---------- */
  const C = window.CONFIG || {};
  const links = [];
  if (C.email) links.push(`<a class="btn btn--primary" href="mailto:${C.email}">${esc(C.email)} →</a><button class="btn btn--copy" type="button" data-copy="${esc(C.email)}">Copiar email</button>`);
  if (C.phone) links.push(`<a class="btn" href="tel:${C.phone.replace(/\s/g, '')}">${esc(C.phone)}</a>`);
  if (C.linkedin) links.push(`<a class="btn ${C.email ? '' : 'btn--primary'}" href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
  if (C.cv) links.push(`<a class="btn" href="${C.cv}" target="_blank" rel="noopener">Ver CV (PDF) ↗</a>`);
  if (C.behance) links.push(`<a class="btn" href="${C.behance}" target="_blank" rel="noopener">Behance ↗</a>`);
  if (C.portfolioCompleto) links.push(`<a class="btn" href="${C.portfolioCompleto}" target="_blank" rel="noopener">Portfolio completo ↗</a>`);
  $('#contactLinks').innerHTML = links.join('');
  $$('[data-copy]').forEach(b => b.addEventListener('click', () => {
    const done = () => { b.textContent = 'Email copiado ✓'; setTimeout(() => { b.textContent = 'Copiar email'; }, 2200); };
    const fallback = () => { const r = document.createRange(); r.selectNodeContents($('.btn--primary')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Selecciónalo y cópialo'; };
    try { navigator.clipboard.writeText(b.dataset.copy).then(done, fallback); } catch (e) { fallback(); }
  }));

  /* ---------- stat counters ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, t0 = performance.now();
    const step = now => { const p = Math.min(1, (now - t0) / 1200); el.textContent = Math.round(to * (1 - (1 - p) ** 3)); if (p < 1) requestAnimationFrame(step); };
    reduced ? (el.textContent = to) : requestAnimationFrame(step);
  }), { threshold: .5 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ---------- case overlay ---------- */
  const caseEl = $('#case'), caseScroll = $('#caseScroll');
  let lastFocus = null;
  // aspect ratio of any media key (images and "v:" videos are both in the manifest)
  const ratio = k => { const d = IMG[k] || [4, 5]; return d[0] / d[1]; };
  // Justified rows: every item in a row shares the same height, so there are no gaps under shorter pieces.
  // An incomplete last row keeps the height of the first row and is centred.
  const grid = (items, cols) => {
    const n = matchMedia('(max-width: 760px)').matches && cols > 2 ? 2 : cols;
    const rows = []; for (let i = 0; i < items.length; i += n) rows.push(items.slice(i, i + n));
    const sum = r => r.reduce((a, k) => a + ratio(k), 0);
    const ref = rows[0], refS = sum(ref);
    return rows.map((r, ri) => {
      const short = ri > 0 && r.length < ref.length;
      const w = short ? `width:calc((100% - ${ref.length - 1} * var(--g)) * ${(sum(r) / refS).toFixed(4)} + ${r.length - 1} * var(--g))` : '';
      return `<div class="b-row" style="${w}">${r.map(k => `<div style="flex:${ratio(k).toFixed(4)} 1 0;aspect-ratio:${ratio(k).toFixed(4)}">${media(k)}</div>`).join('')}</div>`;
    }).join('');
  };
  const block = b => {
    const title = b.title ? `<div class="b-title"><span>${esc(b.title)}</span>${b.t === 'carousel' || b.t === 'stories' ? '<span>Desliza →</span>' : ''}</div>` : '';
    switch (b.t) {
      case 'text': return `<div class="b-text reveal"><h3>${esc(b.h)}</h3><p>${esc(b.p)}</p></div>`;
      case 'carousel': return `<div class="reveal">${title}<div class="b-strip is-carousel">${b.items.map(k => `<div>${media(k)}</div>`).join('')}</div></div>`;
      case 'stories': return `<div class="reveal">${title}<div class="b-strip is-stories">${b.items.map(k => `<div>${media(k)}</div>`).join('')}</div></div>`;
      case 'grid': return `<div class="reveal">${title}<div class="b-grid">${grid(b.items, b.cols)}</div></div>`;
      case 'stats': return `<div class="b-stats reveal">${b.items.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>`;
      case 'video': {
        const r = ratio('v:' + b.src), tall = r < 1;
        return `<div class="b-video reveal${tall ? ' is-tall' : ''}">${b.title ? `<div class="b-title"><span>${esc(b.title)}</span></div>` : ''}<div class="b-video__frame" style="aspect-ratio:${r.toFixed(4)}">${vid(b.src, { auto: false })}</div></div>`;
      }
      case 'browser': return `<a class="webcard reveal" href="${b.url}" target="_blank" rel="noopener" data-cursor="Visitar"><div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span>${esc(b.url.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</span></div><div class="browser__view" style="height:clamp(320px,50vw,640px)">${img(b.img)}</div></div><div class="webcard__cap"><b>Ver la web en vivo</b><span class="webcard__url">${esc(b.url)} ↗</span></div></a>`;
    }
    return '';
  };
  const openCase = (id, push = true) => {
    const i = CASES.findIndex(c => c.id === id); if (i < 0) return;
    const c = CASES[i], nx = CASES[(i + 1) % CASES.length];
    $$('video', caseScroll).forEach(v => { vio.unobserve(v); v.pause(); });
    caseEl.style.setProperty('--case-accent', c.accent);
    caseScroll.innerHTML = `
      <header class="case__hero">
        <div class="case__kicker"><b>${String(i + 1).padStart(2, '0')} / ${String(CASES.length).padStart(2, '0')}</b><span>${esc(c.client)}</span><span>${esc(c.year)}</span></div>
        <h2 class="case__title" id="caseTitle">${esc(c.title)}</h2>
        <p class="case__lead">${esc(c.lead)}</p>
      </header>
      <div class="case__cover" style="grid-template-columns:repeat(${(c.hero || [c.cover]).length},1fr)">${(c.hero || [c.cover]).map(k => `<div>${isVid(k) ? vid(vname(k)) : img(k, '', false)}</div>`).join('')}</div>
      <dl class="case__meta">${c.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join('')}</dl>
      <div class="case__blocks">${c.blocks.map(block).join('')}</div>
      <a class="case__next" href="#${nx.id}" data-case="${nx.id}" data-cursor="Siguiente"><small>Siguiente proyecto</small><b>${esc(nx.title)} →</b></a>`;
    caseScroll.scrollTop = 0;
    if (caseEl.hidden) { lastFocus = document.activeElement; caseEl.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => caseEl.classList.add('is-open'))); }
    document.body.classList.add('is-locked');
    watchReveal(caseScroll); watchVideos(caseScroll); bindCursor(caseScroll);
    $('.case__close').focus({ preventScroll: true });
    if (push) history.pushState({ case: id }, '', '#' + id);
  };
  const closeCase = (push = true) => {
    if (caseEl.hidden) return;
    caseEl.classList.remove('is-open'); document.body.classList.remove('is-locked');
    $$('video', caseScroll).forEach(v => v.pause());
    setTimeout(() => { caseEl.hidden = true; caseScroll.innerHTML = ''; }, 900);
    if (push) history.pushState({}, '', '#trabajo');
    lastFocus && lastFocus.focus({ preventScroll: true });
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-case]'); if (!a) return;
    e.preventDefault(); openCase(a.dataset.case);
  });
  $('.case__close').addEventListener('click', () => closeCase());
  addEventListener('popstate', () => { const id = location.hash.slice(1); CASES.some(c => c.id === id) ? openCase(id, false) : closeCase(false); });
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!lb.hidden) return closeLb();
    closeCase();
  });

  /* ---------- lightbox ---------- */
  const lb = $('#lightbox'), lbImg = $('img', lb); let lbList = [], lbI = 0;
  const showLb = () => { lbImg.src = lbList[lbI]; $('.lightbox__count', lb).textContent = `${lbI + 1} / ${lbList.length}`; };
  const closeLb = () => { lb.hidden = true; };
  caseScroll.addEventListener('click', e => {
    const im = e.target.closest('img.zoomable'); if (!im) return;
    const group = im.closest('.b-strip, .b-grid') || im.parentElement;
    lbList = $$('img.zoomable', group).map(x => x.src); lbI = lbList.indexOf(im.src); showLb(); lb.hidden = false;
  });
  $('.lightbox__close').addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  $('.lightbox__prev').addEventListener('click', () => { lbI = (lbI - 1 + lbList.length) % lbList.length; showLb(); });
  $('.lightbox__next').addEventListener('click', () => { lbI = (lbI + 1) % lbList.length; showLb(); });
  addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'ArrowLeft') $('.lightbox__prev').click(); if (e.key === 'ArrowRight') $('.lightbox__next').click(); });

  /* ---------- cursor ---------- */
  const cur = $('.cursor'), curL = $('.cursor__label');
  const cursorReset = () => { cur.classList.remove('is-big'); curL.textContent = ''; };
  function bindCursor(root) {
    if (!fine) return;
    $$('[data-cursor]', root).forEach(el => {
      el.addEventListener('mouseenter', () => { if (!el.dataset.cursor) return; curL.textContent = el.dataset.cursor; cur.classList.add('is-big'); });
      el.addEventListener('mouseleave', cursorReset);
    });
  }
  if (fine) {
    let cx = 0, cy = 0, x = 0, y = 0;
    addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; cur.classList.add('is-on'); });
    document.addEventListener('mouseleave', () => cur.classList.remove('is-on'));
    const loop = () => { x += (cx - x) * .22; y += (cy - y) * .22; cur.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`; requestAnimationFrame(loop); };
    loop();
  }

  /* ---------- init ---------- */
  watchReveal(document); watchVideos(document); bindCursor(document);
  const start = location.hash.slice(1);
  if (CASES.some(c => c.id === start)) setTimeout(() => openCase(start, false), reduced ? 0 : 1200);
})();
