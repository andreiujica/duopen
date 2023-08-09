module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-block-no-duplicate-properties': null,
    "media-query-no-invalid": [true, { ignore: ["inside-@media"] }],
  "selector-anb-no-unmatchable": [true, { ignore: ["inside-@media"] }]
  },
  ignoreFiles: ['components/CodeEditor.vue', 'node_modules/**/*'],
}
