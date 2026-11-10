const foto = document.querySelector('#foto');
const vistas = document.querySelectorAll('[data-img]');
for (const vista of vistas) {
  vista.addEventListener('click', () => {
    foto.src = vista.dataset.img;
    foto.alt = vista.textContent === 'Barra' ? 'Jabón exfoliante en forma de grano de café' : 'Caja de CoffeSoap de 100 gramos';
    for (const opcion of vistas) opcion.setAttribute('aria-pressed', String(opcion === vista));
  });
}

const field = document.createElement('div');
field.className = 'bean-field';
field.setAttribute('aria-hidden', 'true');
const beans = Array.from({ length: 3 }, () => {
  const bean = document.createElement('i');
  bean.className = 'bean';
  field.append(bean);
  return bean;
});
document.body.append(field);
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let frame = 0;
function paintBeans() {
  frame = 0;
  const distance = document.documentElement.scrollHeight - innerHeight;
  const progress = Math.min(1, Math.max(0, scrollY / Math.max(1, distance)));
  beans.forEach((bean, index) => {
    const angle = progress * Math.PI * 2 + index;
    const drift = 12 * Math.sin(angle);
    const lift = 46 * Math.cos(angle);
    const turn = progress * (145 + 35 * index) - 28 + index * 60;
    bean.style.transform = 'translate(' + drift + 'px,' + lift + 'px) rotate(' + turn + 'deg) scale(' + (1 - progress * .32) + ')';
    bean.style.filter = 'brightness(' + (1.18 - progress * .38) + ')';
  });
}
function schedulePaint() {
  if (!motion.matches && !frame) frame = requestAnimationFrame(paintBeans);
}
addEventListener('scroll', schedulePaint, { passive: true });
addEventListener('resize', schedulePaint);
motion.addEventListener('change', schedulePaint);
schedulePaint();
const entrance = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('arrived');
      entrance.unobserve(entry.target);
    }
  }
});
document.querySelectorAll('.detalle article, .proyecto > div').forEach(section => entrance.observe(section));
