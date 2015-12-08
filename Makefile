.RECIPEPREFIX := $(shell echo " ")
PATH := ./node_modules/.bin:$(PATH)

env := development

default: clean build

clean:
  rm -rf ./webpack.dist
  rm -rf ./dist

webpack.dist/%.config.js: webpack/%.config.js
  mkdir -p $(dir $@)
  babel $< -o $@

webpack: $(patsubst webpack/%.config.js, webpack.dist/%.config.js, $(wildcard webpack/*.config.js))

build: webpack
  webpack --config ./webpack.dist/$(env).config.js --progress --colors

serve: webpack
  webpack-dev-server --config ./webpack.dist/$(env).config.js --progress --colors

.PHONY: clean webpack build serve
