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


## Lab 4: JokeListComponent

(If `ng serve` is not running, start it in a Terminal or Command Prompt window so it will be running throughout the exercise.)

In this lab, we want to start "building up" to a more useful interface beyond the scope of a single Joke. If NgJoke is going to be a database of Jokes, we need to have a way of seeing an overview of all Jokes, then allowing users to "drill-down" into a single Joke in order to display it more fully. This is a classic "master-detail" user interface paradigm, and we will take it in two steps: first, we will build the "master" part of the user interface, and then, we will wire the "master" and "detail" parts together using Angular Routing.

But first, we need a little bit more of a Joke database...

* *Modify AppComponent to include more jokes in `database`.* Right now, the AppComponent has an array of Jokes that contains only one Joke. Let's flesh that out to include a few more, bad as they are, so that we have at least three to work with. Feel free to put your own in here, or use our prepared list of (really bad) ones as a starting point:

````TypeScript
    new Joke("Why did the political chicken cross the road?",
      "He didn't! ALTERNATIVE FACTS!",
      new Vote(0),
      new Vote(0))

    new Joke("Why did the technical support chicken cross the road?",
      "Because he heard that it worked on the computer over there.",
      new Vote(0),
      new Vote(2))

    new Joke("Why did the speaker chicken cross the road?",
      "I'm sorry, we don't really have time to take that question now, but if you'd like I can send you a consulting rate card...",
      new Vote(1),
      new Vote(27))
````

Now we can get to the Joke master list.

* *Generate JokeListComponent.* For easy reference: `ng generate component jokelist`.

* *Modify the JokeListComponent class.* The JokeList is going to need the full list of Jokes at its disposal in order to list them. For now, create a field (of type Joke array) called `jokes` that is marked as @Input so we can pass it in from the AppComponent. (In a future lab, we will actually fetch these from a remote service, but for now, obtaining them via the usual @Input mechanism will serve the same purpose.)

* *Modify the JokeListComponent view.* Use the `*ngFor` directive to iterate through each of the Jokes in the `jokes` field, and on each iteration, use the current Joke instance to display the Joke's `setup` string. (Remember to check the Angular Cheat Sheet if you aren't positive of the ngFor syntax. The asterisk ('*') is absolutely necessary, and not a typo, and the 'F' must be upper-case.)

While we are at it, let's add a simple "search" facility that will allow users to search for jokes that match certain keywords. Doing so is easy given Angular's "pipes" facility, so let's create a pipe that will filter the list of Jokes to find one that contains the keyword specified in a text box in either the Joke's setup or punchline.

* *Modify the JokeListComponent view.* Add an input text field (with a "Search" label) so that the user can enter input. We will need to do several things to this input field in order to let it participate in a pipe. First, we need to introduce a local variable (call it `filter`) on the input text field to hold the data typed into the search field. Next, we will need to get Angular to react to keystrokes, and the easiest way to do that is to establish an event binding that does nothing--create a "keyup" event binding that simply binds to "0" (which is effectively a no-op). Finally, in the "ngFor" expression, pipe the list of jokes through a "jokeFilter", which will receive a single parameter, the `filter` variable's `value` property.

* *Generate the JokeFilterPipe.* `ng generate pipe JokeFilter`, which will create two files in the `src/app` directory: `joke-filter.pipe.ts`, and `joke-filter.pipe.spec.ts`. (Yes, pipes can be unit-tested as well.)

* *Modify the JokeFilterPipe class.* The pipe scaffolding allows nothing through (the transform method returns null), which means that the master list will be empty. We want the `transform` method to return only those Jokes (passed in `values`) that contain the search string (passed in `args`) in either the `setup` or `punchline` fields. To do that, import Joke, change the `args` parameter type from `any` to `Joke[]` (or `Array<Joke>`), and use the built-in `filter` method to take a function that returns the Joke if either of those fields contains the search string. (Hint: JavaScript/TypeScript strings have an `includes` method.)

Last minor nit: too often, in master-detail systems like this, when there's no results, the search area simply remains empty, rather than display something that will tell the user that no results were returning, leaving the user to wonder whether the website broke somehow. Let's use the Angular ngIf to display a message in the event that there's no Jokes to display.

* *Modify the JokeListComponent view.* Right after the search field, but before the list of results, add a new "div" tag pair. Inside the "div"s, put a message expressing sorrow that there are no results ("Sorry, no jokes match your request."). In the opening "div" tag, put an "ngIf" that uses a template expression to test the "jokes" collection's length to be zero. (Remember, "ngIf" only displays its element if the expression is true.) But wait! We actually want to test the results of the collection *after* it has passed through the search filter, so apply the JokeFilterPipe again, using the search field criteria, and take the `length` of that collection as a result. (You will need to use parentheses to guarantee precedence.)

At this point, the master list is shaping up nicely, but we have lost the ability to click on a joke to see the full display (and vote on the LOLs and groans). For the next step, we will add Angular Routing, to enable the URL to change (and thus be bookmarkable, so people can bookmark their favorite jokes, rather than always having to search through the list for them).

If you're not sure you got the exercise implemented correctly, feel free to fast-forward to the next lab via `git checkout lab-5`.
