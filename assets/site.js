// Copy buttons on commands, mobile menu, and YouTube videos from assets/videos.js
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('button.copy');
    if (!btn) return;
    var code = btn.parentNode.querySelector('code').innerText;
    var done = function (ok) {
      btn.textContent = ok ? 'Copied' : 'Press Ctrl+C';
      btn.classList.toggle('done', ok);
      setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1600);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(code).then(function () { done(true); }, function () { selectCode(); done(false); });
    } else { selectCode(); done(false); }
    function selectCode() {
      var r = document.createRange(); r.selectNodeContents(btn.parentNode.querySelector('code'));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }
  });

  var menu = document.querySelector('.menu'), nav = document.getElementById('sidenav');
  if (menu && nav) menu.addEventListener('click', function () {
    var open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open));
  });

  function youtubeId(url) {
    var m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }
  var vids = window.LAB_VIDEOS || {};
  document.querySelectorAll('.video[data-video]').forEach(function (box) {
    var id = youtubeId(vids[box.getAttribute('data-video')] || '');
    if (!id) { box.remove(); return; }
    var title = box.querySelector('.vt') ? box.querySelector('.vt').textContent : 'Video';
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id;
    f.title = title;
    f.loading = 'lazy';
    f.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    var cap = document.createElement('p');
    cap.className = 'video-cap';
    cap.innerHTML = title + ' · <a href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener">Open on YouTube</a><br>' +
      'External video: versions and commands may differ slightly. Always use the commands shown on this page.';
    box.innerHTML = ''; box.appendChild(f); box.appendChild(cap);
  });
})();
