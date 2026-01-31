This lab is explain how to setup react with vite and core components to work.

1. Make new project `npm create vite@latest my-app -- --template react-ts`
2. The working space is under `src` directory
3. `App.tsx` is a main class
4. Switch env, you can use `npm run local` or `npm run dev`
4a. Update `package.json`
```
{
  "scripts": {
    "dev": "vite --mode dev",
    "local": "vite --mode local",
    "build:dev": "tsc -b && vite build --mode dev",
    "build:local": "tsc -b && vite build --mode local",
    "preview": "vite preview"
  }
}

// notes tsc -b meaning it will build the typescript for save compilation
tsc               Compile a single project
tsc -b            Build one or more referenced projects
tsc -b --clean    Clean build artifacts
tsc -b --watch    Watch mode for multi-project builds

```
4b. Create ENV file
```
.env.dev
.env.local

-- File content inside env
BASE_URL=https://localhost
USERNAME=vantian
PASS=388yhkafh*
```
4c. Sanity check, add this log into `main.tsx`
`console.log("ENV Mode:", import.meta.env.MODE);`