/**
 * SANJEEVANI BLOOD CENTRE — CENTRAL CONFIGURATION
 * Pune, Maharashtra, India | "The Greatest Noble Aim"
 * Source of truth for verified institutional data & editable contact endpoints
 */

const SANJEEVANI_CONFIG = {
  name: "Sanjeevani Blood Centre",
  slogan: "The Greatest Noble Aim",
  coreMessage: "The Greatest Gift Is the Gift of Life",
  establishedYear: 2019,
  
  // Verified Contact Details
  address: {
    line1: "3rd Floor, Mahalaxmi Tower, Sr. No. 211, PCTS No. 1018",
    line2: "Offices 1–7, Near Datta Mandir, Pune–Nashik Highway",
    landmark: "Near Datta Mandir",
    locality: "Bhosari",
    city: "Pune",
    pincode: "411039",
    state: "Maharashtra",
    country: "India",
    full: "3rd Floor, Mahalaxmi Tower, Sr. No. 211, PCTS No. 1018, Offices 1–7, Near Datta Mandir, Pune–Nashik Highway, Bhosari, Pune – 411039, Maharashtra, India."
  },
  
  phones: [
    { display: "+91 77568 73333", raw: "+917756873333", clean: "917756873333", primary: true },
    { display: "+91 88031 04104", raw: "+918803104104", clean: "918803104104", primary: false },
    { display: "+91 84531 04104", raw: "+918453104104", clean: "918453104104", primary: false }
  ],
  
  email: "pransanjeevanibb@gmail.com",
  
  // WhatsApp Contact Handoff
  whatsapp: {
    number: "917756873333",
    defaultMessage: "Hello Sanjeevani Blood Centre, I would like to inquire about blood donation services."
  },
  
  // Official Regulatory Information
  regulatory: {
    licenceNumber: "BBF28C2024MH000016",
    fdaAmendmentRef: "PCL2025MH00008",
    applicationRef: "MH/PA/2025/00059",
    effectiveDate: "4 November 2025",
    verificationStatus: "Active State Regulatory Documentation"
  },
  
  // Leadership (Presented strictly according to supplied document)
  leadership: [
    { name: "Mr. Ravindra Phadtare", role: "Leadership & Administration" },
    { name: "Mr. Prashant Mohan", role: "Leadership & Operations" }
  ],
  
  // Verified Reported Statistics (Properly flagged for organisational audit)
  reportedImpact: {
    thalassemiaMonthlyUnits: 200,
    statusNote: "Reported: >200 units provided monthly free of charge to Thalassemia & Sickle Cell Anaemia patients. Subject to ongoing internal registry verification."
  },
  
  // Hours (Flagged for organisational confirmation)
  operatingHours: {
    claimed: "24/7 Emergency Blood Component Availability",
    verificationFlag: "Flagged for written administrative confirmation of laboratory vs donation counter timings."
  },

  // Verified Corporate Camp Mentions (Documented as participants needing formal endorsement confirmation)
  campEntitiesMentioned: [
    "Tata Motors",
    "Mahindra & Mahindra",
    "Hyundai",
    "Optum",
    "Mercer",
    "MMC"
  ],

  // Official Links / Socials Configuration
  // Placeholders intentionally clearly isolated to avoid fake links
  socialLinks: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#"
  },

  // Google Maps Destination
  maps: {
    embedQuery: "Mahalaxmi+Tower+Bhosari+Pune+Nashik+Highway+Pune+411039",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Mahalaxmi+Tower+Bhosari+Pune+411039"
  }
};

// Freeze configuration to prevent runtime tampering
Object.freeze(SANJEEVANI_CONFIG);
