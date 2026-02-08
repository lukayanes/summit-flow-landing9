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

/* ===============================
   MOBILE SERVICES DROPDOWN (FIXED)
   =============================== */
(() => {
  const dropdown = document.querySelector(".nav-dropdown");
  const button = dropdown?.querySelector(".nav-dropbtn");
  if (!dropdown || !button) return;

  // Toggle on mobile tap only
  button.addEventListener("click", (e) => {
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    e.preventDefault();
    e.stopPropagation();

    const isOpen = dropdown.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close when tapping outside (mobile only)
  document.addEventListener("click", (e) => {
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    if (dropdown.contains(e.target)) return;

    dropdown.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
})();



