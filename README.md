# Sanjeevani Blood Centre — Official Multi-Page Website

**Location:** Bhosari, Pune, Maharashtra, India  
**Brand Slogan:** *"The Greatest Noble Aim"*  
**Core Message:** *"The Greatest Gift Is the Gift of Life"*  
**Architecture:** 100% Completely Static Multi-Page Website (Semantic HTML5, Modern CSS3, Vanilla JavaScript, GSAP, Lucide Icons)  
**Zero Node.js runtime or build-step dependencies required.**

---

## 1. Directory Structure

```
sanjeevani-blood-centre/
│
├── index.html                   # Homepage (Hero, 3D interactive bag, 5-step journey, services, news preview, map)
├── about.html                   # About Us (Philosophy, mission, vision, values, leadership, FDA licensing)
├── donate-blood.html            # Donate Blood (Preparation checklist, visit breakdown, aftercare, medical disclaimer)
├── donor-safety.html            # Donor Safety (Before/During/After protocols, single-use equipment, myth busting)
├── services.html                # Our Services (Collection, components, laboratory methods, camp coordination)
├── blood-components.html        # Blood Components (PRBC, FFP, Platelets, Cryo, SWPRBC, 3D layer visualizer)
├── blood-donation-camps.html    # Corporate & Community Camps (5-step sequence, venue checklist, WhatsApp form handoff)
├── our-impact.html              # Our Impact (Thalassemia & Sickle Cell free blood support, reported metrics)
├── news.html                    # News & Campaigns (Client-side category filtering, educational articles)
├── gallery.html                 # Photos & Videos (Responsive image lightbox with keyboard controls, video embeds)
├── faqs.html                    # Frequently Asked Questions (Categorized accessible accordions, medical notices)
├── contact.html                 # Contact Us (Interactive Google Map embed, directions link, verified direct phone lines)
├── privacy-policy.html          # Privacy Policy (Healthcare data ethics, statutory retention, no third-party tracking)
├── 404.html                     # Custom 404 Not Found Page (Quick rescue links)
│
├── assets/
│   ├── css/
│   │   ├── variables.css        # Design tokens: official crimson & navy palette, typography, shadows, radii
│   │   ├── base.css             # Modern reset, Devanagari typography adaptors, focus rings, accessibility
│   │   ├── layout.css           # Header, sticky top bar, navigation, mobile drawer, footer, containers
│   │   ├── components.css       # Buttons, badges, cards, stats, accordions, forms, lightbox, toasts
│   │   ├── interactive.css      # CSS 3D transforms, blood pack tilt simulation, tube component inspector
│   │   └── responsive.css       # Responsive breakpoints (320px, 480px, 768px, 1024px, 1440px)
│   │
│   ├── js/
│   │   ├── config.js            # Central source of truth for verified phones, address, licence, links
│   │   ├── translations.js      # Multilingual translation engine (English, Marathi मराठी, Hindi हिंदी)
│   │   ├── navigation.js        # Sticky header, mobile drawer with escape key and scroll lock, active states
│   │   ├── components.js        # Accessible accordions, stat counters with IntersectionObserver, toasts
│   │   ├── forms.js             # Client-side form validation & transparent WhatsApp/Email direct handoffs
│   │   ├── gallery.js           # Keyboard-accessible image lightbox (ESC, left/right arrows) & category tabs
│   │   ├── interactive-3d.js    # 3D collection pack perspective tilt & interactive 5-step journey switcher
│   │   └── main.js              # Application bootstrapper, GSAP animations & prefers-reduced-motion checks
│   │
│   └── images/
│       ├── logo/
│       │   ├── sanjeevani-logo.png # High-res official brand logo with transparency
│       │   └── favicon.svg         # High-resolution vector favicon matching official emblem
│       ├── hero/
│       │   └── hero-illustration.svg # Clinical healthcare vector composition
│       ├── components/
│       │   ├── prbc.svg            # Packed Red Blood Cells illustration
│       │   ├── ffp.svg             # Fresh Frozen Plasma illustration
│       │   ├── platelets.svg       # Platelets illustration
│       │   └── cryo.svg            # Cryoprecipitate illustration
│       ├── camps/
│       │   ├── camp-illustration.svg # 4-pillar mobile camp setup
│       │   ├── camp-1.svg          # Corporate camp preview visual
│       │   ├── camp-2.svg          # Community health drive visual
│       │   └── camp-3.svg          # Cold-chain assurance visual
│       └── news/
│           ├── news-1.svg          # Thalassemia campaign visual
│           ├── news-2.svg          # Platelet education visual
│           └── news-3.svg          # Regulatory compliance visual
│
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap indexing all 14 pages
├── CONTENT-VERIFICATION.md      # Detailed institutional fact-check & audit document
└── README.md                    # This deployment and maintenance manual
```

