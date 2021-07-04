# Command variables.
GZIP=gzip
POSTCSS=NODE_ENV=production npx postcss
PRETTIER=npx prettier

# Important paths.
WEBROOT=./frontend
STYLES_DIR=$(WEBROOT)/styles

# Flags.
GZIP_FLAGS=-9 --keep --force
POSTCSS_FLAGS=-o $(STYLES_DIR)/dist/main.css
PRETTIER_FLAGS=--write "$(WEBROOT)/**/*.html" "$(STYLES_DIR)/src/**/*.css"

.PHONY: all
all: html prettier styles

.PHONY: html
html: prettier
	$(foreach file, $(wildcard $(WEBROOT)/*.html), $(GZIP) $(GZIP_FLAGS) $(file);)

.PHONY: prettier
prettier:
	$(PRETTIER) $(PRETTIER_FLAGS)

.PHONY: styles
styles: prettier
	rm -rf $(STYLES_DIR)/dist
	$(POSTCSS) $(STYLES_DIR)/src/main.css $(POSTCSS_FLAGS)
	$(GZIP) $(GZIP_FLAGS) $(STYLES_DIR)/dist/main.css
