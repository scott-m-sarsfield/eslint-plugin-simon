# eslint-plugin-simon

A loose collection of custom eslint rules borne out of convention (basically &#34;Simon says &#39;Fix your code.&#39;&#34;)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-simon`:

```
$ npm install eslint-plugin-simon --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-simon` globally.

## Usage

Add `simon` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "simon"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "simon/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





