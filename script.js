const defaultData = [
  {
    id: "sec_social",
    title: "مواقع السوشيال والشبكات",
    type: "normal",
    items: [
      { id: "1", name: "فيسبوك", url: "https://facebook.com", icon: '<i class="fa-brands fa-facebook"></i>' },
      { id: "2", name: "إنستغرام", url: "https://instagram.com", icon: '<i class="fa-brands fa-instagram"></i>' },
      { id: "3", name: "جيت هاب", url: "https://github.com", icon: '<i class="fa-brands fa-github"></i>' }
    ]
  },
  {
    id: "sec_learning",
    title: "مسار Front-End Development",
    type: "learning",
    items: [
      {
        id: "101",
        name: "HTML5 & Semantics",
        course: "https://youtube.com",
        notes: "التركيز على العناصر الدلالية ومقاييس SEO و Accessibility.",
        pdf: "https://drive.google.com",
        icon: '<i class="fa-brands fa-html5"></i>'
      },
      {
        id: "102",
        name: "JavaScript Modern ES6+",
        course: "https://youtube.com",
        notes: "دراسة الـ Promises, Async/Await, والـ Closures في JS.",
        pdf: "",
        icon: '<i class="fa-brands fa-js"></i>'
      }
    ]
  }
];

const presetSections = {
  ai: {
    title: "أدوات الذكاء الاصطناعي (AI)",
    type: "normal",
    items: [
      { id: "preset_ai_1", name: "ChatGPT", url: "https://chatgpt.com", icon: '<i class="fa-solid fa-robot"></i>' },
      { id: "preset_ai_2", name: "Claude AI", url: "https://claude.ai", icon: '<i class="fa-solid fa-brain"></i>' },
      { id: "preset_ai_3", name: "Gemini", url: "https://gemini.google.com", icon: '<i class="fa-solid fa-sparkles"></i>' },
      { id: "preset_ai_4", name: "v0.dev", url: "https://v0.dev", icon: '<i class="fa-solid fa-code"></i>' }
    ]
  },
  freelance: {
    title: "منصات العمل الحر (Freelance)",
    type: "normal",
    items: [
      { id: "preset_fl_1", name: "Upwork", url: "https://upwork.com", icon: '<i class="fa-solid fa-briefcase"></i>' },
      { id: "preset_fl_2", name: "Fiverr", url: "https://fiverr.com", icon: '<i class="fa-solid fa-laptop-code"></i>' },
      { id: "preset_fl_3", name: "Mostaql", url: "https://mostaql.com", icon: '<i class="fa-solid fa-handshake"></i>' },
      { id: "preset_fl_4", name: "Khamsat", url: "https://khamsat.com", icon: '<i class="fa-solid fa-store"></i>' }
    ]
  },
  chat: {
    title: "تطبيقات المحادثة والتواصل",
    type: "normal",
    items: [
      { id: "preset_ch_1", name: "WhatsApp Web", url: "https://web.whatsapp.com", icon: '<i class="fa-brands fa-whatsapp"></i>' },
      { id: "preset_ch_2", name: "Telegram Web", url: "https://web.telegram.org", icon: '<i class="fa-brands fa-telegram"></i>' },
      { id: "preset_ch_3", name: "Discord", url: "https://discord.com", icon: '<i class="fa-brands fa-discord"></i>' }
    ]
  },
  media: {
    title: "صناع المحتوى والميديا",
    type: "normal",
    items: [
      { id: "preset_me_1", name: "Canva", url: "https://canva.com", icon: '<i class="fa-solid fa-palette"></i>' },
      { id: "preset_me_2", name: "CapCut", url: "https://capcut.com", icon: '<i class="fa-solid fa-video"></i>' },
      { id: "preset_me_3", name: "YouTube Studio", url: "https://studio.youtube.com", icon: '<i class="fa-brands fa-youtube"></i>' }
    ]
  }
};

let data = JSON.parse(localStorage.getItem('futuristic_dash_data')) || defaultData;
let theme = localStorage.getItem('futuristic_dash_theme') || 'dark';
let deleteAction = null;

// متغيرات للتحكم في تحرير الملاحظات الحالية
let currentEditingSecId = null;
let currentEditingItemId = null;

document.documentElement.setAttribute('data-theme', theme);

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loaderBar');
  if (loader) {
    loader.classList.add('active');
    setTimeout(() => loader.classList.remove('active'), 1400);
  }

  const savedAvatar = localStorage.getItem('futuristic_dash_avatar');
  if (savedAvatar) {
    const profileImg = document.getElementById('profileImg');
    if (profileImg) profileImg.src = savedAvatar;
  }
});

