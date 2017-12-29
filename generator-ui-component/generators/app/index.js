/*jshint esversion: 6, node: true */
"use strict";
const Generator = require('yeoman-generator');
const copyTemplate = require('./copy-template');
const writingConfig = require('./copy-config');
const componentTypes = require('./constants/component-type');
const humps = require('humps');

module.exports = class extends Generator
{
  constructor(args, opts)
  {
    super(args, opts);

    this.prompting1_name = this.prompting1_name.bind(this);
    this.prompting2_type = this.prompting2_type.bind(this);
    this.prompting3_prop = this.prompting3_prop.bind(this);

    this.config.set('props', []);
  }

  prompting1_name()
  {
    return this.prompt([
    {
      type    : 'input',
      name    : 'componentName',
      message : 'Component name'
    }])
    .then((answers) =>
    {
      this.config.set('componentName', answers.componentName);
      this.config.set('pascalizedComponentName', humps.pascalize(answers.componentName));
    });
  }

  prompting2_type()
  {
    return this.prompt([
      {
        type: 'list',
        name: 'componentType',
        message: 'Component type',
        choices: Object.values(componentTypes)
      }
    ]).then(answers =>
    {
      this.config.set('type', answers.componentType);
    });
  }

  prompting3_prop()
  {
    return this.prompt([
      {
        type    : 'input',
        name    : 'prop',
        message : 'Component prop'
      }
    ]).then(answers =>
    {
      const newProp = answers.prop.trim();

      if(answers.prop.trim() !== '')
      {
        const oldProps = this.config.get('props');
        this.config.set('props', [...oldProps, newProp]);

        return this.prompting3_prop();
      }
    });
  }

  writing()
  {
    for (let configKey of Object.keys(writingConfig))
    {
      this.log(`copying ${configKey}`);
      copyTemplate(this)(writingConfig[configKey]);
    }
  }
};
