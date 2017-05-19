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


## Lab 5: Routing

(If `ng serve` is not running, start it in a Terminal or Command Prompt window so it will be running throughout the exercise.)

In this lab, we will add Angular Routing into the project, so that we can have a traditional master-detail page, in which the list of jokes will be available at the relative URL "jokes", and each joke itself would be available at a URL like "jokes/1", "jokes/2", and so on. This means that the UI will change as the user clicks on an individual joke, and we'll make the "NgJokes" title a link back to the main list.

This means we want to have two routes: "jokes", pointing to the JokeListComponent, and "jokes/#", pointing to the JokeComponent (and somehow setting joke "#" as the Joke to display). Additionally, we want to set the "default" path (where the user doesn't specify anything in the relative portion of the URL) to point to the list of Jokes. Lastly, we'll want to set up a route (and corresponding component) that will display in the event that the user enters a bad URL that we don't recognize.

First, we need to add Routing, which is (almost) entirely in the AppModule.

* *Modify AppModule class.* Import `RouterModule` and `Routes` from `@angular/router`. Next, add a const global field `appRoutes`, of type `Routes`. In the "imports" array in the NgModule metadata decorator, use `RouterModule`'s `forRoot` method (passing in `appRoutes`) to import the necessary components into the module. (By convention, simply call `forRoot` inside the array, right alongside `BrowserModule` and `FormsModule`.)

* *Add the 'jokes' route.* In the `appRoutes` array, add a JSON literal that consists of two fields: 'path', set to "jokes", and 'component', set to "JokeListComponent". 

* *Temporarily pass the Joke database through the route.* Since the JokeListComponent currently expects to receive an "Array<Joke>" (or Joke[]) passed in via an @Input tag, but we won't be explicitly using the tag once we start routing, we need to add a third field (called `data`) to the JSON literal. This array should be one element in size, a JSON object with one field, `jokes`, which points to an array of Jokes. This array should (for now) be the "database" we established in AppComponent--you can either make the field in AppComponent public and static, import AppComponent and use it here directly, or move the whole collection of Joke objects we created in AppComponent directly here. (We won't use the AppComponent to store the database anymore after this, in fact.)

> **NOTE:** If it feels a little weird that we keep shuffling around the way we get the Joke data, don't be alarmed. In truth, these are all temporary measures until we establish the JokeService--which is the Angular-approved way of obtaining data--in the next lab. In a non-teaching project, we would set up the JokeService first, and wire it up to hand back the in-memory array until we were ready to access an HTTP endpoint for the data. That service would then be dependency-injected into any component that needed it, such as the JokeListComponent in this particular case. (And, again, we will do exactly that in the next lab.) Fortunately, moving the data around like this helps demonstrate several of the different mechanisms that Angular offers for using/storing collections of objects and/or data, so the exercise is not an entire waste of time.

* *Retrieve the Joke database in the JokeListComponent.* In order to get the `data` element passed in to the route, we need to make use of an `ActivatedRoute` object. This object will be passed in via the JokeListComponent constructor if it is declared there, so modify the constructor to take a single parameter of type JokeListComponent. Inside the constructor body, extract the data array by taking a "snapshot" of the route, accessing the snapshot's `data` field, which will yield an array of passed objects. Access the first element in that array, and then access the `jokes` field in that element. That will be the array of Jokes passed in through the route.

If all this is done, the application will reload, but the main page will be empty except for the title; this is because the list is only accessible now at "http://localhost:4200/jokes", as per our routing table. We don't want to force users to have to know the "jokes" URL ahead of time, so we should redirect the default page ("http://localhost:4200") to the "jokes" URL by setting up a Routing redirect.

* *Modify the AppModule class.* Add one more JSON literal to the `appRoutes` array, which contains three fields: `path`, which will be an empty string, `pathMatch`, which will need to contain "full", and `redirectTo`, which will contain the URL to which to redirect (in this case, "jokes").

Once this is done, the app will reload, and the URL "http://localhost:4200" will immediately redirect to "http://localhost:4200/jokes", and display the list of jokes again.

Next we need to set up the routing so that "jokes/1" will display the first joke, and so on.

* *Modify the appRoutes to add the new single-joke detail page.* Add a new route to the `appRoutes` that will redirect from "jokes/#" to the JokeComponent. This means that `path` will be set to "jokes/:jokeId", where "jokeId" will be a placeholder for the identifier that appears in the URL, which we'll retrieve from inside the JokeComponent. The `component` part of the route will be "JokeComponent". Additionally, to make it easier for the JokeComponent to obtain the full database of jokes, pass the database through the route again using a `data` field as part of the route, just as we did for the JokeListComponent route.

* *Modify the JokeListComponent.* There's several steps here. First, the JokeComponent needs to receive an `ActivatedRoute` in the constructor, so we can access the route when it is invoked. The easiest way to do this is to simply make it a "private" parameter in the constructor, which will tuck it away in a field of the same name. Next, in ngOnInit, we need to extract the :jokeId part of the URL out of the `ActivatedRoute`, so take the route, access the `snapshot` field, and use that to access the `params` object. That in turn is a name/value pair of parameters (as one might surmise from the name), which should have `jokeId` as a name. (Case matters here.) That in turn should contain the value of the URL parameter passed in. However, we have one more step to go: we need the database of jokes, which (for the moment) is also coming from the `ActivatedRoute`, so use the `route.snapshot.data` object, access the first element of that object's array, and use that to obtain the database from the `jokes` field. Once the jokeId and the jokes database is retrieved, use the jokeId as an index into the jokes database to obtain the Joke instance, and store that into the JokeComponent's model field--and the rest of the JokeComponent will "just work".

Test it in the browser by attempting to browse to http://localhost:4200/jokes/1 and see the joke.

Lastly, we need to let the user select a joke from the list and take them to the joke's detail page. To do this, we'll add a "click" handler to the list, but there's one problem; we need to provide the jokeId parameter as part of the route to which we will navigate. Right now, that's been the index of the joke in the database array, but that's going to be tricky. And, realistically, each Joke would have its own identifier, given to it by the persistence layer. Since we're doing everything in memory, let's fake it and use those.

* *Modify the Joke type to add an id field.* Just add it into the constructor, and add a get property method to retrieve it.

* *Modify the database to include identifiers.* The identifiers don't need to be sequential, but they should each be unique.

* *Modify the JokeComponent to use the identifier to find the joke from the database.* Use the `forEach` method on the database (which, remember, is just an array at this point) to find the joke whose id property matches the jokeId retrieved from the URL. (Take careful note of the types of each.)

Now, we're ready to add the "click" handler to the JokelistComponent to route to the individual joke.

* *Add a `Router` to the JokelistComponent constructor.* Again, this can just be a private parameter for easy storage.

* *Add a `showJoke` method to the JokelistComponent.* This is going to expect one parameter, `joke`, of type `Joke`. Use the `navigate` method on the `Router` to navigate to the URL `'/jokes/' + joke.id`. (The parameter to `navigate` must be an array, even though we are only sending a single value here.)

* *Add the click handler to JokelistComponent's HTML template.* This will appear on the `*ngFor` div element, as an attribute. Invoke the `showJoke` method passing in the `joke` from the for loop as a parameter.

At this point, ....

If you're not sure you got the exercise implemented correctly, feel free to fast-forward to the next lab via `git checkout lab-6`.
