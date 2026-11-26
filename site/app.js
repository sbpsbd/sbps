(() => {
  const languageButton = document.getElementById('languageToggle');
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  let language = localStorage.getItem('sbps-language') || 'en';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language;
    document.body.classList.toggle('bn', language === 'bn');
    document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    languageButton.textContent = language === 'en' ? 'বাংলা' : 'English';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Bangla' : 'Switch to English');
    document.title = language === 'en' ? 'South Bangla Polli Sangstha | SBPS' : 'সাউথ বাংলা পল্লী সংস্থা | এসবিপিএস';
    localStorage.setItem('sbps-language', language);
  }

  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'bn' : 'en'));
  setLanguage(language);
  document.getElementById('year').textContent = new Date().getFullYear();

  menuButton.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.textContent = opened ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));

  document.getElementById('cidForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.getElementById('cidInput').value.trim();
    const message = document.getElementById('cidMessage');
    if (!/^(bafy[a-z2-7]{20,}|Qm[1-9A-HJ-NP-Za-km-z]{44})$/.test(value)) {
      message.textContent = language === 'en' ? 'Enter a valid-looking IPFS CID (CIDv0 or CIDv1).' : 'সঠিক IPFS CID লিখুন (CIDv0 অথবা CIDv1)।';
      return;
    }
    window.open('https://ipfs.io/ipfs/' + encodeURIComponent(value), '_blank', 'noopener,noreferrer');
    message.textContent = language === 'en' ? 'Opened the CID in a public IPFS gateway.' : 'পাবলিক IPFS গেটওয়েতে CID খোলা হয়েছে।';
  });

  document.getElementById('fileInput').addEventListener('change', async (event) => {
    const file = event.target.files && event.target.files[0];
    const output = document.getElementById('hashOutput');
    if (!file) return;
    if (!window.crypto || !crypto.subtle) {
      output.textContent = 'SHA-256: Secure browser context required (HTTPS or localhost).';
      return;
    }
    output.textContent = language === 'en' ? 'Calculating fingerprint…' : 'ফিঙ্গারপ্রিন্ট তৈরি হচ্ছে…';
    try {
      const digest = await crypto.subtle.digest('SHA-256', await file.arrayBuffer());
      const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
      output.textContent = 'SHA-256: ' + hash;
    } catch (error) {
      output.textContent = language === 'en' ? 'Could not calculate the fingerprint.' : 'ফিঙ্গারপ্রিন্ট তৈরি করা যায়নি।';
    }
  });
})();