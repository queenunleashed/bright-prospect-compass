

  function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('theme-btn');
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');

      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');

      localStorage.setItem('theme', 'dark');
    }
  }
  // Restore saved preference on load
  (function() {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      var btn = document.getElementById('theme-btn');

    }
  })();

  function handleSubmit(e) {
    e.preventDefault();
    const f = e.target;
    const company = f.querySelector('input[type="text"]').value;
    const phone = f.querySelector('input[type="tel"]').value;
    const service = f.querySelector('select').value;
    const details = f.querySelector('textarea').value;

    const subject = encodeURIComponent('Quote Request — ' + (service || 'General Inquiry'));
    const body = encodeURIComponent(
      'Company: ' + company + '\n' +
      'Phone: ' + phone + '\n' +
      'Service: ' + (service || 'Not specified') + '\n\n' +
      'Project Details:\n' + details
    );

    window.location.href = 'mailto:viabranded@gmail.com?subject=' + subject + '&body=' + body;

    const btn = f.querySelector('.submit-btn');
    const success = document.getElementById('form-success');
    btn.style.display = 'none';
    success.style.display = 'block';
    f.reset();
    setTimeout(() => { btn.style.display = 'block'; success.style.display = 'none'; }, 7000);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.svc-card, .why-card, .haul-col, .info-row').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease, border-color 0.2s, background 0.2s';
    observer.observe(el);
  });
