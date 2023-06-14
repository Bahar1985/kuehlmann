# Vite Vanilla Site with Menu

This is a multi-page HTML/CSS/JavaScript site created with Vite Vanilla option. It has Typescript and Sass already installed. I created a simple Router which makes it possible to add pages easily (a few changes in `Router.ts` and then add e.g. `pages/PageReports.ts` which looks similar to a React component.

![grafik](https://starters.tanguay.eu/images/starters/darkViteVanillaMenu.png)

![grafik](https://github.com/edwardtanguay/vite-vanilla-menu/assets/446574/917ec388-fa98-480a-98fb-4f1ab87997e2)

## Updates

### 2023-06-07

- router now loads a 404 page (`Page404.ts`)

### 2023-06-06

- handles spaces and special (German) characters in page names
- `nav` moved into menu component
- `<div class="page ...">` wrappers on all pages

## features

- built with **Vite** (Vanilla/TypeScript)
- **multi-page** menu, editable in `Router.ts`
- dark layout
- TypeScript
- one **Sass** file
- _good for developers who don't yet have React skills but who want to make multi-page sites with a modern React-like framework that has npm packages, can load JSON files from the file system, and you can easily publish at Vercel, etc._

## install

- download zip
- copy all files to new directory, e.g. `/home/yourname/projects/site001`
- open VSCode in that directory (`code .`)
- `npm i`
- `npm run dev`
- `git init -b dev`

## more starters, templates and frameworks

https://starters.tanguay.eu
