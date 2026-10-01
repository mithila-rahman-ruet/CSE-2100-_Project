// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNA-IlsnxwwcauuNgP6e3TEGeGrP8kmQ",
  authDomain: "ruet-connect-aabfe.firebaseapp.com",
  projectId: "ruet-connect-aabfe",
  storageBucket: "ruet-connect-aabfe.firebasestorage.app",
  messagingSenderId: "631707110272",
  appId: "1:631707110272:web:1a95b42a5efb3590718f65"
};

// Initialize Firebase only once
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = typeof firebase !== 'undefined' ? firebase.auth() : null;
const db = typeof firebase !== 'undefined' ? firebase.firestore() : null;
const storage = (typeof firebase !== 'undefined' && typeof firebase.storage === 'function') 
  ? firebase.storage() 
  : null;

console.log("Firebase connected successfully!");

// Global Auth State
window.currentUser = null;
window.authInitialized = false;

const _authReadyCallbacks = [];

/**
 * Register callback to run when auth state is resolved
 */
window.onAuthReady = function(callback) {
  if (window.authInitialized) {
    callback(window.currentUser);
  } else {
    _authReadyCallbacks.push(callback);
  }
};

function dispatchAuthChange(user) {
  _authReadyCallbacks.forEach(cb => {
    try { cb(user); } catch (err) { console.error("Error in onAuthReady callback:", err); }
  });
}

/**
 * Check if the current page is inside the /pages/ directory
 */
function isPagesDirectory() {
  const p = window.location.pathname.replace(/\\/g, '/');
  return p.includes('/pages/') || p.endsWith('/pages');
}

/**
 * Resolves relative URLs correctly whether in root or in /pages/
 */
function resolvePath(page) {
  const inPages = isPagesDirectory();
  switch (page) {
    case 'home':
      return inPages ? '../index.html' : 'index.html';
    case 'login':
      return inPages ? 'login.html' : 'pages/login.html';
    case 'profile':
      return inPages ? 'profile.html' : 'pages/profile.html';
    case 'view-profile':
      return inPages ? 'view-profile.html' : 'pages/view-profile.html';
    case 'lost-found':
      return inPages ? 'lost-found.html' : 'pages/lost-found.html';
    case 'blood':
      return inPages ? 'blood.html' : 'pages/blood.html';
    case 'sell-buy':
      return inPages ? 'sell-buy.html' : 'pages/sell-buy.html';
    case 'club-hub':
      return inPages ? 'club-hub.html' : 'pages/club-hub.html';
    case 'club-details':
      return inPages ? 'club-details.html' : 'pages/club-details.html';
    case 'notes':
      return inPages ? 'notes.html' : 'pages/notes.html';
    default:
      if (page.startsWith('http://') || page.startsWith('https://') || page.startsWith('/')) {
        return page;
      }
      return inPages ? page : `pages/${page}`;
  }
}

/**
 * Identify the current page key for active navbar highlighting
 */
function getCurrentPageKey() {
  const p = window.location.pathname.replace(/\\/g, '/').toLowerCase();
  if (p.includes('lost-found')) return 'lost-found';
  if (p.includes('blood')) return 'blood';
  if (p.includes('sell-buy')) return 'sell-buy';
  if (p.includes('club-hub') || p.includes('club-details')) return 'club-hub';
  if (p.includes('notes')) return 'notes';
  if (p.includes('profile') && !p.includes('view-profile')) return 'profile';
  if (p.includes('view-profile')) return 'view-profile';
  if (p.includes('login')) return 'login';
  return 'home';
}

/**
 * Generate 1-2 uppercase letters from name for avatar
 */
