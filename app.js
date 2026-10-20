(() => {
  'use strict';
  const data = window.SITE_CONTENT;
  if (!data) return;
  const $ = (id) => document.getElementById(id);
  const node = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const safeUrl = (value) => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
    catch { return null; }
  };
  const setLink = (element, value) => {
    const href = safeUrl(value);
    if (href) { element.href = href; element.target = '_blank'; element.rel = 'noopener noreferrer'; }
    else element.hidden = true;
  };
  const link = (label, url, className) => {
    const anchor = node('a', className, label);
    setLink(anchor, url);
    return anchor;
  };
  $('hero-lead').textContent = data.hero.lead;
  $('hero-description').textContent = data.hero.description;
  $('about-title').textContent = data.about.title;
  data.about.paragraphs.forEach(text => $('about-copy').append(node('p', '', text)));
  data.companies.filter(item => item.enabled !== false).forEach((item, index) => {
    const card = node('article', 'company-card');
    const top = node('div', 'card-top');
    top.append(node('span', 'card-category', item.category), node('span', 'card-number', String(index + 1).padStart(2, '0')));
    card.append(top, node('h3', '', item.name), node('p', 'card-tagline', item.tagline), node('p', 'card-description', item.description));
    if (safeUrl(item.url)) card.append(link('Visit website ↗', item.url, 'card-link'));
    $('company-grid').append(card);
  });
  data.blockchain.filter(item => item.enabled !== false).forEach(item => {
    const card = node('article', 'blockchain-card');
    const top = node('div', 'card-top');
    top.append(node('span', 'token', item.code), node('span', 'network-label', 'NETWORK'));
    card.append(top, node('h3', '', item.name), node('p', 'card-tagline', item.tagline), node('p', 'card-description', item.description), link('Explore network ↗', item.url, 'card-link'));
    $('blockchain-grid').append(card);
  });
  data.services.forEach(service => $('service-list').append(node('li', '', service)));
  if (data.showPreviousEngagements) {
    $('engagements').hidden = false;
    data.previousEngagements.forEach(item => $('engagement-list').append(node('li', '', item)));
  }
  data.articles.filter(item => item.enabled !== false).forEach((item, index) => {
    const article = node('article', 'article-row');
    const body = node('div', 'article-body');
    const heading = node('h3');
    heading.append(link(item.title, item.url, 'article-title'));
    body.append(node('p', 'card-category', item.publisher), heading, node('p', 'muted', item.description));
    const arrow = link('↗', item.url, 'article-arrow');
    arrow.setAttribute('aria-label', `Read ${item.title}`);
    article.append(node('span', 'article-number', String(index + 1).padStart(2, '0')), body, arrow);
    $('article-list').append(article);
  });
  $('leader-name').textContent = data.leadership.name;
  $('leader-role').textContent = data.leadership.role;
  $('leader-bio').textContent = data.leadership.bio;
  setLink($('leader-link'), data.leadership.url);
  setLink($('contact-link'), data.contactUrl);
  $('year').textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = $('navigation');
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
})();
