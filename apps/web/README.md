# 🛡️ Cybersecurity Kudo

We seek to optimize the time spent creating cybersecurity presentations globally and leverage it into actions that add value to the public and private sectors, using the Cloud Security Alliance (CSA) as a benchmark.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)


## ✨ Features

- **Cybersecurity WorldMap** - Country-by-country information on cybersecurity.
- **Cybersecurity Draw** - Full Flow Cybersecurity Drawing


## 📂 Project Structure

```
├── app/                     # App Router
│   ├── (routes)/            # Route groups
│   ├── layout.tsx           # Main layout
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── ui/                  # shadcn components
│   └── [feature]/           # Feature-specific components
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript definitions
├── public/                  # Static assets
└── styles/                  # Additional styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0.0 or newer
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PetterVargas/cybersecurity-kudo.git
   cd cybersecurity-kudo
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

- [http://localhost:3000](http://localhost:3000) - Principal portal in NextJS
- [http://localhost:3001](http://localhost:3001) - Fumadocs Documentation
- [http://localhost:3002](http://localhost:3002) - Cybersecurity Draw

## 📝 Available Commands

| Command               | pnpm                | npm                 | yarn                |
|-----------------------|---------------------|---------------------|---------------------|
| Start dev server      | `pnpm dev`          | `npm run dev`       | `yarn dev`          |
| Build for production  | `pnpm build`        | `npm run build`     | `yarn build`        |
| Start production      | `pnpm start`        | `npm start`         | `yarn start`        |
| Lint code             | `pnpm lint`         | `npm run lint`      | `yarn lint`         |
| Format code           | `pnpm format`       | `npm run format`    | `yarn format`       |


## 🔧 Configuration

### Tailwind

Tailwind v4 is configured in `tailwind.config.ts`. The configuration extends the default theme with custom colors, fonts, and more.

### shadcn/ui

Components from shadcn/ui are located in the `components/ui` directory. You can add more components using the CLI:

```bash
# With pnpm
pnpm dlx shadcn-ui add button

# With npm
npx shadcn-ui add button

# With yarn
yarn dlx shadcn-ui add button
```

## 🔍 Code Quality

This project uses ESLint and Prettier to ensure code quality and consistent formatting.

To check and fix formatting issues:

```bash
# With pnpm
pnpm format

# With npm
npm run format

# With yarn
yarn format
```

To check for linting issues:

```bash
# With pnpm
pnpm lint

# With npm
npm run lint

# With yarn
yarn lint
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

- [Sistema de Clasificación Geoespacial de las Naciones Unidas (UN M49)](https://en.wikipedia.org/wiki/UN_M49) - Basemap
- [Source the map](https://commons.wikimedia.org/wiki/File:BlankMap-World.svg) - File BlankMap World in svg
- [Next.js](https://nextjs.org/) - Modern, optimized routing system
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI and Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety throughout the entire codebase
- [ahuseyn - SVG-World-Map-with-labels](https://github.com/ahuseyn/SVG-World-Map-with-labels) - Labels of 193 UN member states

---
Made with ❤️ by [Peter Vargas](https://petervargas.com/)