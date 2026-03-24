// ============================================================
// TEAM DATA — edit data/team.csv  ➜  node scripts/update-from-csv.js
// ============================================================
const teamData = [
    // ── LEADERSHIP ────────────────────────────────────
    {
        name: `Nadec Biju`,
        role: `Captain & Powertrain Head`,
        department: `Leadership`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/nadec-biju`,
        photo: null,
    },
    {
        name: `Jithika P Sajan`,
        role: `Vice Captain & Steering Head`,
        department: `Leadership`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/jithika-p-sajan-b6811732b`,
        photo: null,
    },
    {
        name: `Karthik V K`,
        role: `Team Manager & Suspension Head`,
        department: `Leadership`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/vkkarthik1004`,
        photo: null,
    },
    {
        name: `Adarsh N`,
        role: `Brakes Head`,
        department: `Leadership`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/adarshn04`,
        photo: null,
    },
    {
        name: `Mirza Pullat`,
        role: `Driver`,
        department: `Leadership`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/mohammed-mirza-pullat-86266335a`,
        photo: null,
    },

    {
        name: `Nikhil Jose Saji`,
        role: `Procurement Head`,
        department: `Leadership`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/nikhil-jose-saji-94a797287`,
        photo: null,
    },

    // ── POWERTRAIN ────────────────────────────────────
    {
        name: `Gautham P Sankar`,
        role: `Member`,
        department: `Powertrain`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/gautham-p-sankar-00391514a`,
        photo: null,
    },
    {
        name: `Gokul T A`,
        role: `Member`,
        department: `Powertrain`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `M S Gokul`,
        role: `Member`,
        department: `Powertrain`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Devananda J`,
        role: `Member`,
        department: `Powertrain`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/devananda-jayan-7a453a347`,
        photo: null,
    },

    {
        name: `Naveen Antony`,
        role: `Rollcage Head`,
        department: `Leadership`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },

    // ── ROLLCAGE ──────────────────────────────────────
    {
        name: `Pranav Krishna M B`,
        role: `Member`,
        department: `Rollcage`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/pranav-krishna-m-b-643820278`,
        photo: null,
    },
    {
        name: `Roshin Roy S`,
        role: `Member`,
        department: `Rollcage`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/roshin-roy-s-98a9112a7`,
        photo: null,
    },

    // ── STEERING ──────────────────────────────────────
    {
        name: `Aadhith E M`,
        role: `Member`,
        department: `Steering`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Aravind D`,
        role: `Member`,
        department: `Steering`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/aravind-d-229963349`,
        photo: null,
    },

    // ── SUSPENSION & CHASSIS ──────────────────────────
    {
        name: `Annson D Dinesh`,
        role: `Member`,
        department: `Suspension & Chassis`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/annson-d-dinesh-70699930b`,
        photo: null,
    },
    {
        name: `Aswathy P`,
        role: `Member`,
        department: `Suspension & Chassis`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/aswathi-p-a42122273`,
        photo: null,
    },

    // ── BRAKES ────────────────────────────────────────
    {
        name: `P H Muhammed Yaseen`,
        role: `Member`,
        department: `Brakes`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/muhammed-yaseen-7781b6343`,
        photo: null,
    },
    {
        name: `Hanna Eldho`,
        role: `Member`,
        department: `Brakes`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },

    // ── STATICS ───────────────────────────────────────
    {
        name: `Sandra V M`,
        role: `Statics Head`,
        department: `Statics`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/sandravm2002`,
        photo: null,
    },

    // ── MEDIA & OUTREACH ──────────────────────────────
    {
        name: `Jayadev J A`,
        role: `Media Head`,
        department: `Media & Outreach`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Kalidasan V R`,
        role: `Member`,
        department: `Media & Outreach`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/kalidasan-v-r-b07267278`,
        photo: null,
    },
    {
        name: `Niranjan M`,
        role: `Member`,
        department: `Media & Outreach`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Meghnath Pradeep`,
        role: `Member`,
        department: `Media & Outreach`,
        bio: ``,
        linkedin: `https://www.linkedin.com/in/meghnath-pradeep-0b35ba3a6`,
        photo: null,
    },

    // ── INTERNS ───────────────────────────────────────
    {
        name: `Abdul Muqsith`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Mohammed Sinan Sharif`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Akhilesh P`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Sreehari Aneesh`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `John Anchery`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Basil K Eldhose`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Gopika C`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Yashwant Krishna`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Ashil Mahesh`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
    {
        name: `Arjun P R`,
        role: `Intern`,
        department: `Interns`,
        bio: ``,
        linkedin: ``,
        photo: null,
    },
];

export default teamData;
