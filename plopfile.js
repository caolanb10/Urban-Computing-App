module.exports = function (plop) {
  // controller generator
  plop.setGenerator('Screen Generator', {
    description: 'Screen Generator',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'screen name please',
    }],
    actions: [{
      type: 'add',
      path: 'screens/{{name}}/{{name}}.js',
      templateFile: 'templates/presentationalTemplate.hbs',
    },
    {
      type: 'add',
      path: 'screens/{{name}}/{{name}}Container.js',
      templateFile: 'templates/containerTemplate.hbs',
    },
    {
      type: 'add',
      path: 'screens/{{name}}/{{name}}Styles.js',
      templateFile: 'templates/stylesTemplate.hbs',
    },
    {
      type: 'add',
      path: 'screens/{{name}}/index.js',
      templateFile: 'templates/indexTemplate.hbs',
    },
    ],
  });
  plop.setGenerator('Component Generator', {
    description: 'Component Generator',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please',
    }],
    actions: [{
      type: 'add',
      path: 'components/{{name}}/{{name}}.js',
      templateFile: 'templates/presentationalTemplate.hbs',
    },
    {
      type: 'add',
      path: 'components/{{name}}/{{name}}Container.js',
      templateFile: 'templates/containerTemplate.hbs',
    },
    {
      type: 'add',
      path: 'components/{{name}}/{{name}}Styles.js',
      templateFile: 'templates/stylesTemplate.hbs',
    },
    {
      type: 'add',
      path: 'components/{{name}}/index.js',
      templateFile: 'templates/indexTemplate.hbs',
    },
    ],
  });
};
