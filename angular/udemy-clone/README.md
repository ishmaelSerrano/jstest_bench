# UdemyClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

This is a vulnerable web app with more functionality than a simple page that displays vulnerabilities. It will be built to be similar to OWASP Juice Shop. While there is a simple backend server the main goal of this app is to focus on client side vulnerabilities. Since Angular covers most of these some of them will have to deliberately go around built in Angular protections.

The following vulnerabilities will be displayed upon completion:
* DOM XSS
  * Comments section
* Open Redirection
* Javascript Injection
  * Comments section
* Cookie Manipulation
  * Anything related to recently viewed courses or course reviews?
* Document Domain Manipulation
* Websocket-URL Poisoning
  * Anything where a backend service in being requested
* Link Manipulation
* Web Message Manipulation
  * Anything where a backend service in being requested
* Ajax request-header Manipulation
  * Viewing users wishlist courses
* Local file-path manipulation
* HTML5 Storage Manipulation
  * Anything related to recently viewed courses or course reviews?
* Client side XPath Injection
  * Modify an API to return XML for a certain route
* Client side JSON Injection

## Docker

This project uses docker compose to run a front end angular app on the local machine at port 4200 as well as a small backend service at port 3001 which is referenced from the app itself.

Run `npm run docker` to run the app in daemon/detached mode

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

