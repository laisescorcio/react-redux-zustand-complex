# React + Redux + Zustand

## How to run the project

Run
`npm install`
`npm run dev`

## Use Tailwind

- To install `npm create vite@latest my-project -- --template react`
- To init `npx tailwindcss init`

[Tailwind CSS Vite Documentation](https://tailwindcss.com/docs/guides/vite)

## Redux Flow

- The store is created
- In the store is created separetes slices containing the respectives states - store reducer
- Actions are created (functions to modify the states)
- Dispatch is used to call the actions to modify the respectives states
- useSelector is used to search the states to render on interface
