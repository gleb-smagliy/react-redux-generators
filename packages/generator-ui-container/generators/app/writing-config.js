/*jshint esversion: 6, node: true */
"use strict";

const containerTypes = require('./constants/container-type');

const typeToFlags = ({ containerType }) => ({
  hasMapDispatch: [containerTypes.BOTH, containerTypes.DISPATCH_ONLY].indexOf(containerType) !== -1,
  hasMapState: [containerTypes.BOTH, containerTypes.STATE_ONLY].indexOf(containerType) !== -1
});

module.exports.moduleId =
{
  condition: ({ moduleId }) => moduleId.trim() !== '',
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
  condition: ({ actions }) => actions.length > 0,
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
  condition: ({ selectors }) => selectors.length > 0,
  templatePath: 'selectors_index.ejs',
  destinationPath: ({ containerName}) => `${containerName}/selectors/index.js`,
  keys: ['containerName', 'selectors', 'camelizedSelectors']
};

module.exports.index =
{
  process: typeToFlags,
  templatePath: 'index.ejs',
  destinationPath: ({ containerName}) => `${containerName}/index.js`,
  keys: ['containerName', 'moduleId', 'actions', 'actionTypes', 'selectors']
};

module.exports.indexTest =
  {
    condition: ({ containerType }) => containerType !== containerTypes.EXPORTS_ONLY,
    process: typeToFlags,
    templatePath: 'index_test.ejs',
    destinationPath: ({ containerName}) => `${containerName}/index_test.js`,
    keys: ['containerName']
  };