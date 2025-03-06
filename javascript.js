// Script para una página de computadoras

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar un mensaje de bienvenida
    console.log("Bienvenido a nuestra tienda de computadoras");

    // Función para cambiar el tema de la página
    const toggleThemeButton = document.getElementById("toggle-theme");
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Función para filtrar productos
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            const searchText = event.target.value.toLowerCase();
            const productItems = document.querySelectorAll(".product-item");
            
            productItems.forEach(item => {
                const productName = item.querySelector(".product-name").textContent.toLowerCase();
                if (productName.includes(searchText)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }
});