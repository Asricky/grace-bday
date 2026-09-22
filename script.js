'use strict';

// Personalisation: foto, cerita perjalanan, dan ucapan untuk Grace.
const CONFIG = {
  photos: [
    { src: 'assets/Gegehh/little grace energy.jpeg', art: 'daisy', caption: 'Little Grace energy', color: '#e8ebd9' },
    { src: 'assets/Gegehh/sunshine.jpeg', art: 'sun', caption: 'A pocket of sunshine', color: '#f5edc9' },
    { src: 'assets/Gegehh/just being you.jpeg', art: 'butterfly', caption: 'Just being you', color: '#e3e9d9' },
    { src: 'assets/Gegehh/silly lttle days.jpeg', art: 'lemon', caption: 'The silly little days', color: '#f5eccb' },
    { src: 'assets/Gegehh/growin glowing.jpeg', art: 'sprig', caption: 'Growing, glowing', color: '#e7eadb' },
    { src: 'assets/Gegehh/more memo.jpeg', art: 'bouquet', caption: 'More memories to come', color: '#f2eedc' },
  ],
  flowers: [
    { x: 28, y: 27, label: 'Doa untuk kebahagiaan', message: 'Semoga selalu ada alasan kecil buat ketawa setiap hari ya geh. Bahkan dari hal yang paling receh. ☀' },
    { x: 48, y: 17, label: 'Doa untuk mimpi', message: 'Semoga mimpi-mimpimu ketemu jalannya. Satu langkah kecil dulu juga gapapaa. <svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>' },
    { x: 68, y: 29, label: 'Doa untuk keberanian', message: 'Berani coba hal baru ya. Kalau belum berhasil, take some rest and try it another time. I got ur back! ✿' },
    { x: 39, y: 43, label: 'Doa untuk kesehatan', message: 'Sehat terus, cukup istirahat, dan jangan telat makan. kurang-kurangin begadangnya yeh. ☺' },
    { x: 61, y: 44, label: 'Doa untuk diri sendiri', message: 'Tumbuh dengan caramu sendiri. ga perlu balapan sama siapa-siapa. Proud of you, geh! <svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>' },
  ],
  journey: [
    // Foto milestone menggunakan koleksi assets/journey/.
    { chapter: 'THE BEGINNING', photo: 'assets/journey/01-kecil.jpeg', title: 'Dulu masih kecil banget', text: 'Dari kamu kecil sampai sekarang, ternyata banyak juga ye cerita yang dikumpulin.' },
    { chapter: 'THE LITTLE ADVENTURES', photo: 'assets/journey/02-cerita.jpeg', title: 'Ada aja ceritanya', text: 'Dari hal baru yang dicoba sampai cerita random sehari-hari. Yang receh-receh gini justru paling suka keinget.' },
    { chapter: 'THE GROWING CHAPTER', photo: 'assets/journey/03-tumbuh.jpeg', title: 'Makin gede, makin jadi diri sendiri', text: 'Mulai tahu apa yang disuka, punya mimpi sendiri, dan pelan-pelan cari jalannya. Ga harus langsung tahu semuanya kok.' },
    { chapter: 'RIGHT HERE, RIGHT NOW', photo: 'assets/journey/04-sekarang.jpeg', title: 'Take ur time for today!', text: 'Hari ini istirahat dulu dari mikirin yang ribet-ribet. Makan enak, ketawa banyak, terus buka kado hehe.' },
    { chapter: 'TO BE CONTINUED', photo: 'assets/journey/05-petualangan.jpeg', title: 'Masih banyak serunya nanti', text: 'Masih banyak tempat buat didatengin dan hal baru buat dicoba. Satu-satu aja, yang penting dinikmatin.' },
  ],
  wishes: [
    // Isi ucapan keluarga bisa diperbarui lewat text masing-masing pengirim.
    // Foto keluarga disimpan di assets/letters/.
    { sender: 'Ayah', photo: 'assets/letters/ayah.jpeg', subtitle: 'PESAN KECIL DARI AYAH', text: 'Selamat ulang tahun, Grace! Sehat selalu..semoga apa yang sedang Grace usahakan dilancarkan, dan kamu semakin berani mengejar cita-citamu.Tuhan Yesus Memberkati.' },
    { sender: 'Mama', photo: 'assets/letters/mama.jpeg', subtitle: 'ADA TITIPAN DARI MAMA', text: 'Waktu begitu cepet berlalu ya Grace..doa dan harapan Ibu disetiap langkahmu selalu dilimpahi kesehatan, kesuksesan , keberuntungan dan keselamatan serta memberi manfaat dimanapun kamu berada..Selamat ulangtahun  selamat mensyukuri pemyertaan  Tuhan Yesus..amin amin amin😘💝' },
    { sender: 'Kakak', photo: 'assets/letters/kakak.jpeg', subtitle: 'DARI TEMAN RIBUTMU', text: 'HBD, Gegehhh! Makin gede aja dah km. Semoga makin banyak hal seru yang kamu temuin tahun ini, dan satu-satu yang kamu pengenin bisa kesampaian. Just call me klo kamu butuh apa-apa yea, Enjoy your day and God Bless u! *pls ganti nama kontak WA ku huhu' },
    { sender: 'Eki', photo: 'assets/letters/eki.jpeg', subtitle: 'SATU LAGI, DARI EKI', text: 'Happy birthday gegehh, semogaa kamu di umur yg dibaru ini bisa tetap menjadi gegeh yang baik dan ngober. God bless you gehh' },
  ],
  surprise: {
    ticketImage: 'assets/gifts/candlelight-ticket.png',
  },
  tracks: [
    { title: 'Morning in the Garden', subtitle: 'Soft keys · a fresh little start', notes: [60,64,67,72,71,67,64,62,65,69,72,76,74,69,65,62], pace: .48 },
    { title: 'A Pocket of Sunshine', subtitle: 'Little chimes · a brighter afternoon', notes: [72,76,79,76,74,71,67,71,69,72,76,79,77,74,72,67], pace: .37 },
    { title: 'Room to Bloom', subtitle: 'Gentle bells · take your time', notes: [65,69,72,76,72,69,67,64,60,64,67,71,67,64,62,60], pace: .65 },
  ],
};

