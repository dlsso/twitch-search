# Twitch Search

This is a simple app for searching streams from twitch.tv. Built using Ember and the Twitch API.
Try it out at [dlsso.github.com/twitch-search](dlsso.github.com/twitch-search)!

## Potential improvements

* Improve styling - current styling is very basic

* Improve usability - controls should be easy to hit and easily available anywhere on page

* Filtering - add filter by game, stream quality, etc.

* Infinite scroll - could replace pagination, less effort to use


## Bugs

* Search icon was one pixel too tall on one machine I visited from, but could not reproduce in dev enviroment.

* Clearing the search by quickly pressing backspace can cause a bug where the results are not cleared. This happens because the result does not come back until after the template has been cleared, so it will incorrectly repopulte with the now outdated result. This could be solved by aborting the current request when the query changes or checking that the query still matches when the call comes back.

# Setup instructions courtesy of Ember CLI

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd twitch-search`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
