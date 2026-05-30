# Hoshidha Fusing Machines - Premium Corporate Website
**Company:** Aprameya Enterprises  
**Brand:** Hoshidha  
**Industry:** Garment & Textile Machinery Manufacturing  
**Heritage:** 30+ Years of Manufacturing Leadership  

A modern, responsive, highly polished corporate website for **Aprameya Enterprises**, showcase manufacturers of **Hoshidha Fusing Machines**. 

---

## 🌟 Brand Identity & Design System
The design leverages a luxury corporate industrial aesthetic characterized by clean white space, professional dark containers, and striking industrial yellow accents.

- **Primary / Brand Accent:** Premium Industrial Yellow (`#F4C542`)
- **Dark Neutral:** Deep Charcoal (`#1E1E1E` / `#2A2A2A`)
- **Light Neutral:** Premium Off-White (`#F8F9FA` / `#FFFFFF`)
- **Typography:**
  - **Headings:** Poppins (Google Fonts) - bold, clean, industrial
  - **Body:** Inter (Google Fonts) - highly legible, neutral sans-serif

---

## 📂 Project Structure
All website code is self-contained and frontend-only, utilizing pure semantic HTML5, modern CSS3 variables, and vanilla ES6 JavaScript to ensure lightning-fast loads and zero external library bloat.

```
D:\Aprameya Enterprises/
├── index.html               # Home / Welcome Page (Hero slider, stats counter, and previews)
├── about.html               # About Us Page (Corporate narrative, Mission/Vision, timeline)
├── products.html            # Products Showcase Page (Filterable grid, tech parameter modals)
├── why-hoshidha.html        # Technical Advantages Page (Features, comparisons table)
├── gallery.html             # Gallery Page (Masonry layout, JavaScript Lightbox)
├── contact.html             # Contact Us Page (Contact details, validated form with pre-fills, Map)
├── assets/
│   ├── css/
│   │   └── style.css        # Main stylesheet (Responsive grids, custom slider, animations, lightbox styles)
│   ├── js/
│   │   └── main.js          # Interactive JavaScript (Sticky header, sliders, counters, validation, lightbox)
│   └── images/              # Visual assets
│       ├── slider1.png      # Custom-generated modern textile factory slide
│       ├── slider2.png      # Custom-generated precision machinery slide
│       ├── machine_long_view.jpg      # Uploaded machine full-length picture
│       ├── machine_panel_closeup.jpg  # Uploaded control panel detailed picture
│       ├── machine_full_view1.jpg     # Uploaded machine front profile picture
│       ├── machine_full_view2.jpg     # Uploaded feed table detail picture
│       └── machine_full_view3.jpg     # Uploaded pneumatic cylinder pressure detail picture
```

---

## ⚙️ Key Technical Features
1. **Sticky Header Navigation:** Smooth background shading changes on scroll and custom CSS underline transitions for hover indicators.
2. **Mobile Hamburger Menu:** Fully responsive, animated mobile drawer navigation that locks background scrolling when active.
3. **Hero Image Slider:** Custom crossfading slider with previous/next controls, dot navigation, and auto-rotation that pauses when hovered.
4. **Numerical Statistics Counter:** Integrates `IntersectionObserver` to trigger a smooth counting animation when the stats card enters the viewport.
5. **Scroll Reveal Animations:** Automatic CSS class injections (`.reveal.active`, `.reveal-left.active`, etc.) driven by lazy viewport observer to animate elements on scroll.
6. **Filterable Product & Gallery Grids:** Responsive tab toggles to filter product categories and gallery photos dynamically in the browser.
7. **Dynamic Technical Specifications Modal:** Dynamically extracts specific details, parameters, and images from HTML cards to populate a single reusable overlay modal on demand.
8. **Purchase Inquiry Pre-filling:** Link URLs like `contact.html?product=jk450s` automatically select the corresponding dropdown option when loading the Contact Form.
9. **Lightbox Gallery Modal:** A pure JavaScript-built lightbox modal featuring click-to-enlarge, captions, and Arrow Key or swipe-like navigation controls.
10. **Validated Contact Form & Feedback Toast:** Rigorous HTML5 patterns and matching feedback notifications that mock asynchronous submissions.

---

## 🚀 How to Run Locally

Since this is a client-side frontend project, you can run it without any compile steps:

### Option A: Open directly
Double-click `index.html` to open the website directly in any web browser (Chrome, Edge, Firefox, Safari).

### Option B: Local Web Server (Recommended)
To support all dynamic URL parameters and clean console caching, launch a simple web server:
- **Node.js (NPX):**
  Run `npx http-server` in this directory and open `http://localhost:8080` in your browser.
- **Python:**
  Run `python -m http.server 8000` and navigate to `http://localhost:8000`.
- **VS Code Live Server:**
  Right-click `index.html` and choose **Open with Live Server**.
