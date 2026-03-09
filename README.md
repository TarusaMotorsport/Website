# Tarusa Motorsport Website

Official website for **Tarusa Motorsport** — a student-run hydrogen ATV racing team from CUSAT, competing in SAEINDIA Baja.

Live site: [tarusamotorsport.com](https://tarusamotorsport.com) (coming soon)

## 🚀 Features

- **7-Section Scroll-Based Home Page**
  - Landing with animated logo
  - Journey timeline (2022, 2024, 2025)
  - Achievements showcase (AIR 1 highlighted)
  - Call-to-action footer

- **Full Page Suite**
  - `/team` — Department-grouped member cards with LinkedIn links
  - `/about` — Stats, story, "Why Hydrogen?" explainer
  - `/media` — Filterable gallery, videos, press coverage
  - `/sponsor` — UPI QR, Razorpay donate button, FAQ accordion

- **Interactive Elements**
  - Text scrambling animations on hover
  - 3D ATV model viewer (Three.js + GLB)
  - Circular radial navigation menu
  - Konami code easter egg (brand-color confetti)

- **Performance Optimized**
  - Vite for fast builds
  - Tailwind CSS utility-first styling
  - Custom Gilroy font family

## 🎨 Brand Colors

```css
Primary Green: #0F5F4B
Accent Yellow: #F5FB52
Background:    #F0F5F5
```

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Three.js / React Three Fiber
- React Router DOM

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/TarusaMotorsport/Website.git
cd Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Opens at `http://localhost:5173/`

## 🎯 Project Structure

```
tarusa-motorsport/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── CircularMenu.jsx
│   │   ├── CarModel.jsx         # 3D model viewer
│   │   ├── TimelineSection.jsx  # 2022
│   │   ├── TimelineSection2024.jsx
│   │   ├── TimelineSection2025.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── CTASection.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Team.jsx
│   │   ├── About.jsx
│   │   ├── Media.jsx
│   │   └── Sponsor.jsx
│   ├── data/                # Editable content data
│   │   ├── teamData.js
│   │   ├── aboutData.js
│   │   └── mediaData.js
│   └── assets/
│       ├── fonts/           # Gilroy font family
│       ├── car_model/       # 3D model + video
│       ├── team/            # Member photos
│       ├── gallery/         # Media gallery photos
│       └── journey_pics/    # Timeline images
├── public/
│   ├── models/              # GLB 3D models
│   └── audio/               # Sound effects
├── FILL_ME.md               # Data entry guide
└── package.json
```

## 📝 Adding Content

See **[FILL_ME.md](FILL_ME.md)** for detailed instructions on:
- Adding team member photos and data
- Updating achievements
- Adding gallery/media content
- Customizing timeline sections

## 🔧 Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production (dist/)
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

© 2026 Tarusa Motorsport, CUSAT. All rights reserved.

---

**Links:**
- Instagram: [@tarusamotorsport](https://instagram.com/tarusamotorsport)
- LinkedIn: [Tarusa Motorsport](https://linkedin.com/company/tarusa-motorsport)
- Razorpay: [Donate](https://razorpay.me/@tarusamotorsport)
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

[License Type] - See LICENSE file for details

## 👥 Team

- [Team Member Names/Roles]
- [Contact Information]

## 🔮 Future Updates

- [ ] 3D Model Integration
- [ ] Mobile Responsive Design
- [ ] Loading Screen
- [ ] Additional Sections
  - [ ] About
  - [ ] Team
  - [ ] Media
  - [ ] Contact

---

For more information or support, please contact [contact information].
