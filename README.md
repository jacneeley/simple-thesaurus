## Deploy Instructions for Vite + React + TSX on gh-pages

 - Add "deploy": "gh-pages -d dist" to package.JSON
 - create deploy.sh in the root // touch deploy.sh
 - copy and paste script into deploy.sh from [vite documentation][def]
 - push code up to github
 - npm install gh-pages --save -dev to install necessary scripts for deployment
 - push up changes to package and package-lock.JSON
 - run npm run build to create the dist folder
 - finally run npm run deploy to publish

[def]: https://vitejs.dev/guide/static-deploy.html
