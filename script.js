
// =================================
// DKD NATION NAVBAR FUNCTIONALITY
// =================================

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navlinks = document.getElementById("navlinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navlinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

});

// Close mobile menu after navigation
navlinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navlinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");

    });

});

// Search panel
function toggleSearch() {

    const searchPanel = document.getElementById("searchPanel");
    const searchInput = searchPanel.querySelector("input");

    searchPanel.classList.toggle("active");

    if (searchPanel.classList.contains("active")) {
        searchInput.focus();
    }

}

const searchIcon = document.getElementById("searchToggle");

searchIcon.addEventListener("click", toggleSearch);

// Close search with Escape
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        document.getElementById("searchPanel")
            .classList.remove("active");
    }

});
