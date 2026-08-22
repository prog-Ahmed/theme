const defaultData = [
  {
    id: "sec_social",
    title: "مواقع السوشيال والشبكات",
    type: "normal",
    items: [
      { id: "1", name: "فيسبوك", url: "https://facebook.com", icon: '<i class="fa-brands fa-facebook" style="color: #1877f2;"></i>' },
      { id: "2", name: "إنستغرام", url: "https://instagram.com", icon: '<i class="fa-brands fa-instagram" style="color: #e4405f;"></i>' },
      { id: "3", name: "جيت هاب", url: "https://github.com", icon: '<i class="fa-brands fa-github" style="color: #ffffff;"></i>' }
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
        icon: '<i class="fa-brands fa-html5" style="color: #e34f26;"></i>'
      },
      {
        id: "102",
        name: "JavaScript Modern ES6+",
        course: "https://youtube.com",
        notes: "دراسة الـ Promises, Async/Await, والـ Closures في JS.",
        pdf: "",
        icon: '<i class="fa-brands fa-js" style="color: #f7df1e;"></i>'
      }
    ]
  }
];

const presetSections = {
  ai: {
    title: "أدوات الذكاء الاصطناعي (AI)",
    type: "normal",
    items: [
      { id: "preset_ai_1", name: "ChatGPT", url: "https://chatgpt.com", icon: '<i class="fa-solid fa-robot" style="color: #10a37f;"></i>' },
      { id: "preset_ai_2", name: "Claude AI", url: "https://claude.ai", icon: '<i class="fa-solid fa-brain" style="color: #d97706;"></i>' },
      { id: "preset_ai_3", name: "Gemini", url: "https://gemini.google.com", icon: '<i class="fa-solid fa-sparkles" style="color: #8e8ea0;"></i>' },
      { id: "preset_ai_4", name: "v0.dev", url: "https://v0.dev", icon: '<i class="fa-solid fa-code" style="color: #000000;"></i>' }
    ]
  },
  freelance: {
    title: "منصات العمل الحر (Freelance)",
    type: "normal",
    items: [
      { id: "preset_fl_1", name: "Upwork", url: "https://upwork.com", icon: '<i class="fa-solid fa-briefcase" style="color: #14a800;"></i>' },
      { id: "preset_fl_2", name: "Fiverr", url: "https://fiverr.com", icon: '<i class="fa-solid fa-laptop-code" style="color: #1dbf73;"></i>' },
      { id: "preset_fl_3", name: "Mostaql", url: "https://mostaql.com", icon: '<i class="fa-solid fa-handshake" style="color: #238636;"></i>' },
      { id: "preset_fl_4", name: "Khamsat", url: "https://khamsat.com", icon: '<i class="fa-solid fa-store" style="color: #ff9800;"></i>' }
    ]
  },
  chat: {
    title: "تطبيقات المحادثة والتواصل",
    type: "normal",
    items: [
      { id: "preset_ch_1", name: "WhatsApp Web", url: "https://web.whatsapp.com", icon: '<i class="fa-brands fa-whatsapp" style="color: #25d366;"></i>' },
      { id: "preset_ch_2", name: "Telegram Web", url: "https://web.telegram.org", icon: '<i class="fa-brands fa-telegram" style="color: #0088cc;"></i>' },
      { id: "preset_ch_3", name: "Discord", url: "https://discord.com", icon: '<i class="fa-brands fa-discord" style="color: #5865f2;"></i>' }
    ]
  },
  media: {
    title: "صناع المحتوى والميديا",
    type: "normal",
    items: [
      { id: "preset_me_1", name: "Canva", url: "https://canva.com", icon: '<i class="fa-solid fa-palette" style="color: #00c4cc;"></i>' },
      { id: "preset_me_2", name: "CapCut", url: "https://capcut.com", icon: '<i class="fa-solid fa-video" style="color: #ffffff;"></i>' },
      { id: "preset_me_3", name: "YouTube Studio", url: "https://studio.youtube.com", icon: '<i class="fa-brands fa-youtube" style="color: #ff0000;"></i>' }
    ]
  }
};

