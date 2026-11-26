// AirportOpSim "Book a demo" page interactions (no dependencies).
(function () {
  'use strict';

  var DAYS = ['Mon 30 Nov', 'Tue 1 Dec', 'Wed 2 Dec', 'Thu 3 Dec', 'Fri 4 Dec'];
  var SLOTS = ['10:00', '11:30', '14:00', '16:00'];
  var state = { day: 1, slot: 1 };

  var ON = { bg: '#E8F1FE', bd: '#2F8BF5' };
  var OFF = { bg: 'rgba(255, 255, 255, 0.72)', bd: '#D5DCE6' };

  function paint(buttons, attr, selected) {
    buttons.forEach(function (b) {
      var on = Number(b.getAttribute(attr)) === selected;
      var s = on ? ON : OFF;
      b.style.background = s.bg;
      b.style.borderColor = s.bd;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  var dayButtons = document.querySelectorAll('[data-day]');
  var slotButtons = document.querySelectorAll('[data-slot]');
  var summaries = document.querySelectorAll('[data-summary]');

  function render() {
    paint(dayButtons, 'data-day', state.day);
    paint(slotButtons, 'data-slot', state.slot);
    var text = DAYS[state.day] + ', ' + SLOTS[state.slot];
    summaries.forEach(function (el) { el.textContent = text; });
  }

  dayButtons.forEach(function (b) {
    b.addEventListener('click', function () { state.day = Number(b.dataset.day); render(); });
  });
  slotButtons.forEach(function (b) {
    b.addEventListener('click', function () { state.slot = Number(b.dataset.slot); render(); });
  });

  // Booking form (front-end only: wire to your calendar/CRM).
  var formView = document.querySelector('[data-state="form"]');
  var sentView = document.querySelector('[data-state="sent"]');
  document.getElementById('demo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    formView.hidden = true;
    sentView.hidden = false;
  });
  document.querySelectorAll('[data-action="reset"]').forEach(function (b) {
    b.addEventListener('click', function () { sentView.hidden = true; formView.hidden = false; });
  });

  render();
})();
