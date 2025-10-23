document.getElementById('year').textContent = new Date().getFullYear();

// Founder seats (demo using localStorage)
const startSeats = 20;
const key = 'sf_seats_min';
let seats = parseInt(localStorage.getItem(key) || startSeats, 10);
const setSeats = v => {
  seats = Math.max(1, v);
  localStorage.setItem(key, String(seats));
  const els = [document.getElementById('seatsLeft'), document.getElementById('seatsLeft2')];
  els.forEach(el => el && (el.textContent = seats));
};
setSeats(seats);

// Decrement seats on form submit if provider posts a message
window.addEventListener('message', (e) => {
  if (e && e.data && (e.data.type === 'leadconnector-form-success' || e.data.type === 'form-submitted')){
    setSeats(seats - 1);
  }
});

// Modal video player
(function(){
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('modalVideo');
  const open = (src) => {
    player.src = src; player.setAttribute('playsinline',''); player.muted = true;
    player.play().catch(()=>{}); modal.setAttribute('aria-hidden','false');
  };
  const close = () => { player.pause(); player.removeAttribute('src'); player.load(); modal.setAttribute('aria-hidden','true'); };
  document.querySelectorAll('.vthumb').forEach(el => el.addEventListener('click', ()=> open(el.dataset.src)));
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
})();
