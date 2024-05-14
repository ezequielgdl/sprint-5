# Sprint5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.
In this project, we implemented a digital onboarding with Angular components to show different information in a reusable component. The information is served using a service.

# Features

The project uses two custom components: Home and Escena. Escena is a custom component that Inputs the data given by the Home component using a service called "steps".

The buttons trigger a function that changes the currentSlide variable to show other information.
There are also selectors created with an @for to show whatever amount of entries the phrasesList array contains. These selectors can be clicked to navigate to the desired slide.

Animations are used by importing the provideAnimations() method to the app.config file and then importing the necessary methods to the Escena component.

It uses Bootstrap for the CSS.

## Instructions

Prerequisites

Node.js and npm: Ensure you have Node.js and npm installed on your machine. You can download and install them from nodejs.org.
Angular CLI: Install the Angular CLI globally using npm if you haven't already:

`npm install -g @angular/cli`

- Cloning the Repository

1. Open Terminal/Command Prompt: Open your terminal or command prompt.

2. Navigate to Your Desired Directory: Change the directory to where you want to clone the repository. For example:

`cd path/to/your/directory`

Clone the Repository: Use the git clone command followed by the URL of the repository. Replace repository-url with the actual URL of your Angular project's repository.

`git clone repository-url`

Navigate to the Project Directory: After cloning, navigate into the project directory.

`cd name-of-cloned-repo`

Installing Dependencies
Install npm Packages: Run npm install to install all necessary dependencies specified in package.json.

`npm install`

Open the Project in a Code Editor: Open the cloned repository in your preferred code editor (e.g., VS Code, Sublime Text, etc.).

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
