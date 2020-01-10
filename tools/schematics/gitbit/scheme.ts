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
  Gitbit: { prefix: 'gb', name: 'GitBit', defaultPath: '', collection: '@nrwl/angular' },
  Electron: { prefix: 'ejs', name: 'Electron', defaultPath: '', collection: '@nrwl/angular' }
};

export const getTemplates: (schema: Schematic) => {} = (schema: Schematic) => {
  return {
    'library': [
    ],
    'component': [
    ],
    'service': [
    ]
  };
};

export const getSchemeData: (schema: Schematic) => {} = (schema: Schematic) => {
  return {
    library: {
      name: [schema.app, schema.name, schema.libraryType].filter(Boolean).join('/'),
      unitTestRunner: schema.libraryType === 'typings' ? 'none' : 'jest',
      prefix: getApplicationData[schema.app].prefix,
      projectType: schema.type,
      style: 'scss'
    },
    component: {
      name: schema.name,
      unitTestRunner: schema.libraryType === 'typings' ? 'none' : 'jest',
      prefix: getApplicationData[schema.app].prefix,
      project: arrPath(dasherize,'-',schema.app, schema.libraryName, schema.libraryType),
      style: 'scss'
    },
    service: {
      name: [schema.name,schema.name].join('/'),
      unitTestRunner: schema.libraryType === 'typings' ? 'none' : 'jest',
      prefix: getApplicationData[schema.app].prefix,
      project: arrPath(dasherize,'-',schema.app, schema.libraryName, schema.libraryType)
    }
  };
};

export function arrPath(strUtil:(string) => string, split: string, ...strPath: string[]):string {
  return strPath? strPath.filter(Boolean).map(strUtil).join(split): '';
}