const $ = (selector) => document.querySelector(selector);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const game = { first: null, locked: false, pairs: 0, moves: 0, timer: null, skipTimer: null, skipAvailableAt: 0 };
const openedWishes = new Set();
const symbols = ['daisy', 'sun', 'butterfly', 'lemon', 'sprig', 'watering-can'];
const symbolNames = { daisy: 'Bunga daisy', sun: 'Matahari', butterfly: 'Kupu-kupu', lemon: 'Lemon', sprig: 'Daun', 'watering-can': 'Penyiram bunga' };
let mainStarted = false;
let modalTrigger = null;
let surpriseTimer = null;

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function startGame(newVisit = false) {
  clearTimeout(game.timer);
  clearTimeout(game.skipTimer);
  Object.assign(game, { first: null, locked: false, pairs: 0, moves: 0 });
  if (newVisit || !game.skipAvailableAt) game.skipAvailableAt = Date.now() + 30_000;
  $('#skip-game').classList.add('hidden');
  $('#skip-hint').classList.remove('hidden');
  $('#skip-ready').textContent = '';
  updateSkipOption();
  $('#pairs-count').textContent = '0';
  $('#moves-count').textContent = '0';
  $('#unlock-gift').classList.add('hidden');
  $('#game-status').innerHTML = '<svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg> Sedikit rasa penasaran, banyak kejutan.';
  $('#memory-grid').replaceChildren();
  shuffle([...symbols, ...symbols]).forEach((symbol, index) => {
    const card = document.createElement('button');
    card.className = 'memory-card';
    card.dataset.symbol = symbol;
    card.dataset.index = index + 1;
    card.setAttribute('aria-label', `Balik kartu ${index + 1}`);
    card.setAttribute('aria-pressed', 'false');
    card.innerHTML = `<span class="card-inner"><span class="card-back" aria-hidden="true"><span><svg class="card-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" focusable="false" aria-hidden="true"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg></span></span><span class="card-front" aria-hidden="true"><img src="assets/${symbol}.svg" alt="" /></span></span>`;
    card.addEventListener('click', () => flipCard(card));
    $('#memory-grid').append(card);
  });
}

