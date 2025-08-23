# lab-react

A collection of small **React** experiments.  
Each folder explores a single topic — hooks, state management, performance, routing, testing, SSR/Next.js, etc.  
These are learning playgrounds, not production apps.

## 🔍 Structure
- One experiment = one folder: `YYYY-MM-topic-slug`
- Each contains its own app (Vite or Next.js), plus a short README.
- CI runs lint/tests/build for all experiments automatically.

## 📂 Experiments
- `2025-08-context-vs-zustand` — Compare Context, Zustand, and Redux Toolkit
- `2025-08-memoization-profiling` — `useMemo`/`useCallback` vs re-renders
- `2025-08-react-query-cache` — TanStack Query caching patterns

*(Add more as you go…)*

## 🚀 Run
```bash
# pick an experiment and run it
cd 2025-08-context-vs-zustand
npm ci
npm run dev