const grid = document.getElementById('gridContainer');
const targetSecSelect = document.getElementById('targetSecSelect');

function saveData() {
  localStorage.setItem('futuristic_dash_data', JSON.stringify(data));
  render();
}

// -----------------------------------------------------------
// دالة العرض الرئيسية (Render)
// -----------------------------------------------------------
function render(filterQuery = '') {
  grid.innerHTML = '';
  targetSecSelect.innerHTML = '';

  const filteredData = data.filter(sec => {
    const filteredItems = sec.items.filter(item => 
      item.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    return !filterQuery || filteredItems.length > 0 || sec.title.toLowerCase().includes(filterQuery.toLowerCase());
  });

  const normalSections = filteredData.filter(s => s.type === 'normal');
  const learningSections = filteredData.filter(s => s.type === 'learning');

  data.forEach(sec => {
    const opt = document.createElement('option');
    opt.value = sec.id;
    opt.textContent = `${sec.title} (${sec.type === 'learning' ? 'تعليمي' : 'عادي'})`;
    targetSecSelect.appendChild(opt);
  });

  const createCardHTML = (sec) => {
    const filteredItems = sec.items.filter(item => 
      item.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    const itemsToDisplay = filterQuery ? filteredItems : sec.items;

    const card = document.createElement('div');
    card.className = 'card glass-card';

    let contentHTML = '';

    if (sec.type === 'normal') {
      contentHTML = `
        <div class="items-list">
          ${itemsToDisplay.map(item => `
            <div class="item-wrapper">
              <a href="${item.url}" target="_blank" class="app-link">
                <div class="icon-wrapper">
                  ${item.icon.startsWith('data:image') ? `<img src="${item.icon}">` : item.icon}
                </div>
                <span>${item.name}</span>
              </a>
              <button class="btn-del-item" onclick="promptDelete('item', '${sec.id}', '${item.id}')">✕</button>
            </div>
          `).join('')}

          ${!filterQuery ? `
            <div class="item-wrapper add-item-btn-wrapper" onclick="openQuickLinkModal('${sec.id}')">
              <div class="app-link add-link-btn">
                <div class="icon-wrapper"><i class="fa-solid fa-plus"></i></div>
                <span>إضافة جديد</span>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    } else {
      contentHTML = `
        <div class="accordion">
          ${itemsToDisplay.map(item => `
            <div class="acc-item">
              <div class="acc-header" onclick="toggleAcc(this)">
                <span>${item.icon.startsWith('data:image') ? `<img src="${item.icon}" width="20">` : item.icon} ${item.name}</span>
                <button class="btn-delete-sec" onclick="event.stopPropagation(); promptDelete('item', '${sec.id}', '${item.id}')"><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <div class="acc-body">
                <div class="course-action-icons">
                  ${item.course ? `
                    <a href="${item.course}" target="_blank" class="course-icon-btn" title="مشاهدة الشرح">
                      <i class="fa-solid fa-circle-play"></i>
                      <span>الشرح</span>
                    </a>
                  ` : ''}
                  
                  <button class="course-icon-btn" onclick="openNotesModal('${sec.id}', '${item.id}')" title="ملاحظات">
                    <i class="fa-solid fa-note-sticky"></i>
                    <span>ملاحظات</span>
                  </button>

                  ${item.pdf ? `
                    <a href="${item.pdf}" target="_blank" class="course-icon-btn" title="تحميل المراجع PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                      <span>المراجع</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('')}

          ${!filterQuery ? `
            <div class="add-acc-btn" onclick="openQuickLinkModal('${sec.id}')">
              <i class="fa-solid fa-plus"></i> إضافة موضوع جديد
            </div>
          ` : ''}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header">
        <h2>${sec.title}</h2>
        <button class="btn-delete-sec" onclick="promptDelete('section', '${sec.id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      ${contentHTML}
    `;

    return card;
  };

  if (normalSections.length > 0) {
    const normalHeading = document.createElement('div');
    normalHeading.className = 'section-divider-title';
    normalHeading.innerHTML = `<h3><i class="fa-solid fa-shapes"></i> الأقسام العامة والتطبيقات</h3>`;
    grid.appendChild(normalHeading);

    const normalGrid = document.createElement('div');
    normalGrid.className = 'sub-grid';
    normalSections.forEach(sec => normalGrid.appendChild(createCardHTML(sec)));
    grid.appendChild(normalGrid);
  }

  if (learningSections.length > 0) {
    const learningHeading = document.createElement('div');
    learningHeading.className = 'section-divider-title';
    learningHeading.innerHTML = `<h3><i class="fa-solid fa-graduation-cap"></i> المسارات التعليمية والدورات</h3>`;
    grid.appendChild(learningHeading);

    const learningGrid = document.createElement('div');
    learningGrid.className = 'sub-grid';
    learningSections.forEach(sec => learningGrid.appendChild(createCardHTML(sec)));
    grid.appendChild(learningGrid);
  }
}

// -----------------------------------------------------------
// التحكم في مودال (Pop-up) الملاحظات التفاعلي والنيون
// -----------------------------------------------------------
window.openNotesModal = function(secId, itemId) {
  currentEditingSecId = secId;
  currentEditingItemId = itemId;

  const sec = data.find(s => s.id === secId);
  if (!sec) return;
  const item = sec.items.find(i => i.id === itemId);
  if (!item) return;

  const notesModal = document.getElementById('notesModal');
  const notesTitle = document.getElementById('notesModalTitle');
  const notesTextarea = document.getElementById('notesTextarea');

  if (notesModal && notesTitle && notesTextarea) {
    notesTitle.textContent = item.name;
    notesTextarea.value = item.notes || '';
    notesModal.classList.add('active');
    playSearchSound();
  }
};

window.saveCurrentNote = function() {
  if (!currentEditingSecId || !currentEditingItemId) return;

  const sec = data.find(s => s.id === currentEditingSecId);
  if (!sec) return;
  const item = sec.items.find(i => i.id === currentEditingItemId);
  if (!item) return;

  const notesTextarea = document.getElementById('notesTextarea');
  item.notes = notesTextarea.value.trim();

  saveData();
  closeNotesModal();
  showSuccessToast('تم حفظ الملاحظات بنجاح!');
};

window.deleteCurrentNote = function() {
  const notesTextarea = document.getElementById('notesTextarea');
  if (notesTextarea) {
    notesTextarea.value = '';
    saveCurrentNote();
  }
};

window.closeNotesModal = function() {
  const notesModal = document.getElementById('notesModal');
  if (notesModal) {
    notesModal.classList.remove('active');
  }
  currentEditingSecId = null;
  currentEditingItemId = null;
};

window.copyNotesText = function() {
  const notesTextarea = document.getElementById('notesTextarea');
  if (notesTextarea) {
    navigator.clipboard.writeText(notesTextarea.value).then(() => {
      showSuccessToast('تم نسخ الملاحظات!');
    });
  }
};

// -----------------------------------------------------------
// القوالب الجاهزة والأدوات
// -----------------------------------------------------------
window.addPresetSection = function(presetKey) {
  const preset = presetSections[presetKey];
  if (!preset) return;

  const newSection = {
    id: 'sec_' + Date.now(),
    title: preset.title,
    type: preset.type,
    items: preset.items.map((item, idx) => ({ ...item, id: `${Date.now()}_${idx}` }))
  };

  data.push(newSection);
  secModal.classList.remove('active');
  saveData();
  showSuccessToast(`تم إضافة سكشن ${preset.title} بنجاح!`);
};

window.openQuickLinkModal = function(secId) {
  targetSecSelect.value = secId;
  updateFormFields();
  linkModal.classList.add('active');
};

// -----------------------------------------------------------
// المؤثرات الصوتية
// -----------------------------------------------------------
function playSuccessSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(659.25, now);
    osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.15);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  } catch (e) { console.log(e); }
}

function playSearchSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  } catch (e) { console.log(e); }
}

