/**
 * Kitty Owen Knowledge Hub - Main Interactive Controller
 * Handles SPA routing, blog rendering, filtering, search, academic tabs,
 * interactive resource viewer, modals, brand suite, and contact form.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize App Modules
  initTheme();
  initNavigation();
  initHomeView();
  initBlogView();
  initAcademicView();
  initResourceView();
  initContactForm();
  initModals();
  initCookieBanner();
});

/* ==========================================================================
   1. THEME CONTROLLER (LIGHT / DARK)
   ========================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('ko_theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ko_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === 'dark' 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

/* ==========================================================================
   2. SPA ROUTER & NAVIGATION
   ========================================================================== */
function initNavigation() {
  const navTriggers = document.querySelectorAll('.nav-link, .mobile-link, .nav-trigger');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileClose = document.getElementById('mobileMenuClose');

  // Handle hash changes or click triggers
  navTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const targetPage = trigger.getAttribute('data-page');
      if (targetPage) {
        navigateToPage(targetPage);
        closeMobileNav();
      }
    });
  });

  // Listen to window hash change
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateToPage(hash);
  });

  // Load initial page based on hash
  const initialHash = window.location.hash.replace('#', '') || 'home';
  navigateToPage(initialHash);

  // Mobile Drawer Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('open');
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
  }
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) closeMobileNav();
    });
  }
}

function closeMobileNav() {
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  if (mobileOverlay) mobileOverlay.classList.remove('open');
}

function navigateToPage(pageId) {
  const validPages = ['home', 'sobre-mi', 'blog', 'publicaciones', 'recursos', 'contacto'];
  const activeId = validPages.includes(pageId) ? pageId : 'home';

  // Toggle page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(`page-${activeId}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update Nav Links Active Class
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    if (link.getAttribute('data-page') === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update document title
  const pageTitles = {
    'home': 'Kitty Owen | Centro de Conocimiento & Estrategia',
    'sobre-mi': 'Sobre mí | Kitty Owen - Estrategia, Datos & Liderazgo',
    'blog': 'Notas para comprender mejor | Kitty Owen Blog',
    'publicaciones': 'Publicaciones Académicas | Kitty Owen',
    'recursos': 'Centro de Recursos | Repositorio Abierto Kitty Owen',
    'contacto': 'Contacto & TRUPPIA | Kitty Owen'
  };
  document.title = pageTitles[activeId] || pageTitles['home'];
}

/* ==========================================================================
   3. HOME VIEW CONTROLLER
   ========================================================================== */
function initHomeView() {
  const container = document.getElementById('homeLatestPosts');
  if (!container) return;

  const latest = BLOG_POSTS.slice(0, 3);
  container.innerHTML = latest.map(post => createPostCardHTML(post)).join('');
  attachPostCardEvents(container);
}

/* ==========================================================================
   4. BLOG VIEW ("NOTAS PARA COMPRENDER MEJOR")
   ========================================================================== */
let currentBlogCategory = 'all';
let currentBlogSearch = '';

function initBlogView() {
  const grid = document.getElementById('blogGrid');
  const chips = document.querySelectorAll('#blogCategoryChips .chip');
  const searchInput = document.getElementById('blogSearchInput');
  const searchClear = document.getElementById('blogSearchClear');

  renderBlogPosts();

  // Category Filtering
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentBlogCategory = chip.getAttribute('data-cat');
      renderBlogPosts();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentBlogSearch = e.target.value.toLowerCase().trim();
      if (searchClear) {
        searchClear.style.display = currentBlogSearch.length > 0 ? 'block' : 'none';
      }
      renderBlogPosts();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentBlogSearch = '';
      searchClear.style.display = 'none';
      renderBlogPosts();
    });
  }
}

