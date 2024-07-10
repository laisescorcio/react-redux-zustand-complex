# React + Redux + Zustand

## How to run the project

Run
`npm install`
`npm run dev`

## Libraries

### Tailwind CSS

- To install `npm create vite@latest my-project -- --template react`
- To init `npx tailwindcss init -p`
- Add a css file with:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- Install the Postcss and Tailwind Docs extensions (autocomplete)
- To install postcss autoprefixer run `npm install -D tailwindcss postcss autoprefixer`

[Tailwind CSS Vite Documentation](https://tailwindcss.com/docs/guides/vite)

#### Tailwind CSS Scrollbar

- To install `npm install --save-dev tailwind-scrollbar`

### Lucide-react to use icons

- To install `npm i lucid-react`

### React-player to use video from several providers (youtube, vimeo, etc)

- To install `npm i react-player`

### Collapsible from Radix UI - functionalities without estilization

- To install `npm install @radix-ui/react-collapsible`
- Use

```javascript
<Collapsible.Root>
  Group of collapsible
  <Collapsible.Trigger>Button to trigger to open and close</Collapsible.Trigger>
  <Collapsible.Content>
    Content that will be opened and closed
  </Collapsible.Content>
</Collapsible.Root>
```

## Redux Flow

- The store is created
- In the store is created separetes slices containing the respectives states - store reducer
- Actions are created (functions to modify the states)
- Dispatch is used to call the actions to modify the respectives states
- useSelector is used to search the states to render on interface
