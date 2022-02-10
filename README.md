### Installation

Step by step series on how to install this project.

1. Clone this repo
2. `yarn install`
3. `yarn dev`

### Generators
- Run generators to automate common code operations
- So far we have generators for pages and components
- `yarn run generate`
- Select what you want to generate
- Give it a name (it wont allow duplicate names, so no issues there)
- Let it work its magic
- Built with [plop](https://plopjs.com/) and [handlebars](https://handlebarsjs.com/)
### Testing

- To run the cypress test either 
  - run with GUI: `npm run cypress`
  - run in CLI: `npm run cypress-headless`
- How do we test partial/E2E?