const iconGallery = {
  social: [
    { name: "Facebook", icon: '<i class="fa-brands fa-facebook" style="color: #1877f2;"></i>' },
    { name: "Instagram", icon: '<i class="fa-brands fa-instagram" style="color: #e4405f;"></i>' },
    { name: "Twitter/X", icon: '<i class="fa-brands fa-x-twitter" style="color: #ffffff;"></i>' },
    { name: "LinkedIn", icon: '<i class="fa-brands fa-linkedin" style="color: #0a66c2;"></i>' },
    { name: "YouTube", icon: '<i class="fa-brands fa-youtube" style="color: #ff0000;"></i>' },
    { name: "TikTok", icon: '<i class="fa-brands fa-tiktok" style="color: #ff0050;"></i>' },
    { name: "WhatsApp", icon: '<i class="fa-brands fa-whatsapp" style="color: #25d366;"></i>' },
    { name: "Telegram", icon: '<i class="fa-brands fa-telegram" style="color: #0088cc;"></i>' },
    { name: "Pinterest", icon: '<i class="fa-brands fa-pinterest" style="color: #bd081c;"></i>' },
    { name: "Snapchat", icon: '<i class="fa-brands fa-snapchat" style="color: #fffc00;"></i>' }
  ],
  tools: [
    { name: "HTML5", icon: '<i class="fa-brands fa-html5" style="color: #e34f26;"></i>' },
    { name: "CSS3", icon: '<i class="fa-brands fa-css3-alt" style="color: #1572b6;"></i>' },
    { name: "JavaScript", icon: '<i class="fa-brands fa-js" style="color: #f7df1e;"></i>' },
    { name: "React", icon: '<i class="fa-brands fa-react" style="color: #61dafb;"></i>' },
    { name: "Node.js", icon: '<i class="fa-brands fa-node-js" style="color: #339933;"></i>' },
    { name: "Shopify", icon: '<i class="fa-brands fa-shopify" style="color: #95bf47;"></i>' },
    { name: "GitHub", icon: '<i class="fa-brands fa-github" style="color: #ffffff;"></i>' },
    { name: "Code", icon: '<i class="fa-solid fa-code" style="color: #06b6d4;"></i>' },
    { name: "Terminal", icon: '<i class="fa-solid fa-terminal" style="color: #a855f7;"></i>' },
    { name: "Database", icon: '<i class="fa-solid fa-database" style="color: #3b82f6;"></i>' }
  ],
  business: [
    { name: "Briefcase", icon: '<i class="fa-solid fa-briefcase" style="color: #eab308;"></i>' },
    { name: "Store", icon: '<i class="fa-solid fa-store" style="color: #3b82f6;"></i>' },
    { name: "Cart", icon: '<i class="fa-solid fa-cart-shopping" style="color: #22c55e;"></i>' },
    { name: "Money", icon: '<i class="fa-solid fa-money-bill-wave" style="color: #10b981;"></i>' },
    { name: "Chart", icon: '<i class="fa-solid fa-chart-line" style="color: #ec4899;"></i>' },
    { name: "Laptop", icon: '<i class="fa-solid fa-laptop" style="color: #06b6d4;"></i>' }
  ],
  general: [
    { name: "Globe", icon: '<i class="fa-solid fa-globe" style="color: #06b6d4;"></i>' },
    { name: "Star", icon: '<i class="fa-solid fa-star" style="color: #eab308;"></i>' },
    { name: "Bookmark", icon: '<i class="fa-solid fa-bookmark" style="color: #a855f7;"></i>' },
    { name: "Graduation", icon: '<i class="fa-solid fa-graduation-cap" style="color: #3b82f6;"></i>' },
    { name: "Book", icon: '<i class="fa-solid fa-book" style="color: #ef4444;"></i>' },
    { name: "Gear", icon: '<i class="fa-solid fa-gear" style="color: #94a3b8;"></i>' }
  ]
};

function loadData() {
  try {
    const raw = localStorage.getItem('futuristic_dash_data');
    return raw ? JSON.parse(raw) : defaultData;
  } catch (e) {
    console.warn('تعذّرت قراءة البيانات المحفوظة، تم الرجوع للبيانات الافتراضية.', e);
    return defaultData;
  }
}

let data = loadData();
let theme = localStorage.getItem('futuristic_dash_theme') || 'dark';
let deleteAction = null;

let currentEditingSecId = null;
let currentEditingItemId = null;
let selectedIconHTML = '<i class="fa-solid fa-globe"></i>';
let isEditMode = false;
let draggedSecId = null;

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
  
  renderIconGallery('social');
});

const grid = document.getElementById('gridContainer');
const targetSecSelect = document.getElementById('targetSecSelect');

