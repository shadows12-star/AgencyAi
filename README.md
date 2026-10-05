# Agency.ai — React & Tailwind CSS Landing Page

A modern digital agency website built with **React**, **Tailwind CSS**, and **Vite**. The project focuses on a clean, responsive interface with reusable components for the hero area, services, portfolio, contact section, navigation, footer, and theme controls.

## Preview

### Home / Hero

<img width="2048" height="1156" alt="image" src="https://github.com/user-attachments/assets/003b1fe5-c8a9-475a-a154-9ebe85d40048" />


### Services
<img width="2048" height="1114" alt="image" src="https://github.com/user-attachments/assets/c58149cd-2133-4e33-8f54-d94445c7fcf5" />


### Our Work
<img width="1931" height="1168" alt="image" src="https://github.com/user-attachments/assets/739ea753-bed0-48e3-9c75-e90f6fc48c9f" />


### Contact

<img width="2048" height="1144" alt="image" src="https://github.com/user-attachments/assets/99c2dfa5-c3d3-43f1-ada2-fb8907642d5c" />


## Features

- Responsive agency-style landing page
- Reusable React components
- Tailwind CSS styling
- Light/dark theme toggle UI
- Services section with individual service cards
- Portfolio / latest work showcase
- Contact form layout
- Responsive navigation and footer
- Vite-powered development setup

## Tech Stack

- **React** — component-based UI
- **Tailwind CSS** — utility-first styling
- **Vite** — development server and build tooling
- **JavaScript / JSX** — application logic and components

## Project Structure

```text
sami/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactUS.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── OurWork.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Services.jsx
│   │   ├── Teams.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Title.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your terminal.

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Main Components

| Component | Purpose |
| --- | --- |
| `Navbar.jsx` | Main navigation and contact action |
| `Hero.jsx` | Main introductory/hero section |
| `Services.jsx` | Services section layout |
| `ServiceCard.jsx` | Reusable individual service card |
| `OurWork.jsx` | Portfolio and recent work showcase |
| `ContactUS.jsx` | Contact form section |
| `Footer.jsx` | Footer and newsletter area |
| `ThemeToggle.jsx` | Theme toggle control |
| `Title.jsx` | Reusable section heading component |
| `Teams.jsx` | Team/community-related content |

## Design Highlights

The interface uses generous whitespace, rounded cards, subtle borders and shadows, and blue-to-purple accent colors. The layout is designed to keep the content easy to scan while giving the site a polished digital-agency feel.


## License

This project is intended for learning, portfolio, and design practice. Add your preferred license if you plan to distribute or reuse it publicly.
