 // Liste des pages à afficher
    const pages = [
      "document_veille/meta.html",
      "document_veille/meta_test.html"

    ];

    let currentIndex = 0; // commence à la première page
    const iframe = document.getElementById("viewer");

    // Bouton suivant
    document.getElementById("next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % pages.length; // boucle automatiquement
      iframe.src = pages[currentIndex];
    });

    // Bouton précédent
    document.getElementById("prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + pages.length) % pages.length; // boucle automatiquement
      iframe.src = pages[currentIndex];
    });