/*jshint esversion: 6, node: true */
"use strict";

const os = require('os');

const DEFAULT_PARAMS =
{
  lineSeparator: os.EOL
};

const DEFAULT_COPY_CONFIG =
{
  condition: () => true,
  process: () => ({})
};

const configReducer = generatorConfig => (config, key) =>
{
  config[key] = generatorConfig[key];

  return config;
};

const populatePath = generatorConfig => path => typeof path === 'function' ? path(generatorConfig) : path;

const smartCopy = generator => copyConfig =>
{
  const { keys, templatePath, destinationPath, condition, process } = Object.assign({}, DEFAULT_COPY_CONFIG, copyConfig);
  const generatorConfig = generator.config.getAll();

  if(!condition(generatorConfig)) { return; }

  const params = keys.reduce(configReducer(generatorConfig), {});
  const processedParams = process(generatorConfig);
  const populate = populatePath(generatorConfig);


  generator.fs.copyTpl
  (
    generator.templatePath(populate(templatePath)),
    generator.destinationPath(populate(destinationPath)),
    Object.assign({}, DEFAULT_PARAMS, params, processedParams)
  );
};


module.exports = smartCopy;