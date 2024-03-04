# Github profile browser example project

## Technologies

- Framework: NextJS 14
- TypeScript
- Styling: Tailwind CSS
- Component library: shadcn/ui
- Unit testing: Vitest (Jest & React testing library)
- e2e testing: Playwright

## How to run

### Install

Clone the repo, and run `pnpm install`.

### Dev server

To start the dev server run `pnpm run dev`.

### Testing

To run the unit tests run `pnpm run test`.

To run the e2e tests, first create a production build with `pnpm run build` and then start it locally with `pnpm run start`.
Then run `npx playwright test --ui` to run through the e2e tests locally.
