/**
 * SANJEEVANI BLOOD CENTRE — INTERACTIVE 3D & EDUCATIONAL VISUALIZER
 * Lightweight, hardware-accelerated CSS 3D transforms & educational steps
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. 3D Tilt Card Interaction for Collection Bag
  const tiltCard = document.querySelector(".card-tilt");
  if (tiltCard) {
    tiltCard.addEventListener("mousemove", (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    tiltCard.addEventListener("mouseleave", () => {
      tiltCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  }

  // 2. Interactive 5-Step Journey Switcher
  const stepCards = document.querySelectorAll(".journey-step-card[data-step]");
  const journeyDisplayTitle = document.getElementById("journeyDisplayTitle");
  const journeyDisplayDesc = document.getElementById("journeyDisplayDesc");
  const journeyDisplayBadge = document.getElementById("journeyDisplayBadge");

  const stepDetails = {
    1: {
      title: "Step 1: Registration & Health History",
      desc: "Upon arrival, the donor is warmly received. A confidential questionnaire reviews general health, recent travel, and medical history in accordance with applicable voluntary donation standards.",
      badge: "Duration: ~5 mins | Safe & Confidential"
    },
    2: {
      title: "Step 2: Medical Assessment & Hemoglobin Test",
      desc: "A trained staff member measures pulse, blood pressure, and tests hemoglobin using a single-use sterile micro-lancet to ensure donation is safe for both donor and recipient.",
      badge: "Clinical Check | Vital Parameters Verified"
    },
    3: {
      title: "Step 3: The Blood Donation Procedure",
      desc: "The donor relaxes in an ergonomic blood collection chair. A certified phlebotomist uses a sealed, single-use, sterile collection pack. The actual blood draw takes only 8 to 10 minutes.",
      badge: "Duration: 8–10 mins | 100% Sterile & Single-Use"
    },
    4: {
      title: "Step 4: Post-Donation Rest & Refreshments",
      desc: "The donor rests for 10–15 minutes, enjoys juice and light refreshments to replenish fluid levels, and receives clear aftercare instructions from our attentive team.",
      badge: "Hydration & Observation | Donor Comfort First"
    },
    5: {
      title: "Step 5: Testing, Separation & Patient Delivery",
      desc: "The donated whole blood is transported to the laboratory under strict cold-chain conditions, screened for infectious markers, separated into life-saving components (PRBC, FFP, Platelets), and supplied for patient care.",
      badge: "Cold Chain Storage | 1 Unit Can Aid Multiple Lives"
    }
  };

  stepCards.forEach(card => {
    card.addEventListener("click", () => {
      stepCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const stepNum = card.getAttribute("data-step");
      const info = stepDetails[stepNum];
      if (info) {
        if (journeyDisplayTitle) journeyDisplayTitle.textContent = info.title;
        if (journeyDisplayDesc) journeyDisplayDesc.textContent = info.desc;
        if (journeyDisplayBadge) journeyDisplayBadge.textContent = info.badge;
      }
    });
  });

  // 3. Blood Tube Separation Explorer
  const tubeLayers = document.querySelectorAll(".tube-layer");
  const componentInfoBox = document.getElementById("componentInfoBox");

  const componentData = {
    plasma: {
      name: "Fresh Frozen Plasma (FFP)",
      pct: "approx. 55% of blood volume",
      clinical: "Rich in clotting factors, albumin, and immunoglobulins. Crucial for trauma patients, severe liver conditions, and massive transfusions."
    },
    buffy: {
      name: "Buffy Coat (Platelets & White Cells)",
      pct: "approx. <1% of blood volume",
      clinical: "Contains platelets vital for clotting and wound healing, frequently needed by oncology, dengue, and surgical patients."
    },
    rbc: {
      name: "Packed Red Blood Cells (PRBC)",
      pct: "approx. 40-45% of blood volume",
      clinical: "Carries oxygen throughout the body. Essential for Thalassemia, Sickle Cell Anaemia, surgical patients, and severe acute anaemia."
    }
  };

  tubeLayers.forEach(layer => {
    layer.addEventListener("click", () => {
      const type = layer.getAttribute("data-type");
      const data = componentData[type];
      if (data && componentInfoBox) {
        componentInfoBox.innerHTML = `
          <div style="animation: fadeIn 0.3s ease-out">
            <h4 style="color: var(--color-primary); margin-bottom: 0.25rem;">${data.name}</h4>
            <span class="badge badge-navy" style="margin-bottom: 0.5rem;">${data.pct}</span>
            <p style="font-size: 0.9rem; color: var(--color-text-body); margin-top: 0.5rem;">${data.clinical}</p>
          </div>
        `;
      }
    });
  });
});