function getUserInitials(name) {
  if (!name || typeof name !== 'string') return 'U';
  const clean = name.trim().replace(/[^a-zA-Z\s]/g, '');
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'U';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Generate HTML for user avatar with image support and initials fallback
 */
function getUserAvatarHtml(user, sizeClass = "w-8 h-8", textClass = "text-xs") {
  if (!user) {
    return `<div class="${sizeClass} rounded-full bg-blue-600 flex items-center justify-center font-bold text-white ${textClass}">?</div>`;
  }
  const photoURL = user.photoURL || user.avatarUrl || user.profilePic;
  const name = user.name || user.displayName || (user.email ? user.email.split('@')[0] : "User");
  const initials = getUserInitials(name);

  if (photoURL && typeof photoURL === 'string' && photoURL.trim() !== '') {
    return `
      <div class="${sizeClass} rounded-full overflow-hidden flex-shrink-0 bg-blue-800 flex items-center justify-center border border-white/20 shadow-sm relative">
        <img src="${escapeHtml(photoURL)}" alt="${escapeHtml(name)}" class="w-full h-full object-cover" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div style="display:none;" class="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white ${textClass}">
          ${initials}
        </div>
      </div>
    `;
  }

  return `
    <div class="${sizeClass} rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-sm border border-white/20 flex-shrink-0 ${textClass}">
      ${initials}
    </div>
  `;
}

/**
 * HTML Escaping utility
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Format timestamp safely
 */
function formatDate(timestamp) {
  if (!timestamp) return '';
  if (timestamp.toDate && typeof timestamp.toDate === 'function') {
    return timestamp.toDate().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
  if (timestamp instanceof Date) {
    return timestamp.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
  return '';
}

/**
 * Get current user
 */
function getCurrentUser() {
  return window.currentUser;
}

/**
 * Load current user profile from Firestore
 */
async function loadCurrentUserProfile(uid) {
  if (!uid || !db) return null;
  try {
    const doc = await db.collection("users").doc(uid).get();
    if (doc.exists) {
      return { uid, ...doc.data() };
    }
    return null;
  } catch (err) {
    console.warn("loadCurrentUserProfile error:", err);
    return null;
  }
}

/**
 * Update current user data in Firestore and Auth, and sync navbar
 */
async function updateCurrentUserData(dataToUpdate) {
  if (!auth || !auth.currentUser) throw new Error("No authenticated user");
  const uid = auth.currentUser.uid;

  if (dataToUpdate.name && auth.currentUser.updateProfile) {
    await auth.currentUser.updateProfile({ displayName: dataToUpdate.name }).catch(() => {});
  }
  if (dataToUpdate.photoURL && auth.currentUser.updateProfile) {
    await auth.currentUser.updateProfile({ photoURL: dataToUpdate.photoURL }).catch(() => {});
  }

  if (db) {
    await db.collection("users").doc(uid).set(dataToUpdate, { merge: true });
  }

  window.currentUser = {
    ...window.currentUser,
    ...dataToUpdate
  };

  updateNavbar();
  dispatchAuthChange(window.currentUser);
}

/**
 * Protect page - redirect to login if unauthenticated
 */
function requireAuth(redirectUrl) {
  return new Promise((resolve) => {
    window.onAuthReady((user) => {
      if (!user) {
        window.location.href = redirectUrl || resolvePath('login');
      } else {
        resolve(user);
      }
    });
  });
}

/**
 * Logout
 */
function logout() {
  if (!auth) return;
  auth.signOut().then(() => {
    window.currentUser = null;
    window.location.href = resolvePath('login');
  }).catch((err) => {
    console.error("Logout error:", err);
    window.location.href = resolvePath('login');
  });
}

// ==================== NAVBAR SYSTEM ====================

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'lost-found', label: 'Lost & Found' },
  { key: 'blood', label: 'Blood Group' },
  { key: 'sell-buy', label: 'Sell & Buy' },
  { key: 'club-hub', label: 'Club Hub' },
  { key: 'notes', label: 'Notes Vault' }
];

function renderNavLinks(activeKey, isMobile = false) {
  return NAV_ITEMS.map(item => {
    const isActive = item.key === activeKey;
    const href = resolvePath(item.key);
    if (isMobile) {
      return `
        <a href="${href}" class="block px-4 py-2.5 rounded-xl text-base font-medium transition ${
          isActive 
            ? 'bg-blue-700 text-white font-semibold shadow-sm' 
            : 'text-blue-100 hover:bg-blue-900/60 hover:text-white'
        }">
          ${item.label}
        </a>
      `;
    }
    return `
      <a href="${href}" class="px-3.5 py-2 rounded-xl text-sm transition ${
        isActive 
          ? 'bg-blue-700 text-white font-semibold shadow-sm' 
          : 'text-blue-100 hover:bg-blue-800/80 hover:text-white font-medium'
      }">
        ${item.label}
      </a>
    `;
  }).join('');
}

function updateNavbar() {
  const nav = document.getElementById('mainNavbar') || document.querySelector('nav');
  if (!nav) return;

  const currentKey = getCurrentPageKey();
  const user = window.currentUser;
  const isAuthInit = window.authInitialized;
  const loginPath = resolvePath('login');
  const profilePath = resolvePath('profile');

  // Desktop user section HTML
  let userSectionHtml = '';
  let mobileUserHtml = '';

  if (!isAuthInit) {
    // Loading skeleton
    userSectionHtml = `
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-blue-900/60 animate-pulse"></div>
        <div class="hidden sm:block h-4 w-20 bg-blue-900/60 rounded animate-pulse"></div>
      </div>
    `;
    mobileUserHtml = `
      <div class="h-10 w-full bg-blue-900/60 rounded-xl animate-pulse"></div>
    `;
  } else if (user) {
    const name = user.name || user.displayName || (user.email ? user.email.split('@')[0] : "Student");
    const studentId = user.studentId || (user.email ? user.email.split('@')[0] : "");
    const email = user.email || "";
    const role = user.role || "student";
    const avatarHtml = getUserAvatarHtml(user, "w-8 h-8", "text-xs");
    const avatarHtmlLarge = getUserAvatarHtml(user, "w-10 h-10", "text-sm");

    userSectionHtml = `
      <div class="relative" id="userDropdownWrapper">
        <button id="userDropdownTrigger" type="button" aria-expanded="false" aria-haspopup="true"
                class="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl hover:bg-blue-900/80 focus:bg-blue-900/80 transition border border-white/10 hover:border-white/20 focus:outline-none">
          ${avatarHtml}
          <div class="hidden sm:flex flex-col text-left leading-tight max-w-[140px]">
            <span class="font-semibold text-sm text-white truncate">${escapeHtml(name)}</span>
            ${studentId ? `<span class="text-[11px] text-blue-200 font-mono truncate">ID: ${escapeHtml(studentId)}</span>` : ''}
          </div>
          <svg class="w-4 h-4 text-blue-300 transition-transform duration-200" id="dropdownCaret" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div id="userDropdownMenu" 
             class="hidden absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-gray-100 text-gray-800 transition-all origin-top-right">
          <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3 bg-slate-50/50 rounded-t-2xl">
            ${avatarHtmlLarge}
            <div class="flex-1 min-w-0">
              <p class="font-bold text-gray-900 text-sm truncate">${escapeHtml(name)}</p>
              <p class="text-xs text-gray-500 truncate">${escapeHtml(email)}</p>
              <div class="flex items-center gap-1.5 mt-1">
                ${studentId ? `<span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">ID: ${escapeHtml(studentId)}</span>` : ''}
                <span class="text-[10px] uppercase tracking-wider bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-bold">${escapeHtml(role)}</span>
              </div>
            </div>
          </div>
          <div class="py-1">
            <a href="${profilePath}" class="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition">
              <span class="text-base">👤</span> My Profile
            </a>
            <a href="${resolvePath('sell-buy')}" class="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition">
              <span class="text-base">🛒</span> Sell & Buy Marketplace
            </a>
            <a href="${resolvePath('lost-found')}" class="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition">
              <span class="text-base">🔍</span> Lost & Found
            </a>
            <a href="${resolvePath('notes')}" class="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition">
              <span class="text-base">📄</span> Notes Vault
            </a>
          </div>
          <div class="border-t border-gray-100 pt-1 mt-1">
            <button onclick="logout()" class="w-full text-left flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-medium transition">
              <span class="text-base">🚪</span> Sign Out
            </button>
          </div>
        </div>
      </div>
    `;

    mobileUserHtml = `
      <div class="p-3 bg-blue-900/50 rounded-xl mb-2 flex items-center gap-3">
        ${avatarHtmlLarge}
        <div class="flex-1 min-w-0">
          <p class="font-bold text-white text-sm truncate">${escapeHtml(name)}</p>
          <p class="text-xs text-blue-200 truncate">${escapeHtml(email)}</p>
          ${studentId ? `<p class="text-[11px] font-mono text-blue-300">ID: ${escapeHtml(studentId)}</p>` : ''}
        </div>
      </div>
      <div class="space-y-1">
        <a href="${profilePath}" class="block px-4 py-2 rounded-lg text-sm text-white hover:bg-blue-800 transition font-medium">
          👤 View & Edit Profile
        </a>
        <button onclick="logout()" class="w-full text-left px-4 py-2 rounded-lg text-sm text-red-300 hover:bg-red-900/30 transition font-medium">
          🚪 Logout
        </button>
      </div>
    `;
  } else {
    // Unauthenticated
    userSectionHtml = `
      <a href="${loginPath}" class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl text-sm transition shadow-sm flex items-center gap-1.5 border border-blue-500/30">
        <span>🔑</span> Login / Sign Up
      </a>
    `;
    mobileUserHtml = `
      <a href="${loginPath}" class="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl text-sm transition shadow-sm">
        🔑 Login / Sign Up
      </a>
    `;
  }

  // Check if standard navbar container already exists
  const navContainer = nav.querySelector('.ruet-nav-inner');
  if (navContainer) {
    const userSlot = nav.querySelector('#globalUserSlot');
    if (userSlot) userSlot.innerHTML = userSectionHtml;
    const mobileUserSlot = nav.querySelector('#globalMobileUserSlot');
    if (mobileUserSlot) mobileUserSlot.innerHTML = mobileUserHtml;
  } else {
    // Full Navbar Injection
    nav.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ruet-nav-inner">
        <!-- Logo -->
        <a href="${resolvePath('home')}" class="flex items-center gap-2 group hover:opacity-95 transition">
          <span class="text-2xl group-hover:scale-110 transition-transform">🎓</span>
          <span class="text-xl font-bold tracking-wide text-white">RUET CONNECT</span>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden lg:flex items-center gap-1">
          ${renderNavLinks(currentKey, false)}
        </div>

        <!-- Right Controls: Profile / Login + Mobile Menu Button -->
        <div class="flex items-center gap-3">
          <div id="globalUserSlot" class="user-section flex items-center">
            ${userSectionHtml}
          </div>
          
          <button id="mobileNavToggle" aria-label="Toggle navigation menu"
                  class="lg:hidden p-2 rounded-xl text-blue-200 hover:text-white hover:bg-blue-900/80 transition focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobileNavDrawer" class="hidden lg:hidden border-t border-blue-900 bg-blue-950 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl">
        ${renderNavLinks(currentKey, true)}
        <div id="globalMobileUserSlot" class="pt-3 border-t border-blue-900 mt-2">
          ${mobileUserHtml}
        </div>
      </div>
    `;
  }

  // Setup Event Handlers
  setupNavbarEvents();
}

function setupNavbarEvents() {
  // Desktop User Dropdown Toggle
  const trigger = document.getElementById('userDropdownTrigger');
  const menu = document.getElementById('userDropdownMenu');
  const caret = document.getElementById('dropdownCaret');

  if (trigger && menu) {
    trigger.onclick = (e) => {
      e.stopPropagation();
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        if (caret) caret.classList.add('rotate-180');
      } else {
        menu.classList.add('hidden');
        if (caret) caret.classList.remove('rotate-180');
      }
    };
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.onclick = (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('hidden');
    };
  }
}

