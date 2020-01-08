import {
  classify,
  dasherize,
  camelize,
  underscore
} from '@angular-devkit/core/src/utils/strings';

export const stringUtils = { classify, dasherize, camelize, underscore };

export type Schematic = {
  app: string;
  libraryType: string;
  type: string;
  name: string;
  libraryName: string;
  route: string;
}

export const getApplicationData = {
  GitBit: { prefix: 'gb', name: 'GitBit', defaultPath: '', collection: '@nrwl/angular' },
  Electron: { prefix: 'ejs', name: 'Electron', defaultPath: '', collection: '@nrwl/angular' }
};

export const getTemplates: (schema: Schematic) => {} = (schema: Schematic) => {
  return {
    'library': [
      { DestinationSubPath: arrPath(dasherize,'/'), TemplateFolder: arrPath(dasherize,'/','.','files') }
    ],
    'component': [
      { DestinationSubPath: arrPath(dasherize,'/'), TemplateFolder: arrPath(dasherize,'/') }
    ]
  };
};

export const getSchemeData: (schema: Schematic) => {} = (schema: Schematic) => {
  return {
    'library': {
      name: [schema.app, schema.name, schema.type].filter(Boolean).join('/'),
      unitTestRunner: schema.type === 'typings' ? 'none' : 'karma',
      prefix: getApplicationData[schema.app].prefix,
      projectType: schema.type
    }
  };
};

export function arrPath(strUtil:(string) => string, split: string, ...strPath: string[]):string {
  return strPath? strPath.filter(Boolean).map(strUtil).join('/'): '';
}
