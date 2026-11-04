'use strict';

// Navigation and filters use stable keys, never translated labels.
const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const sidebarDetails = document.querySelector('#sidebar-details');
const desktopQuery = window.matchMedia('(min-width: 1250px)');
const updateSidebarState = () => {
  const expanded = desktopQuery.matches || sidebar.classList.contains('active');
  sidebarButton.setAttribute('aria-expanded', String(expanded));
  sidebarDetails.inert = !expanded;
  sidebarDetails.setAttribute('aria-hidden', String(!expanded));
  sidebarButton.setAttribute('aria-label', expanded ? '收合個人資料' : '展開個人資料');
};
sidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  updateSidebarState();
});
desktopQuery.addEventListener('change', updateSidebarState);
updateSidebarState();

const tabs = [...document.querySelectorAll('[role="tab"][data-target]')];
const panels = [...document.querySelectorAll('[data-page]')];
const activatePage = (key, { focus = false, updateHash = true } = {}) => {
  if (!panels.some(panel => panel.dataset.page === key)) key = 'about';
  panels.forEach(panel => {
    const active = panel.dataset.page === key;
    panel.hidden = !active;
    panel.classList.toggle('active', active);
  });
  tabs.forEach(tab => {
    const active = tab.dataset.target === key;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  if (updateHash && window.location.hash !== `#${key}`) {
    history.replaceState(null, '', `#${key}`);
  }
};
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    activatePage(tab.dataset.target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activatePage(tabs[next].dataset.target, { focus: true });
  });
});
document.querySelectorAll('[data-page-link]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    activatePage(link.dataset.pageLink, { focus: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
});
window.addEventListener('hashchange', () => {
  const key = location.hash.slice(1);
  if (panels.some(panel => panel.dataset.page === key)) activatePage(key, { updateHash: false });
});
activatePage(location.hash.slice(1), { updateHash: false });

const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const filterStatus = document.querySelector('#filter-status');
filters.forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.filter;
  let count = 0;
  projects.forEach(project => {
    const visible = key === 'all' || project.dataset.category === key;
    project.hidden = !visible;
    project.classList.toggle('active', visible);
    if (visible) count += 1;
  });
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  filterStatus.textContent = `顯示${button.textContent} ${count} 個專案`;
}));

const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#project-dialog-title');
const dialogCategory = document.querySelector('#project-dialog-category');
const dialogBody = document.querySelector('#project-dialog-body');
let dialogTrigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const template = document.querySelector(`#project-${button.dataset.project}`);
    if (!template) return;
    dialogTrigger = button;
    dialogTitle.textContent = button.querySelector('.project-title').textContent;
    dialogCategory.textContent = button.querySelector('.project-category').textContent;
    dialogBody.replaceChildren(template.content.cloneNode(true));
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialogTrigger?.focus();
});
