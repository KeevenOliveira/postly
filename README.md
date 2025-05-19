<div align="center">
  <img align style="width: 300px" src="https://github.com/user-attachments/assets/2f73f0b1-37d1-44fc-be1d-31044dd02c87">
</div>
<div align="center">
  A simple and elegant blog reader built with Next.js.
</div>

# Postly
![image](https://github.com/user-attachments/assets/05d28d10-29fd-401f-b4c8-6e4d838bfa30)

## Video
https://github.com/user-attachments/assets/dfdacfe9-f705-4c12-9598-c31cd25ee864

## Figma
https://www.figma.com/design/O8sLRfZ5MlHmJO9ebjS0tM/Postly?node-id=3-14&t=KaX2wSYxx70h0IQg-0

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Information](#information)

## Getting Started

### Prerequisites
- Node.js v16+ (ensure compatibility with Next.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KeevenOliveira/postly.git
   cd postly
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the build:
   ```bash
   npm run build
   ```
4. Start the build:
   ```bash
   npm start
   ```
   The app will be running at `http://localhost:3000`.

## Project Structure
```
postly/
├── public/             # Static assets
├── src/
│   ├── app/            # Main app structure (e.g., layouts, pages, global styles)
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utility libraries and helpers
│   ├── types/          # Types definitions
│   └── utils/          # General-purpose utility functions
├── jest.config.ts      # Jest configuration
├── next.config.ts      # Next.js configuration
├── README.md           # Project documentation
├── package-lock.json   # Dependency lock file
└── tailwind.config.ts  # Tailwind configuration
```

## Scripts
The following scripts are available in the `package.json` file:

- **Development**: `npm run dev`
  Runs the app in development mode with Turbopack.
- **Build**: `npm run build`
  Builds the production-ready application.
- **Start**: `npm start`
  Starts the production server.
- **Lint**: `npm run lint`
  Verify all code of application with Eslint.
- **Test**: `npm run test`
  Runs the test suite using Jest.
- **Test watch**: `npm run test:watch`
  Runs tests and generates a coverage report.

## Dependencies
[![My Skills](https://skillicons.dev/icons?i=ts,react,nextjs,jest,tailwindcss,npm)](https://skillicons.dev)


## Information
Since my application is a blog, it's important to consider SEO features. To support that, I implemented `getPosts` and `getPost` using ISR/SSG with a revalidation interval of about one hour. Additionally, I used SSR for `getPostComments` and `getUser`. It's worth noting that `getUser` could also benefit from ISR, but I chose not to use it because I believe user information changes frequently and is not relevant for SEO, unlike posts.

For any questions or issues, feel free to reach out!
