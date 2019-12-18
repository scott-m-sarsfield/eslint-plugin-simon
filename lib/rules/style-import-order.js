/**
 * @fileoverview Enforces the placement of style imports after other imports
 * @author Scott Sarsfield (scott.m.sarsfield@gmail.com)
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const path = require('path');

module.exports = {
  meta: {
    docs: {
      description: 'Enforces the placement of style imports after other imports',
      category: 'Fill me in',
      recommended: false
    },
    fixable: false, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    let styleImportDeclarations = [];
    let filesAreImportedAfterStyles = false;
    let lastNonStyleImportDeclaration = null;

    return {
      ImportDeclaration: (node) => {
        if (node.source.value.match(/.scss$/)) {
          styleImportDeclarations.push(node);
          return;
        }
        lastNonStyleImportDeclaration = node;
        if (styleImportDeclarations.length > 0) {
          filesAreImportedAfterStyles = true;
        }
      },
      'Program:exit': () => {
        if (filesAreImportedAfterStyles) {
          styleImportDeclarations.forEach((declaration) => {
            context.report({
              node: declaration,
              message: '\'{{styleImportFile}}\' should be imported after \'{{lastNonStyleImport}}\'.',
              data: {
                styleImportFile: path.parse(declaration.source.value).base,
                lastNonStyleImport: context.getSourceCode().getText(lastNonStyleImportDeclaration.specifiers[0])
              }
            });
          });
        }

        // fix: (fixer) => {
        //   const importDeclarator = type === 'named' ? `{${global}}` : global;
        //   return fixer.insertTextAfter(
        //     lastImportDeclaration,
        //     `\nimport ${importDeclarator} from '${constructSource(source, sourceType)}'`
        //   );
        // }
      }
    };
  }
};
