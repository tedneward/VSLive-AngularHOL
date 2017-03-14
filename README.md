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


## Step 0: Installation

(This step should be done prior to the start of the workshop.)

After obtaining this code repository, make sure you have the proper tools installed. You will need:

* *NodeJS.* As of this writing, the latest version is 7. Any flavor of v7 should work, but for reference purposes the authors wrote this with version 7.7.2. Use whatever installer is appropriate for your particular platform (Homebrew for the Mac, Chocolatey or Scoop for Windows, or whatever platform installer you use for your Linux machine), and verify the version installed by typing `node --version`.
* *TypeScript.* As of this writing, TypeScript is at version 2.1. Make sure the `tsc` tool is available at the command-line, and if it is not, install it using the Node Package Manager (npm) by opening a Terminal or Command Prompt window and type `npm install -g typescript`.
* *Angular CLI.* We will use the Angular CLI tool (`ng`) throughout this workshop, so it will help to have this installed before the workshop begins. Install it using `npm` again: `npm install -g @angular/cli`. Verify that the installation works by typing `ng --version` at the command line. It will respond with something similar to the following:

          _                      _                 ____ _     ___
        / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
        / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
      / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
      /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                    |___/
      @angular/cli: 1.0.0-rc.1
      node: 7.7.2
      os: darwin x64
      @angular/common: 2.4.9
      @angular/compiler: 2.4.9
      @angular/core: 2.4.9
      @angular/forms: 2.4.9
      @angular/http: 2.4.9
      @angular/platform-browser: 2.4.9
      @angular/platform-browser-dynamic: 2.4.9
      @angular/router: 3.4.9
      @angular/cli: 1.0.0-rc.1
      @angular/compiler-cli: 2.4.9

* *Visual Studio Code.* Or some other text editor. **NOTE**: We have had difficulties with using Visual Studio itself for these sorts of projects, so we recommend not using Visual Studio itself until after some experience with Angular is had.
* *Latest versions of browsers.* Our best experience working with Angular has been with Chrome, but Angular should be fine with any recent browser install. Note that Angular is known to have problems with earlier versions of certain browsers, most notably Internet Explorer, and this is not something that can be fixed within the scope of this workshop (if at all).

To verify that all the tools are working, run through this brief step-by-step tutorial:

* *Create a new Angular project.* From a Terminal or Command Prompt, type `ng new HelloApp`. This will use the Angular CLI to create a new directory (HelloApp) and scaffold in a basic HelloWorld application. This will also download a number of modules from the NPM Registry (npmjs.org), so you will need to be online to make this work. (In general, this will be true for any NodeJS-based application.)
* *Begin "serving" the application locally.* Type `ng serve` in the HelloApp directory. It will package up the application and begin hosting it on port 4200. Open a browser to (http://localhost:4200) to view the resulting app.
* *Edit the title.* Start Visual Studio Code from the HelloApp directory, and use it to open `src/app/app.component.ts`. Change the line `title = 'app works!'` to read `title = 'Hello, Angular!'`. Notice that the browser window will automatically recognize the change.

