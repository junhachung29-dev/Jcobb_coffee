document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.navlinks');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  const form = document.querySelector('#inquiryForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const toast = document.querySelector('.toast');
      if (toast) toast.classList.add('show');
      form.reset();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
});
