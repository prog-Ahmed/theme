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
        notes: "دراسة الـ Promises, Async/Await, والـ Closures.",
        pdf: "",
        icon: '<i class="fa-brands fa-js"></i>'
      }
    ]
  }
];

let data = JSON.parse(localStorage.getItem('futuristic_dash_data')) || defaultData;
let theme = localStorage.getItem('futuristic_dash_theme') || 'dark';
let deleteAction = null;

document.documentElement.setAttribute('data-theme', theme);

// انيميشن التحميل عند الريلود
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loaderBar');
  if (loader) {
    loader.classList.add('active');
    setTimeout(() => loader.classList.remove('active'), 1400);
  }
});

const grid = document.getElementById('gridContainer');
const targetSecSelect = document.getElementById('targetSecSelect');

function saveData() {
  localStorage.setItem('futuristic_dash_data', JSON.stringify(data));
  render();
}

function render(filterQuery = '') {
  grid.innerHTML = '';
  targetSecSelect.innerHTML = '';

  data.forEach(sec => {
    const filteredItems = sec.items.filter(item => 
      item.name.toLowerCase().includes(filterQuery.toLowerCase())
    );

    if (filterQuery && filteredItems.length === 0 && !sec.title.toLowerCase().includes(filterQuery.toLowerCase())) {
      return;
    }

    const itemsToDisplay = filterQuery ? filteredItems : sec.items;

    const opt = document.createElement('option');
    opt.value = sec.id;
    opt.textContent = `${sec.title} (${sec.type === 'learning' ? 'تعليمي' : 'عادي'})`;
    targetSecSelect.appendChild(opt);

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
                ${item.course ? `<p>▶️ <strong>الكورس:</strong> <a href="${item.course}" target="_blank">رابط الشرح</a></p>` : ''}
                ${item.notes ? `<p>📝 <strong>ملاحظات:</strong> ${item.notes}</p>` : ''}
                ${item.pdf ? `<p>📁 <strong>المراجع:</strong> <a href="${item.pdf}" target="_blank">تحميل الـ PDF</a></p>` : ''}
              </div>
            </div>
          `).join('')}
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

    grid.appendChild(card);
  });
}

// -----------------------------------------------------------
// شريط البحث المطور (الانسيابي والتمدد من المنتصف)
// -----------------------------------------------------------
const topHeader = document.querySelector('.top-header');
const searchInput = document.getElementById('searchInput');
const searchToggleBtn = document.getElementById('searchToggleBtn');

// دالة تصفية النتائج أثناء الكتابة
window.filterDashboard = function() {
  if (searchInput) {
    const query = searchInput.value.trim();
    render(query);
  }
};

// فتح وإغلاق البحث بالطريقة الانسيابية
window.toggleSearch = function(show) {
  if (show === undefined) {
    show = !topHeader.classList.contains('search-active');
  }

  if (show) {
    topHeader.classList.add('search-active');
    if (searchToggleBtn) searchToggleBtn.classList.add('active');
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 250);
  } else {
    topHeader.classList.remove('search-active');
    if (searchToggleBtn) searchToggleBtn.classList.remove('active');
    if (searchInput) searchInput.value = '';
    render(); // إعادة عرض جميع الكروت فور إغلاق البحث
  }
};

// ربط الزر السفلي بدالة التبديل
if (searchToggleBtn) {
  searchToggleBtn.onclick = () => toggleSearch();
}

// زر الـ Home يغلق البحث ويفرغ القيمة
window.resetSearch = function() {
  toggleSearch(false);
};

// -----------------------------------------------------------
// بقية الوظائف والـ Modals
// -----------------------------------------------------------

// Accordion Logic
window.toggleAcc = (header) => {
  header.parentElement.classList.toggle('active');
};

// Theme Toggle
document.getElementById('themeBtn').onclick = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('futuristic_dash_theme', theme);
};

// Modals Logic
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
  };
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

// Add Section
document.getElementById('saveSectionBtn').onclick = () => {
  const title = document.getElementById('secTitle').value.trim();
  const type = document.getElementById('secType').value;
  if (!title) return;

  data.push({ id: 'sec_' + Date.now(), title, type, items: [] });
  document.getElementById('secTitle').value = '';
  secModal.classList.remove('active');
  saveData();
};

// Add Item
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
};

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

// Delete Logic
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

render();
// تحميل صورة البروفايل المحفوظة عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
  const savedAvatar = localStorage.getItem('futuristic_dash_avatar');
  if (savedAvatar) {
    document.getElementById('profileImg').src = savedAvatar;
  }
});

// دالة رفع وتحويل الصورة إلى Base64 وحفظها
function uploadProfileImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function (e) {
    const base64Image = e.target.result;
    
    // تحديث الصورة في الشاشة
    document.getElementById('profileImg').src = base64Image;
    
    // حفظ الصورة في LocalStorage
    localStorage.setItem('futuristic_dash_avatar', base64Image);
  };
}