function saveData() {
  try {
    localStorage.setItem('futuristic_dash_data', JSON.stringify(data));
  } catch (e) {
    alert('مساحة التخزين المحلي ممتلئة، تعذّر حفظ آخر تعديل. جرّب تحذف بعض الأيقونات المرفوعة يدويًا.');
  }
  render();
}

function render(filterQuery = '') {
  if (!grid || !targetSecSelect) return;
  grid.innerHTML = '';
  targetSecSelect.innerHTML = '';

  const query = filterQuery.toLowerCase().trim();

  const filteredData = data.filter(sec => {
    const filteredItems = sec.items.filter(item => 
      item.name.toLowerCase().includes(query)
    );
    return !query || filteredItems.length > 0 || sec.title.toLowerCase().includes(query);
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
      item.name.toLowerCase().includes(query)
    );
    const titleMatches = sec.title.toLowerCase().includes(query);
    const itemsToDisplay = (query && !titleMatches) ? filteredItems : sec.items;

    const card = document.createElement('div');
    card.className = 'card glass-card draggable-card';
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-sec-id', sec.id);

    // سحب وإفلات الأقسام
    card.addEventListener('dragstart', (e) => {
      draggedSecId = sec.id;
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      draggedSecId = null;
    });

    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      if (draggedSecId && draggedSecId !== sec.id) {
        const fromIdx = data.findIndex(s => s.id === draggedSecId);
        const toIdx = data.findIndex(s => s.id === sec.id);
        if (fromIdx > -1 && toIdx > -1) {
          const [moved] = data.splice(fromIdx, 1);
          data.splice(toIdx, 0, moved);
          saveData();
        }
      }
    });

    let contentHTML = '';

    if (sec.type === 'normal') {
      contentHTML = `
        <div class="items-list">
          ${itemsToDisplay.map(item => `
            <div class="item-wrapper">
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="app-link">
                <div class="icon-wrapper">
                  ${item.icon.startsWith('data:image') ? `<img src="${item.icon}" alt="${item.name}">` : item.icon}
                </div>
                <span>${item.name}</span>
              </a>
              <div class="item-actions-overlay">
                <button class="btn-edit-item" onclick="openEditItemModal('${sec.id}', '${item.id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-del-item" onclick="promptDelete('item', '${sec.id}', '${item.id}')" title="حذف">✕</button>
              </div>
            </div>
          `).join('')}

          ${!query ? `
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
                <span>${item.icon.startsWith('data:image') ? `<img src="${item.icon}" width="20" alt="icon">` : item.icon} ${item.name}</span>
                <div class="acc-actions">
                  <button class="btn-edit-item" onclick="event.stopPropagation(); openEditItemModal('${sec.id}', '${item.id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                  <button class="btn-delete-sec" onclick="event.stopPropagation(); promptDelete('item', '${sec.id}', '${item.id}')" title="حذف"><i class="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
              <div class="acc-body">
                <div class="course-action-icons">
                  ${item.course ? `
                    <a href="${item.course}" target="_blank" rel="noopener noreferrer" class="course-icon-btn" title="مشاهدة الشرح">
                      <i class="fa-solid fa-circle-play"></i>
                      <span>الشرح</span>
                    </a>
                  ` : ''}
                  
                  <button class="course-icon-btn" onclick="openNotesModal('${sec.id}', '${item.id}')" title="ملاحظات">
                    <i class="fa-solid fa-note-sticky"></i>
                    <span>ملاحظات</span>
                  </button>

                  ${item.pdf ? `
                    <a href="${item.pdf}" target="_blank" rel="noopener noreferrer" class="course-icon-btn" title="تحميل المراجع PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                      <span>المراجع</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('')}

          ${!query ? `
            <div class="add-acc-btn" onclick="openQuickLinkModal('${sec.id}')">
              <i class="fa-solid fa-plus"></i> إضافة موضوع جديد
            </div>
          ` : ''}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header">
        <h2><i class="fa-solid fa-grip-vertical drag-handle"></i> <span class="card-title-text">${sec.title}</span></h2>
        <div class="card-header-actions">
          <button class="btn-edit-sec" onclick="event.stopPropagation(); renameSection('${sec.id}')" title="تعديل العنوان" aria-label="تعديل عنوان السكشن"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-delete-sec" onclick="event.stopPropagation(); promptDelete('section', '${sec.id}')" title="حذف السكشن" aria-label="حذف السكشن"><i class="fa-solid fa-trash-can"></i></button>
        </div>
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

// معرض الأيقونات
window.switchIconTab = function(category, evt) {
  document.querySelectorAll('.icon-tab').forEach(tab => tab.classList.remove('active'));
  const btn = (evt && evt.currentTarget) || document.querySelector(`.icon-tab[data-category="${category}"]`);
  if (btn) btn.classList.add('active');
  renderIconGallery(category);
};

function renderIconGallery(category) {
  const grid = document.getElementById('iconPickerGrid');
  if (!grid) return;
  grid.innerHTML = '';
  
  const icons = iconGallery[category] || [];
  icons.forEach(ic => {
    const btn = document.createElement('div');
    btn.className = 'icon-picker-item';
    btn.innerHTML = ic.icon;
    btn.onclick = () => {
      document.querySelectorAll('.icon-picker-item').forEach(i => i.classList.remove('selected'));
      btn.classList.add('selected');
      selectedIconHTML = ic.icon;
      const fileDisplay = document.getElementById('fileNameDisplay');
      if (fileDisplay) fileDisplay.textContent = '';
    };
    grid.appendChild(btn);
  });
}

window.handleIconFileUpload = async function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const fileNameDisplay = document.getElementById('fileNameDisplay');
  if (fileNameDisplay) fileNameDisplay.textContent = file.name;
  
  document.querySelectorAll('.icon-picker-item').forEach(i => i.classList.remove('selected'));
  selectedIconHTML = await convertBase64(file);
};

// النوتس - إصلاح السكرول والطبقة البيضاء
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
    
    notesModal.setAttribute('data-sec-id', secId);
    notesModal.setAttribute('data-item-id', itemId);

    notesModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // قفل السكرول الخارجي
    playSearchSound();
  }
};

window.saveCurrentNote = function() {
  const notesModal = document.getElementById('notesModal');
  const notesTextarea = document.getElementById('notesTextarea');
  
  const secId = currentEditingSecId || (notesModal ? notesModal.getAttribute('data-sec-id') : null);
  const itemId = currentEditingItemId || (notesModal ? notesModal.getAttribute('data-item-id') : null);

  if (!secId || !itemId) return;

  const sec = data.find(s => s.id === secId);
  if (!sec) return;
  const item = sec.items.find(i => i.id === itemId);
  if (!item) return;

  item.notes = notesTextarea ? notesTextarea.value.trim() : '';

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
    notesModal.removeAttribute('data-sec-id');
    notesModal.removeAttribute('data-item-id');
  }
  document.body.style.overflow = ''; // إعادة السكرول
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

window.resetSearch = function() {
  toggleSearch(false);
  render();
};

window.addPresetSection = function(presetKey) {
  const preset = presetSections[presetKey];
  if (!preset) return;

  const newSection = {
    id: 'sec_' + makeId(),
    title: preset.title,
    type: preset.type,
    items: preset.items.map((item) => ({ ...item, id: makeId() }))
  };

  data.push(newSection);
  const secModal = document.getElementById('sectionModal');
  if (secModal) secModal.classList.remove('active');
  saveData();
  showSuccessToast(`تم إضافة سكشن ${preset.title} بنجاح!`);
};

window.openQuickLinkModal = function(secId) {
  isEditMode = false;
  currentEditingSecId = secId;
  currentEditingItemId = null;
  
  if ($('linkModalTitle')) $('linkModalTitle').innerHTML = '<i class="fa-solid fa-circle-plus"></i> إضافة محتوى للسكشن';
  if ($('targetSecGroup')) $('targetSecGroup').style.display = 'none'; // إلغاء تحديد السكشن لو الدوسة من جواه
  
  if (targetSecSelect) {
    targetSecSelect.value = secId;
    updateFormFields();
  }
  
  resetLinkModalInputs();
  const linkModal = document.getElementById('linkModal');
  if (linkModal) linkModal.classList.add('active');
};

window.openEditItemModal = function(secId, itemId) {
  isEditMode = true;
  currentEditingSecId = secId;
  currentEditingItemId = itemId;

  const sec = data.find(s => s.id === secId);
  if (!sec) return;
  const item = sec.items.find(i => i.id === itemId);
  if (!item) return;

  if ($('linkModalTitle')) $('linkModalTitle').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> تعديل المحتوى';
  if ($('targetSecGroup')) $('targetSecGroup').style.display = 'block';
  
  if (targetSecSelect) {
    targetSecSelect.value = secId;
    updateFormFields();
  }

  if (sec.type === 'normal') {
    if ($('linkName')) $('linkName').value = item.name || '';
    if ($('linkUrl')) $('linkUrl').value = item.url || '';
  } else {
    if ($('topicName')) $('topicName').value = item.name || '';
    if ($('topicCourse')) $('topicCourse').value = item.course || '';
    if ($('topicNotes')) $('topicNotes').value = item.notes || '';
    if ($('topicPdf')) $('topicPdf').value = item.pdf || '';
  }

  selectedIconHTML = item.icon || '<i class="fa-solid fa-globe"></i>';

  const linkModal = document.getElementById('linkModal');
  if (linkModal) linkModal.classList.add('active');
};

function resetLinkModalInputs() {
  ['linkName', 'linkUrl', 'topicName', 'topicCourse', 'topicNotes', 'topicPdf', 'iconFile'].forEach(id => {
    if ($(id)) $(id).value = '';
  });
  const fileNameDisplay = document.getElementById('fileNameDisplay');
  if (fileNameDisplay) fileNameDisplay.textContent = '';
  selectedIconHTML = '<i class="fa-solid fa-globe"></i>';
}

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
  } catch (e) {}
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
  } catch (e) {}
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

const topHeader = document.querySelector('.top-header');
const searchInput = document.getElementById('searchInput');
const searchToggleBtn = document.getElementById('searchToggleBtn');

let searchDebounceTimer = null;
window.filterDashboard = function() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    if (searchInput) render(searchInput.value);
  }, 180);
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

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.onclick = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('futuristic_dash_theme', theme);
  };
}

const secModal = document.getElementById('sectionModal');
const linkModal = document.getElementById('linkModal');
const confirmModal = document.getElementById('confirmModal');
const settingsModal = document.getElementById('settingsModal');

let isEditingSection = false;
let currentEditingSectionId = null;

window.renameSection = function(secId) {
  const sec = data.find(s => s.id === secId);
  if (!sec) return;

  isEditingSection = true;
  currentEditingSectionId = secId;

  const titleInput = document.getElementById('secTitle');
  const modalTitle = document.getElementById('sectionModalTitle');
  const typeGroup = document.getElementById('secTypeGroup');
  const presets = document.getElementById('sectionPresets');
  const saveBtn = document.getElementById('saveSectionBtn');

  if (titleInput) titleInput.value = sec.title;
  if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> تعديل عنوان السكشن';
  if (typeGroup) typeGroup.classList.add('hidden'); // النوع بيتحدد وقت الإنشاء بس، مش بيتغير هنا
  if (presets) presets.classList.add('hidden');
  if (saveBtn) saveBtn.textContent = 'حفظ التعديل';

  if (secModal) secModal.classList.add('active');
  if (titleInput) titleInput.focus();
};

function resetSectionModalToAddMode() {
  isEditingSection = false;
  currentEditingSectionId = null;
  const modalTitle = document.getElementById('sectionModalTitle');
  const typeGroup = document.getElementById('secTypeGroup');
  const presets = document.getElementById('sectionPresets');
  const saveBtn = document.getElementById('saveSectionBtn');
  const titleInput = document.getElementById('secTitle');

  if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-folder-plus"></i> إضافة سكشن جديد';
  if (typeGroup) typeGroup.classList.remove('hidden');
  if (presets) presets.classList.remove('hidden');
  if (saveBtn) saveBtn.textContent = 'حفظ السكشن';
  if (titleInput) titleInput.value = '';
}

const openSecBtn = document.getElementById('openSectionModal');
if (openSecBtn) {
  openSecBtn.onclick = () => {
    resetSectionModalToAddMode();
    secModal.classList.add('active');
  };
}

const openSettingsBtn = document.getElementById('openSettingsModal');
if (openSettingsBtn && settingsModal) {
  openSettingsBtn.onclick = () => settingsModal.classList.add('active');
}

const openLinkBtn = document.getElementById('openLinkModal');
if (openLinkBtn) {
  openLinkBtn.onclick = () => {
    isEditMode = false;
    document.getElementById('linkModalTitle').innerHTML = '<i class="fa-solid fa-circle-plus"></i> إضافة محتوى للسكشن';
    document.getElementById('targetSecGroup').style.display = 'block';
    resetLinkModalInputs();
    updateFormFields();
    linkModal.classList.add('active');
  };
}

document.querySelectorAll('.closeModal').forEach(btn => {
  btn.onclick = () => {
    if (secModal) secModal.classList.remove('active');
    if (linkModal) linkModal.classList.remove('active');
    if (confirmModal) confirmModal.classList.remove('active');
    if (settingsModal) settingsModal.classList.remove('active');
    resetSectionModalToAddMode();
    closeNotesModal();
  };
});

window.addEventListener('click', (e) => {
  const notesModal = document.getElementById('notesModal');
  if (e.target === notesModal) {
    closeNotesModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (secModal) secModal.classList.remove('active');
    if (linkModal) linkModal.classList.remove('active');
    if (confirmModal) confirmModal.classList.remove('active');
    closeNotesModal();
  }
});

if (targetSecSelect) targetSecSelect.onchange = updateFormFields;

function updateFormFields() {
  if (!targetSecSelect) return;
  const secId = targetSecSelect.value;
  const sec = data.find(s => s.id === secId);
  if (!sec) return;
  
  const normalFields = document.getElementById('normalFields');
  const learningFields = document.getElementById('learningFields');

  if (sec.type === 'learning') {
    if (normalFields) normalFields.classList.add('hidden');
    if (learningFields) learningFields.classList.remove('hidden');
  } else {
    if (normalFields) normalFields.classList.remove('hidden');
    if (learningFields) learningFields.classList.add('hidden');
  }
}

const saveSectionBtn = document.getElementById('saveSectionBtn');
if (saveSectionBtn) {
  saveSectionBtn.onclick = () => {
    const titleInput = document.getElementById('secTitle');
    const typeSelect = document.getElementById('secType');
    const title = titleInput ? titleInput.value.trim() : '';
    const type = typeSelect ? typeSelect.value : 'normal';

    if (!title) {
      alert('يرجى كتابة عنوان السكشن أولاً!');
      return;
    }

    if (isEditingSection && currentEditingSectionId) {
      const sec = data.find(s => s.id === currentEditingSectionId);
      if (sec) sec.title = title;
      showSuccessToast('تم تعديل عنوان السكشن بنجاح!');
    } else {
      data.push({ id: 'sec_' + makeId(), title, type, items: [] });
      showSuccessToast('تم إضافة السكشن بنجاح!');
    }

    resetSectionModalToAddMode();
    if (secModal) secModal.classList.remove('active');
    saveData();
  };
}

// حفظ المحتوى مع Validation والتحقق من التعديل/الإضافة
const saveLinkBtn = document.getElementById('saveLinkBtn');
if (saveLinkBtn) {
  saveLinkBtn.onclick = async () => {
    const secId = targetSecSelect.value;
    const sec = data.find(s => s.id === secId);
    if (!sec) return;

    let icon = selectedIconHTML;

    if (sec.type === 'normal') {
      const nameInput = document.getElementById('linkName');
      const urlInput = document.getElementById('linkUrl');
      const name = nameInput ? nameInput.value.trim() : '';
      const rawUrl = urlInput ? urlInput.value.trim() : '';

      if (!name || !rawUrl) {
        alert('يرجى إدخال اسم الموقع ورابط الموقع!');
        return;
      }

      const url = sanitizeUrl(rawUrl);
      if (url === null) {
        alert('الرابط ده مش مسموح بيه لأسباب أمان.');
        return;
      }

      if (isEditMode && currentEditingItemId) {
        const item = sec.items.find(i => i.id === currentEditingItemId);
        if (item) {
          item.name = name;
          item.url = url;
          item.icon = icon;
        }
      } else {
        sec.items.push({ id: makeId(), name, url, icon });
      }

    } else {
      const nameInput = document.getElementById('topicName');
      const courseInput = document.getElementById('topicCourse');
      const notesInput = document.getElementById('topicNotes');
      const pdfInput = document.getElementById('topicPdf');

      const name = nameInput ? nameInput.value.trim() : '';
      const notes = notesInput ? notesInput.value.trim() : '';
      const rawCourse = courseInput ? courseInput.value.trim() : '';
      const rawPdf = pdfInput ? pdfInput.value.trim() : '';

      if (!name) {
        alert('يرجى إدخال اسم التقنية أو الموضوع!');
        return;
      }

      const course = sanitizeUrl(rawCourse);
      const pdf = sanitizeUrl(rawPdf);
      if (course === null || pdf === null) {
        alert('رابط الكورس أو المرجع مش مسموح بيه لأسباب أمان.');
        return;
      }

      if (isEditMode && currentEditingItemId) {
        const item = sec.items.find(i => i.id === currentEditingItemId);
        if (item) {
          item.name = name;
          item.course = course;
          item.notes = notes;
          item.pdf = pdf;
          item.icon = icon;
        }
      } else {
        sec.items.push({ id: makeId(), name, course, notes, pdf, icon });
      }
    }

    if (linkModal) linkModal.classList.remove('active');
    saveData();
    showSuccessToast(isEditMode ? 'تم تعديل المحتوى بنجاح!' : 'تمت إضافة العنصر بنجاح!');
  };
}

function $(id) {
  return document.getElementById(id);
}

function makeId() {
  return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function sanitizeUrl(url) {
  if (!url) return '';
  const trimmed = url.trim();

  // امنع بروتوكولات خطيرة فعليًا (زي javascript:) بس اقبل أي حاجة تانية زي ما هي
  if (/^\s*(javascript|data|vbscript|file)\s*:/i.test(trimmed)) {
    return null; // مرفوض
  }

  // لو فيه بروتوكول واضح (http, https, mailto, tel, whatsapp...) سيبه زي ما هو
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
    return trimmed;
  }

  // مفيش بروتوكول (مثلاً "wa.me/xxx" أو "google.com") - ضيف https:// تلقائي عشان اللينك يشتغل
  return `https://${trimmed}`;
}

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

window.promptDelete = (type, secId, itemId = null) => {
  if (confirmModal) confirmModal.classList.add('active');
  deleteAction = { type, secId, itemId };
};

const confirmYesBtn = document.getElementById('confirmYesBtn');
if (confirmYesBtn) {
  confirmYesBtn.onclick = () => {
    if (!deleteAction) return;
    if (deleteAction.type === 'section') {
      data = data.filter(s => s.id !== deleteAction.secId);
    } else if (deleteAction.type === 'item') {
      const sec = data.find(s => s.id === deleteAction.secId);
      if (sec) sec.items = sec.items.filter(i => i.id !== deleteAction.itemId);
    }
    if (confirmModal) confirmModal.classList.remove('active');
    deleteAction = null;
    saveData();
  };
}

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

// ===== نسخة احتياطية: تصدير واستيراد البيانات =====
function exportBackup() {
  const backup = {
    app: 'futuristic-glass-dashboard',
    version: 1,
    exportedAt: new Date().toISOString(),
    data: data,
    theme: theme,
    avatar: localStorage.getItem('futuristic_dash_avatar') || null
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dashboard-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let parsed;
    try {
      parsed = JSON.parse(e.target.result);
    } catch (err) {
      alert('الملف ده مش نسخة احتياطية صالحة (JSON غير صحيح).');
      return;
    }

    const incomingData = Array.isArray(parsed) ? parsed : parsed.data;
    if (!Array.isArray(incomingData)) {
      alert('الملف ده مش نسخة احتياطية صالحة لهذا التطبيق.');
      return;
    }

    if (!confirm('استيراد النسخة دي هيستبدل كل بياناتك الحالية. تحب تكمل؟')) return;

    data = incomingData;
    saveData();

    if (parsed.theme === 'dark' || parsed.theme === 'light') {
      theme = parsed.theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('futuristic_dash_theme', theme);
    }

    if (parsed.avatar) {
      localStorage.setItem('futuristic_dash_avatar', parsed.avatar);
      const profileImg = document.getElementById('profileImg');
      if (profileImg) profileImg.src = parsed.avatar;
    }

    showSuccessToast('تم استيراد النسخة الاحتياطية بنجاح!');
  };
  reader.onerror = () => alert('تعذّرت قراءة الملف، حاول تاني.');
  reader.readAsText(file);
}

const exportDataBtn = document.getElementById('exportDataBtn');
if (exportDataBtn) exportDataBtn.onclick = exportBackup;

const importDataFile = document.getElementById('importDataFile');
if (importDataFile) {
  importDataFile.onchange = (e) => {
    importBackup(e.target.files[0]);
    e.target.value = ''; // يسمح باختيار نفس الملف تاني لو حصل خطأ
  };
}
render();
