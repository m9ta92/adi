// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const btnBurger = document.querySelector(".header-burger-button");
const btnClose = document.querySelector(".mobile-menu-close");
const mobile = document.querySelector(".mobile-bg");
const mobileListItem = document.querySelectorAll(".mobile-list-item");

// MobileMenu
btnBurger.addEventListener("click", () => {
  mobile.classList.add("is-open");
});

const mobileMenuClose = () => {
  mobile.classList.remove("is-open");
};

btnClose.addEventListener("click", mobileMenuClose);
mobileListItem.forEach((listItem) => {
  listItem.addEventListener("click", mobileMenuClose);
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Próba załadowania SimpleLightbox jako ESM
    const module = await import("simplelightbox");
    const SimpleLightbox = module.default || module.SimpleLightbox || module;

    if (typeof SimpleLightbox !== "function") {
      throw new Error("SimpleLightbox nie jest funkcją! Sprawdź import.");
    }

    // Inicjalizacja SimpleLightbox
    const lightbox = new SimpleLightbox(".gallery-images a", {
      captionsData: "alt",
      captionDelay: 250,
      overlayOpacity: 0.8,
      showCounter: false,
    });

    console.log("✅ SimpleLightbox załadowany poprawnie!", lightbox);
  } catch (error) {
    console.error("❌ Błąd ładowania SimpleLightbox:", error);
  }
});
