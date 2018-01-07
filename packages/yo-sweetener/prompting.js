/*jshint esversion: 6, node: true */
"use strict";

const recursivePrompting = (generator, nativeConfig, configKey) =>
{
  return generator.prompt([nativeConfig])
    .then(answers =>
    {
      const answer = answers[nativeConfig.name];

      if(answer.trim() !== '')
      {
        const oldAnswers = generator.config.get(configKey);
        generator.config.set(configKey, [...oldAnswers, answer]);

        return recursivePrompting(generator, nativeConfig, configKey);
      }
    });
};

const singlePrompting = (generator, nativeConfig, configKey) =>
{
  return generator.prompt([nativeConfig])
    .then(answers =>
    {
      generator.config.set(configKey, answers[nativeConfig.name]);
    });
};

const prompting = generator => (nativeConfig, promptingConfig = nativeConfig) =>
{
  const configKey = promptingConfig.configKey || nativeConfig.name;
  const { isArray } = promptingConfig;

  if(promptingConfig.isArray === true)
  {
    generator.config.set(configKey, []);
    return recursivePrompting(generator, nativeConfig, configKey);
  }

  return singlePrompting(generator, nativeConfig, configKey);
};

module.exports = prompting;