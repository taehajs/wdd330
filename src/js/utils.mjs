export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export async function loadHeaderFooter() {
  const header = await fetch('../partials/header.html');
  const footer = await fetch('../partials/footer.html');
  const headerHTML = await header.text();
  const footerHTML = await footer.text();

  document.getElementById('main-header').innerHTML = headerHTML;
  document.getElementById('main-footer').innerHTML = footerHTML;
}