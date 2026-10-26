/**
 * SANJEEVANI BLOOD CENTRE — NAVIGATION & DRAWER CONTROLLER
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileNavToggle");
  const mobileDrawer = document.getElementById("mobileDrawerOverlay");
  const mobileClose = document.getElementById("mobileNavClose");
  const backToTopBtn = document.getElementById("backToTop");

  // Sticky header class toggle
  window.addEventListener("scroll", () => {
    if (window.scrollY > 25) {
      header?.classList.add("is-scrolled");
    } else {
      header?.classList.remove("is-scrolled");
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
    }
  });

  // Mobile Drawer Open
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.add("is-open");
      document.body.style.overflow = "hidden";
      mobileToggle.setAttribute("aria-expanded", "true");
    });
  }

  // Mobile Drawer Close
  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove("is-open");
      document.body.style.overflow = "";
      mobileToggle?.setAttribute("aria-expanded", "false");
    }
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeDrawer);
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener("click", (e) => {
      if (e.target === mobileDrawer) {
        closeDrawer();
      }
    });
  }

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Highlight active navigation links based on current file
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll(".nav-link, .dropdown-link, .mobile-nav-link");
  
  allNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");

      // Highlight parent dropdown link if inside a dropdown
      const parentDropdown = link.closest(".nav-item-dropdown");
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector(".nav-link");
        if (parentLink) {
          parentLink.classList.add("active");
        }
      }
    }
  });

  // Initialize Lucide Icons for dynamic header elements
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
});