function flipCard(card) {
  if (game.locked || card === game.first || card.classList.contains('matched')) return;
  card.classList.add('flipped');
  card.setAttribute('aria-pressed', 'true');
  card.setAttribute('aria-label', `${symbolNames[card.dataset.symbol]}, kartu ${card.dataset.index}`);
  if (!game.first) { game.first = card; return; }
  game.moves++;
  $('#moves-count').textContent = game.moves;
  const first = game.first;
  game.first = null;
  if (first.dataset.symbol === card.dataset.symbol) {
    [first, card].forEach((item) => {
      item.classList.add('matched');
      item.disabled = true;
      item.setAttribute('aria-label', `${symbolNames[item.dataset.symbol]}, sudah cocok`);
    });
    game.pairs++;
    $('#pairs-count').textContent = game.pairs;
    $('#game-status').innerHTML = ['','Satu bunga ketemu. Keep going! ✿','Dua pasang! Mulai jago nih.','Setengah jalan, Grace! ☀','Sedikit lagi kebuka kejutannya.','Satu pasangan terakhir! <svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>','Yay, semua ketemu! Kejutanmu sudah siap. ✿'][game.pairs];
    if (game.pairs === 6) {
      clearTimeout(game.skipTimer);
      $('#skip-game').classList.add('hidden');
      $('#skip-hint').classList.add('hidden');
      $('#unlock-gift').classList.remove('hidden');
      celebrate(35);
      game.timer = setTimeout(() => $('#unlock-gift').focus({ preventScroll: true }), 250);
    }
  } else {
    game.locked = true;
    game.timer = setTimeout(() => {
      [first, card].forEach((item) => {
        item.classList.remove('flipped');
        item.setAttribute('aria-pressed', 'false');
        item.setAttribute('aria-label', `Balik kartu ${item.dataset.index}`);
      });
      game.locked = false;
    }, 950);
  }
}

function updateSkipOption() {
  if ($('#game-screen').classList.contains('hidden') || game.pairs === 6) return;
  const remaining = game.skipAvailableAt - Date.now();
  if (remaining > 0) {
    game.skipTimer = setTimeout(updateSkipOption, remaining);
    return;
  }
  $('#skip-hint').classList.add('hidden');
  $('#skip-game').classList.remove('hidden');
  $('#skip-ready').textContent = 'Boleh lanjut main, atau lewati puzzle lewat tombol di bawah.';
}
function showGiftScreen() {
  clearTimeout(game.timer);
  clearTimeout(game.skipTimer);
  $('#game-screen').classList.add('hidden');
  $('#gift-screen').classList.remove('hidden');
  window.scrollTo(0, 0);
  $('#gift-title').focus({ preventScroll: true });
}
$('#restart-game').addEventListener('click', () => startGame());
$('#unlock-gift').addEventListener('click', () => {
  if (game.pairs !== 6) return;
  showGiftScreen();
});
$('#skip-game').addEventListener('click', () => {
  if (Date.now() < game.skipAvailableAt) return;
  showGiftScreen();
});
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    clearTimeout(game.skipTimer);
    updateSkipOption();
  }
});
$('#giftbox').addEventListener('click', () => {
  $('#giftbox').disabled = true;
  $('#giftbox').classList.add('open');
  celebrate(55);
  startMusic();
  setTimeout(showMain, reducedMotion ? 0 : 1000);
});

function showMain() {
  $('#gift-screen').classList.add('hidden');
  $('#main-content').classList.remove('hidden');
  window.scrollTo(0, 0);
  $('#hero h1').focus({ preventScroll: true });
  if (!mainStarted) {
    mainStarted = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }
}

CONFIG.flowers.forEach((flower, i) => {
  const button = document.createElement('button');
  button.className = 'flower-hotspot';
  button.style.left = `${flower.x}%`;
  button.style.top = `${flower.y}%`;
  button.textContent = '+';
  button.setAttribute('aria-label', flower.label);
  button.addEventListener('click', () => {
    document.querySelectorAll('.flower-hotspot').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    $('#bouquet-message').innerHTML = flower.message;
  });
  $('#flower-buttons').append(button);
});

