// ============================================================
// MEDIA PAGE DATA — fill in your real content in FILL_ME.md
// Place gallery images in: src/assets/gallery/
// ============================================================
// To add a real image:
//   1. Place file in src/assets/gallery/  e.g. competition_2024_01.jpg
//   2. Import it: import comp2024_01 from '../assets/gallery/competition_2024_01.jpg';
//   3. Set image: comp2024_01 in the gallery item below
// ============================================================

const mediaData = {
    // --- GALLERY PHOTOS ---
    gallery: [
        // ── Build Photos ─────────────────────────────
        { caption: "Workshop build session", category: "Build", year: "2025", image: null, placeholder: "🔧" },
        { caption: "Chassis fabrication underway", category: "Build", year: "2025", image: null, placeholder: "⚙️" },
        { caption: "Suspension assembly", category: "Build", year: "2025", image: null, placeholder: "🔩" },
        { caption: "Wiring harness installation", category: "Build", year: "2025", image: null, placeholder: "⚡" },
        { caption: "Hydrogen system integration", category: "Build", year: "2024", image: null, placeholder: "⚗️" },
        { caption: "Paint and livery", category: "Build", year: "2024", image: null, placeholder: "🎨" },

        // ── Competition ──────────────────────────────
        { caption: "hBaja 2024 — Competition day", category: "Competition", year: "2024", image: null, placeholder: "🏁" },
        { caption: "Scrutineering pass", category: "Competition", year: "2024", image: null, placeholder: "✅" },
        { caption: "Off-road endurance run", category: "Competition", year: "2024", image: null, placeholder: "🚗" },
        { caption: "AIR 1 celebration", category: "Competition", year: "2024", image: null, placeholder: "🏆" },
        { caption: "Design presentation to judges", category: "Competition", year: "2024", image: null, placeholder: "📐" },
        { caption: "Team at the starting line", category: "Competition", year: "2022", image: null, placeholder: "🏎️" },

        // ── Team ─────────────────────────────────────
        { caption: "Team photo 2025", category: "Team", year: "2025", image: null, placeholder: "👥" },
        { caption: "Workshop team moment", category: "Team", year: "2024", image: null, placeholder: "🤝" },
        { caption: "Late night build session", category: "Team", year: "2024", image: null, placeholder: "🌙" },
        { caption: "Team 2022 debut", category: "Team", year: "2022", image: null, placeholder: "🎉" },
    ],

    // --- VIDEOS ---
    // url: YouTube or Instagram video link
    videos: [
        {
            title: "hBaja 2024 — Competition Highlights",
            description: "Full event highlights from our AIR 1 run at SAEINDIA hBaja 2024.",
            url: "https://www.instagram.com/tarusamotorsport/", // ← Replace with actual video URL
        },
        {
            title: "2025 Build Teaser",
            description: "First look at our new hydrogen buggy build in progress.",
            url: "https://www.instagram.com/tarusamotorsport/", // ← Replace with actual video URL
        },
    ],

    // --- PRESS & COVERAGE ---
    // Leave url: "#" if no direct link available
    press: [
        {
            title: "Placeholder — Add press coverage article title here",
            source: "Publication Name",
            date: "YYYY",
            url: "#",
        },
        {
            title: "Placeholder — Add another press coverage article",
            source: "Publication Name",
            date: "YYYY",
            url: "#",
        },
    ],
};

export default mediaData;
