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


## Lab 2: UpvoteComponent

(If `ng serve` is not running, start it in a Terminal or Command Prompt window so it will be running throughout the exercise.)

In this lab, we will build out a component to track the votes as people "upvote" things. (Later, we will use the UpvoteComponent to vote up jokes, but we will start simple here.) We will build the component to take a Vote object, and first simply display the votes, then, to allow people to "upvote" a vote, display a button that increments the Vote object.

First, we will create a simple UpvoteComponent that wraps a Vote object.

* *Generate the UpvoteComponent.* Use the Angular CLI tool to create the UpvoteComponent by running `ng generate component upvote`. This will create the files `upvote.component.css` (CSS styling for this component), `upvote.component.html` (the view for the component), `upvote.component.spec.ts` (the tests) and `upvote.component.ts` (the logic code) in the `src/app/upvote` directory.

* *Modify the component to use a Vote.* Add a field (of type Vote) to the UpvoteComponent class in `upvote.component.ts`. We will use this to store the vote count and display it.

* *Modify the component's view.* We will use a simple span tag to display the vote count, so open the view (in `upvote.component.html`), erase what's there, and replace it with a simple "span" tag that uses Angular string interpolation to display the Vote field's "voteCount" property.

Once this is working, let's add the ability to set the votes as a tag parameter.

* *Add a new field to the UpvoteComponent.* Add a "votes" field (of type number) to the UpvoteComponent. In time, we'll refactor this code to use a Vote object, but since we don't have one in the view, we'll work with a number for now.

* *Mark the "votes" field as importable.* This will require the use of @Input decorator.

* *Construct the Vote object.* The Vote object is the model for the UpvoteComponent, and we don't want to get away from that, so use the `ngInit` method on UpvoteComponent to construct the Vote object for the `vote` field using the data passed in through the `votes` field.

* *Rewrite the "app-upvote" tag in the AppComponent view.* Open the `app.component.html` and change the "app-upvote" tag to include a "votes" attribute, with a numeric value. Make sure to use the property-binding syntax using square-brackets.

Next, let's wire up the UpvoteComponent to recognize mouse-clicks to increment the vote count. (We could probably style the component's view to look like a button, but let's leave it be for now.)

* *Create a new method to receive mouse-clicks.* Each time the user clicks on the HTML span, we want Angular to call a method. To do this, add a new method to UpvoteComponent; call it "clicked". Within this method, increment the vote count by calling the `vote` object's `increment()` method. (For some easy debugging purposes, add a "console.log" call that prints out the new vote count total.)

* *Modify the UpvoteComponent view.* Now, in the opening "span" tag, add a "click" event handler (using the round-bracket event-binding syntax) to invoke the "clicked" method. Additionally, add the text "&#x25B2;" to the text inside the span--this Unicode character will translate to an up-arrow when rendered by the browser, and make it clear that the span is clickable.

At this point, the UpvoteComponent holds some state in a model, and can react to user events. We're done with Lab 2.

If you're not sure you got the exercise implemented correctly, feel free to fast-forward to the next lab via `git checkout lab-3`.