CONFIG.photos.forEach((photo, i) => {
  const button = document.createElement('button');
  button.className = 'polaroid';
  button.style.setProperty('--rotation', `${[-4,2,-3,3,-2,4][i]}deg`);
  button.style.setProperty('--card-color', photo.color);
  button.innerHTML = `<div class="photo-image ${photo.src ? 'real-photo' : ''}"><img src="${photo.src || `assets/${photo.art}.svg`}" alt="${photo.src ? photo.caption : `Ilustrasi sementara: ${photo.caption}`}" loading="lazy" />${photo.src ? '' : '<span>A MEMORY GOES HERE</span>'}</div><p>${photo.caption}</p><small>GRACE'S LITTLE MOMENTS / 0${i + 1}</small>`;
  button.addEventListener('click', () => {
    openModal(`<img src="${photo.src || `assets/${photo.art}.svg`}" alt="${photo.caption}" /><span class="section-kicker">LITTLE MOMENT 0${i + 1}</span><h2>${photo.caption}</h2>${photo.src ? '' : '<p>Satu tempat kecil untuk kenangan Grace.<br />Foto keseruannya menyusul, ya! ✿</p>'}`, button);
  });
  $('#photo-grid').append(button);
});

CONFIG.journey.forEach((item, index) => {
  const article = document.createElement('article');
  article.className = 'journey-item reveal';
  article.innerHTML = `<small>${item.chapter}</small><h3>${item.title}</h3><p>${item.text}</p><button class="journey-photo" aria-label="Lihat foto ${item.title}"><span class="journey-photo-placeholder"><img src="assets/${['daisy','sun','sprig','bouquet','butterfly'][index]}.svg" alt="" loading="lazy" /><span>cerita Gegeh, chapter 0${index + 1}</span><small>satu foto, banyak ceritanya ✿</small></span><span class="journey-photo-caption">LITTLE MEMORY / 0${index + 1} <span>↗</span></span></button>`;
  const photoButton = article.querySelector('.journey-photo');
  if (item.photo) {
    const photo = new Image();
    photo.className = 'journey-real-photo';
    photo.alt = item.title;
    // This image is hidden until loaded; native lazy loading can stall it.
    photo.loading = 'eager';
    photo.addEventListener('load', () => photoButton.classList.add('has-photo'));
    photo.addEventListener('error', () => photo.remove());
    photoButton.prepend(photo);
    photo.src = item.photo;
  }
  photoButton.addEventListener('click', () => {
    const source = photoButton.classList.contains('has-photo') ? item.photo : `assets/${['daisy','sun','sprig','bouquet','butterfly'][index]}.svg`;
    openModal(`<img src="${source}" alt="${item.title}" /><span class="section-kicker">${item.chapter}</span><h2>${item.title}</h2><p>${item.text}</p>`, photoButton);
  });
  $('#journey-list').append(article);
});

CONFIG.wishes.forEach((wish, i) => {
  const button = document.createElement('button');
  button.className = 'wish-card';
  button.innerHTML = `<span class="letter-stamp" aria-hidden="true">✿</span><span class="envelope" aria-hidden="true">✉</span><span class="letter-to">untuk Gegeh, dari</span><strong>${wish.sender}</strong><small>${wish.subtitle}</small>`;
  button.addEventListener('click', () => {
    openedWishes.add(i);
    button.classList.add('opened');
    $('#wish-count').textContent = openedWishes.size;
    openModal(`<figure class="letter-photo"><div class="letter-photo-placeholder"><img src="assets/daisy.svg" alt="" /><span>Gegeh & ${wish.sender}</span><small>tempat buat satu kenangan bareng ✿</small></div></figure><span class="section-kicker">${wish.subtitle}</span><h2>Dear Gegeh,</h2><p class="letter-copy">${wish.text}</p><p class="modal-signature">— ${wish.sender} ✿</p>`, button);
    if (wish.photo) {
      const photo = new Image();
      photo.alt = `Kenangan Grace bersama ${wish.sender}`;
      photo.className = 'letter-real-photo';
      photo.addEventListener('load', () => {
        if (photo.isConnected) photo.closest('figure').classList.add('has-photo');
      });
      photo.addEventListener('error', () => photo.remove());
      $('.letter-photo').append(photo);
      photo.src = wish.photo;
    }
  });
  $('#wish-grid').append(button);
});
$('#wish-total').textContent = CONFIG.wishes.length;

function openModal(content, trigger) {
  clearTimeout(surpriseTimer);
  modalTrigger = trigger;
  $('#detail-content').innerHTML = content;
  $('#detail-modal').showModal();
  document.body.style.overflow = 'hidden';
}
$('#detail-modal .close-modal').addEventListener('click', () => $('#detail-modal').close());
$('#detail-modal').addEventListener('click', (event) => {
  if (event.target !== $('#detail-modal')) return;
  const rect = $('#detail-modal').getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) $('#detail-modal').close();
});
$('#detail-modal').addEventListener('close', () => {
  // A queued close from an earlier popup must not cancel a newly opened wish.
  if ($('#detail-modal').open) return;
  clearTimeout(surpriseTimer);
  if (!$('#surprise-modal').open) {
    document.body.style.overflow = '';
    modalTrigger?.focus({ preventScroll: true });
  }
});

