# Enforces the placement of style imports after other imports (style-import-order)

If you're importing styles, you should do it last, because you effectively need to correct any previously imported styles with your specific component styles.

If your styles are getting overwritten by some other import, then your component doesn't have the necessary control over its own styles.

Plus it's just cleaner to group javascript and style imports separately.
## Rule Details

This rule aims to identify files where styles are not the last imports in the file.

Examples of **incorrect** code for this rule:

```js
import './my_component.scss'
import ChildComponent from './child_component';
```

Examples of **correct** code for this rule:

```js
import ChildComponent from './child_component';
import './my_component.scss'
```

## When Not To Use It

Don't use this rule if you don't use this convention. (Duh.)
