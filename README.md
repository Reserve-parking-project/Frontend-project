# Reserve Parking Client

## How to start working
#### Clone repository
`git clone https://github.com/Reserve-parking-project/Frontend-project.git`

#### Navigate to the project directory
`cd Frontend-project`

#### Install dependencies
`npm install`

#### Scrips
`npm run dev` - Starts the development server.
`npm run build` - Builds the application for production. 
`npm run preview` - Previews the production build. 
`npm run lint` - Lints the codebase using ESLint.
`npm run lint`- fix: Fixes linting issues automatically. 
`npm run format` - Formats the codebase using Prettier. 
`npm run storybook` - Starts Storybook for UI component development. 
`npm run build-storybook` - Builds the Storybook application.

## Project structure
``` 
client/
│
├── .vite/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── image/
│   │   │   └── ...
│   ├── components/
│   │   └── ...
│   │   └── UI/
│   │   │   └── index.js
│   ├── constants/
│   │   └── ...
│   │   └── index.js
│   ├── hooks/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   │   └── index.js
│   ├── routes/
│   │   └── ...
│   ├── store/
│   │   ├── ...
│   ├── styles/
│   │   ├── global.scss
│   │   ├── reset.scss
│   │   └── variables.scss
│   └── httpRequests.js
│   └── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.ts
```