// Original instrumental miniatures, synthesized locally. No external audio requests.
const music = { context: null, master: null, timer: null, playing: false, track: 0, note: 0, nextTime: 0, voices: new Set(), changing: false };
function playNote(midi, time, length) {
  const oscillator = music.context.createOscillator();
  const gain = music.context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(.17, time + .025);
  gain.gain.exponentialRampToValueAtTime(.001, time + length);
  oscillator.connect(gain).connect(music.master);
  oscillator.start(time);
  oscillator.stop(time + length + .05);
  music.voices.add(oscillator);
  oscillator.onended = () => { music.voices.delete(oscillator); oscillator.disconnect(); gain.disconnect(); };
}
function scheduleMusic() {
  if (!music.playing) return;
  const track = CONFIG.tracks[music.track];
  // Avoid scheduling a large backlog after a tab was backgrounded.
  if (music.nextTime < music.context.currentTime - .2) music.nextTime = music.context.currentTime + .04;
  while (music.nextTime < music.context.currentTime + .2) {
    playNote(track.notes[music.note % track.notes.length], music.nextTime, track.pace * 2.8);
    if (music.note % 4 === 0) playNote(track.notes[music.note % track.notes.length] - 12, music.nextTime, track.pace * 4);
    music.note++;
    music.nextTime += track.pace;
  }
  music.timer = setTimeout(scheduleMusic, 80);
}
async function startMusic() {
  if (music.changing || music.playing) return;
  music.changing = true;
  try {
    if (!music.context) {
      music.context = new (window.AudioContext || window.webkitAudioContext)();
      music.master = music.context.createGain();
      music.master.gain.value = .7;
      music.master.connect(music.context.destination);
    }
    await music.context.resume();
    music.playing = true;
    music.nextTime = music.context.currentTime + .05;
    scheduleMusic();
    updateMusic();
  } catch {
    $('#floating-music').title = 'Musik belum bisa diputar. Coba tekan lagi ya.';
  } finally { music.changing = false; }
}
function pauseMusic() {
  music.playing = false;
  clearTimeout(music.timer);
  music.voices.forEach((voice) => { try { voice.stop(); } catch {} });
  music.voices.clear();
  updateMusic();
}
function toggleMusic() { if (music.playing) pauseMusic(); else startMusic(); }
function updateMusic() {
  const track = CONFIG.tracks[music.track];
  $('#floating-music').setAttribute('aria-label', music.playing ? 'Jeda musik' : 'Putar musik');
  $('#floating-music').setAttribute('aria-pressed', String(music.playing));
  $('#floating-music').title = track.title;
  $('#floating-music span').textContent = music.playing ? 'sound on' : 'sound off';
}
$('#floating-music').addEventListener('click', toggleMusic);

function celebrate(count = 75) {
  if (reducedMotion) return;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.innerHTML = ['✿', '<svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>', '●', '<svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>'][i % 4];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.color = ['#e5c653', '#9ba97d', '#fff9e2', '#60794f'][i % 4];
    piece.style.setProperty('--duration', `${2.5 + Math.random() * 2}s`);
    piece.style.setProperty('--drift', `${Math.random() * 240 - 120}px`);
    piece.style.animationDelay = `${Math.random() * .4}s`;
    $('#confetti').append(piece);
    setTimeout(() => piece.remove(), 5100);
  }
}
$('#celebrate-btn').addEventListener('click', () => {
  celebrate();
  openModal('<img class="modal-flower" src="assets/daisy.svg" alt="" /><span class="section-kicker">MAKE A WISH, GEGEH</span><h2>Happy birthday,<br /><em>Gegeh!</em></h2><p>Merem dulu sebentar, terus make a wish.<br />Yang banyak juga boleh kok, hehe.</p><p class="modal-signature">Psst... jangan ditutup dulu, ada sesuatu nih <svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg></p>', $('#celebrate-btn'));
  surpriseTimer = setTimeout(() => {
    if (!$('#detail-modal').open) return;
    renderTicket();
    $('#surprise-modal').showModal();
    $('#surprise-title').focus({ preventScroll: true });
    celebrate(45);
  }, 5000);
});

