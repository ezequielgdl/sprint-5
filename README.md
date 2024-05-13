# Sprint5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.
In this project, we implemented a digital onboarding with Angular components to show different information in a reusable component. The information is served using a service.

# Features

The project uses two custom components: Home and Escena. Escena is a custom component that Inputs the data given by the Home component using a service called "steps".

The buttons trigger a function that changes the currentSlide variable to show other information.
There are also selectors created with an @for to show whatever amount of entries the phrasesList array contains. These selectors can be clicked to navigate to the desired slide.

Animations are used by importing the provideAnimations() method to the app.config file and then importing the necessary methods to the Escena component.

It uses Bootstrap for the CSS.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
