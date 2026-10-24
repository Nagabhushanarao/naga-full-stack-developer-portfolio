# Full Stack Developer Portfolio — Project Instructions

## 1. Objective

Build a premium, recruiter-friendly, responsive portfolio website for a Full Stack Software Engineer with experience in React.js, Angular, Java, Spring Boot, REST APIs, and SQL.

The website must be production-ready, fast, accessible, visually polished, mobile-friendly, and deployable for free using GitHub and Vercel or GitHub Pages.

Do not build a generic template. Create a distinctive engineering portfolio that demonstrates technical depth and real software development experience.

## 2. Personal Information

Use editable placeholders wherever information is not provided.

- Name: [YOUR FULL NAME]
- Role: Full Stack Software Engineer
- Location: India
- Experience: [ENTER ACTUAL YEARS OF EXPERIENCE]
- Email: [YOUR EMAIL]
- Phone: [OPTIONAL]
- GitHub: [YOUR GITHUB PROFILE URL]
- LinkedIn: [YOUR LINKEDIN PROFILE URL]
- Resume: Add a downloadable PDF link when the actual resume is provided.

Never invent employment history, achievements, project metrics, certifications, client names, or technical expertise. Clearly label sample projects as personal or demonstration projects.

## 3. Technology Stack

Use the following stack for the portfolio frontend:

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- React Router only if multiple pages are genuinely needed.

Prefer a clean single-page portfolio with reusable, maintainable components.

Avoid unnecessary dependencies, paid APIs, and backend infrastructure for the initial version.

## 4. Design Direction

Create a premium software-engineering aesthetic inspired by modern developer portfolios.

- Dark-first theme with a light/dark toggle.
- Strong typography and clear visual hierarchy.
- Deep charcoal backgrounds with restrained accent colors.
- Subtle gradients, borders, and tasteful motion.
- Generous whitespace and polished spacing.
- Responsive navigation and mobile menu.
- Small interactive details without distracting animations.
- No excessive glassmorphism, oversized gradients, or generic AI-generated copy.
- Support reduced-motion preferences.
- Ensure readable contrast and keyboard accessibility.

The website must look professional on desktop, tablet, and mobile.

## 5. Website Sections

### Hero
Display my name, professional role, short introduction, and two primary actions:
- View Projects
- Download Resume

Include GitHub and LinkedIn links.

Add a concise statement about building maintainable, scalable web applications.

### About Me
Explain my software engineering background, frontend and backend development experience, problem-solving approach, and interest in software architecture and performance optimization.

Keep the content factual and editable.

### Technical Skills
Organize skills into categories:

Frontend:
- React.js
- Angular
- JavaScript
- TypeScript
- HTML5
- CSS3

Backend:
- Java
- Spring Boot
- REST APIs
- Spring Security, if supported by actual experience

Database:
- SQL
- Relevant databases based on actual experience

Engineering:
- Git
- Debugging
- Performance optimization
- API integration
- Testing
- Docker and Kubernetes only where experience can be demonstrated.

Do not imply mastery of a technology solely because it appears in this list.

### Featured Projects
Create reusable project cards with:
- Project title
- Problem statement
- Solution
- Technology stack
- Key technical decisions
- Architecture overview
- Screenshots
- GitHub repository link
- Live demo link
- Challenges and lessons learned

Provide editable sample project data for:
1. A React dashboard consuming REST APIs.
2. An Angular application with reusable components and form validation.
3. A Java Spring Boot REST API with layered architecture and SQL persistence.

Mark these as proposed demonstration projects until they are actually implemented.

Do not fabricate live demos, repositories, screenshots, or performance metrics.

### Architecture and Engineering
Show how a typical application works:

React or Angular UI
→ HTTP request
→ REST API
→ Spring Boot Controller
→ Service Layer
→ Repository Layer
→ Database
→ JSON response
→ UI state update

Include a simple architecture diagram or clean visual representation.

Explain separation of concerns, validation, error handling, security, and maintainability.

### Experience
Create a timeline with editable employment entries, responsibilities, technologies, and verified achievements.

Do not generate fictional companies, dates, job titles, or accomplishments.

### Resume
Provide a clearly visible resume download button.

If no resume PDF is available, show a placeholder and document how to add the real file later.

### Contact
Include email, LinkedIn, and GitHub links.

Use a mailto link rather than introducing a paid contact-form backend.

### Footer
Include copyright year, social links, and a back-to-top control.

## 6. Functional Requirements

- Every navigation item must work.
- All project links must point to real destinations or remain clearly marked placeholders.
- Resume download must work when the PDF is provided.
- Theme toggle must work and remember the preference where practical.
- Mobile navigation must work.
- Buttons must have visible hover, focus, and active states.
- Avoid dead links and nonfunctional controls.
- Include custom 404 handling only if a multi-page routing setup requires it.
- Add meaningful page title, meta description, favicon, and social-sharing metadata.

## 7. Code Quality

- Use reusable React components.
- Keep components small and understandable.
- Use TypeScript types for project data and component props.
- Separate content data from presentation.
- Avoid unnecessary state and prop drilling.
- Handle missing images and links gracefully.
- Use semantic HTML.
- Follow accessible naming and keyboard-navigation practices.
- Keep the project easy for another engineer to understand.
- Add comments only when they clarify non-obvious decisions.

## 8. Performance and SEO

- Optimize images and use appropriate formats.
- Avoid large unnecessary libraries.
- Prevent layout shifts.
- Lazy-load below-the-fold images when appropriate.
- Use descriptive headings and metadata.
- Ensure the site builds successfully.
- Test mobile layouts and common viewport sizes.
- Do not claim Lighthouse scores or accessibility compliance without testing.

## 9. GitHub Repository

Use this repository name:

full-stack-developer-portfolio

Create a complete README.md containing:
- Project overview
- Technology stack
- Features
- Screenshots
- Local installation instructions
- Development commands
- Production build instructions
- Deployment instructions
- Live website URL after successful deployment
- License, if one is selected

Add a suitable .gitignore.

Never commit .env files, API keys, credentials, private documents, or other secrets.

## 10. Free Deployment

Prefer Vercel's free Hobby plan for a personal frontend portfolio, or GitHub Pages for a static portfolio.

Connect the GitHub repository to the selected hosting platform.

Configure automatic deployments from the main branch where supported.

Verify the actual production build and deployed website before reporting success.

Document the final public URL and GitHub repository URL.

Do not claim that deployment is complete until the live URL has been verified.

Do not purchase a domain or paid service.

## 11. Execution Workflow

Work in these stages:

Stage 1: Inspect the project directory and establish the application structure.

Stage 2: Implement the responsive design system and main portfolio sections.

Stage 3: Add project data, working interactions, accessibility, and SEO.

Stage 4: Run the available lint, type-check, and production-build commands. Fix errors.

Stage 5: Test navigation, links, theme switching, responsive layouts, and resume handling.

Stage 6: Prepare README.md and .gitignore.

Stage 7: Initialize Git if necessary, inspect the changes, and commit the source code.

Stage 8: Publish to the intended GitHub repository after confirming the repository and account. Never overwrite unrelated repositories.

Stage 9: Deploy to a free hosting provider after the required account authorization.

Stage 10: Verify the deployed website and provide the final repository URL, live website URL, build status, and any remaining manual steps.

Ask me for missing essential information instead of inventing personal details.

Do not stop after creating a mockup. Complete the implementation, test it, and deploy it as far as the available tools and account permissions allow.
