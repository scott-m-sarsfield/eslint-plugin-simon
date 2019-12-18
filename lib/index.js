/**
 * @fileoverview A loose collection of custom eslint rules borne out of convention (basically &#34;Simon says &#39;Fix your code.&#39;&#34;)
 * @author Scott Sarsfield (scott.m.sarsfield@gmail.com)
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



