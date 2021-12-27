# Important paths.
FRONTEND_SRC=./src/frontend
FRONTEND_DIST=./dist/frontend

.PHONY: all
all: dist html images misc prettier styles scripts

.PHONY: clean
clean:
	rm -rf ./dist

.PHONY: dist
dist:
	mkdir -p $(FRONTEND_DIST)
	mkdir -p $(FRONTEND_DIST)/assets
	mkdir -p $(FRONTEND_DIST)/assets/images
	mkdir -p $(FRONTEND_DIST)/assets/styles
	mkdir -p $(FRONTEND_DIST)/assets/scripts
	mkdir -p $(FRONTEND_DIST)/blog

.PHONY: html
html: dist prettier
	cp $(FRONTEND_SRC)/*.html $(FRONTEND_DIST)
	cp $(FRONTEND_SRC)/blog/*.html $(FRONTEND_DIST)/blog

.PHONY: images
images: dist
	# Trailing "/." means to copy over CONTENTS of folder, not folder itself.
	cp -r $(FRONTEND_SRC)/assets/images/. $(FRONTEND_DIST)/assets/images

.PHONY: misc
misc:
	cp $(FRONTEND_SRC)/robots.txt $(FRONTEND_SRC)/sitemap.xml $(FRONTEND_DIST)

.PHONY: prettier
prettier:
	npx prettier --write "$(FRONTEND_SRC)/**/*.html" "$(FRONTEND_SRC)/assets/styles/**/*.css" \
	"$(FRONTEND_SRC)/assets/scripts/**/*.vue" "*.config.js"

.PHONY: styles
styles: dist prettier
	NODE_ENV=production npx postcss $(FRONTEND_SRC)/assets/styles/main.css -o $(FRONTEND_DIST)/assets/styles/main.css

.PHONY: scripts
scripts: dist prettier
	npx webpack --config ./webpack.config.js
