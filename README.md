
# Engagement Portal

This repository contains a web application built with Angular 16, aimed at enabling employees or customers to communicate, exchange feedback, and collaborate on topics of interest. It can be used as:

- **Employee Engagement Portal**: An internal environment for organizations where teams can interact in a social network/forum style.
- **Customer Support Portal**: A space where users can directly communicate with support or among themselves, sharing knowledge and resolving questions.

The application is configured with the following technologies and standards:

- **Angular 16**: Main framework for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsiveness.
- **ESLint + Prettier**: For code linting and formatting.
- **Husky + lint-staged**: To automate checks and formatting before each commit.
- **Commitlint** (using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)): To enforce standardized commit messages.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Requirements and Technologies](#requirements-and-technologies)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Available Scripts](#available-scripts)
6. [Workflow (Commits and Hooks)](#workflow-commits-and-hooks)
7. [Contributing](#contributing)
8. [License](#license)

---

## Project Overview

The **Engagement Portal** is designed to facilitate interaction and collaboration among users. Potential use cases include:

- **Internal Engagement**: Discussions between teams, idea exchanges, feedback requests, and celebrating achievements.
- **Customer Support**: Ticket creation, message exchanges with support, and sharing tips among users.

### Key Features (Planned or In Progress)

- **Topic Creation and Organization** for discussions.
- **News Feed** or updates feed to quickly view portal activity.
- **User Interaction** through comments and reactions.
- **Search** and **Filters** to find relevant topics.

---

## Requirements and Technologies

- **Node.js** (Recommended version: 16 or higher)
- **Angular CLI** (Version 16 or higher)
- **Tailwind CSS** 3+
- **ESLint** + **Prettier**
- **Husky** + **lint-staged**
- **Commitlint** + **Conventional Commits**

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/engagement-portal.git
cd engagement-portal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables (optional)

If your application connects to external APIs, configure them in environment files or Angular's `environment.ts`. Example:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://api.yourdomain.com'
};
```

### 4. Run the application

```bash
npm start
```

> By default, the app will be available at: [http://localhost:4200](http://localhost:4200)

---

## Project Structure

The general Angular project structure is as follows:

```
engagement-portal/
 ┣ .husky/
 ┃ ┣ pre-commit
 ┃ ┣ commit-msg
 ┣ src/
 ┃ ┣ app/
 ┃ ┃ ┣ components/
 ┃ ┃ ┣ services/
 ┃ ┃ ┗ app.module.ts
 ┃ ┣ assets/
 ┃ ┣ environments/
 ┃ ┣ styles.scss
 ┃ ┗ main.ts
 ┣ tailwind.config.js
 ┣ .eslintrc.json
 ┣ .prettierrc
 ┣ commitlint.config.js
 ┣ package.json
 ┣ angular.json
 ┗ README.md
```

- **.husky**: Git hooks for commits and pushes.
- **src/app**: Main Angular application code.
- **tailwind.config.js**: Tailwind CSS configuration.
- **.eslintrc.json**: ESLint configuration.
- **.prettierrc**: Prettier formatting options.
- **commitlint.config.js**: Commitlint rules for Conventional Commits.

---

## Available Scripts

Defined in `package.json`:

- **`npm start`**: Runs the app in development mode (equivalent to `ng serve`).
- **`npm run build`**: Builds the production-ready app (equivalent to `ng build --prod`).
- **`npm run lint`**: Runs `ng lint` for code quality checks.
- **`npm run format`**: Formats files (`.ts, .html, .css, .scss`) with Prettier.
- **`npm run commit`**: Launches Commitizen's interactive prompt for Conventional Commits.

---

## Workflow (Commits and Hooks)

### Husky + lint-staged

- **pre-commit**: Husky triggers `lint-staged`, which runs ESLint and Prettier **only on staged files**.
- If any critical issues are found (e.g., syntax errors), the commit is blocked until resolved.

### Commitlint

- **commit-msg**: Validates commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) standard.
- Examples of valid messages:
  - `feat: add new post creation feature`
  - `fix: resolve issue with login on IE11`
  - `docs: update README with new instructions`
  - `chore: update dependencies`

### How to Commit

1. Stage your changes:
   ```bash
   git add .
   ```
2. Use Commitizen for interactive prompts:
   ```bash
   npm run commit
   ```
   Or manually format your commit message:
   ```bash
   git commit -m "feat: add feature description"
   ```

---

## Contributing

Contributions are welcome! Follow these steps:

1. **Create** a branch for your feature or fix:
   ```bash
   git checkout -b feat/my-feature
   ```
2. **Make** your changes and add tests, if applicable.
3. **Open** a Pull Request describing your changes, solved issues, or added features.

---

## License

Choose an appropriate license (MIT, Apache 2.0, etc.) and link it here, for example:

```
[MIT License](LICENSE)
```

---

Happy coding!