function renderTicket() {
  const ticket = CONFIG.surprise;
  $('#surprise-modal').classList.remove('second-gift');
  $('#surprise-content').innerHTML = `<span class="section-kicker">SURPRISE 01 / A NIGHT TO REMEMBER</span><h2 id="surprise-title" tabindex="-1">Ciee dapet <em>tiket konser</em></h2><p>Tadaaa! Udah dibeliin tiket konser dari Ibu buat kamu.<br />Semoga suka ya! nanti nonton sama aku + eki <svg class="star-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg></p><div class="ticket-frame"><p class="ticket-image-status" role="status">Lagi buka gambar tiketnya…</p></div><a class="ticket-original hidden" target="_blank" rel="noopener">Lihat tiket ukuran penuh ↗</a><p class="ticket-note">Simpen tanggalnya ya. awas aja klo sibuk</p><button id="next-surprise" class="primary-button">Psst... masih ada satu lagi <span>↗</span></button>`;
  const frame = $('.ticket-frame');
  const originalLink = $('.ticket-original');
  const ticketImage = new Image();
  ticketImage.alt = 'Tiket Candlelight: Ed Sheeran Bertemu Coldplay, Zona C, Sabtu 12 Desember pukul 18.30, GPIB Immanuel Jakarta';
  ticketImage.className = 'ticket-image';
  ticketImage.addEventListener('load', () => {
    if (!frame.isConnected) return;
    frame.replaceChildren(ticketImage);
    originalLink.href = ticket.ticketImage;
    originalLink.classList.remove('hidden');
  });
  ticketImage.addEventListener('error', () => {
    if (!frame.isConnected) return;
    frame.querySelector('.ticket-image-status').textContent = 'Gambar tiketnya belum bisa dibuka. Coba lagi sebentar ya.';
  });
  ticketImage.src = ticket.ticketImage;
  $('#next-surprise').addEventListener('click', renderSecondGift);
  $('#surprise-modal').scrollTop = 0;
}

function renderSecondGift() {
  $('#surprise-modal').classList.add('second-gift');
  $('#surprise-content').innerHTML = `<span class="section-kicker">SURPRISE 02 / A LITTLE TREASURE HUNT</span><div class="closet-illustration" aria-hidden="true"><span>✿</span><i></i><b>for Gegeh</b></div><h2 id="surprise-title" tabindex="-1">Eh, belum <em>selesai!</em></h2><p>Masih ada hadiah kedua buat kamu, hehe.<br />Coba nanti cek <strong>di dalam lemari kamarmu ya</strong> ya!</p><p class="modal-signature">Selamat bongkar-bongkar. Happy birthday, geh! ✿</p><button id="back-to-ticket" class="text-button">← Lihat tiketnya lagi</button>`;
  $('#back-to-ticket').addEventListener('click', () => {
    renderTicket();
    $('#surprise-title').focus({ preventScroll: true });
  });
  $('#surprise-modal').scrollTop = 0;
  $('#surprise-title').focus({ preventScroll: true });
}
$('#close-surprise').addEventListener('click', () => $('#surprise-modal').close());
$('#surprise-modal').addEventListener('click', (event) => {
  if (event.target !== $('#surprise-modal')) return;
  const rect = $('#surprise-modal').getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) $('#surprise-modal').close();
});
$('#surprise-modal').addEventListener('close', () => {
  if ($('#surprise-modal').open) return;
  clearTimeout(surpriseTimer);
  $('#detail-modal').close();
  document.body.style.overflow = '';
  $('#celebrate-btn').focus({ preventScroll: true });
});
$('#replay-game').addEventListener('click', () => {
  clearTimeout(surpriseTimer);
  pauseMusic();
  $('#confetti').replaceChildren();
  $('#main-content').classList.add('hidden');
  $('#game-screen').classList.remove('hidden');
  $('#giftbox').classList.remove('open');
  $('#giftbox').disabled = false;
  startGame(true);
  window.scrollTo(0, 0);
  $('#restart-game').focus({ preventScroll: true });
});
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  $('#scroll-progress').style.width = `${total > 0 ? window.scrollY / total * 100 : 0}%`;
}, { passive: true });
window.addEventListener('pagehide', pauseMusic);
startGame();
