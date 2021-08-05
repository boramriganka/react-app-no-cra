# react-app-no-cra

## This is a starter react project set up using webpack and babel. 
## I have not used CRA(create-react-app) .

## Webpack and react-scripts is slightly different.
```diff

-1. Module Bundler Vs NPM package

Webpack is a module bundler whereas react-script is an npm package with dependencies a react-based project may need to quickly start a project like babel, and webpack in the list of react-script dependencies.

-2. Environment Control

Create-react-app advertises "no build configuration" and they mean it - you cannot configure this tool. If you want to add or change anything, you have to 'eject’. Running npm run eject spits out all the configuration files so you can edit them yourself.
Whereas in case of webpack you have Control of development environment. You can setup your configurations as per your needs.

-3. Server Side Rendering
Implementation of ssr in create react app is headache where as in webpage you can do ssr easily in webpage.

-4. Project Maintenance
While using Webpack you’re completely responsible for updating and maintaining webpage configurations. For create-react-app all is managed by React communit




