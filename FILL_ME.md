# Tarusa Motorsport — Data Entry Guide
> **Last generated:** 11/3/2026, 3:31:30 pm

---

## How to update website data

1. Edit files in the `data/` folder using Excel, Google Sheets, or any text editor
2. Save the CSV
3. Run in terminal: `node scripts/update-from-csv.js`
4. The JS source files are regenerated automatically — commit & push!

> ⚠️ Do NOT hand-edit `src/data/teamData.js`, `src/data/mediaData.js`, or the `achievements` array in `AchievementsSection.jsx` — they will be overwritten next time you run the script.

---

## CSV Files

| File | Controls |
|---|---|
| [`data/team.csv`](data/team.csv) | Team page — member cards |
| [`data/achievements.csv`](data/achievements.csv) | Achievements section |
| [`data/media.csv`](data/media.csv) | Media page — videos, press, gallery |

---

## Photo Guide

### Team Photos → `src/assets/team/`
Name format: `firstname_lastname.jpg`  
Then update the `photo_filename` column in `data/team.csv`.

### Gallery Photos → `src/assets/gallery/`
Name format: `category_year_number.jpg`  
After running the script, open `src/data/mediaData.js` and replace `image: null` with the imported variable for each photo.

---

## Current Status

### Team Members — 11 total

| Name | Role | Department | Status |
|---|---|---|---|
| Nadec Biju | Team Captain | Leadership | ⚠️ missing: bio |
| Placeholder Member | Co-Captain / Faculty Advisor | Leadership | ⚠️ missing: name, bio, linkedin, photo |
| Placeholder Member | Powertrain Lead | Powertrain | ⚠️ missing: name, linkedin, photo |
| Placeholder Member | Powertrain Engineer | Powertrain | ⚠️ missing: name, bio, linkedin, photo |
| Placeholder Member | Suspension Lead | Suspension & Chassis | ⚠️ missing: name, linkedin, photo |
| Placeholder Member | Chassis Engineer | Suspension & Chassis | ⚠️ missing: name, bio, linkedin, photo |
| Placeholder Member | Fabrication Specialist | Suspension & Chassis | ⚠️ missing: name, bio, linkedin, photo |
| Placeholder Member | Electronics Lead | Electronics & Controls | ⚠️ missing: name, linkedin, photo |
| Placeholder Member | Embedded Systems Engineer | Electronics & Controls | ⚠️ missing: name, bio, linkedin, photo |
| Placeholder Member | Media & Marketing Lead | Media & Outreach | ⚠️ missing: name, linkedin, photo |
| Placeholder Member | Content Creator | Media & Outreach | ⚠️ missing: name, bio, linkedin, photo |

### Achievements — 3 entries

| Year | Event | Result | Notes |
|---|---|---|---|
| 2024 | SAEINDIA hBaja | All India Rank 1 | 🌟 highlight |
| 2022 | SAEINDIA eBaja (Virtual) | Virtual Participation |  |
| 2017–18 | SAEINDIA Baja / FMEA | Debut Season |  |

### Videos — 2 entries

| Title | URL |
|---|---|
| hBaja 2024 — Competition Highlights | ⚠️ placeholder |
| 2025 Build Teaser | ⚠️ placeholder |

### Press — 2 entries

| Title | Link |
|---|---|
| Placeholder — Add press coverage article title here | ⚠️ no link |
| Placeholder — Add another press coverage article | ⚠️ no link |

### Gallery — 16 captions defined

---

## Need Help?

- Contact: [@tarusamotorsport](https://instagram.com/tarusamotorsport)