function renderBlogPosts() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  let filtered = BLOG_POSTS.filter(post => {
    const matchesCat = currentBlogCategory === 'all' || post.category === currentBlogCategory;
    const matchesSearch = currentBlogSearch === '' || 
      post.title.toLowerCase().includes(currentBlogSearch) ||
      post.excerpt.toLowerCase().includes(currentBlogSearch) ||
      post.category.toLowerCase().includes(currentBlogSearch);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: 3rem 0;">
        <i class="fa-solid fa-file-circle-question" style="font-size: 3rem; color: var(--color-secondary); margin-bottom: 1rem;"></i>
        <h3>No se encontraron publicaciones</h3>
        <p>Intente ajustando los filtros de categoría o el término de búsqueda.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(post => createPostCardHTML(post)).join('');
  attachPostCardEvents(grid);
}

function createPostCardHTML(post) {
  return `
    <article class="post-card" data-post-id="${post.id}">
      <div class="post-cover" style="background: ${post.coverGradient}">
        <i class="fa-solid ${post.icon} post-cover-icon"></i>
        <span class="post-cat-badge">${post.category}</span>
      </div>
      <div class="post-body">
        <div class="post-meta">
          <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
        </div>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-footer">
          <button class="btn btn-xs btn-outline read-post-btn" data-post-id="${post.id}">
            Leer nota completa <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachPostCardEvents(container) {
  container.querySelectorAll('.read-post-btn, .post-card').forEach(elem => {
    elem.addEventListener('click', (e) => {
      // Prevent double firing if clicking button inside card
      e.stopPropagation();
      const postId = elem.getAttribute('data-post-id');
      if (postId) openReaderModal(postId);
    });
  });
}

/* ==========================================================================
   5. ACADEMIC PUBLICATIONS VIEW
   ========================================================================== */
function initAcademicView() {
  const container = document.getElementById('academicPublicationsList');
  const tabs = document.querySelectorAll('.tab-navigation .tab-btn');

  renderAcademicList('all');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-tab');
      renderAcademicList(cat);
    });
  });
}

function renderAcademicList(category) {
  const container = document.getElementById('academicPublicationsList');
  if (!container) return;

  const filtered = category === 'all' 
    ? ACADEMIC_PUBLICATIONS 
    : ACADEMIC_PUBLICATIONS.filter(item => item.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="padding: 3rem 0;">
        <p>No hay registros disponibles en esta categoría académica.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="academic-card">
      <div class="academic-cover-icon">
        <i class="fa-solid ${item.icon}"></i>
        <span class="badge-text">${item.coverBadge}</span>
      </div>
      <div class="academic-content">
        <div class="academic-meta-row">
          <span class="pill-tag" style="margin-bottom:0; font-size:0.75rem;">${item.categoryLabel}</span>
          <span style="font-size:0.85rem; font-weight:700;"><i class="fa-regular fa-calendar"></i> ${item.year}</span>
          ${item.doi ? `<a href="${item.link}" target="_blank" class="top-bar-badge" style="background:#415A77;">DOI: ${item.doi}</a>` : ''}
        </div>
        
        <h3 class="academic-title">${item.title}</h3>
        
        <div class="apa-box">
          <span>${item.apa}</span>
          <button class="btn btn-xs btn-outline copy-apa-btn" data-apa="${encodeURIComponent(item.apa)}" title="Copiar referencia APA">
            <i class="fa-solid fa-copy"></i> Copiar APA
          </button>
        </div>

        <p class="academic-abstract"><strong>Resumen:</strong> ${item.abstract}</p>

        <div style="display:flex; gap:0.75rem;">
          <a href="${item.link}" target="_blank" class="btn btn-xs btn-jade"><i class="fa-solid fa-external-link"></i> Acceder a Publicación</a>
        </div>
      </div>
    </div>
  `).join('');

  // Attach APA Copy Buttons
  container.querySelectorAll('.copy-apa-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = decodeURIComponent(btn.getAttribute('data-apa'));
      navigator.clipboard.writeText(text).then(() => {
        const origHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
        btn.style.backgroundColor = '#2A9D8F';
        btn.style.color = '#FFFFFF';
        setTimeout(() => {
          btn.innerHTML = origHTML;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 2000);
      });
    });
  });
}

/* ==========================================================================
   6. CENTRO DE RECURSOS VIEW & INTERACTIVE PDF VIEWER
   ========================================================================== */
let activeResourceArea = 'all';
let activeResourceLevel = 'all';
let activeResourceSearch = '';

