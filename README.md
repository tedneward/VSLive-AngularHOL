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


## Lab 3: JokeComponent (and UpvoteComponent refactoring)

(If `ng serve` is not running, start it in a Terminal or Command Prompt window so it will be running throughout the exercise.)

In this lab, we will create a component to display jokes that in turn uses the UpvoteComponent to display the votes for a given Joke. This will mean that in addition to creating a new JokeComponent specifically to display a Joke, we will need to refactor the UpvoteComponent a little to allow events (mouse-clicks) from the UpvoteComponent to the JokeComponent so that the JokeComponent can be notified about it. However, after having done that, we will also modify the UpvoteComponent to accept a Vote object directly, so that the UpvoteComponent can modify the JokeComponent's Vote fields directly, and keep all state in the model (which in this case is the Joke).

As you should be starting to get a little more familiar with Angular's syntax and concepts by now, we will start gradually making these lab instructions a little more general and less step-by-step. (Where we do something new, of course, we will drill into more detail.)

* *Generate JokeComponent.* By now, this should be starting to feel second-nature: use Angular CLI to generate a JokeComponent by running `ng generate component joke`. This will create four files in the `src/app/joke` directory.

* *Modify JokeComponent to hold a Joke model.* Add a field to the JokeComponent's class of type Joke, and call it "model", since this will be the model for the JokeComponent itself. We will need a Joke instance, so for now, go ahead and construct one, either in the constructor or in the ngOnInit method.

* *Modify JokeComponent to display the Joke.* In the JokeComponent's view, erase the generated HTML and replace it with a "div" tag that will display the joke's setup in normal text, the punchline in bold text right after it, and use the UpvoteComponent's selector syntax to display two vote counts, one for "lols" and one for "groans".

* *Modfy AppComponent view to display the Joke.* Remember that the AppComponent view currently displays a vote count, so remove that from the view and put in its place the new "app-joke" tag.

Once this is done, the new Joke should be displayed. But it is a hard-coded Joke, and we already know that we don't want to run with that forever, so let's go ahead and allow the Joke to be passed in as an input parameter in the AppComponent's view. Doing that will mean we need to have a Joke instance elsewhere to use, and there's a perfect place to provide that, on the root AppComponent itself (for now).

* *Modify JokeComponent to take model as an input.* This will require only placing the @Input decorator on the `model` field in JokeComponent. The `model` field will now be initialized through the @Input mechanic, so the code used to initialize `model` to a Joke value can be either eliminated or commented out.

* *Modify AppComponent's class to include a Joke collection.* Create a field in the AppComponent called "database", of type "Joke[]" (or "Array<Joke>"), and initialize it in place to an array of Jokes. (A sample Joke appears below for easy cut & paste:

````TypeScript
  database : Joke[] = [
    new Joke("Why did the milennial chicken cross the road?",
      "Because it was his passion.",
      new Vote(1),
      new Vote(27))
  ];
````
Please feel free to substitute your own joke if you do not care for ours.)

* *Modify AppComponent's view to pass in the Joke instance.* In the AppComponent view, add a property-binding to initialize the "model" attribute on "app-joke" to the first element in the AppComponent's `database` field. (Recall that a template expression can be any non-side-effecting TypeScript expression, which includes array access.)

Now things get a little tricky. We want the UpvoteComponent to notify the JokeComponent any time the user upvotes either the LOLs or the groans, so we need to refactor UpvoteComponent to include an event that JokeComponent can hook in its view.

* *Add an EventEmitter field to the UpvoteComponent.* Add a new field, called `onIncrement`, to the UpvoteComponent's class. This field should be of type `EventEmitter<number>`, since we will want to pass the numeric vote total to anyone interested in consuming this event. This field should be decorated with @Output, and go ahead and construct a new instance as part of the field declaration.

* *Emit the event.* Modify the `clicked` method in the UpvoteComponent to call the `emit` method on `onIncrement`. This method will take a numeric parameter, thanks to the generic type parameter on EventEmitter, so pass the Vote object's current `voteCount` as the parameter.

* *Modify JokeComponent to receive these events.* Add a method (`lolsUpvoted`) to the JokeComponent class that prints to the console when a LOL is upvoted. Do this again for groans (`groansUpvoted`). Go into the JokeComponent view and use the round-bracket event-binding syntax to bind each of these methods to the correspondong `<app-upvote>` tag. (We could write each of those methods to increment the Vote objects held in the Joke, but it would be better to have the UpvoteComponents do that directly, so as to minimize the amount of code that we have to maintain over time.)

Lastly, the JokeComponent needs to be able to pass the Joke's Vote objects directly to the UpvoteComponent, so that the UpvoteComponent can be modifying the Votes directly on a user click, rather than keeping state in several places at once. This will require a couple of steps.

* *Modify Joke to allow direct access to the Vote objects.* Right now, Joke encapsulates the Vote objects; we need to get access to them. Either mark the fields as public, or (our preference) create new property accessor methods to return the Vote object directly.

* *Modify UpvoteComponent to accept a Joke object as input.* Right now, the UpvoteComponent accepts a number through the `votes` field. It would be nice to be able to accept either a number or a Vote through the same attribute, and TypeScript's "intersection types" syntax will allow exactly that. First, modify the `vote` field's type by using an intersection type syntax of `number | Vote`. (You might want to take this opportunity to rename the `vote` field to `model`, as we did, for consistency, but if you do, make sure you do the same in the UpvoteComponent's view as well.) Next, in the `ngOnInit` method, use TypeScript's `instanceof` operator to test if the `vote` field is of type `Vote`--if it isn't, then we need to construct a Vote instance and store it in `model`. (See the note below for some discussion here.) Finally, in the `clicked` method, since this is an intersection type, you will need to cast (using TypeScript's `as` operator) the `vote` field to a Vote type in order to call its `increment` method, and again to obtain the `voteCount` property as part of the EventEmitter's `emit()` method call.

> **NOTE:** Using an intersection type here is arguably a little unorthodox, and arguably too subtle--others might prefer to have two specific attribute/@Input-decorated fields, one for a number parameter and the other for a Vote parameter. We choose to do this for two reasons here: one, because it is an excellent way to display TypeScript's versatility as a language, and two, because it makes a certain amount of sense and consistency to use the same parameter for both types of input. 

* *Modify the JokeComponent to prove the Joke model is being updated.* In the JokeComponent's "lolsUpvoted" and "groansUpvoted" methods, print out (via console.log)`model`'s LOL count and groan count, respectively, to prove that the UpvoteComponent is now operating directly on the Joke's Vote fields.

At this point, the JokeComponent is using UpvoteComponent to display its votes, is wired up against the UpvoteComponent's events, allows a Joke to be passed in (rather than hard-coding the Joke within it), and holds all state in a Joke model. We're done with Lab 3.

If you're not sure you got the exercise implemented correctly, feel free to fast-forward to the next lab via `git checkout lab-4`.
