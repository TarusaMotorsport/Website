# Tarusa Motorsport — Data Entry Guide
> Fill in your real data here. Each section maps directly to the website.

---

## 1. Team Members
**File to edit:** `src/data/teamData.js`  
**Photos folder:** `src/assets/team/`

### Photo Naming Convention
```
src/assets/team/<firstname>_<lastname>.jpg
```
Examples:
- `nadec_biju.jpg`
- `pranav_krishna.jpg`
- `roshin_roy.jpg`

Photos should be:
- **Square or portrait** (recommended: 800×1000px or square)
- **JPG or WebP** for best performance
- Face centred, clear background preferred

### How to link a photo in teamData.js
1. Add the file: `src/assets/team/your_name.jpg`
2. At the top of `teamData.js`, add the import:
   ```js
   import yourName from '../assets/team/your_name.jpg';
   ```
3. Set `photo: yourName` in the member object.

### Team Members to Fill In

| Field | Description |
|---|---|
| `name` | Full name |
| `role` | e.g. "Team Captain", "Suspension Lead" |
| `department` | Group/subsystem (Leadership, Powertrain, Suspension & Chassis, Electronics & Controls, Media & Outreach) |
| `bio` | 1–2 sentence description |
| `linkedin` | Full LinkedIn URL e.g. `https://www.linkedin.com/in/yourprofile` |
| `photo` | Import name or `null` for initials fallback |

---

## 2. About Page
**File to edit:** `src/data/aboutData.js`

| Field | What to update |
|---|---|
| `stats[1].value` | Currently "AIR 1" — update if needed |
| `stats[2].value` | Currently "30+" — update with real member count |
| `story[3]` | Update with current 2025 build status |
| `hydrogenAchievement` | Verify AIR 1 details are accurate |

---

## 3. Timeline 2025 — Current Build
**File to edit:** `src/components/TimelineSection2025.jsx`

### Text to update (search for `← UPDATE IN FILL_ME.md`):
```
- Paragraph 1: Describe the 2025 build goal/ambition
- Paragraph 2: Describe the current state/motivation  
```

### Build status items (search for the status array in the file):
Update each item's `status` to one of:
- `"complete"` → shows green dot + "✓ Done"
- `"in-progress"` → shows yellow pulsing dot + "In Progress"
- `"upcoming"` → shows grey dot + "Upcoming"

### 2025 Timeline Photo
```
src/assets/about/timeline_2025.jpg
```
1. Add your build photo here
2. In `TimelineSection2025.jsx`, find the placeholder div and replace with:
   ```jsx
   import timeline2025 from '../assets/about/timeline_2025.jpg';
   // ... then replace the placeholder div with:
   <img src={timeline2025} alt="2025 Build" className="w-full rounded-2xl shadow-2xl" />
   ```

---

## 4. Achievements
**File to edit:** `src/components/AchievementsSection.jsx`

Update the `achievements` array at the top:

| Field | Value |
|---|---|
| `year` | Year of competition |
| `event` | Event name |
| `result` | e.g. "All India Rank 1", "Rank 12", "Best Design Award" |
| `highlight` | `true` for your best result, `false` otherwise |
| `description` | Short 1-sentence description |
| `badge` | Emoji (🏆 🥇 ⚡ 🚀 etc.) |

---

## 5. Gallery / Media
**File to edit:** `src/data/mediaData.js`  
**Photos folder:** `src/assets/gallery/`

### Photo Naming Convention
```
src/assets/gallery/<category>_<year>_<number>.jpg
```
Examples:
- `build_2025_01.jpg`
- `competition_2024_01.jpg`
- `team_2024_01.jpg`
- `competition_2024_02.jpg`

### Categories available
- `Build` — workshop, fabrication, parts
- `Competition` — on-track, judges, results
- `Team` — group photos, events, campus

### How to add a photo
1. Place file in `src/assets/gallery/`
2. Import at top of `mediaData.js`:
   ```js
   import build2025_01 from '../assets/gallery/build_2025_01.jpg';
   ```
3. In the `gallery` array, find the matching item and set:
   ```js
   image: build2025_01
   ```

### Videos to fill in
Replace the `url` field in `mediaData.videos` with real YouTube or Instagram Reel URLs.

### Press coverage to fill in
Replace placeholder entries in `mediaData.press` with real article links.

---

## 6. CTA Section — What's Next
**File to edit:** `src/components/CTASection.jsx`

Search for:
```
🏁 Target: SAEINDIA Baja 2025
```
Update the event name and year if needed.

---

## 7. Sponsor Page
No data file needed — already update live with:
- ✅ Razorpay link (already wired to your page)
- ✅ UPI QR code
- ✅ FAQ answers

To update funding goal/progress bar in the future, add:
```
Current raised: ₹X
Target: ₹Y
```
...by adding a `FundingBar` component to `Sponsor.jsx`.

---

## Summary Checklist

- [ ] Fill all team members in `src/data/teamData.js`
- [ ] Add team photos to `src/assets/team/` and link them
- [ ] Update member count in `src/data/aboutData.js`
- [ ] Update 2025 story paragraph in `src/data/aboutData.js`
- [ ] Update build status items in `TimelineSection2025.jsx`
- [ ] Add 2025 build photo to `src/assets/about/timeline_2025.jpg`
- [ ] Add gallery photos to `src/assets/gallery/` and link them in `mediaData.js`
- [ ] Update video URLs in `mediaData.js`
- [ ] Add press coverage links in `mediaData.js`
- [ ] Update competition results in `AchievementsSection.jsx`
- [ ] Update CTA target competition in `CTASection.jsx`
