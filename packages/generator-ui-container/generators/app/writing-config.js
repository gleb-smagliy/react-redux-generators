/*jshint esversion: 6, node: true */
"use strict";

const containerType = require('./constants/container-type');

module.exports.moduleId =
{
  templatePath: 'module-id.ejs',
  destinationPath: ({ containerName }) => `${containerName}/constants/module-id.js`,
  keys: ['moduleId']
};

module.exports.actionTypes =
{
  condition: ({ actionTypes }) => actionTypes.length > 0,
  templatePath: 'action-types.ejs',
  destinationPath: ({ containerName }) => `${containerName}/action-types/index.js`,
  keys: ['actionTypes']
};

module.exports.actions =
{
  condition: ({ actions }) => actions.length > 0,
  templatePath: 'actions.ejs',
  destinationPath: ({ containerName }) => `${containerName}/actions/index.js`,
  keys: ['actionTypes', 'actions']
};

module.exports.actionsTest =
{
  templatePath: 'actions_test.ejs',
  destinationPath: ({ containerName }) => `${containerName}/actions/index_test.js`,
  keys: ['actionTypes', 'actions', 'containerName']
};

module.exports.reducers =
{
  templatePath: 'reducer.ejs',
  destinationPath: ({ containerName, reducer }) => `${containerName}/reducer/${reducer}.js`,
  map: { from: 'reducers', to: 'reducer' },
  keys: ['containerName']
};

module.exports.reducersTests =
{
  templatePath: 'reducer_test.ejs',
  destinationPath: ({ containerName, reducer }) => `${containerName}/reducer/${reducer}_test.js`,
  map: { from: 'reducers', to: 'reducer' },
  keys: ['containerName']
};

module.exports.reducersIndex =
{
  condition: ({ reducers }) => reducers.length > 0,
  templatePath: 'reducers_index.ejs',
  destinationPath: ({ containerName }) => `${containerName}/reducer/index.js`,
  keys: ['containerName', 'reducers', 'camelizedReducers']
};

module.exports.selector =
{
  templatePath: 'selector.ejs',
  destinationPath: ({ containerName, selector }) => `${containerName}/selectors/${selector}.js`,
  map: { from: 'selectors', to: 'selector' },
  keys: ['containerName']
};

module.exports.selectorsTests =
{
  templatePath: 'selector_test.ejs',
  destinationPath: ({ containerName, selector }) => `${containerName}/selectors/${selector}_test.js`,
  map: { from: 'selectors', to: 'selector' },
  keys: ['containerName']
};

module.exports.selectorsIndex =
{
  condition: ({ selectors }) => selector.length > 0,
  templatePath: 'selectors_index.ejs',
  destinationPath: ({ containerName}) => `${containerName}/selectors/index.js`,
  keys: ['containerName', 'selectors', 'camelizedSelectors']
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