// Close dropdowns on outside click or ESC key
document.addEventListener('click', (e) => {
  const menu = document.getElementById('userDropdownMenu');
  const trigger = document.getElementById('userDropdownTrigger');
  const caret = document.getElementById('dropdownCaret');
  if (menu && !menu.classList.contains('hidden')) {
    if (!menu.contains(e.target) && (!trigger || !trigger.contains(e.target))) {
      menu.classList.add('hidden');
      if (caret) caret.classList.remove('rotate-180');
    }
  }

  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileBtn = document.getElementById('mobileNavToggle');
  if (mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
    if (!mobileDrawer.contains(e.target) && (!mobileBtn || !mobileBtn.contains(e.target))) {
      mobileDrawer.classList.add('hidden');
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('userDropdownMenu');
    const caret = document.getElementById('dropdownCaret');
    if (menu) {
      menu.classList.add('hidden');
      if (caret) caret.classList.remove('rotate-180');
    }
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileDrawer) mobileDrawer.classList.add('hidden');
  }
});

// ==================== AUTH STATE LISTENER ====================
if (auth) {
  auth.onAuthStateChanged((user) => {
    window.authInitialized = true;
    if (user) {
      const fallbackName = user.displayName || (user.email ? user.email.split('@')[0] : "Student");
      const derivedStudentId = user.email ? user.email.split('@')[0] : "";
      
      window.currentUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL || null,
        name: fallbackName,
        studentId: derivedStudentId
      };
      
      updateNavbar();
      dispatchAuthChange(window.currentUser);

      if (db) {
        db.collection("users").doc(user.uid).get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              window.currentUser = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: data.photoURL || data.profilePic || user.photoURL || null,
                ...data,
                name: data.name || user.displayName || fallbackName,
                studentId: data.studentId || derivedStudentId
              };
              updateNavbar();
              dispatchAuthChange(window.currentUser);
            }
          })
          .catch((error) => {
            console.warn("Error loading user profile doc:", error);
          });
      }
    } else {
      window.currentUser = null;
      updateNavbar();
      dispatchAuthChange(null);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavbar();
});