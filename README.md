# quick-settings

This is the linting config I like.
This provides me a way to install it quick.


Also, the list of packages for atom that I use at the moment (probably too big and with redundancies, I'm gonna remake it from scratch I think):
```bash
apm install aligner-javascript aligner-php atom-autocomplete-php atom-beautify atom-material-syntax atom-material-ui atom-yarn autocomplete-cmake autocomplete-javascript autocomplete-json autocomplete-modules autocomplete-paths autocomplete-php autocomplete-sql build build-cmake busy-signal change-case docblockr docker dockerletion editorconfig file-type-icons highlight-selected hyperclick-php ide-php intentions language-cmake language-docker language-javascript-jsx language-javascript-semantic language-rust linter linter-docker linter-eslint linter-gcc linter-golinter linter-jsonlint linter-php linter-rust linter-ui-default lucid-tabs minimap minimap-bookmarks minimap-find-and-replace minimap-git-diff minimap-highlight-selected minimap-linter pdf-view php-ide-serenata php-integrator-annotations php-integrator-autocomplete-plus php-integrator-refactoring php-twig pinned-tabs refactor rustsym select-text-between-tags
```

## More reasonably, the must-haves for any language

```bash
apm install minimap minimap-highlight-selected highlight-selected editorconfig docblockr language-markdown select-text-between-tags atom-beautify aligner
```

## For those who do JS

```
apm install linter linter-eslint autocomplete-modules
```
And go [over there](https://www.npmjs.com/package/eslint-config-airbnb) to see how you get
the deps for `eslint-config-airbnb` these days. And use `eslint-config-airbnb`. Smart people over there made good rules.

## For those who do PHP

```
apm install php-ide-serenata linter-phpmd aligner-php linter-phpcs phpcs-fixer linter-php
```
About phpmd: it will make you feel stupid but it is often right. You can disable
a rule by writing an annotation like `@SuppressWarnings(PHPMD.StaticAccess)` in the class (and probably also function docblock)

Yes that's a lot of linters, but they each miss something different.


When installing linter you will be asked to choose between that provided by php-ide and linter. Chose PHP IDE, i.e. not linter.
phpmd will be hard on you, don't cry. It provides [good advice](https://phpmd.org/rules/index.html).