function showSuccessToast(msg = 'تمت العملية بنجاح!') {
  const toast = document.getElementById('successToast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast) return;
  toastMsg.textContent = msg;
  toast.classList.add('active');
  playSuccessSound();
  setTimeout(() => toast.classList.remove('active'), 1600);
}

// -----------------------------------------------------------
// البحث والـ Modals
// -----------------------------------------------------------
const topHeader = document.querySelector('.top-header');
const searchInput = document.getElementById('searchInput');
const searchToggleBtn = document.getElementById('searchToggleBtn');

window.filterDashboard = function() {
  if (searchInput) render(searchInput.value.trim());
};

window.toggleSearch = function(show) {
  if (show === undefined) show = !topHeader.classList.contains('search-active');
  if (show) {
    topHeader.classList.add('search-active');
    if (searchToggleBtn) searchToggleBtn.classList.add('active');
    playSearchSound();
    setTimeout(() => searchInput && searchInput.focus(), 250);
  } else {
    topHeader.classList.remove('search-active');
    if (searchToggleBtn) searchToggleBtn.classList.remove('active');
    if (searchInput) searchInput.value = '';
    render();
  }
};

if (searchToggleBtn) searchToggleBtn.onclick = () => toggleSearch();

window.toggleAcc = (header) => header.parentElement.classList.toggle('active');

document.getElementById('themeBtn').onclick = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('futuristic_dash_theme', theme);
};

