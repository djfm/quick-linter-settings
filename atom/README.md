# Contribute

There is a [trello](https://trello.com/b/AQSyzk9v/plugin-ideas-for-atom) here to go more in depth and find / deveop the ideal config.


# quick-settings

This is the config I like for atom, but I'm always trying to to improve it (maybe I should be coding instad).

Also, the list of packages for atom that I use at the moment (probably too big and with redundancies, I'm gonna remake it from scratch I think):
```bash
aligner aligner-javascript aligner-php atom-autocomplete-php atom-beautify atom-bracket-highlight atom-brackets-glow atom-clock atom-debug-ui atom-devquote atom-ide-debugger-node atom-ide-ui atom-material-syntax atom-material-ui atom-math autoclose-html autocomplete autocomplete-javascript autocomplete-modules block-select bracket-colorizer busy-signal close-tags code-time column-select docblockr double-brackets-with-spaces editorconfig eslint-fixer eslint-format fancy-bracket-matcher file-type-icons format-javascript-comment hey hey-pane highlight-selected ide-php intentions javascript-refactor language-javascript-plus language-markdown linter linter-coffeelint linter-eslint linter-less linter-php linter-phpcs linter-phpmd linter-ui-default minimap minimap-highlight-selected nuclide-format-js output-panel php-composer-completion php-cs-fixer php-getters-setters php-namespace-monkey project-manager Quick-JavaScript rainbow-selection rainbow-tabs scroll-through-time select-text-between-tags smart-tags sort-lines Sublime-Style-Column-Selection swackets toggle-quotes 
```

## More reasonably, the must-haves for any language

```bash
apm install minimap minimap-highlight-selected highlight-selected editorconfig docblockr language-markdown select-text-between-tags atom-beautify aligner php-debug
```

## For those who do JS

```
apm install linter linter-eslint autocomplete-modules
```
And go [over there](https://www.npmjs.com/package/eslint-config-airbnb) to see how you get
the deps for `eslint-config-airbnb` these days. And use `eslint-config-airbnb`. Smart people over there made good rules.
I used to use PHP-IDE-Serenata but I don't find it as good as `ide-php`

## For those who do PHP

```
aligner-php atom-autocomplete-php ide-php linter-php linter-phpcs linter-phpmd php-composer-completion php-cs-fixer php-getters-setters php-namespace-monkey 
```
About phpmd: it will make you feel stupid but it is often right. You can disable
a rule by writing an annotation like `@SuppressWarnings(PHPMD.StaticAccess)` in the class (and probably also function docblock)

Yes that's a lot of linters, but they each miss something different.


When installing linter you will be asked to choose between that provided by php-ide and linter. Chose PHP IDE, i.e. not linter.
phpmd will be hard on you, don't cry. It provides [good advice](https://phpmd.org/rules/index.html).
