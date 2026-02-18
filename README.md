# AIwallex User Flows

A collection of user flow mocks. This repo will grow with more flows over time.

## Current flow: Web Onboarding

This part implements **Web Onboarding** — a full onboarding flow (landing → qualification → account creation → verification → dashboard).

### Steps

1. **Landing** – Business email + “Get started”
2. **Company size** – How big is your company? (1–10, 11–50, … 500+)
3. **Transaction volume** – Expected monthly volume in SGD
4. **Primary interest** – What is your primary area of interest in AIwallex? (6 options)
5. **Other solutions** – Optional additional solutions (checkboxes)
6. **Create account (1)** – Business email, legal first/last name, password (with strength rules)
7. **Create account (2)** – Business name, headquarters, mobile, Terms & Conditions
8. **Verify phone** – 6-digit code (mock: use **123456**), resend with countdown
9. **Account created** – “Activate your account” or “Take me to the dashboard first”
10. **Verify business** – Registration location, legal entity name, “Add entity”, “Get started”
11. **Leave modal** – Shown when closing “Verify business”: “Are you sure you want to leave?”
12. **Dashboard** – Pending tasks, Global Accounts, Cards, case study

---

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

---

## Deploy to the cloud

The project is set up to deploy to **Vercel** or **Netlify**. You can upload it and get a live URL in a few minutes.

### Option A: Vercel (recommended)

1. **Push the project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "AIwallex User Flows – Web Onboarding"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aiwallex-user-flows.git
   git push -u origin main
   ```
   (Create the repo `aiwallex-user-flows` on GitHub first if needed.)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
   - Click **Add New… → Project** and import your GitHub repo.
   - Leave **Build Command** as `npm run build` and **Output Directory** as `dist`.
   - Click **Deploy**. Vercel will build and give you a URL like `https://aiwallex-user-flows-xxx.vercel.app`.

   Or use the CLI:
   ```bash
   npx vercel
   ```
   Follow the prompts and you’ll get a deployment URL.

### Option B: Netlify

1. Push the repo to GitHub (same as above).

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in.
   - **Add new site → Import an existing project** → choose GitHub and your repo.
   - Build command: `npm run build`, Publish directory: `dist`.
   - Deploy. You’ll get a URL like `https://random-name-xxx.netlify.app`.

The repo already includes `vercel.json` and `netlify.toml` so both platforms will serve the SPA routes correctly.

---

## Tech stack

- **React 18** + **Vite**
- **React Router** for `/`, `/onboarding`, `/dashboard`
- Context for onboarding state and step progression
- CSS variables for brand colors (purple primary, orange accent, dark footer)

## Mock behaviour (Web Onboarding)

- **Phone verification:** Use code **123456**. “Resend code” starts a 60s countdown.
- **Navigation:** Back moves to the previous step; progress is kept in context.
- **Dashboard:** Shows the business name and email from onboarding; links are placeholders.
