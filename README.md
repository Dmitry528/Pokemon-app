Poke app which uses https://pokeapi.co/docs/v2

Stack:
1. Tanstack query as server state manager
2. Zustand as UI state manager.
3. Jest + RTL for testing
4. MSW for mocking Api calls in order to return mocked response (used during test execution)
5. Typescript

Usefull tools:
1. Eslint - flat config for checking code
2. Prettier - formatting code
3. Husky - executing eslint + prettier + tests before commit.
