# 🔐 Secure CI Pipeline (No Deployment)

![CI Status](https://github.com/ankush-coder-4971001/react-devops-pipeline/actions/workflows/ci.yml/badge.svg)

## 📌 Project Overview

This project demonstrates a **production‑grade, security‑focused CI pipeline** built using **GitHub Actions**, without any cloud account, VM, or deployment setup.

The goal of this project is to show how **code quality, security checks, environment validation, and container safety** can be enforced *before* any deployment step.

This mirrors real‑world DevOps practices where CI acts as the **first security gate**.

---

## 🎯 What This Project Covers

* ✅ Secure CI pipeline design
* 🔐 Environment variable validation
* 🧪 Test execution in CI
* 🧹 Code linting
* 📦 Dependency vulnerability scanning
* 🐳 Docker image build & push
* 🚫 **No CD / No deployment / No notifications**

---

## 🧱 Pipeline Architecture

```
Developer Push
      ↓
GitHub Actions (CI)
      ↓
────────────────────────
✔ Install dependencies
✔ Lint source code
✔ Run tests
✔ Validate environment variables
✔ Scan dependencies (npm audit)
✔ Build Docker image
✔ Push to Docker Hub
────────────────────────
      ↓
Pipeline stops (no deploy)
```

---

## 🛠️ Tech Stack

* **Node.js 18**
* **GitHub Actions** (CI)
* **ESLint** (Linting)
* **npm audit** (Dependency security)
* **Docker** (Containerization)
* **Docker Hub** (Image registry)

---

## 🔐 Environment Variables

Environment variables are validated during CI to prevent misconfigured builds.

Example required variables:

```
NODE_ENV
APP_PORT
```

If any required variable is missing, the pipeline fails immediately.

---

## 🔍 Security Checks Included

### 1️⃣ Linting (Code Quality)

Ensures consistent and clean code using ESLint.

### 2️⃣ Dependency Audit

Uses `npm audit` to detect known vulnerabilities in dependencies.

### 3️⃣ Secret Safety

All sensitive values are stored using **GitHub Secrets** — never hardcoded.

---

## 🚀 CI Workflow Trigger

The pipeline runs automatically on:

* Push to `main`
* Pull requests targeting `main`

---

## 📁 Repository Structure

```
.
├── .github/workflows/
│   └── ci.yml
├── src/
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧠 Why No Deployment?

This project intentionally **does not include CD** because:

* No cloud account or VM is used
* Focus is on CI security foundations
* Matches early‑stage DevOps / junior DevOps responsibilities

Deployment can be added later without changing the CI design.

---

## 🧪 How to Test CI Locally

```bash
npm install
npm run lint
npm test
npm audit
```

---

## 📌 Resume‑Ready Description

> Designed and implemented a security‑focused CI pipeline using GitHub Actions with linting, dependency audits, environment validation, and Docker image automation, following industry DevOps best practices.

---

## 📄 License

MIT License
