/*jshint esversion: 6, node: true */
"use strict";

const containerType = require('./constants/container-type');

// module.exports = {};

module.exports.moduleId =
{
  templatePath: 'module-id.ejs',
  destinationPath: ({ containerName }) => `${containerName}/constants/module-id.js`,
  keys: ['moduleId']
};

module.exports.actionTypes =
{
  templatePath: 'action-types.ejs',
  destinationPath: ({ containerName }) => `${containerName}/action-types/index.js`,
  keys: ['actions']
};
//
// module.exports.index =
// {
//   templatePath: 'index.ejs',
//   destinationPath: ({ componentName }) => `${componentName}/index.js`,
//   keys: ['componentName']
// };
//
// module.exports.functionalComponent =
// {
//   condition: ({ type }) => type === componentType.FUNCTIONAL,
//   templatePath: 'functional-component.ejs',
//   destinationPath: ({ componentName }) => `${componentName}/src/${componentName}.jsx`,
//   keys: ['pascalizedComponentName', 'props']
// };
//
// module.exports.component =
//   {
//     condition: ({ type }) => type === componentType.PURE || type === componentType.CLASSIC,
//     process: ({ type }) => ({ isPure: type === componentType.PURE }),
//     templatePath: 'component.ejs',
//     destinationPath: ({ componentName }) => `${componentName}/src/${componentName}.jsx`,
//     keys: ['pascalizedComponentName', 'props', 'type']
//   };
//
// module.exports.test =
// {
//   templatePath: 'component-test.ejs',
//   destinationPath: ({ componentName }) => `${componentName}/src/${componentName}_test.jsx`,
//   keys: ['componentName', 'pascalizedComponentName', 'props']
// };