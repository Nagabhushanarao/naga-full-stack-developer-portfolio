# Manual Deployment & Publishing Guide

A complete, step-by-step operational guide for testing, building, committing, and publishing the portfolio website to GitHub Pages manually.

---

## 📌 Deployment Lifecycle Overview

```text
[ Write / Edit Code ]
         │
         ▼
[ Step 1: Test Build Locally (npm run build) ]
         │
         ▼
[ Step 2: Git Stage & Commit (git add . && git commit) ]
         │
         ▼
[ Step 3: Git Push to GitHub (git push origin main) ]
         │
         ▼
[ Step 4: GitHub Actions Auto-Builds & Deploys (~60s) ]
         │
         ▼
[ Step 5: Live on https://nagabhushanarao.github.io/naga-full-stack-developer-portfolio/ ]
```

---

## Step 1: Test the Production Build Locally

Always test that your TypeScript compiles cleanly and your assets bundle without errors before pushing to production.

1. **Open PowerShell or Terminal** in the project directory:
   ```powershell
   cd c:\Naresh\naga-full-stack-developer-portfolio
   ```

2. **Execute the production build:**
   ```bash
   npm run build
   ```
   * **Success indicator:** You should see `✓ built in ...s` and `dist/` directory generated.
   * If there are TypeScript warnings or syntax errors, fix them first.

3. *(Optional)* **Preview the production bundle locally:**
   ```bash
   npm run preview
   ```
   * Open `http://localhost:4173/` in your browser.
   * Check layout, Dark/Light mode toggle, and responsive navigation.
   * Press `Ctrl + C` in your terminal to exit preview.

---

## Step 2: Save and Push Changes with Git

Once the build succeeds locally, record your changes and push them to your remote GitHub repository.

1. **Check changed files:**
   ```bash
   git status
   ```

2. **Stage all modified and newly created files:**
   ```bash
   git add .
   ```

3. **Commit your changes with a descriptive message:**
   ```bash
   git commit -m "feat: update portfolio skills and project highlights"
   ```

4. **Push the commit to the main branch:**
   ```bash
   git push origin main
   ```

---

## Step 3: One-Time GitHub Pages Setup (On GitHub Web UI)

*This is only required once per repository.*

1. Go to your repository on GitHub:
   [https://github.com/Nagabhushanarao/naga-full-stack-developer-portfolio](https://github.com/Nagabhushanarao/naga-full-stack-developer-portfolio)
2. Click **Settings** (the gear icon on the top tab bar).
3. In the left-hand navigation menu under **Code and automation**, click **Pages**.
4. Under **Build and deployment**:
   * Set **Source** dropdown to: **`GitHub Actions`** *(Do NOT select "Deploy from a branch")*.
5. GitHub will now automatically invoke your `.github/workflows/deploy.yml` pipeline on every push.

---

## Step 4: Track the Deployment Pipeline

1. In your GitHub repository, click on the **Actions** tab:
   [https://github.com/Nagabhushanarao/naga-full-stack-developer-portfolio/actions](https://github.com/Nagabhushanarao/naga-full-stack-developer-portfolio/actions)
2. Look at the latest workflow run named **"Deploy Portfolio to GitHub Pages"**.
3. Status indicators:
   * 🟡 **Yellow circle:** Building assets and preparing deployment.
   * 🟢 **Green checkmark (`✔`):** Successfully deployed live.
   * 🔴 **Red cross (`✖`):** Build failure (click to view logs and error trace).

---

## Step 5: Access and Share Your Live Website

Once the GitHub Actions workflow displays a green checkmark, your portfolio is live at:

👉 **[https://nagabhushanarao.github.io/naga-full-stack-developer-portfolio/](https://nagabhushanarao.github.io/naga-full-stack-developer-portfolio/)**

---

## ⚡ Quick Daily Routine Cheat Sheet

Whenever you modify any content (skills, projects, bio) in the future, just run these 3 commands:

```powershell
# 1. Verify build
npm run build

# 2. Stage and commit
git add .
git commit -m "update: added new project details"

# 3. Publish live
git push origin main
```
