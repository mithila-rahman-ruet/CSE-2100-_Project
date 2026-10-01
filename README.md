# 🎓 RUET Connect

**A university community platform for RUET students** — one place to find lost items, locate blood donors, buy and sell second-hand goods, explore campus clubs, and share academic notes.

> Course project for **CSE 2100** — Rajshahi University of Engineering & Technology (RUET).

---

## ✨ Features

| Module | What it does |
| --- | --- |
| 🔐 **Authentication** | Sign up / log in with a RUET student email (`@student.ruet.ac.bd`) only. Student ID is derived from the email. |
| 👤 **Student Profile** | View and edit your profile (name, department, semester, hall, blood group, photo). See and delete all your own posts from one place. Other students' public profiles are viewable too. |
| 🔍 **Lost & Found** | Post lost or found items with photo, location, description and contact number. Search and filter the feed. |
| 🩸 **Blood Group Directory** | Toggle yourself as an available donor, search donors by name / ID / department / hall, filter by blood group (A±, B±, AB±, O±), and post emergency blood requests with hospital and contact info. |
| 🛒 **Sell & Buy Marketplace** | List items in categories (Books, Electronics, Cycles, Hall & Room Essentials, Others) with price in ৳ and condition (Brand New / Like New / Good / Fair). Search and sort by price. |
| 🏛️ **Club Hub** | Browse 34 RUET clubs by category (Technical, Cultural, Career, Sports, Departmental, Science, Social) with a dedicated details page for each club. |
| 📄 **Notes Vault** | Share and find course notes, slides and exam resources. Filter by department, semester and course code; attach a Google Drive / PDF link. |
| 📱 **Responsive UI** | Mobile-friendly navbar and layouts built with Tailwind CSS. |

### Sign-up details collected

Name, student email, password, department (CSE, EEE, ME, CE, ECE, IPE, ETE, Arch, ChE, URP, BECM, CME, MSE, MTE), semester (1-1 … 4-2), residential hall, and blood group.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, [Tailwind CSS](https://tailwindcss.com/) (CDN), vanilla JavaScript
- **Backend (BaaS):** [Firebase](https://firebase.google.com/) v10.7.1 (compat SDK)
  - **Authentication** — email/password
  - **Cloud Firestore** — application data
  - **Cloud Storage** — image uploads
- **Tooling:** Python script for generating club logo SVGs

No build step, no npm install — it is a static site.

---

## 📁 Project Structure

```
CSE-2100-Project/
├── index.html              # Landing page with service cards
├── pages/
│   ├── login.html          # Login & sign up
│   ├── profile.html        # My profile + my activity (posts)
│   ├── view-profile.html   # Public view of another student
│   ├── lost-found.html     # Lost & Found
│   ├── blood.html          # Blood donors & emergency requests
│   ├── sell-buy.html       # Marketplace
│   ├── club-hub.html       # Club listing
│   ├── club-details.html   # Single club page
│   └── notes.html          # Notes Vault
├── js/
│   └── firebase.js         # Firebase init, auth state, shared navbar & helpers
├── assets/
│   └── images/clubs/       # Club logo SVGs
├── create_logos.py         # Generates the club logo SVGs
└── README.md
```

`js/firebase.js` is loaded by every page. It initialises Firebase, tracks the signed-in user (`window.currentUser`, `onAuthReady`, `requireAuth`), renders the shared navbar, and provides helpers such as `escapeHtml`, `formatDate` and `resolvePath`.

---

## 🗄️ Firestore Data Model

| Collection | Used by | Purpose |
| --- | --- | --- |
| `users` | all pages | Student profile documents (keyed by Firebase `uid`) |
| `bloodRequests` | Blood, Profile | Emergency blood requests |
| `lostFound` | Lost & Found, Profile, View Profile | Lost / found item posts |
| `products` | Sell & Buy, Profile, View Profile | Marketplace listings |
| `notes` | Notes Vault, Profile | Shared academic notes |

**Cloud Storage folders:** `profile_photos/`, `lost_found/`, `products/`

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (e.g. VS Code **Live Server**, or Python's built-in server)
- Internet access (Tailwind and Firebase SDKs load from CDNs)

### 1. Clone the repository

```bash
git clone https://github.com/mithila-rahman-ruet/CSE-2100-_Project.git
cd CSE-2100-_Project
```

### 2. Run locally

Serve the project root with any static server:

```bash
# Python 3
python -m http.server 5500
```

Then open <http://localhost:5500>.

> ⚠️ Open the site through `http://localhost`, not by double-clicking `index.html` — Firebase Auth does not work reliably over `file://`.

### 3. (Optional) Use your own Firebase project

The repo ships with a working Firebase web config in `js/firebase.js`. To point the app at your own backend:

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication → Email/Password**, **Cloud Firestore**, and **Storage**.
3. Add `localhost` (and your deployed domain) under **Authentication → Settings → Authorized domains**.
4. Replace the `firebaseConfig` object in `js/firebase.js` with your project's config.
5. Set Firestore and Storage security rules (see below).

### 4. (Optional) Regenerate club logos

```bash
python create_logos.py
```

Edit `output_dir` at the top of the script first — it currently contains an absolute Windows path.

---

## 🔒 Security Notes

- Firebase web API keys are not secret, but **your data is only as safe as your Security Rules**. Before any real deployment, lock down Firestore and Storage so that:
  - only signed-in users with a `@student.ruet.ac.bd` email can read/write,
  - users can only edit or delete their **own** documents,
  - upload size and file type are restricted.
- The `@student.ruet.ac.bd` restriction is currently enforced in the **client-side** code (`login.html`). Enforce it in Security Rules as well, since client checks can be bypassed.
- User-generated text is escaped with `escapeHtml()` before being inserted into the page to prevent XSS.
- Phone numbers and blood-group data are personal information — only collect what is needed.

---

## 🧭 Possible Future Improvements

- Email verification on sign-up
- Password reset flow
- In-app chat between buyer and seller
- Mark Lost & Found items / blood requests as "resolved"
- Push or email notifications for matching blood requests
- Admin / moderator role for removing inappropriate posts
- Club pages with real events, members and announcements

---

## 👥 Team

| Name | Student ID | Role |
| --- | --- | --- |
| Mithila Rahman | _your ID_ | _your role_ |
| _teammate_ | _ID_ | _role_ |

**Course:** CSE 2100 · **Department of CSE, RUET**
**Supervisor / Teacher:** _add name_

---

## 📄 License

This project was built for educational purposes as part of a university course. Add a license (e.g. MIT) here if you plan to open-source it.
