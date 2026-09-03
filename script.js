(() => {
  const CONFIG = {
    whatsapp: '5541999006265',
    instagram: '@francis.tattoo',
    tiktok: '@francis.tattoo',
  };

  const isES = document.documentElement.lang.toLowerCase().startsWith('es');
  const T = isES
    ? {
        greeting: '¡Hola, Francis! Vengo desde la web y quería reservar un tatuaje.',
        idea: 'Idea', place: 'Zona del cuerpo', size: 'Tamaño aproximado', unit: 'cm',
        refs: 'Referencias', first: 'Primer tatuaje', yes: 'sí', no: 'no',
      }
    : {
        greeting: 'Oi, Francis! Vim pelo site e queria agendar uma tatuagem.',
        idea: 'Ideia', place: 'Local do corpo', size: 'Tamanho aproximado', unit: 'cm',
        refs: 'Referências', first: 'Primeira tatuagem', yes: 'sim', no: 'não',
      };

  const numero = CONFIG.whatsapp.replace(/\D/g, '');
  const whatsappUrl = 'https://wa.me/' + numero;
  const instagramUrl = 'https://instagram.com/' + CONFIG.instagram.replace(/^@/, '');
  const tiktokUrl = 'https://tiktok.com/@' + CONFIG.tiktok.replace(/^@/, '');

  document.querySelectorAll('#instagram-link, #instagram-link-footer').forEach((el) => {
    el.href = instagramUrl;
    if (el.id === 'instagram-link-footer') el.textContent = 'Instagram ' + CONFIG.instagram;
  });
  document.querySelectorAll('#tiktok-link, #tiktok-link-footer').forEach((el) => {
    el.href = tiktokUrl;
    if (el.id === 'tiktok-link-footer') el.textContent = 'TikTok ' + CONFIG.tiktok;
  });
  document.querySelectorAll('#whatsapp-link, #whatsapp-link-footer, #whatsapp-link-float').forEach((el) => {
    el.href = whatsappUrl;
  });

  const navToggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav-links a').forEach((el) => {
    el.addEventListener('click', () => { if (navToggle) navToggle.checked = false; });
  });

  const form = document.getElementById('agenda-form');
  const simBtn = document.getElementById('fr-primeira-sim');
  const naoBtn = document.getElementById('fr-primeira-nao');
  let primeira = null;

  simBtn.addEventListener('click', () => {
    primeira = true;
    simBtn.setAttribute('aria-pressed', 'true');
    naoBtn.setAttribute('aria-pressed', 'false');
  });
  naoBtn.addEventListener('click', () => {
    primeira = false;
    naoBtn.setAttribute('aria-pressed', 'true');
    simBtn.setAttribute('aria-pressed', 'false');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ideia = document.getElementById('fr-ideia').value.trim();
    const local = document.getElementById('fr-local').value.trim();
    const tamanho = document.getElementById('fr-tam').value.trim();
    const referencia = document.getElementById('fr-ref').value.trim();

    const linhas = [T.greeting];
    if (ideia) linhas.push(T.idea + ': ' + ideia);
    if (local) linhas.push(T.place + ': ' + local);
    if (tamanho) linhas.push(T.size + ': ' + tamanho + ' ' + T.unit);
    if (referencia) linhas.push(T.refs + ': ' + referencia);
    if (primeira !== null) linhas.push(T.first + ': ' + (primeira ? T.yes : T.no));

    const mensagem = linhas.join('\n');
    window.open(whatsappUrl + '?text=' + encodeURIComponent(mensagem), '_blank');
  });
})();
