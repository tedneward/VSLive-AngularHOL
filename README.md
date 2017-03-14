# VSLive-AngularHOL

Visual Studio Live! Hands-on Labs for Angular. Note that this repo is designed to be used in conjunction with the VisualStudio Live! workshop, and the authors cannot answer any questions about the material outside of that environment.

This README file contains the default Angular CLI-generated content, plus the lab instructions for each step. Each lab step is tagged with a branch, so to start on the first lab, simply "git checkout lab-1", examine the README file for the instructions, and begin. All instructions will be at the end of the README, so that developers can see what has gone before, and have this file as a reference point for reference purposes.

## Reference links

[TypeScript](https://github.com/Microsoft/TypeScript)
[TypeScript Official Language Spec](https://github.com/Microsoft/TypeScript/tree/2.1/doc)
[Angular Website TypeScript-flavored docs](https://angular.io/docs/ts/latest/)
[Angular Cheat-Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)

## Angular CLI details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Lab 1: Domain Models

In this lab, we will build out two domain models for the rest of the workshop.

One will be the "Joke" class, which will hold the data around a particular joke.

The other will be the "Vote" class, which will be a domain object specifically for holding votes. This could be the votes for Jokes (which we will separate into "laugh-out-loud"s, also known as LOLs, and "groans"), but the intent will be that Votes could be used for other things (such as comments on a blog, or in a community portal). Please, however, do not use Vote for any sort of governmental election process.

* *Generate the Vote class.* There are several ways to do this (including simply doing a "File|New" from your favorite text editor) but the easiest will be to allow the Angular-CLI to do the work for us. To do that, from a Terminal or Command Prompt window, type `ng generate class Vote --spec true`.

* *Modify the Vote class.* We want the Vote class to have a private field `votes` (of type number), a single property `voteCount` that returns the number of votes in the `votes` field, and a method `increment` that will increment the vote count.

* *Modify the Vote tests.* When Angular CLI generated the Vote class, we asked it to also generate a `.spec.ts` file, which is used to test the code. 