function initResourceView() {
  const areaSelect = document.getElementById('resourceAreaSelect');
  const levelSelect = document.getElementById('resourceLevelSelect');
  const searchInput = document.getElementById('resourceSearchInput');

  renderResourcesGrid();

  if (areaSelect) {
    areaSelect.addEventListener('change', (e) => {
      activeResourceArea = e.target.value;
      renderResourcesGrid();
    });
  }

  if (levelSelect) {
    levelSelect.addEventListener('change', (e) => {
      activeResourceLevel = e.target.value;
      renderResourcesGrid();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeResourceSearch = e.target.value.toLowerCase().trim();
      renderResourcesGrid();
    });
  }
}

function renderResourcesGrid() {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;

  const filtered = RESOURCES_DATA.filter(rec => {
    const matchesArea = activeResourceArea === 'all' || rec.area === activeResourceArea;
    const matchesLevel = activeResourceLevel === 'all' || rec.level === activeResourceLevel;
    const matchesSearch = activeResourceSearch === '' || 
      rec.title.toLowerCase().includes(activeResourceSearch) ||
      rec.description.toLowerCase().includes(activeResourceSearch) ||
      rec.area.toLowerCase().includes(activeResourceSearch);
    return matchesArea && matchesLevel && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: 3rem 0;">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--color-secondary); margin-bottom: 1rem;"></i>
        <h3>No se encontraron recursos</h3>
        <p>Ajuste los filtros de área o nivel para explorar el repositorio.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(rec => `
    <div class="resource-card">
      <div class="resource-top-bar">
        <span class="area-badge"><i class="fa-solid fa-tag"></i> ${rec.area}</span>
        <span class="level-badge level-${rec.level}"><i class="fa-solid fa-layer-group"></i> ${rec.level}</span>
      </div>
      
      <i class="fa-solid ${rec.icon} resource-icon"></i>
      <h3 class="resource-title">${rec.title}</h3>
      <p class="resource-desc">${rec.description}</p>
      
      <div class="resource-footer-info">
        <span><i class="fa-regular fa-clock"></i> Actualizado: ${rec.updateDate}</span>
        <span><i class="fa-solid fa-code-branch"></i> Versión: ${rec.version}</span>
      </div>

      <button class="btn btn-primary btn-full view-resource-btn" data-rec-id="${rec.id}">
        <i class="fa-solid fa-eye"></i> Ver recurso
      </button>
    </div>
  `).join('');

  // Attach event listener for "Ver recurso" button
  grid.querySelectorAll('.view-resource-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const recId = btn.getAttribute('data-rec-id');
      openResourceViewerModal(recId);
    });
  });
}

/* Resource Viewer Modal Logic */
let currentResource = null;
let currentSlideIndex = 0;

