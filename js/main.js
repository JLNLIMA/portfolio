console.log("Portfólio carregado.");

// ==========================================
// GARANTE QUE O DOM CARREGOU
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    if (!toggle) {
        console.warn("Botão de tema não encontrado.");
        return;
    }

    // ==========================================
    // CARREGAR TEMA SALVO
    // ==========================================

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }

    // ==========================================
    // TOGGLE TEMA
    // ==========================================

    toggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            toggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

});