// ================== Selecionar elementos ==================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebarBtn = document.getElementById("closeSidebar");

// Botões do header
const btnSobre = document.getElementById("btn-sobre");
const btnAtualizacoes = document.getElementById("btn-atualizacoes");
const btnArtigos = document.getElementById("btn-artigos"); 

// ================== Funções ==================

// Fecha a sidebar
function closeSidebar() {
  if (sidebar && overlay) {
    sidebar.classList.remove("sidebar--open");
    overlay.classList.remove("overlay--active");
  }
}

// ================== Eventos ==================

// Botão fechar sidebar
closeSidebarBtn?.addEventListener("click", closeSidebar);

// Clicar no overlay fecha a sidebar
overlay?.addEventListener("click", closeSidebar);

// Clicar nos links dentro da sidebar fecha a sidebar
sidebar?.querySelectorAll(".sidebar__link").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

// ================== Redirecionamentos ==================

// Botões do header redirecionam para suas páginas
btnSobre?.addEventListener("click", () => {
  window.location.href = "sobre/sobre.html";
});
btnAtualizacoes?.addEventListener("click", () => {
  window.location.href = "atualizacao/atualizacao.html";
});
btnArtigos?.addEventListener("click", () => {
  window.location.href = "artigos/artigos.html";
});
btnArtigos?.addEventListener("click", () => {
  window.location.href = "index.html";
});