const secModal = document.getElementById('sectionModal');
const linkModal = document.getElementById('linkModal');
const confirmModal = document.getElementById('confirmModal');

document.getElementById('openSectionModal').onclick = () => secModal.classList.add('active');
document.getElementById('openLinkModal').onclick = () => {
  updateFormFields();
  linkModal.classList.add('active');
};

document.querySelectorAll('.closeModal').forEach(btn => {
  btn.onclick = () => {
    secModal.classList.remove('active');
    linkModal.classList.remove('active');
    confirmModal.classList.remove('active');
    closeNotesModal();
  };
});

window.addEventListener('click', (e) => {
  const notesModal = document.getElementById('notesModal');
  if (e.target === notesModal) {
    closeNotesModal();
  }
});

targetSecSelect.onchange = updateFormFields;

function updateFormFields() {
  const secId = targetSecSelect.value;
  const sec = data.find(s => s.id === secId);
  if (!sec) return;
  if (sec.type === 'learning') {
    document.getElementById('normalFields').classList.add('hidden');
    document.getElementById('learningFields').classList.remove('hidden');
  } else {
    document.getElementById('normalFields').classList.remove('hidden');
    document.getElementById('learningFields').classList.add('hidden');
  }
}

document.getElementById('saveSectionBtn').onclick = () => {
  const title = document.getElementById('secTitle').value.trim();
  const type = document.getElementById('secType').value;
  if (!title) return;
  data.push({ id: 'sec_' + Date.now(), title, type, items: [] });
  document.getElementById('secTitle').value = '';
  secModal.classList.remove('active');
  saveData();
  showSuccessToast('تم إضافة السكشن بنجاح!');
};

document.getElementById('saveLinkBtn').onclick = async () => {
  const secId = targetSecSelect.value;
  const sec = data.find(s => s.id === secId);
  const fileInput = document.getElementById('iconFile');

  let icon = '<i class="fa-solid fa-globe"></i>';
  if (fileInput.files && fileInput.files[0]) {
    icon = await convertBase64(fileInput.files[0]);
  }

  if (sec.type === 'normal') {
    const name = document.getElementById('linkName').value.trim();
    const url = document.getElementById('linkUrl').value.trim();
    if (!name || !url) return;
    sec.items.push({ id: '' + Date.now(), name, url, icon });
  } else {
    const name = document.getElementById('topicName').value.trim();
    const course = document.getElementById('topicCourse').value.trim();
    const notes = document.getElementById('topicNotes').value.trim();
    const pdf = document.getElementById('topicPdf').value.trim();
    if (!name) return;
    sec.items.push({ id: '' + Date.now(), name, course, notes, pdf, icon });
  }

  document.getElementById('linkName').value = '';
  document.getElementById('linkUrl').value = '';
  document.getElementById('topicName').value = '';
  document.getElementById('topicCourse').value = '';
  document.getElementById('topicNotes').value = '';
  document.getElementById('topicPdf').value = '';
  fileInput.value = '';

  linkModal.classList.remove('active');
  saveData();
  showSuccessToast('تمت إضافة العنصر بنجاح!');
};

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

window.promptDelete = (type, secId, itemId = null) => {
  confirmModal.classList.add('active');
  deleteAction = { type, secId, itemId };
};

document.getElementById('confirmYesBtn').onclick = () => {
  if (!deleteAction) return;
  if (deleteAction.type === 'section') {
    data = data.filter(s => s.id !== deleteAction.secId);
  } else if (deleteAction.type === 'item') {
    const sec = data.find(s => s.id === deleteAction.secId);
    if (sec) sec.items = sec.items.filter(i => i.id !== deleteAction.itemId);
  }
  confirmModal.classList.remove('active');
  deleteAction = null;
  saveData();
};

function uploadProfileImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    const base64Image = e.target.result;
    const profileImg = document.getElementById('profileImg');
    if (profileImg) profileImg.src = base64Image;
    localStorage.setItem('futuristic_dash_avatar', base64Image);
  };
}

function updateClockWidget() {
  const timeElem = document.getElementById('clockTime');
  const dateElem = document.getElementById('clockDate');
  if (!timeElem || !dateElem) return;
  const now = new Date();
  timeElem.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  dateElem.textContent = now.toLocaleDateString('ar-EG', { weekday: 'short', month: 'short', day: 'numeric' });
}

setInterval(updateClockWidget, 1000);
updateClockWidget();
render();
