const containerType = require('./constants/container-type');

module.exports.containerName =
{
  type    : 'input',
  name    : 'containerName',
  message : 'Container name'
};

module.exports.moduleId =
{
  type    : 'input',
  name    : 'moduleId',
  message : 'Module id'
};

module.exports.actions =
{
  type    : 'input',
  name    : 'actions',
  message : 'Action (camelized)',
  isArray : true
};

module.exports.reducers =
{
  type    : 'input',
  name    : 'reducers',
  message : 'Reducer (de-camelized)',
  isArray : true
};

module.exports.selectors =
{
  type    : 'input',
  name    : 'selectors',
  message : 'Selector (de-camelized)',
  isArray: true
};

module.exports.containerType =
{
  type    : 'list',
  name    : 'containerType',
  message : 'Container type',
  choices : Object.values(containerType)
};