// ── DATA ──
// techTags  = code/stack (shown in accent colour)
// typeTags  = descriptive labels (shown muted) — leave [] if none
// screenshot = path to image, e.g. 'assets/images/bark-and-brush.png'
//              If the file is missing the modal falls back to the emoji.

const folders = {
  work: {
    label: 'Selected Work',
    projects: [
      {
        emoji: '🐾',
        name: 'Bark & Brush',
        year: '2025',
        techTags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django'],
        desc: 'My third Milestone Project for Code Institute Full-Stack Software Development. A full-stack web application built with Django.',
        screenshot: 'assets/images/bark-and-brush.png',
        live: 'https://bark-and-brush-dba8d291cd80.herokuapp.com/',
        github: 'https://github.com/ssannejohansson/MP3-bark-and-brush'
      },
      {
        emoji: '🐕',
        name: 'Prickebo',
        year: '2026',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        typeTags: [],
        desc: 'A website for a dog breeding business, designed to present the breed, the dogs and contact information in a clean and inviting way.',
        screenshot: 'assets/images/prickebo.png',
        live: 'https://ssannejohansson.github.io/prickebo/',
        github: 'https://github.com/ssannejohansson/prickebo.git'
      },
      {
        emoji: '💬',
        name: 'Guess the Word',
        year: '2025',
        techTags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
        desc: 'My second Milestone Project for Code Institute Full-Stack Software Development. An interactive word guessing game.',
        screenshot: 'assets/images/guess-the-word.png',
        live: 'https://ssannejohansson.github.io/MP2-guess-the-word/',
        github: 'https://ssannejohansson.github.io/MP2-guess-the-word/'
      },
      {
        emoji: '🐱',
        name: 'Whiskers of Wisdom',
        year: '2025',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        desc: 'My first Milestone Project for Code Institute Full-Stack Software Development. A responsive front-end website.',
        screenshot: 'assets/images/whiskers-of-wisdom.png',
        live: 'https://ssannejohansson.github.io/MS1-adopt-a-senior/',
        github: 'https://ssannejohansson.github.io/MS1-adopt-a-senior/'
      },
      {
        emoji: '💐',
        name: 'Bukettfabriken',
        year: '2026',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        desc: 'A concept website for a flower shop with strong visual presence and an intuitive user experience.',
        screenshot: 'assets/images/bukettfabriken.png',
        live: 'https://ssannejohansson.github.io/bukettfabriken/',
        github: 'https://ssannejohansson.github.io/bukettfabriken/'
      },
      {
        emoji: '🍹',
        name: 'Happy Hour',
        year: '2026',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        desc: 'A concept website for a bar and restaurant focused on atmosphere, menu presentation, and intuitive contact flow.',
        screenshot: 'assets/images/happyhour.png',
        live: 'https://ssannejohansson.github.io/happyhour/',
        github: 'https://ssannejohansson.github.io/happyhour/'
      },
      {
        emoji: '🎬',
        name: 'Review Room',
        year: '2026',
        techTags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Firebase Auth', 'REST API', 'Docker'],
        typeTags: [],
        desc: 'A full-stack TV show review platform where users can browse shows, read reviews, and log in to write their own. Note: the live link shows the static demo version.',
        screenshot: 'assets/images/ReviewRoom.png',
        live: 'https://ssannejohansson.github.io/reviewRoom-demo/',
        github: 'https://github.com/ssannejohansson/ReviewRoom.git'
      },
      {
        emoji: '🌸',
        name: 'Luna Home',
        year: '2026',
        techTags: ['HTML', 'CSS', 'JavaScript'],
        typeTags: [],
        desc: 'A curated home décor e-commerce demo site featuring category-based product browsing, wishlist and checkout functionality, and a clean, editorial brand identity.',
        screenshot: 'assets/images/luna-home.png',
        live: 'https://ssannejohansson.github.io/luna-home/',
        github: 'https://github.com/ssannejohansson/luna-home'
      }
    ]
  },
  fullstack: {
    label: 'Full-Stack',
    projects: [
      {
        emoji: '🐾',
        name: 'Bark & Brush',
        year: '2024',
        techTags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django'],
        desc: 'My third Milestone Project for Code Institute Full-Stack Web Application Development. A full-stack web application built with Django.',
        screenshot: 'assets/images/bark-and-brush.png',
        live: 'https://bark-and-brush-dba8d291cd80.herokuapp.com/',
        github: 'https://github.com/ssannejohansson/MP3-bark-and-brush'
      },
      {
        emoji: '💬',
        name: 'Guess the Word',
        year: '2024',
        techTags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
        desc: 'My second Milestone Project for Code Institute Full-Stack Web Application Development. An interactive word guessing game.',
        screenshot: 'assets/images/guess-the-word.png',
        live: 'https://ssannejohansson.github.io/MP2-guess-the-word/',
        github: 'https://ssannejohansson.github.io/MP2-guess-the-word/'
      },
      {
        emoji: '🐱',
        name: 'Whiskers of Wisdom',
        year: '2023',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        desc: 'My first Milestone Project for Code Institute Full-Stack Web Application Development. A responsive front-end website.',
        screenshot: 'assets/images/whiskers-of-wisdom.png',
        live: 'https://ssannejohansson.github.io/MS1-adopt-a-senior/',
        github: 'https://ssannejohansson.github.io/MS1-adopt-a-senior/'
      },
      {
        emoji: '🎬',
        name: 'Review Room',
        year: '2026',
        techTags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Firebase Auth', 'REST API', 'Docker'],
        typeTags: [],
        desc: 'A full-stack TV show review platform where users can browse shows, read reviews, and log in to write their own. Note: the live link shows the static demo version.',
        screenshot: 'assets/images/ReviewRoom.png',
        live: 'https://ssannejohansson.github.io/reviewRoom-demo/',
        github: 'https://github.com/ssannejohansson/ReviewRoom.git'
      }
    ]
  },
  frontend: {
    label: 'Front-End',
    projects: [
      {
        emoji: '💐',
        name: 'Bukettfabriken',
        year: '2025',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        desc: 'A concept website for a flower shop with strong visual presence and an intuitive user experience.',
        screenshot: 'assets/images/bukettfabriken.png',
        live: 'https://ssannejohansson.github.io/bukettfabriken/',
        github: 'https://ssannejohansson.github.io/bukettfabriken/'
      },
      {
        emoji: '🍹',
        name: 'Happy Hour',
        year: '2025',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        desc: 'A concept website for a bar and restaurant focused on atmosphere, menu presentation, and intuitive contact flow.',
        screenshot: 'assets/images/happyhour.png',
        live: 'https://ssannejohansson.github.io/happyhour/',
        github: 'https://ssannejohansson.github.io/happyhour/'
      },
      {
        emoji: '🐕',
        name: 'Prickebo',
        year: '2026',
        techTags: ['HTML', 'CSS', 'Bootstrap'],
        typeTags: [],
        desc: 'A website for a dog breeding business, designed to present the breed, the dogs and contact information in a clean and inviting way.',
        screenshot: 'assets/images/prickebo.png',
        live: 'https://ssannejohansson.github.io/prickebo/',
        github: 'https://github.com/ssannejohansson/prickebo.git'
      },
      {
        emoji: '🌸',
        name: 'Luna Home',
        year: '2026',
        techTags: ['HTML', 'CSS', 'JavaScript'],
        typeTags: [],
        desc: 'A curated home décor e-commerce demo site featuring category-based product browsing, wishlist and checkout functionality, and a clean, editorial brand identity.',
        screenshot: 'assets/images/luna-home.png',
        live: 'https://ssannejohansson.github.io/luna-home/',
        github: 'https://github.com/ssannejohansson/luna-home'
      }
    ]
  }
};

