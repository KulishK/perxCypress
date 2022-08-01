# E2E Testing

### Folder Structure

```bash
├── cypress
│   ├── fixtures        # Used as a datastore for fake data
│   ├── e2e             # e2e tests are added here (module wise)
│   │   └── **.cy.js
│   └── support         # Project specific cypress customizations
│      ├── commands.js  # create various custom commands and overwrite existing commands.
│      └── e2e.js       #e2e.js is processed and loaded automatically before your test files.
├── package.json
├── README.md
└── cypress.config.js    # Cypress config

```

## Initial setup

- run `npm i`

## Running with headed test runner mode

Open the cypress test runner using the following command.

```
npx cypress open
```

## Running in headless mode

You can run cypress tests in headless mode using the following command.

```
npx cypress run
```

### Resources

- https://docs.cypress.io/
