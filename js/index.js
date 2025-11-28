// Elementos
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleSidebarBtn = document.getElementById("toggleSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const quickLanguagesBtn = document.getElementById("quickLanguages");

// Funções
function openSidebar() {
  sidebar.classList.add("sidebar--open");
  overlay.classList.add("overlay--active");
  toggleSidebarBtn.textContent = "Fechar linguagens";
}

function closeSidebar() {
  sidebar.classList.remove("sidebar--open");
  overlay.classList.remove("overlay--active");
  toggleSidebarBtn.textContent = "Linguagens";
}

// Eventos
toggleSidebarBtn.addEventListener("click", () => {
  const isOpen = sidebar.classList.contains("sidebar--open");
  if (isOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

closeSidebarBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
quickLanguagesBtn.addEventListener("click", openSidebar);

// Redirecionamentos nos links da sidebar
document.querySelectorAll(".sidebar__link").forEach(link => {
  link.addEventListener("click", () => {
    closeSidebar(); // fecha a sidebar
    // o navegador segue o href normalmente
  });
});
