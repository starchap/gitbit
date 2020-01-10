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
  url,
  Tree,
  SchematicContext
} from '@angular-devkit/schematics';
import { arrPath, getApplicationData, getSchemeData, getTemplates, Schematic, stringUtils } from './scheme';

export default function(schema: Schematic): Rule {
  return chain([
    externalSchematic(getApplicationData[schema.app].collection, schema.type, getSchemeData(schema)[schema.type]),
    branchAndMerge(chain([...appendTemplates(schema)].concat(printCommand(schema))), MergeStrategy.Overwrite)
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
export function printCommand(schema: Schematic): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log(`Exec Command:`);
    console.log(`yarn new ${schema.app} ${schema.libraryType} ${schema.type} ${schema.name} ${schema.libraryName?schema.libraryName: '-'} ${schema.route?schema.route:'-'}`);
    return tree;
  };
}
