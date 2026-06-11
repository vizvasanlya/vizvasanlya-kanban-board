const cards = [{"label": "Open tasks", "value": "42", "delta": "-8"}, {"label": "In review", "value": "9", "delta": "+3"}, {"label": "Blocked", "value": "2", "delta": "-4"}, {"label": "Sprint health", "value": "91%", "delta": "+7%"}];
const rows = [{"title": "Landing page copy", "status": "Todo", "detail": "Draft final messaging and proof sections."}, {"title": "API pagination", "status": "In progress", "detail": "Add cursor-based paging and tests."}, {"title": "Billing webhook", "status": "Review", "detail": "Validate retry behavior and signature checks."}, {"title": "Onboarding checklist", "status": "Done", "detail": "Published and linked from the dashboard."}];
const insights = ["Blocked items decreased after daily triage.", "Review queue is healthy for current sprint scope.", "Highest-value tasks are clustered in the first two columns."];
const storageKey = 'vizvasanlya-kanban-board-items';
let saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
let filter = 'all';

const statsEl = document.querySelector('#stats');
const listEl = document.querySelector('#list');
const insightsEl = document.querySelector('#insights');
const form = document.querySelector('#add-item');
const input = document.querySelector('#itemInput');

function renderStats() {
  statsEl.innerHTML = cards.map((item) => `
    <article class="metric">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <em>${item.delta}</em>
    </article>
  `).join('');
}

function renderList() {
  const visible = rows.filter((row) => filter === 'all' || row.status.includes(filter));
  if (!visible.length) {
    listEl.innerHTML = '<p class="empty">No items match this filter yet.</p>';
    return;
  }
  listEl.innerHTML = visible.map((row) => `
    <article class="row">
      <div>
        <h3>${row.title}</h3>
        <p>${row.detail}</p>
      </div>
      <span class="badge">${row.status}</span>
    </article>
  `).join('');
}

function renderInsights() {
  insightsEl.innerHTML = insights.map((item) => `<li>${item}</li>`).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  saved.unshift({ title: value, status: 'Active', detail: 'Added from the quick capture form.' });
  localStorage.setItem(storageKey, JSON.stringify(saved.slice(0, 10)));
  input.value = '';
  renderList();
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderList();
  });
});

renderStats();
renderList();
renderInsights();
