/* ===============================
   FOOTER YEAR
   =============================== */
document.getElementById('year') &&
  (document.getElementById('year').textContent = new Date().getFullYear());

/* ===============================
   FOUNDER SEATS (LOCAL DEMO)
   =============================== */
const startSeats = 20;
const key = 'sf_seats_min';

let seats = parseInt(localStorage.getItem(key) || startSeats, 10);

const setSeats = (v) => {
  seats = Math.max(1, v);
  localStorage.setItem(key, String(seats));
  ['seatsLeft', 'seatsLeft2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = seats;
  });
};

setSeats(seats);

// Listen for form success events
window.addEventListener('message', (e) => {
  if (!e || !e.data) return;
  if (e.data.type === 'leadconnector-form-success' || e.data.type === 'form-submitted') {
    setSeats(seats - 1);
  }
});

/* ===============================
   MODAL VIDEO PLAYER
   =============================== */
(() => {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('modalVideo');
  if (!modal || !player) return;

  const open = (src) => {
    player.src = src;
    player.setAttribute('playsinline', '');
    player.muted = true;
    player.play().catch(() => {});
    modal.setAttribute('aria-hidden', 'false');
  };

  const close = () => {
    player.pause();
    player.removeAttribute('src');
    player.load();
    modal.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('.vthumb').forEach(el =>
    el.addEventListener('click', () => open(el.dataset.src))
  );

  modal.querySelectorAll('[data-close]').forEach(el =>
    el.addEventListener('click', close)
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();



// Nav scroll background (FL Man Plumbing behavior)
(() => {
  const nav = document.querySelector(".top-nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  }, { passive: true });
})();

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".nav-dropbtn");
  const openDropdown = document.querySelector(".nav-dropdown.is-open");

  // If clicking the Services button
  if (btn) {
    e.preventDefault();
    e.stopPropagation();

    const dropdown = btn.closest(".nav-dropdown");
    if (!dropdown) return;

    // Close any other open dropdown first
    if (openDropdown && openDropdown !== dropdown) {
      openDropdown.classList.remove("is-open");
      const b = openDropdown.querySelector(".nav-dropbtn");
      if (b) b.setAttribute("aria-expanded", "false");
    }

    // Toggle this one
    const isOpen = dropdown.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    return;
  }

  // If clicking anywhere else, close it
  if (openDropdown) {
    openDropdown.classList.remove("is-open");
    const b = openDropdown.querySelector(".nav-dropbtn");
    if (b) b.setAttribute("aria-expanded", "false");
  }
}, true); // capture = TRUE helps iOS Safari / overlays