function openResourceViewerModal(recId) {
  currentResource = RESOURCES_DATA.find(r => r.id === recId);
  if (!currentResource) return;

  currentSlideIndex = 0;
  const modal = document.getElementById('resourceViewerModal');
  const headerInfo = document.getElementById('resourceModalHeaderInfo');
  const detailPanel = document.getElementById('resourceDetailPanel');

  headerInfo.innerHTML = `
    <h2>${currentResource.title}</h2>
    <div style="display:flex; gap:0.75rem; margin-top:0.35rem; align-items:center;">
      <span class="pill-tag" style="margin-bottom:0; font-size:0.7rem;">Área: ${currentResource.area}</span>
      <span style="font-size:0.8rem; font-weight:700;" class="level-${currentResource.level}">Nivel: ${currentResource.level}</span>
      <span style="font-size:0.8rem; color:var(--color-secondary);">Versión ${currentResource.version} (${currentResource.updateDate})</span>
    </div>
  `;

  detailPanel.innerHTML = `
    <h3>Descripción del Documento</h3>
    <p>${currentResource.description}</p>
    
    <div style="background:var(--bg-secondary); border-left:3px solid var(--color-accent-jade); padding:1rem; border-radius:var(--radius-sm); margin:1.25rem 0;">
      <strong style="font-size:0.85rem; color:var(--color-accent-jade);"><i class="fa-solid fa-cube"></i> Uso en TRUPPIA:</strong>
      <p style="font-size:0.85rem; margin:0.35rem 0 0 0;">${currentResource.truppiaNote}</p>
    </div>

    <div style="margin-top:1.5rem;">
      <h4 style="font-size:0.9rem; margin-bottom:0.5rem;">Opciones de Descarga y Uso:</h4>
      <p style="font-size:0.8rem;">Cada presentación y documento se almacena en formato <strong>PDF</strong> para asegurar compatibilidad y preservar el diseño en cualquier dispositivo. El archivo editable <strong>(.pptx)</strong> queda resguardado como copia de trabajo.</p>
      
      <div style="display:flex; flex-direction:column; gap:0.6rem; margin-top:1rem;">
        <button class="btn btn-jade btn-full btn-sm" id="downloadPdfBtn">
          <i class="fa-solid fa-file-pdf"></i> Visualizar / Guardar PDF Completo
        </button>
        <button class="btn btn-outline btn-full btn-sm" id="requestPptxBtn">
          <i class="fa-solid fa-file-powerpoint"></i> Solicitar versión editable (.pptx)
        </button>
      </div>
    </div>
  `;

  renderPdfSlide();
  modal.classList.add('open');

  // Slide navigation buttons
  document.getElementById('pdfPrevBtn').onclick = () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderPdfSlide();
    }
  };

  document.getElementById('pdfNextBtn').onclick = () => {
    if (currentSlideIndex < currentResource.pdfPages.length - 1) {
      currentSlideIndex++;
      renderPdfSlide();
    }
  };

  document.getElementById('downloadPdfBtn').onclick = () => {
    alert(`Descargando copia PDF de alta calidad de: "${currentResource.title}" (Versión ${currentResource.version})`);
  };

  document.getElementById('requestPptxBtn').onclick = () => {
    navigateToPage('contacto');
    document.getElementById('resourceViewerModal').classList.remove('open');
    const select = document.getElementById('contactSubject');
    if (select) select.value = 'Consulta sobre Recursos';
  };
}

function renderPdfSlide() {
  if (!currentResource) return;
  const slide = currentResource.pdfPages[currentSlideIndex];
  const viewport = document.getElementById('pdfViewport');
  const indicator = document.getElementById('pdfPageIndicator');
  const total = currentResource.pdfPages.length;

  indicator.textContent = `Página ${currentSlideIndex + 1} de ${total}`;

  viewport.innerHTML = `
    <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:2rem; text-align:center;">
      <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:#2A9D8F; font-weight:700;">
        ${currentResource.title} — Slide ${slide.page}
      </span>
      <h3 style="color:#FFFFFF; font-size:1.5rem; margin:1rem 0;">${slide.title}</h3>
      <p style="color:#CBD5E1; font-size:1rem; line-height:1.6;">${slide.body}</p>
    </div>
  `;

  document.getElementById('pdfPrevBtn').disabled = (currentSlideIndex === 0);
  document.getElementById('pdfNextBtn').disabled = (currentSlideIndex === total - 1);
}

/* ==========================================================================
   7. READER MODAL (FOR BLOG POSTS)
   ========================================================================== */
function openReaderModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('readerModal');
  const body = document.getElementById('readerModalBody');

  body.innerHTML = `
    <div class="post-cover" style="background: ${post.coverGradient}; border-radius: var(--radius-md); margin-bottom: 2rem;">
      <i class="fa-solid ${post.icon} post-cover-icon"></i>
      <span class="post-cat-badge">${post.category}</span>
    </div>
    
    <div class="post-meta" style="margin-bottom: 1rem;">
      <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
      <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
    </div>

    <h1 style="font-size: 2.2rem; margin-bottom: 1.5rem; line-height: 1.25;">${post.title}</h1>

    <div class="post-article-content" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-heading);">
      ${post.contentHTML}
    </div>

    <div style="border-top: 1px solid var(--border-color); margin-top: 2.5rem; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
      <span style="font-weight: 700; font-family: var(--font-heading);"><i class="fa-solid fa-share-nodes"></i> Compartir artículo:</span>
      <div style="display: flex; gap: 0.5rem;">
        <button class="icon-btn share-btn" data-type="linkedin"><i class="fa-brands fa-linkedin-in"></i></button>
        <button class="icon-btn share-btn" data-type="twitter"><i class="fa-brands fa-x-twitter"></i></button>
        <button class="icon-btn share-btn" data-type="whatsapp"><i class="fa-brands fa-whatsapp"></i></button>
        <button class="icon-btn share-btn" data-type="copy" title="Copiar enlace"><i class="fa-solid fa-link"></i></button>
      </div>
    </div>
  `;

  modal.classList.add('open');

  // Share buttons handler
  body.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(post.title);

      if (type === 'linkedin') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
      if (type === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
      if (type === 'whatsapp') window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
      if (type === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(() => alert('¡Enlace copiado al portapapeles!'));
      }
    });
  });
}

