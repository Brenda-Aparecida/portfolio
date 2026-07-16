// Preloader: esconde após o carregamento da página
window.addEventListener('load', function () {
  var loader = document.getElementById('preloader');
  setTimeout(function () {
    loader.classList.add('hide');
    setTimeout(function () {
      loader.remove();
    }, 900);
  }, 2000);
});

// Efeito de scroll horizontal "pinado" na seção de projetos (só desktop)
(function () {
  var section = document.querySelector('.horizontal-scroll-section');
  var track = document.querySelector('.horizontal-scroll-section .scroll-track');
  var ctaCard = document.getElementById('cta-card');

  if (!section || !track) return;

  var mq = window.matchMedia('(min-width: 900px)');

  function update() {
    if (!mq.matches) {
      track.style.transform = 'none';
      return;
    }

    var rect = section.getBoundingClientRect();
    var viewportH = window.innerHeight;
    var scrollableDistance = section.offsetHeight - viewportH;
    if (scrollableDistance <= 0) return;

    // progresso de 0 a 1 conforme a seção é "atravessada" verticalmente
    var progress = (-rect.top) / scrollableDistance;
    progress = Math.min(Math.max(progress, 0), 1);

    var animationProgress = 0;

    if (progress > 0.9) {
      animationProgress = (progress - 0.8) / 0.2;
    }


    
    var maxTranslate = Math.max(track.scrollWidth - window.innerWidth + window.innerWidth * 0.08, 0);
    track.style.transform = 'translateX(' + (-progress * maxTranslate) + 'px)';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  mq.addEventListener('change', update);
  update();
})();

// Anima as barras de progresso (skills) quando entram na tela
document.addEventListener('DOMContentLoaded', function () {
  var bars = document.querySelectorAll('.skill-fill');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        el.style.width = el.dataset.value + '%';
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(function (bar) {
    observer.observe(bar);
  });
});

// SCROLL DOS PROJETOS NO MOBILE
const wrapper = document.querySelector(".scroll-wrapper");
const progress = document.querySelector(".scroll-progress");
const indicator = document.querySelector(".scroll-indicator");

if(wrapper && progress){

    function updateBar(){

        const max =
            wrapper.scrollWidth - wrapper.clientWidth;

        const percent =
            max > 0
            ? wrapper.scrollLeft / max * 100
            : 0;

        progress.style.width = percent + "%";

       if (wrapper.scrollLeft > 10) {
        indicator.classList.add("scrolled");
      } else {
    indicator.classList.remove("scrolled");
    }
    }

    wrapper.addEventListener("scroll", updateBar);

    updateBar();
}