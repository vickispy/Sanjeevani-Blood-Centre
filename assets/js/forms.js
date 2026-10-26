/**
 * SANJEEVANI BLOOD CENTRE — FORM VALIDATION & DIRECT HANDOFF
 * Transparent, secure client-side form handoff to WhatsApp & Email (mailto)
 * Strictly zero fake database simulation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Corporate Camp Enquiry Form Handler
  const campForm = document.getElementById("campEnquiryForm");
  if (campForm) {
    campForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const orgName = document.getElementById("campOrgName")?.value.trim();
      const contactPerson = document.getElementById("campContactPerson")?.value.trim();
      const phone = document.getElementById("campPhone")?.value.trim();
      const email = document.getElementById("campEmail")?.value.trim();
      const proposedDate = document.getElementById("campDate")?.value.trim();
      const location = document.getElementById("campLocation")?.value.trim();
      const expectedDonors = document.getElementById("campExpectedDonors")?.value.trim();
      const message = document.getElementById("campMessage")?.value.trim();

      // Form Validation
      let isValid = true;
      if (!orgName) { markInvalid("campOrgName"); isValid = false; } else { markValid("campOrgName"); }
      if (!contactPerson) { markInvalid("campContactPerson"); isValid = false; } else { markValid("campContactPerson"); }
      if (!phone || !validatePhone(phone)) { markInvalid("campPhone"); isValid = false; } else { markValid("campPhone"); }

      if (!isValid) {
        showToast("Please complete the required fields with valid details.");
        return;
      }

      // Generate structured message
      const textMessage = 
`*Corporate / Community Blood Donation Camp Enquiry*
---------------------------------------
*Organisation:* ${orgName}
*Contact Person:* ${contactPerson}
*Phone:* ${phone}
*Email:* ${email || 'Not provided'}
*Proposed Date:* ${proposedDate || 'Flexible'}
*Location / Venue:* ${location || 'Pune / PCMC'}
*Expected Donors:* ${expectedDonors || 'To be estimated'}
*Additional Notes:* ${message || 'None'}
---------------------------------------
Sent via Sanjeevani Blood Centre Website`;

      // Handoff Choice via Modal or Direct WhatsApp
      const encodedMsg = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/917756873333?text=${encodedMsg}`;
      
      // Notify donor transparently
      showToast("Redirecting to WhatsApp to send your camp enquiry directly to our team...", 3500);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 1000);
    });
  }

  // 2. General Contact Form Handler
  const contactForm = document.getElementById("generalContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contactName")?.value.trim();
      const phone = document.getElementById("contactPhone")?.value.trim();
      const email = document.getElementById("contactEmail")?.value.trim();
      const subject = document.getElementById("contactSubject")?.value.trim() || "General Inquiry";
      const message = document.getElementById("contactMessage")?.value.trim();

      let isValid = true;
      if (!name) { markInvalid("contactName"); isValid = false; } else { markValid("contactName"); }
      if (!phone || !validatePhone(phone)) { markInvalid("contactPhone"); isValid = false; } else { markValid("contactPhone"); }
      if (!message) { markInvalid("contactMessage"); isValid = false; } else { markValid("contactMessage"); }

      if (!isValid) {
        showToast("Please fill all required fields correctly.");
        return;
      }

      const textMessage = 
`*New Website Inquiry — Sanjeevani Blood Centre*
---------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'Not provided'}
*Subject:* ${subject}
*Message:* ${message}
---------------------------------------`;

      const encodedMsg = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/917756873333?text=${encodedMsg}`;

      showToast("Opening WhatsApp with your pre-filled inquiry...", 3500);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 800);
    });
  }

  // Helper validation functions
  function validatePhone(phone) {
    const cleaned = phone.replace(/[^0-9]/g, "");
    return cleaned.length >= 10 && cleaned.length <= 13;
  }

  function markInvalid(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("is-invalid");
  }

  function markValid(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("is-invalid");
  }

  // Clear invalid styling on typing
  const allInputs = document.querySelectorAll(".form-control");
  allInputs.forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
    });
  });
});
