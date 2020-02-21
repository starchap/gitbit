import {
  classify,
  dasherize,
  camelize,
  underscore
} from '@angular-devkit/core/src/utils/strings';

export const stringUtils: Record<string, (string) => string> = { classify, dasherize, camelize, underscore };

export type Schematic = {
  app: string;
  libraryType: string;
  type: string;
  name: string;
  libraryName: string;
}

type ApplicationData = { prefix: string, name: string, defaultPath: string }
export const getApplicationData: Record<string, ApplicationData> = {
  Gitbit: { prefix: 'gb', name: 'GitBit', defaultPath: '' },
  Electron: { prefix: 'ejs', name: 'Electron', defaultPath: '' }
};

export const getTemplates: (schema: Schematic) => {} = (schema: Schematic) => {
  return {
    'library': [],
    'component': [],
    'service': [],
    'module': []
  };
};

export const getCollection: Record<string, string> = {
  library: '@nrwl/angular',
  component: '@nrwl/angular',
  service: '@nrwl/angular',
  module: '@nrwl/angular'
};

type SchemeData = {name: string, unitTestRunner: string, prefix: string, project?: string, projectType?: string, style?: string}
export const getSchemeData: (schema: Schematic) => Record<string, SchemeData> = (schema: Schematic) => {
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
      project: arrPath(dasherize, '-', schema.app, schema.libraryName, schema.libraryType),
      style: 'scss'
    },
    module: {
      name: schema.name,
      unitTestRunner: schema.libraryType === 'typings' ? 'none' : 'jest',
      prefix: getApplicationData[schema.app].prefix,
      project: arrPath(dasherize, '-', schema.app, schema.libraryName, schema.libraryType),
      style: 'scss'
    },
    service: {
      name: [schema.name, schema.name].join('/'),
      unitTestRunner: schema.libraryType === 'typings' ? 'none' : 'jest',
      prefix: getApplicationData[schema.app].prefix,
      project: arrPath(dasherize, '-', schema.app, schema.libraryName, schema.libraryType)
    }
  };
};

export function arrPath(strUtil: (string) => string, split: string, ...strPath: string[]): string {
  return strPath ? strPath.filter(Boolean).map(strUtil).join(split) : '';
}