// ── STATE ──
let currentFolder = 'work';
let selectedProject = null;
let lastClickTime = 0;
let lastClickIndex = -1;

// ── GRID ──
function renderGrid(folderKey) {
  const folder = folders[folderKey];
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';
  folder.projects.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'project-icon';
    const folderContent = p.screenshot
      ? `<img class="proj-folder-img" src="${p.screenshot}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="proj-initials" style="display:none">${p.emoji}</span>`
      : `<span class="proj-initials">${p.emoji}</span>`;
    div.innerHTML = `
      <div class="proj-folder">
        <div class="proj-folder-tab"></div>
        <div class="proj-folder-body">${folderContent}</div>
      </div>
      <div class="proj-label">${p.name}</div>
    `;
    div.onclick = () => selectProject(i, div, p);
    grid.appendChild(div);
  });
  document.getElementById('status-text').textContent   = `${folder.projects.length} items · Double-click to open`;
  document.getElementById('finder-title').textContent  = `${folder.label} — ${folder.projects.length} Projects`;
  document.getElementById('breadcrumb').textContent    = folder.label;
  resetPreview();
  selectedProject = null;
}

// ── SELECT / OPEN ──
function selectProject(index, el, project) {
  const now = Date.now();
  const isDouble = (now - lastClickTime < 400 && lastClickIndex === index);
  lastClickTime = now;
  lastClickIndex = index;

  document.querySelectorAll('.project-icon').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedProject = project;

  const typeTags = project.typeTags || [];
  const previewImg   = document.getElementById('preview-img');
  const previewEmoji = document.getElementById('preview-emoji');
  if (project.screenshot) {
    previewImg.src = project.screenshot;
    previewImg.alt = project.name;
    previewImg.style.display = 'block';
    previewEmoji.style.display = 'none';
    previewImg.onerror = () => {
      previewImg.style.display = 'none';
      previewEmoji.style.display = 'block';
      previewEmoji.textContent = project.emoji;
    };
  } else {
    previewImg.style.display = 'none';
    previewEmoji.style.display = 'block';
    previewEmoji.textContent = project.emoji;
  }
  document.getElementById('preview-title').textContent = project.name;
  document.getElementById('preview-sub').textContent = project.year + (project.techTags.length ? ' · ' + project.techTags.slice(0, 3).join(' · ') : '');
  document.getElementById('preview-tags').innerHTML = [
    ...project.techTags.map(t => `<span class="preview-tag">${t}</span>`),
    ...typeTags.map(t => `<span class="preview-tag preview-tag-type">${t}</span>`)
  ].join('');
  document.getElementById('preview-open-btn').style.display = 'block';

  if (isDouble) openProject(project);
}

