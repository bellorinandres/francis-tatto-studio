(() => {
  const CONFIG = {
    whatsapp: '5541996122540',
    instagram: '@francis.tattoo',
    tiktok: '@francis.tattoo',
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
  document.querySelectorAll('#whatsapp-link, #whatsapp-link-footer').forEach((el) => {
    el.href = whatsappUrl;
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

    const linhas = ['Oi, Francis! Vim pelo site e queria agendar uma tatuagem.'];
    if (ideia) linhas.push('Ideia: ' + ideia);
    if (local) linhas.push('Local do corpo: ' + local);
    if (tamanho) linhas.push('Tamanho aproximado: ' + tamanho + ' cm');
    if (referencia) linhas.push('Referências: ' + referencia);
    if (primeira !== null) linhas.push('Primeira tatuagem: ' + (primeira ? 'sim' : 'não'));

    const mensagem = linhas.join('\n');
    window.open(whatsappUrl + '?text=' + encodeURIComponent(mensagem), '_blank');
  });
})();
