// AirportOpSim landing page interactions (no dependencies).
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Smooth-scroll for in-page links (nav tiles, "Watch how it works").
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });

  // Departure board: select a module and swap the preview panel.
  var MODULES = {
    courses: { flight: 'AOS 101', title: 'Role-based courses',
      blurb: 'Pick the role you work or want to work in, and get a short lesson path built around it.' },
    airport: { flight: 'AOS 202', title: 'A 3D airport',
      blurb: 'Walk the terminal, the baggage hall and the apron before you ever set foot airside.' },
    sim: { flight: 'AOS 303', title: 'A live simulator',
      blurb: 'Run the same systems the operation runs on, and handle the disruptions they throw at you.' }
  };
  var rows = document.querySelectorAll('[data-module]');
  var panels = document.querySelectorAll('[data-panel]');
  var selFlight = document.getElementById('sel-flight');
  var selTitle = document.getElementById('sel-title');
  var selBlurb = document.getElementById('sel-blurb');

  function selectModule(id) {
    rows.forEach(function (row) {
      var on = row.dataset.module === id;
      row.classList.toggle('row-on', on);
      row.setAttribute('aria-pressed', on ? 'true' : 'false');
      row.style.background = on ? '#E8F1FE' : 'transparent';
    });
    panels.forEach(function (p) { p.hidden = p.dataset.panel !== id; });
    var m = MODULES[id];
    selFlight.textContent = m.flight;
    selTitle.textContent = m.title;
    selBlurb.textContent = m.blurb;
  }
  rows.forEach(function (row) {
    row.addEventListener('click', function () { selectModule(row.dataset.module); });
  });

  // Waitlist form (front-end only: wire to your email provider).
  var form = document.getElementById('notify-form');
  var label = document.getElementById('notify-label');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      label.textContent = "You're on the list";
    });
  }

  // Walkthrough video placeholder: poster <-> playing state.
  var poster = document.querySelector('[data-video="poster"]');
  var playing = document.querySelector('[data-video="playing"]');
  var progress = document.querySelector('.vprog');
  function setPlaying(on) {
    poster.hidden = on;
    playing.hidden = !on;
    if (progress) {
      progress.classList.remove('is-running');
      if (on) { void progress.offsetWidth; progress.classList.add('is-running'); }
    }
  }
  document.querySelectorAll('[data-action="play"]').forEach(function (b) {
    b.addEventListener('click', function () { setPlaying(true); });
  });
  document.querySelectorAll('[data-action="pause"]').forEach(function (b) {
    b.addEventListener('click', function () { setPlaying(false); });
  });
})();
