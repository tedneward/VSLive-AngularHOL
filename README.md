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

From the command-line, before any work is done, type `ng test`; this will open a browser window and run tests continuously while we are editing code, and will inform you if there are any breaking tests and/or code that does not compile. You can quit this at any time by typing "Ctrl-C" in the command-line window.

* *Generate the Vote class.* There are several ways to do this (including simply doing a "File|New" from your favorite text editor) but the easiest will be to allow the Angular-CLI to do the work for us. To do that, from a Terminal or Command Prompt window, type `ng generate class Vote --spec true`. This will create two files: `src/app/vote.ts` and `src/app/vote.spec.ts`; the first is the actual Vote class, the second is the test suite for the Vote class.

* *Modify the Vote class.* We want the Vote class to have a private field `votes` (of type number), a single property `voteCount` that returns the number of votes in the `votes` field, and a method `increment` that will increment the vote count.

* *Modify the Vote tests.* When Angular CLI generated the Vote class, we asked it to also generate a `.spec.ts` file, which is used to test the code. Note that the existing test, which verifies that a constructor works, will not work as written, since we added a parameter to the constructor; fix this test by passing in a number for that parameter. Add two more tests to the test suite: one to verify that when a Vote is constructed with the value 10 as the constructor parameter, the `voteCount` property returns the same value, and the other to verify that when a Vote is constructed and then incremented, it returns the correct value.

* *Generate the Joke class.* Again, let Angular-CLI do the work: `ng generate class Joke --spec true`. This will be the `src/app/joke.ts` and `src/app/joke.spec.ts` files.

* *Modify the Joke tests.* This time, TDD-style, modify the Joke tests first. (This will cause the tests to fail, which is expected; we fix that in the next step.) Modify the first test (the one already generated) to have the constructor take four parameters: one for the joke setup, one for the joke punchline, one for the LOLs Vote object, and one for the Groans Vote object. Then write a test that ensures that the Vote object makes these fields accessible from properties (named `setup`, `punchline`, `lols` and `groans`). (Normally these should be separate tests, but we'll shorten it up.) Write another test that uses the `incrementLol` method on Joke to increment the Vote count on the `lols` field object and get the result via the `lols` property. Write another test that does the same for the `groans` and the `incrementGroans` method.

* *Modify the Joke class to pass the tests.* This will require adding the four parameters to the constructor, the four properties, and the two methods. When the tests pass, you are done.

At this point, the domain models are finished. If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-2`. 
