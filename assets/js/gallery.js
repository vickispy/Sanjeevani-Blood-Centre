/**
 * SANJEEVANI BLOOD CENTRE — GALLERY & LIGHTBOX CONTROLLER
 */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  const galleryItems = Array.from(document.querySelectorAll(".gallery-card[data-src]"));
  let currentIndex = 0;

  function openLightbox(index) {
    if (!galleryItems[index]) return;
    currentIndex = index;
    const item = galleryItems[currentIndex];
    const src = item.getAttribute("data-src");
    const caption = item.getAttribute("data-caption") || "";

    if (lightboxImg) lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    if (lightbox) {
      lightbox.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("is-active");
      document.body.style.overflow = "";
      if (lightboxImg) lightboxImg.src = "";
    }
  }

  function showNext() {
    let nextIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(nextIndex);
  }

  function showPrev() {
    let prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(prevIndex);
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener("click", () => openLightbox(idx));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);
  if (nextBtn) nextBtn.addEventListener("click", showNext);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("is-active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  // Filter Tabs for Gallery & News
  const filterBtns = document.querySelectorAll(".filter-btn[data-filter]");
  const filterTargets = document.querySelectorAll("[data-category]");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");
      filterTargets.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filterValue === "all" || cat === filterValue) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