function openSelectedProject() {
  if (selectedProject) openProject(selectedProject);
}

function openProject(project) {
  document.getElementById('modal-title').textContent     = project.name.toUpperCase();
  document.getElementById('modal-proj-title').textContent = project.name;
  document.getElementById('modal-desc').textContent      = project.desc;

  // Screenshot vs emoji fallback
  const img      = document.getElementById('modal-screenshot');
  const fallback = document.getElementById('modal-emoji-fallback');
  const hero     = document.getElementById('modal-hero');

  fallback.textContent = project.emoji;

  if (project.screenshot) {
    img.src   = project.screenshot;
    img.alt   = project.name;
    img.style.display = 'block';
    fallback.style.display = 'none';
    hero.classList.remove('hero-emoji-mode');
    img.onerror = () => {
      img.style.display    = 'none';
      fallback.style.display = 'flex';
      hero.classList.add('hero-emoji-mode');
    };
  } else {
    img.style.display      = 'none';
    fallback.style.display = 'flex';
    hero.classList.add('hero-emoji-mode');
  }

  // Tech tags — accent colour
  document.getElementById('modal-tags-tech').innerHTML =
    project.techTags.map(t => `<span class="modal-tag">${t}</span>`).join('') +
    `<span class="modal-tag modal-tag-year">${project.year}</span>`;

  // Type/descriptive tags — muted, hidden if empty
  const typeEl = document.getElementById('modal-tags-type');
  if (project.typeTags && project.typeTags.length) {
    typeEl.innerHTML    = project.typeTags.map(t => `<span class="modal-tag-type">${t}</span>`).join('');
    typeEl.style.display = 'flex';
  } else {
    typeEl.style.display = 'none';
  }

  document.getElementById('modal-live-btn').onclick   = () => window.open(project.live,   '_blank');
  document.getElementById('modal-github-btn').onclick = () => window.open(project.github, '_blank');

  document.getElementById('project-overlay').classList.add('open');
}

