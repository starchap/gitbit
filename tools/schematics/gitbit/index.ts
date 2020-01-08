import {
  apply,
  branchAndMerge,
  chain,
  externalSchematic,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  template,
  url
} from '@angular-devkit/schematics';
import { arrPath, getApplicationData, getSchemeData, getTemplates, Schematic, stringUtils } from './scheme';

export default function(schema: Schematic): Rule {
  return chain([
    externalSchematic(getApplicationData[schema.app].collection, schema.type, getSchemeData(schema)[schema.type]),
    branchAndMerge(chain([...appendTemplates(schema)]), MergeStrategy.Overwrite)
  ]);
}
function appendTemplates(schema: Schematic): Rule[]{
  return getTemplates(schema)[schema.type].map(temp => {
    return mergeWith(apply(url(temp.TemplateFolder), [
      template({
        ...stringUtils,
        ...schema
      }),
      move(arrPath(stringUtils.dasherize,'/',
        'libs',
        schema.app,
        schema.libraryName?schema.libraryName:schema.name, schema.type,
        temp.DestinationSubPath
      ))
    ]), MergeStrategy.Overwrite)
  })
}
