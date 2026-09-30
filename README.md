# Matteo Facchini — Developer Portfolio

Personal software engineering portfolio showcasing my projects, technical experience, research, and current interests in backend engineering, infrastructure, systems, and AI.

Built with **Next.js, React, TypeScript, and Tailwind CSS** and deployed with **Vercel**.

## Live Site

[View Portfolio](https://matteo-portfolio-sage.vercel.app/)

## About

I'm a Computer Science student at Stony Brook University interested in backend engineering, infrastructure, distributed systems, and AI systems.

This portfolio highlights my current work, including:

- **ForgeCI** — a CI/CD testing platform for exploring developer infrastructure
- **CourseLens AI** — a RAG-based course document assistant
- **PACE Lab Research** — undergraduate research involving GPU resource sharing and workload co-location

It also includes my experience, technical skills, resume, GitHub, and contact information.

## Featured Projects

### ForgeCI

A work-in-progress CI/CD testing platform built to understand the infrastructure behind systems like GitHub Actions and CircleCI.

Current functionality includes:

- GitHub push webhook handling
- HMAC-SHA256 signature verification
- Repository, branch, and commit metadata extraction
- PostgreSQL build-state persistence
- SQLAlchemy database integration
- Automated API and webhook tests with pytest
- GitHub Actions CI

**Tech:** Python, FastAPI, PostgreSQL, SQLAlchemy, pytest, GitHub Actions

[View ForgeCI](https://github.com/facchinimat/ForgeCI)

### CourseLens AI

A retrieval-augmented generation application that allows users to upload course PDFs and ask questions grounded in the uploaded material.

The system includes:

- PDF text extraction and chunking
- Embedding generation
- ChromaDB vector search
- Source-grounded LLM responses
- Filename and page-level citation metadata
- 10+ FastAPI REST endpoints
- Streamlit interface

**Tech:** Python, FastAPI, OpenAI API, ChromaDB, Streamlit, PyMuPDF, Pydantic

[View CourseLens AI](https://github.com/facchinimat/CourseLens_AI)

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Tooling & Deployment

- Git
- GitHub
- npm
- ESLint
- Vercel

## Features

- Responsive desktop and mobile design
- Light and dark mode support
- Dedicated project pages
- Experience and research showcase
- Technical skills overview
- Downloadable PDF resume
- GitHub and LinkedIn integration
- SEO and Open Graph metadata
- Responsive mobile navigation
- Accessible keyboard focus states
- Reduced-motion support

## Project Structure

```text
matteo-portfolio/
├── public/
│   ├── Matteo_Facchini_Resume.pdf
│   └── sbu.jpg
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── components/
│       └── Navbar.tsx
│
├── package.json
├── next.config.ts
└── tsconfig.json