function closeProject() { document.getElementById('project-overlay').classList.remove('open'); }
function closeOverlay(e) { if (e.target === document.getElementById('project-overlay')) closeProject(); }

// ── SIDEBAR ──
function switchFolder(el, folderKey) {
  document.querySelectorAll('.sb-item').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  currentFolder = folderKey;
  renderGrid(folderKey);
}
function showFolder(folderKey) {
  const el = document.querySelector(`[data-folder="${folderKey}"]`);
  if (el) switchFolder(el, folderKey);
}

// ── PREVIEW RESET ──
function resetPreview() {
  const previewImg   = document.getElementById('preview-img');
  const previewEmoji = document.getElementById('preview-emoji');
  previewImg.style.display   = 'none';
  previewImg.src             = '';
  previewEmoji.style.display = 'block';
  previewEmoji.textContent   = '📁';
  document.getElementById('preview-title').textContent = 'Select a project';
  document.getElementById('preview-sub').textContent   = 'Click a folder to preview';
  document.getElementById('preview-tags').innerHTML    = '';
  document.getElementById('preview-open-btn').style.display = 'none';
}

// ── ABOUT ──
function openAbout()         { document.getElementById('about-overlay').classList.add('open'); }
function closeAbout()        { document.getElementById('about-overlay').classList.remove('open'); }
function closeAboutOverlay(e){ if (e.target === document.getElementById('about-overlay')) closeAbout(); }

// ── RESUME / CERTIFICATE ──
function openResume()      { window.open('files/CV2026.pdf', '_blank'); }
function openCertificate() { window.open('files/Diplom- Sanne J.pdf', '_blank'); }
function openCIcert()      { window.open('files/cert-codeinstitute.pdf', '_blank'); }


// ── DOCK ──
function dockClick(name) {
  const urls = {
      github: 'https://github.com/ssannejohansson',
      linkedin: 'https://www.linkedin.com/in/sanne-johansson' };
  if (urls[name]) window.open(urls[name], '_blank');
}

// ── CLOCK ──
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('clock').textContent = `${h}:${m} ${ampm}`;
}
updateClock();
setInterval(updateClock, 1000);

// ── KEYBOARD ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProject(); closeAbout(); closeContact(); }
});

// ── INIT ──
renderGrid('work');

// ── MOBILE ──
function renderMobileCards(folderKey) {
  const folder = folders[folderKey];
  const container = document.getElementById('mob-cards');
  container.innerHTML = '';
  folder.projects.forEach(p => {
    const techTags = p.techTags || [];
    const mobFolderContent = p.screenshot
      ? `<img class="mob-card-folder-img" src="${p.screenshot}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="mob-card-initials" style="display:none">${p.emoji}</span>`
      : `<span class="mob-card-initials">${p.emoji}</span>`;
    const card = document.createElement('div');
    card.className = 'mob-card';
    card.innerHTML = `
      <div class="mob-card-folder">
        <div class="mob-card-folder-tab"></div>
        <div class="mob-card-folder-body">${mobFolderContent}</div>
      </div>
      <div class="mob-card-info">
        <div class="mob-card-name">${p.name}</div>
        <div class="mob-card-tags">
          ${techTags.slice(0, 3).map(t => `<span class="mob-card-tag">${t}</span>`).join('')}
          <span class="mob-card-tag mob-card-year">${p.year}</span>
        </div>
      </div>
      <div class="mob-card-arrow">›</div>
    `;
    card.onclick = () => openProject(p);
    container.appendChild(card);
  });
}

function switchMobileTab(el, folderKey) {
  document.querySelectorAll('.mob-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderMobileCards(folderKey);
}

// Init mobile on load
renderMobileCards('work');
