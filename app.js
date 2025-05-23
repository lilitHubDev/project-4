function l(e) {
  document.querySelectorAll(".radius1, .radius2").forEach(d => {
    const r = d.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const len = Math.sqrt(dx*dx+dy*dy) || 1;
    dx = dx / len * 8;
    dy = dy / len * 8;
    d.style.transform = `translate(${dx}px, ${dy}px)`;
  });
}