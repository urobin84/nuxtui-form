# Nuxt UI: Form Validation with Zod

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt UI
Nuxt UI is a module that provides a set of Vue components and composables built with Tailwind CSS and Headless UI to help you build beautiful and accessible user interfaces.

Its goal is to provide everything related to UI when building a Nuxt app. This includes components, icons, colors, dark mode as well as keyboard shortcuts.

Look at the [Nuxt UI documentation](https://ui.nuxt.com/getting-started) to learn more.

### Setup
1. Add @nuxt/ui module to your project:

```bash
  bunx nuxi@latest module add ui
```

2. Add it to the modules section in your nuxt.config.ts:
```bash
  export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

## Zod
libraries schema to validate form data

```bash
  import { z } from "zod";

export const RegisterValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Please type a valid name",
    })
    .min(3, "Name should be atleast 3 characters long"),
  email: z.string().email("Email is not valid"),
  password: z.string().min(8, "Password should be atleast 8 characters long"),
  passwordConfirm: z.string().min(8, "Password Confirm should be atleast 8 characters long"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: 'Password do not macth',
  path: ['passwordConfirm']
});
})
```