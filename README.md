# Accounts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Regarding Assessment

As per the requirement the withdrawl amount is taken as the balance of the api result of a particular account on button click.
I have written functionality of the withdrawl and total balance count before and after withdrawl.

As mentioned in the assessment the current account will have positive and negative amount for which code written on button disable for two scenarios and commented them in HTML(app.component.html) file.

The total balance amount gets updated with the withdrawl of the amount from any account but the values of balance in the accounts will not update as we need to write a post request for that scenario.