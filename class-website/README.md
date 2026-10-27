# Class Website — ReactJS Practical Assessment

This is a simple ReactJS + Vite project for the SWDFA501 Front-End App Development with ReactJS practical assessment.

## Included features

- Home, About, Students, and Contact views
- Reusable functional components
- Props for passing school/class information
- Student objects rendered with `map()`
- Event handling with `onClick`
- `useState` click counter and reset button
- No CSS, inline styles, Bootstrap, Tailwind, or other styling framework

## Before you submit

1. Replace the sample student names and IDs in `src/Students.jsx` with accurate class information.
2. Replace the sample contact email in `src/Contact.jsx` with a verified email address.
3. Confirm your school name, class level, and trade in `src/App.jsx`.
4. Add your own full name and RTB email to the submission information you provide to your teacher. Do not put private information into the public website unless required.

## Step 1 — Install/verify Node.js and npm

Install the current Node.js LTS version from https://nodejs.org if they are not installed.

Open Command Prompt or the VS Code terminal and run:

```bash
node -v
npm -v
```

Both commands should print version numbers.

## Step 2 — Extract and open the project

1. Extract `class-website.zip`.
2. Open the extracted `class-website` folder in VS Code.
3. Open the terminal in VS Code: **Terminal → New Terminal**.
4. Ensure the terminal is inside the folder that contains `package.json`.

## Step 3 — Install packages and run locally

Run:

```bash
npm install
npm run dev
```

Vite prints a local address, usually `http://localhost:5173/`. Ctrl+click the address or copy it into your browser.

Test each navigation button and test the click counter and reset button. Stop the server with `Ctrl+C` in the terminal when finished.

Before deployment, test the production build:

```bash
npm run build
```

A successful build creates a `dist` folder. Do not manually upload `dist` to GitHub as a replacement for the source project; Vercel can build from the source.

## Step 4 — Upload to GitHub

1. Sign in at https://github.com.
2. Create a **public** repository named `class-website`. If you are uploading this existing folder, do not initialize the new repository with a README, license, or `.gitignore`.
3. In the VS Code terminal, make sure you are in the project folder and run these commands one at a time:

```bash
git init
git add .
git commit -m "Build React class website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/class-website.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. If Git says a remote named `origin` already exists, run `git remote -v` to inspect it; do not add a second remote. If needed, update it using:

```bash
git remote set-url origin https://github.com/YOUR-GITHUB-USERNAME/class-website.git
git push -u origin main
```

If Git is not installed, install Git from https://git-scm.com/downloads and reopen VS Code. Do **not** upload the `node_modules` folder. It is excluded by `.gitignore`.

Copy the repository URL from your browser after confirming that your source files are visible.

## Step 5 — Deploy to Vercel

1. Open https://vercel.com and sign in using GitHub.
2. Choose **Add New → Project** (wording may vary).
3. Import your `class-website` GitHub repository.
4. Confirm the framework is detected as **Vite**.
5. Use the default build command `npm run build` and output directory `dist` if Vercel asks.
6. Select **Deploy** and wait for the deployment to finish.
7. Open the generated live URL. Test Home, About, Students, Contact, the counter, and reset button.
8. After you push later changes to GitHub, Vercel normally redeploys automatically.

## Step 6 — Submission checklist

- [ ] Full name entered in the assessment submission
- [ ] RTB email entered in the assessment submission
- [ ] Public GitHub repository URL copied
- [ ] Live Vercel URL copied
- [ ] Screenshot captured showing the deployed website in a browser
- [ ] Website tested online
- [ ] Sample student details and contact email replaced

## Screenshot on Windows

Open the deployed website in Chrome, then press `Win + Shift + S`, select the website area, and save the screenshot. Submit the screenshot along with both URLs and your full name/RTB email as required by your teacher.
