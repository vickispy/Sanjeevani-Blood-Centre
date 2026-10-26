/**
 * SANJEEVANI BLOOD CENTRE — ACCESSIBLE UI COMPONENTS & ACCORDIONS
 */

document.addEventListener("DOMContentLoaded", () => {
  // Accordion Controller (FAQs, Process Details)
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const isOpen = item.classList.contains("is-open");
      
      // Close other accordions in the same group if desired, or allow multi-expand
      const parentGroup = item.closest(".accordion-group");
      if (parentGroup && parentGroup.getAttribute("data-single") === "true") {
        parentGroup.querySelectorAll(".accordion-item").forEach(other => {
          if (other !== item) {
            other.classList.remove("is-open");
            other.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
          }
        });
      }

      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });

    // Keyboard support (Enter & Space already handled natively for <button>, ensure accessible keying)
  });

  // Verified Stat Counter Animation (IntersectionObserver based)
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute("data-target"), 10);
          const prefix = entry.target.getAttribute("data-prefix") || "";
          const suffix = entry.target.getAttribute("data-suffix") || "";
          animateCounter(entry.target, target, prefix, suffix);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    statNumbers.forEach(stat => observer.observe(stat));
  } else {
    statNumbers.forEach(stat => {
      const target = stat.getAttribute("data-target");
      const prefix = stat.getAttribute("data-prefix") || "";
      const suffix = stat.getAttribute("data-suffix") || "";
      stat.textContent = prefix + target + suffix;
    });
  }

  function animateCounter(el, target, prefix, suffix) {
    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = Math.ceil(target / totalSteps) || 1;

    const timer = setInterval(() => {
      current += stepIncrement;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = prefix + current + suffix;
    }, stepTime);
  }
});

/**
 * Global Toast Utility
 */
function showToast(message, duration = 4000) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-active");

  setTimeout(() => {
    toast.classList.remove("is-active");
  }, duration);
}
