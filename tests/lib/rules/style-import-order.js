/**
 * @fileoverview Enforces the placement of style imports after other imports
 * @author Scott Sarsfield (scott.m.sarsfield@gmail.com)
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
let rule = require('../../../lib/rules/style-import-order'), RuleTester = require('eslint').RuleTester;
let babelEslint = require.resolve('babel-eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

let ruleTester = new RuleTester();
ruleTester.run('style-import-order', rule, {

  valid: [
    {
      code: `
      import TombRaider from 'app/games/tomb_raider';
      import './scooby.scss';
      `,
      parser: babelEslint
    }
  ],

  invalid: [
    {
      code: `
        import './scooby.scss';
        import TombRaider from 'app/games/tomb_raider';
      `,
      errors: [{
        message: 'Styles should be imported last.',
        type: 'ImportDeclaration'
      }],
      parser: babelEslint
    }
  ]
});