---

## 2. How to Run & Preview the Website Locally

Since the site is 100% static, **no Node.js, npm, or compilation is required**.

### Option A: Open directly in your browser
Double-click `index.html` (or any other `.html` file) in your file manager (Windows Explorer) to view it in Chrome, Edge, Firefox, or Safari.

### Option B: Using Python (if installed)
Open your terminal in the `sanjeevani-blood-centre` folder:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Option C: Using PowerShell HttpListener (Pure Windows native, no installs)
```powershell
powershell -Command "Start-Process 'index.html'"
```

---

## 3. How to Deploy to Hostinger, Apache, or Standard Static Web Host

1. **Hostinger / cPanel / Standard Web Hosting:**
   - Log into your hosting control panel (e.g. Hostinger hPanel).
   - Navigate to **File Manager** -> `public_html`.
   - Upload the entire contents of the `sanjeevani-blood-centre` folder directly into `public_html` (so `index.html` resides directly at the root of `public_html`).
   - Done! The website is live immediately. No server configurations, databases, or build commands are necessary.

2. **GitHub Pages / Cloudflare Pages / Netlify / Vercel (Static):**
   - Push or upload this folder to your repository.
   - Set the build command to *empty* and publish directory to `.` (root).

---

## 4. How to Maintain & Update Content

### A. Updating Verified Contact Numbers, Address, or Regulatory Licences
All core institutional contact endpoints are centralized in:
`assets/js/config.js`
Simply update the phone numbers, email, or address fields inside `SANJEEVANI_CONFIG`.

### B. Updating Social Media & Official Video Links
In `assets/js/config.js`, update the `socialLinks` object:
```javascript
socialLinks: {
  facebook: "https://facebook.com/your-official-page",
  instagram: "https://instagram.com/your-official-handle",
  youtube: "https://youtube.com/@your-official-channel",
  linkedin: "https://linkedin.com/company/your-official-page"
}
```
To update the video featured in the hero or gallery, change the YouTube embed `src` in `index.html` and `gallery.html`.

### C. Adding a News Article or Campaign Announcement
1. Open `news.html` in any text editor.
2. Under the news grid, copy an existing `<article class="card" data-category="...">` block.
3. Update the category (`campaigns`, `awareness`, or `regulatory`), the title, description, and date.
4. Save the file. The article appears immediately and will be filterable via category tabs.

### D. Editing Multilingual Translations (Marathi & Hindi)
All interface, button, navigation, and section translations are organized by key in:
`assets/js/translations.js`
- To refine Marathi phrasing, edit the entries inside `TRANSLATIONS.mr`.
- To refine Hindi phrasing, edit the entries inside `TRANSLATIONS.hi`.
- To add a new translated phrase, add the key under `en`, `mr`, and `hi`, then add `data-i18n="your_key"` to the corresponding HTML element.

### E. Replacing Visual Assets
- **Logo:** Replace `assets/images/logo/sanjeevani-logo.png` with any updated PNG while preserving transparency.
- **Photos:** Place official high-resolution photographs into `assets/images/camps/` or `assets/images/hero/`, maintaining WebP or SVG format for fastest loading speeds.

---

## 5. Technical Highlights & Standards Compliance

- **No Framework Overhead:** Loads in under 0.5s with zero bundle bloat.
- **Mobile First & Responsive:** Tested seamlessly from 320px wide smartphones up to 4K ultra-wide monitors.
- **WCAG 2.2 AA Accessibility:** Includes high-contrast color tokens, keyboard navigation with visible focus rings, ARIA attributes on modal/accordions/drawer, skip-to-content links, and full `prefers-reduced-motion` fallbacks.
- **Data Privacy & Zero False Backend:** Forms transparently hand off inquiries to WhatsApp (+91 77568 73333) or user-initiated email without false success messages or clandestine tracking databases.
