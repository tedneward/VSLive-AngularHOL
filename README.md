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


## Final results

You did it! Congratulations. (Or maybe you didn't do it, and you just skipped ahead to the solution. If that's you, don't tell anybody, and it'll be our little secret.)

If you're curious how to extend this lab further, several thoughts come to mind:

* *Add Bootstrap.* Let's be honest, you didn't come to this workshop to see a beautiful paragon of user interface design; if you did, you were probably deeply disappointed. Throw some Bootstrap in there and make it look all pretty. (This will involve adding the Bootstrap CSS to the index.html, and making use of it in the HTML templates; if you customize Bootstrap in some way, you can do that in the Bootstrap CSS files, or by leveraging the component's CSS files.)

* *Use a middle-tier service.* Write some Express code that will be the HTTP API used to hold the data. (This is better than trying to access an HTTP database directly for a variety of reasons, although for some scenarios tha's a reasonable approach as well, particularly with a database like CouchDB.) Modify the JokeService to use Angular's HTTP facilities to access your Express middle-tier.

* *Rewrite parts of the application to make use of Reactive objects and Observables.* This is one of the trickier parts of Angular to grok, but well worth the investment in time.

