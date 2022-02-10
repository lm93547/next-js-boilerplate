const componentExists = require('./utils/componentExists');

module.exports = function (plop) {
  // page generator
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name please',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/pages/{{dashCase name}}/index.tsx',
        templateFile: 'templates/page/page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/styles/{{name}}.module.css',
        templateFile: 'templates/page/style.module.scss.hbs',
      },
      {
        type: 'add',
        path: '../../cypress/integration/page/{{name}}.spec.js',
        templateFile: 'templates/page/test.spec.js.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{name}}/index.tsx',
        templateFile: 'templates/components/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{name}}/{{name}}.module.scss',
        templateFile: 'templates/components/style.module.scss.hbs',
      },
    ],
  });
};
