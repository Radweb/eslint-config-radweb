module.exports = {
	"parser": "babel-eslint",
	"extends": "eslint-config-airbnb",
	"env": {
		"browser": true,
		"jest": true,
		"node": true
	},
	"globals": {
		// for Flow...
		"Generator": true,
		"$Keys": true,
		"$Shape": true,
	},
	"plugins": [
		"react",
		"flowtype",
		"babel",
	],
	"settings": {
		"import/resolver": "webpack",
	},
	"rules": {
		// use tabs for indentation
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-indent": [2, "tab"],

		// no semicolons, ever
		"semi": [2, "never"],

		// allow PropTypes to go unused, nice in a file template
		"no-unused-vars": [2, { "vars": "local", "args": "none", "varsIgnorePattern": "PropTypes" }],

		// can result in odd errors with arrow-body-style
		// https://radweb.slack.com/archives/general/p1467706984001559
		"no-confusing-arrow": 0,

		// mostly just gets in the way
		"arrow-body-style": 0,
		"no-unused-expressions": 0,

		// sometimes normal concat is cleaner
		"prefer-template": 0,

		// sometimes it feels natural, you know
		"no-else-return": 0,

		// i'm up for just disabling this altogether tbh
		"max-len": [2, 140, 2, {
			"tabWidth": 2,
			"ignoreUrls": true,
			"ignoreComments": false
		}],

		// increases readability sometimes
		"padded-blocks": 0,
		"operator-assignment": 0,

		// what a stupid rule
		"react/no-did-update-set-state": 0,
		"react/jsx-filename-extension": 0,
		"react/require-extension": 0,

		// idk, it's useful, and can catch bugs, but need to work out a good config
		"no-mixed-operators": 0,

		// maybe....
		"react/sort-comp": 0,

		// doesn't differentiate flow type imports, replaced
		"no-duplicate-imports": 0,
		"flowtype/define-flow-type": 2,

		// lint rules specific to Flow
		"flowtype/require-valid-file-annotation": [1, "always", { "annotationStyle": "line" }],
		"flowtype/space-after-type-colon": 2,
		"flowtype/space-before-type-colon": 2,
		"flowtype/space-before-generic-bracket": 2,
		"flowtype/union-intersection-spacing": 2,
		"flowtype/generic-spacing": 2,
		"flowtype/valid-syntax": 2,
		"flowtype/boolean-style": 2,
		"flowtype/no-weak-types": [1, { "any": false }],
		"flowtype/semi": [2, "never"],
		"flowtype/no-dupe-keys": 2,
		"flowtype/delimiter-dangle": [2, "always-multiline"],
		"babel/flow-object-type": [2, "comma"],

		// ESLint & Babel AST mismatch, doesn't handle async funcs yet
		// https://github.com/babel/babel-eslint/issues/316
		// https://github.com/babel/babel-eslint/issues/350
		"generator-star-spacing": 0,
		"babel/generator-star-spacing": [2, { "before": false, "after": true }],

		// TODO: swap this with eslint-plugin-import 1.15.0
		// https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md
		// "import/no-extraneous-dependencies": [2, { "devDependencies": ["*.test.js"] }],
		"import/no-extraneous-dependencies": 0,

		"import/imports-first": [2, null],

		// no more PropTypes - Flow!
		"react/prop-types": 0,

		// good when assigning React refs
		"no-return-assign": 0,

		// Flow can handle this instead
		"no-prototype-builtins": 0,
		"consistent-return": 0
	}
}
