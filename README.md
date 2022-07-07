# Lerna monorepo project for javascript test bench applications

This repository manages the content of different javascript applications and based on Lerna tool that optimizes the workflow around managing multi-package repositories with git and npm.

## Project setup (installs all root dependencies and all dependencies of all inner modules)
```
npm install
```
It will run `lerna bootstrap` as a postinstall script to init all applications and packages.


### Run all build scripts
```
lerna run build
```
It will run `build` scripts for all applications and packages. Output result in the `dist` folder for each application.

### Vue JS applications
```
npm run vue2
```

### Angular applications
```
npm run angular8
```

### browser-test-bench
```
npm run browser-test-bench
```

### udemy-clone
```
lerna run udemy
```