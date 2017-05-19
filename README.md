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


## Lab 6: Services

(If `ng serve` is not running, start it in a Terminal or Command Prompt window so it will be running throughout the exercise.)

In this lab, we will coalesce all of the "database" activities into a single entity called the JokeService, which will be the single point of entry for all things joke-database-related. It will be the one place where the Jokes are initialized, it will be the one means by which we look up Jokes, and so on.

First, we need to generate the service from the CLI. We want to call the service JokeService, and we want to let the CLI handle creating a provider for us as well. Thus, run the CLI with these parameters: `ng generate service Joke --module=app.module`. This will create a joke.service.ts file, a corresponding testing joke.service.spec.ts file, and modify the app.module.ts file to reference and provide the service.

Next, refactor the database of Jokes to live in the JokeService; this will mean moving the array over to JokeService (don't forget the appropriate imports) from its current location in AppComponent.

Now, some errors will result because the AppModule is referencing the AppComponent.database field directly when we pass it as part of the route information. Delete the `data` references in both routes in the `appRoutes` of AppModule. Note that doing so will now create runtime errors (rather than transpile-time errors), so go ahead and remove the lines that obtain the array from the JokeComponent and JokelistComponent as well. (Note that in the case of JokelistComponent, this means we really don't need the ActivatedRoute object anymore, either.)

The JokeService needs two methods before we can use it, so let's add those now.

* *Add `getJokes` to retrieve the entire list of Jokes.* This should just return the complete list.

* *Add `getJoke`, taking a number parameter of the Joke's id to return.* Move the forEach() loop from the JokeComponent's ngOnInit method to here, since it belongs here far more than it does on JokeComponent.

Now we do the final refactoring to use the JokeService in both the JokelistComponent and the JokeComponent.

* *Add JokeService as a constructor parameter to both JokeComponent and JokelistComponent.* Again, use the private parameter notation to just tuck it away into a field.

* *JokeComponent now needs to use the `getJoke` method on the JokeService to find the Joke to assign to the `model` field.* Should be as simple as making the single method call with the jokeId retrieved from the route.

* *JokelistComponent now needs to use the `getJokes` method to retrieve the full joke database to assign to the `jokes` field.* Again, should be as simple as one method call.

At this point, we are done with the Hands-On Lab for Angular. You have successfully built an Angular application that makes use of most of the features of the Angular toolkit. Congratulations!

If you're not sure you got the exercise implemented correctly, feel free to fast-forward to the next lab via `git checkout final`.