/* ==========================================================================
   8. CONTACT FORM CONTROLLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('contactSuccessMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

      setTimeout(() => {
        form.reset();
        form.classList.add('hidden');
        if (successBox) successBox.classList.remove('hidden');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar Mensaje';
      }, 1000);
    });
  }
}

/* ==========================================================================
   9. MODALS & TECH SUITE
   ========================================================================== */
function initModals() {
  // Reader Modal Close
  const readerClose = document.getElementById('readerModalClose');
  const readerModal = document.getElementById('readerModal');
  if (readerClose) readerClose.onclick = () => readerModal.classList.remove('open');

  // Resource Viewer Modal Close
  const resourceClose = document.getElementById('resourceViewerClose');
  const resourceModal = document.getElementById('resourceViewerModal');
  if (resourceClose) resourceClose.onclick = () => resourceModal.classList.remove('open');

  // Tech Suite Modal Open/Close & Tabs
  const techSuiteBtn = document.getElementById('techSuiteBtn');
  const techSuiteModal = document.getElementById('techSuiteModal');
  const techSuiteClose = document.getElementById('techSuiteClose');

  if (techSuiteBtn) techSuiteBtn.onclick = () => techSuiteModal.classList.add('open');
  if (techSuiteClose) techSuiteClose.onclick = () => techSuiteModal.classList.remove('open');

  const suiteTabs = document.querySelectorAll('.suite-tab');
  suiteTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      suiteTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const paneId = tab.getAttribute('data-suitetab');
      
      document.querySelectorAll('.suite-pane').forEach(p => p.classList.remove('active'));
      const targetPane = document.getElementById(`pane-${paneId}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Close modals on clicking backdrop
  [readerModal, resourceModal, techSuiteModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
  });

  // Footer modal triggers
  document.getElementById('openPrivacyModal')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Política de Privacidad:\nEste sitio web respeta la privacidad de los usuarios. Los datos personales ingresados en los formularios de contacto son tratados con estricta confidencialidad.');
  });
  
  document.getElementById('openCookiesModal')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cookieBanner').style.display = 'block';
  });

  document.getElementById('openTermsModal')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Términos de Uso:\nEl contenido docente y los recursos abiertos publicados en este centro de conocimiento están destinados a fines de consulta, aprendizaje y desarrollo profesional.');
  });

  document.getElementById('openCopyrightModal')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Aviso de Derechos de Autor:\n© 2026 Kitty Owen. Los materiales docentes, ensayos y publicaciones están protegidos por derechos de propiedad intelectual.');
  });
}

/* ==========================================================================
   10. COOKIE CONSENT BANNER
   ========================================================================== */
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('acceptCookiesBtn');
  const declineBtn = document.getElementById('declineCookiesBtn');

  const consent = localStorage.getItem('ko_cookie_consent');
  if (consent) {
    if (banner) banner.style.display = 'none';
  }

  if (acceptBtn) {
    acceptBtn.onclick = () => {
      localStorage.setItem('ko_cookie_consent', 'accepted');
      if (banner) banner.style.display = 'none';
    };
  }

  if (declineBtn) {
    declineBtn.onclick = () => {
      localStorage.setItem('ko_cookie_consent', 'essential_only');
      if (banner) banner.style.display = 'none';
    };
  }
}
