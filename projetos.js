// Movimento de parallax sutil com o mouse
document.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;

  document.querySelectorAll(".window").forEach((win, index) => {
    const depth = (index + 1) * 3.5;
    win.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});

// Reseta quando o mouse sai
document.addEventListener("mouseleave", () => {
  document.querySelectorAll(".window").forEach((win) => {
    win.style.transform = "";
  });
});