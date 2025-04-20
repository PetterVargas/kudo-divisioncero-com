# 🛡️ DivisiónCero - Cybersecurity

We seek to optimize the time spent on non-value-added cybersecurity topics and optimize it to improve global cybersecurity, using the [Cloud Security Alliance (CSA)](https://cloudsecurityalliance.org/) as a reference.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Materials for MkDocs](https://img.shields.io/badge/MkDocs%20Material-9.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)
![Turborepo](https://img.shields.io/badge/Turborepo-1.9.0-black)
![License](https://img.shields.io/badge/license-MIT-blue)


## ✨ Tools

- **ybersecurity compliance** - Cybersecurity compliance open source.
- **Cybersecurity WorldMap** - Country-by-country information on cybersecurity.
- **Cybersecurity Draw** - Full Flow Cybersecurity Drawing


## 📂 Project Structure

```
divisioncero.com/
├── apps/
│   ├── kudo/               # Cybersecurity compliance open source
│   ├── docs/               # Documentation the products and cloud security alliance
│   └── web/                # Principal portal
├── packages/               # Shared packages for all projects
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
└── turbo.json
```

## 🛠️ Getting Started

### Prerequisites

- [Git](https://git-scm.com/) (for version control)
- [Node.js 18.0.0 or newer](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/) (recommended)
- [Docker](https://www.docker.com/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PetterVargas/divisioncero.com.git
   cd divisioncero.com
   ```

2. Install dependencies:

   With pnpm:
   ```bash
   pnpm install
   ```

3. Run commands with Turborepo:

   Develop all apps and packages:

   ```bash
   pnpm run dev
   ```

   Build all apps and packages:

   ```bash
   pnpm run build
   ```

   Lint all apps and packages:

   ```bash
   pnpm run lint
   ```

4. Open the following sites in your browser:

- [http://localhost:3000](http://localhost:3000) - Principal portal with tools
- [http://localhost:3001](http://localhost:3001) - Documentation for products and Cloud Security Alliance
- [http://localhost:3002](http://localhost:3002) - Cybersecurity compliance open source


## 🔧 Configuration

### Tailwind

Tailwind v4 is configured in `tailwind.config.ts`. The configuration extends the default theme with custom colors, fonts, and more.

### shadcn/ui

Components from shadcn/ui are located in the `components/ui` directory. You can add more components using the CLI:

```bash
# pnpm
pnpm dlx shadcn-ui add button
```

## 🔍 Code Quality

This project uses ESLint and Prettier to ensure code quality and consistent formatting.

To check and fix formatting issues:

```bash
# With pnpm
pnpm format
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🤝 Third-Party Code and Information

This project is possible thank you a:

- [Turborepo](https://turbo.build/)
- [Sistema de Clasificación Geoespacial de las Naciones Unidas (UN M49)](https://en.wikipedia.org/wiki/UN_M49) - Basemap
- [Source the map](https://commons.wikimedia.org/wiki/File:BlankMap-World.svg) - File BlankMap World in svg
- [Next.js](https://nextjs.org/) - Modern, optimized routing system
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI and Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety throughout the entire codebase
- [ahuseyn - SVG-World-Map-with-labels](https://github.com/ahuseyn/SVG-World-Map-with-labels) - Labels of 193 UN member states
- [Materials for MkDocs](https://squidfunk.github.io/mkdocs-material/)

---
Created with work and perseverance 💚 by [Peter Vargas](https://petervargas.com/)