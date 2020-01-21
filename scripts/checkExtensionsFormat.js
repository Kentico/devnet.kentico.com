const Joi = require('@hapi/joi');
const extensions = require('../marketplace/extensions.json');

const extensionSchema = Joi.object().keys({
  name: Joi.string().max(40).required(),
  description: Joi.string().max(160).required(),
  thumbnailUrl: Joi.string().uri({ scheme: 'https' }).required(),
  author: Joi.string().max(40).required(),
  sourceUrl: Joi.string().uri({ scheme: ['https', 'http'] }).required(),
  version: Joi.string().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/).required(),
  kenticoVersions: Joi.array().items(Joi.string().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/).required()),
  category: Joi.any().valid(
    'module',
    'webpart',
    'website template',
    'utility',
    'mvc widget',
    'mvc section',
    'mvc form component',
    'mvc inline editor',
    'mvc personalization condition type',
    'integration',
    'other')
    .required(),
  tags: Joi.array().items(Joi.string())
});

const extensionValid = (extension) => {
  const result = Joi.validate(extension, extensionSchema);
  if(result.error) {
    console.error(result.error.message);
    return false;
  }
  return true;
};

const extensionsValid = () => {
  if (!Array.isArray(extensions)) {
    console.error('Extensions are not an array');
    return false;
  }
  
  // path segments are lowercased encoded extensions' names so we need them to be unique   
  if (Joi.array().unique((a, b) => a.name.toLocaleLowerCase() === b.name.toLocaleLowerCase()) {
    console.error(`Multiple extensions with same name are not supported. Conflicted extension: ${a.name.toLocaleLowerCase()}`);
    return false;    
  }

  for (const extension of extensions) {
    if(!extensionValid(extension)){
      console.log(`Tested extension ${extension.name ? extension.name : JSON.stringify(extension, 2)}.`);
      return false;
    }
  }

  console.info('Extensions format is valid.')
  return true;
};

if(extensionsValid()) {
  return 0;
} else {
  process.exit(1);
}

module.exports = {
  extensionsValid,
}
