/*jshint esversion: 6, node: true */
"use strict";
const Generator = require('yeoman-generator');
const { copyTemplate, prompting } = require('yeoman-utils');
const humps = require('humps');
const promptingConfig = require('./prompting-config');
const writingConfig = require('./writing-config');

module.exports = class extends Generator
{
  constructor(args, opts)
  {
    super(args, opts);

    this.promptFactory = prompting(this);
  }

  prompting1_name() { return this.promptFactory(promptingConfig.containerName); }
  prompting2_moduleId() { return this.promptFactory(promptingConfig.moduleId); }
  prompting3_actions() { return this.promptFactory(promptingConfig.actions); }
  prompting4_reducers() { return this.promptFactory(promptingConfig.reducers); }
  prompting5_selectors() { return this.promptFactory(promptingConfig.selectors); }
  prompting6_containerType() { return this.promptFactory(promptingConfig.containerType); }

  configuring7()
  {
    const moduleIdKey = promptingConfig.moduleId.name;

    this.config.set(moduleIdKey, this.config.get(moduleIdKey).toUpperCase());
  }

  writing()
  {
    this.log(JSON.stringify(this.config.getAll(), null, 2));

    // this.log(`containerName: ${JSON.stringify(this.config.get(promptingConfig.containerName.name))}`);
    // this.log(`moduleId: ${JSON.stringify(this.config.get(promptingConfig.moduleId.name))}`);
    // this.log(`actions: ${JSON.stringify(this.config.get(promptingConfig.actions.name))}`);
    // this.log(`reducers: ${JSON.stringify(this.config.get(promptingConfig.reducers.name))}`);
    // this.log(`selectors: ${JSON.stringify(this.config.get(promptingConfig.selectors.name))}`);
    // this.log(`containerType: ${JSON.stringify(this.config.get(promptingConfig.containerType.name))}`);

    for (let configKey of Object.keys(writingConfig))
    {
      this.log(`copying ${configKey}`);
      copyTemplate(this)(writingConfig[configKey]);
    }
  }

  end()
  {
    this.log('Removing yo-rc.json...');
    this.fs.delete('.yo-rc.json');
  }
};
