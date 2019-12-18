/**
 * @fileoverview Enforces the placement of style imports after other imports
 * @author Scott Sarsfield (scott.m.sarsfield@gmail.com)
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

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

    return {
      ImportDeclaration: (node) => {
        if (node.source.value.match(/.scss$/)) {
          styleImportDeclarations.push(node);
          return;
        }
        if (styleImportDeclarations.length > 0) {
          filesAreImportedAfterStyles = true;
        }
      },
      'Program:exit': () => {
        if (filesAreImportedAfterStyles) {
          styleImportDeclarations.forEach((declaration) => {
            context.report({
              node: declaration,
              message: 'Styles should be imported last.'
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
